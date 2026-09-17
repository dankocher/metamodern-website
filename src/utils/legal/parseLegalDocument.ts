import { parse } from 'yaml';

import { LegalDocument } from './types';

const FRONT_MATTER_PATTERN =
  /^(?:\uFEFF)?---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/;
const HTML_TAG_PATTERN =
  /<\/?[A-Za-z][A-Za-z0-9-]*(?:\s[^<>]*?)?\/?\s*>/;
const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const isValidIsoDate = (value: string) => {
  if (!ISO_DATE_PATTERN.test(value)) {
    return false;
  }

  const parsedDate = new Date(`${value}T00:00:00.000Z`);

  return (
    !Number.isNaN(parsedDate.getTime()) &&
    parsedDate.toISOString().slice(0, 10) === value
  );
};

export const parseLegalDocument = (rawDocument: string): LegalDocument => {
  const frontMatterMatch = rawDocument.match(FRONT_MATTER_PATTERN);

  if (!frontMatterMatch) {
    throw new Error('Legal document front matter is missing or malformed.');
  }

  const metadata = parse(frontMatterMatch[1]);
  const content = rawDocument.slice(frontMatterMatch[0].length).trim();

  if (!isRecord(metadata)) {
    throw new Error('Legal document front matter must be an object.');
  }

  const title = metadata.title;
  const lastModified = metadata.lastModified;

  if (typeof title !== 'string' || title.trim().length === 0) {
    throw new Error('Legal document title is missing.');
  }

  if (typeof lastModified !== 'string' || !isValidIsoDate(lastModified)) {
    throw new Error(
      'Legal document lastModified must be a valid YYYY-MM-DD date.'
    );
  }

  if (content.length === 0) {
    throw new Error('Legal document content is empty.');
  }

  if (HTML_TAG_PATTERN.test(content)) {
    throw new Error('Raw HTML is not allowed in legal Markdown documents.');
  }

  return {
    title: title.trim(),
    lastModified,
    content,
  };
};
