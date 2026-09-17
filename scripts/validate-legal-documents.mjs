import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { parse } from 'yaml';

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..'
);
const documentsRoot = path.join(projectRoot, 'src', 'content', 'legal');
const expectedDocumentCount = 13;
const frontMatterPattern =
  /^(?:\uFEFF)?---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/;
const htmlTagPattern =
  /<\/?[A-Za-z][A-Za-z0-9-]*(?:\s[^<>]*?)?\/?\s*>/;
const isoDatePattern = /^\d{4}-\d{2}-\d{2}$/;

const collectMarkdownFiles = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectMarkdownFiles(entryPath)));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(entryPath);
    }
  }

  return files;
};

const isValidIsoDate = (value) => {
  if (typeof value !== 'string' || !isoDatePattern.test(value)) {
    return false;
  }

  const parsedDate = new Date(`${value}T00:00:00.000Z`);

  return (
    !Number.isNaN(parsedDate.getTime()) &&
    parsedDate.toISOString().slice(0, 10) === value
  );
};

const validateDocument = async (filePath) => {
  const rawDocument = await readFile(filePath, 'utf8');
  const frontMatterMatch = rawDocument.match(frontMatterPattern);
  const relativePath = path.relative(projectRoot, filePath);

  if (!frontMatterMatch) {
    throw new Error(`${relativePath}: missing or malformed front matter.`);
  }

  const metadata = parse(frontMatterMatch[1]);
  const content = rawDocument.slice(frontMatterMatch[0].length).trim();

  if (
    typeof metadata !== 'object' ||
    metadata === null ||
    Array.isArray(metadata)
  ) {
    throw new Error(`${relativePath}: front matter must be an object.`);
  }

  if (typeof metadata.title !== 'string' || metadata.title.trim() === '') {
    throw new Error(`${relativePath}: title is required.`);
  }

  if (!isValidIsoDate(metadata.lastModified)) {
    throw new Error(
      `${relativePath}: lastModified must be a valid YYYY-MM-DD date.`
    );
  }

  if (content === '') {
    throw new Error(`${relativePath}: content is empty.`);
  }

  if (htmlTagPattern.test(content)) {
    throw new Error(`${relativePath}: raw HTML is not allowed.`);
  }

  const renderedDocument = renderToStaticMarkup(
    createElement(
      ReactMarkdown,
      { remarkPlugins: [remarkGfm], skipHtml: true },
      content
    )
  );

  if (renderedDocument.trim() === '') {
    throw new Error(`${relativePath}: Markdown produced no output.`);
  }
};

const markdownFiles = await collectMarkdownFiles(documentsRoot);

if (markdownFiles.length !== expectedDocumentCount) {
  throw new Error(
    `Expected ${expectedDocumentCount} legal documents, found ${markdownFiles.length}.`
  );
}

await Promise.all(markdownFiles.map(validateDocument));

console.log(`Validated ${markdownFiles.length} legal Markdown documents.`);
