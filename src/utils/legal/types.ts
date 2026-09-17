export interface LegalDocument {
  title: string;
  lastModified: string;
  content: string;
}

export type LegalDocumentLoadState =
  | { status: 'loading' }
  | { status: 'ready'; document: LegalDocument }
  | { status: 'error' };
