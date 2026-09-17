import { useCallback, useEffect, useState } from 'react';

import { loadLegalDocument } from '../legal/loadLegalDocument';
import { LegalDocumentLoadState } from '../legal/types';

export const useLegalDocument = (source: string) => {
  const [attempt, setAttempt] = useState(0);
  const [state, setState] = useState<LegalDocumentLoadState>({
    status: 'loading',
  });

  useEffect(() => {
    const abortController = new AbortController();
    let isActive = true;

    setState({ status: 'loading' });

    loadLegalDocument(source, abortController.signal)
      .then((document) => {
        if (isActive) {
          setState({ status: 'ready', document });
        }
      })
      .catch((error: unknown) => {
        if (error instanceof Error && error.name === 'AbortError') {
          return;
        }

        if (isActive) {
          setState({ status: 'error' });
        }
      });

    return () => {
      isActive = false;
      abortController.abort();
    };
  }, [attempt, source]);

  const retry = useCallback(() => {
    setAttempt((currentAttempt) => currentAttempt + 1);
  }, []);

  return { state, retry };
};
