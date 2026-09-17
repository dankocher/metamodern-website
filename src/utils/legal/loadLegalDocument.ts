import { parseLegalDocument } from './parseLegalDocument';
import { LegalDocument } from './types';

const documentCache = new Map<string, LegalDocument>();

export const loadLegalDocument = async (
  source: string,
  signal: AbortSignal
): Promise<LegalDocument> => {
  const cachedDocument = documentCache.get(source);

  if (cachedDocument) {
    return cachedDocument;
  }

  const response = await fetch(source, {
    signal,
    headers: {
      Accept: 'text/markdown, text/plain;q=0.9',
    },
  });

  if (!response.ok) {
    throw new Error(`Unable to load legal document (${response.status}).`);
  }

  const document = parseLegalDocument(await response.text());
  documentCache.set(source, document);

  return document;
};
