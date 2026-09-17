import { Document, DocumentStatus } from '../../components/Document';
import DocumentWrapper from '../../components/DocumentWrapper';
import {
  legalDocuments,
  LegalDocumentId,
} from '../../data/legalDocuments';
import { useLegalDocument } from '../../utils/hooks/useLegalDocument';

interface LegalDocumentScreenProps {
  documentId: LegalDocumentId;
}

const LegalDocumentScreen = ({ documentId }: LegalDocumentScreenProps) => {
  const definition = legalDocuments[documentId];
  const { state, retry } = useLegalDocument(definition.source);

  let content;

  if (state.status === 'ready') {
    content = <Document document={state.document} />;
  } else if (state.status === 'error') {
    content = <DocumentStatus status="error" onRetry={retry} />;
  } else {
    content = <DocumentStatus status="loading" />;
  }

  if (definition.withDocumentWrapper) {
    return <DocumentWrapper>{content}</DocumentWrapper>;
  }

  return content;
};

export default LegalDocumentScreen;
