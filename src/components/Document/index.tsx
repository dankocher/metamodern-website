import { ReactNode, useEffect } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';

import AnimatedBlock from '../AnimatedBlock';
import { Layout } from '../layout';
import { animationTypes } from '../../constants/animationTypes';
import { variables } from '../../constants/animationVariables';
import { colors } from '../../styles/colors';
import { LegalDocument } from '../../utils/legal/types';

import styles from './styles.module.scss';

interface DocumentProps {
  document: LegalDocument;
}

interface DocumentStatusProps {
  status: 'loading' | 'error';
  onRetry?: () => void;
}

interface DocumentFrameProps {
  children: ReactNode;
}

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: '2-digit',
  timeZone: 'UTC',
});

const markdownComponents: Components = {
  h1: ({ children }) => (
    <h2 className={`${styles.heading} docTitle0`}>{children}</h2>
  ),
  h2: ({ children }) => (
    <h2 className={`${styles.heading} docTitle0`}>{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className={`${styles.title} docTitle`}>{children}</h3>
  ),
  a: ({ children, href, title }) => {
    const opensInNewTab = Boolean(href && /^https?:\/\//i.test(href));

    return (
      <a
        href={href}
        title={title}
        target={opensInNewTab ? '_blank' : undefined}
        rel={opensInNewTab ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  },
  table: ({ children }) => (
    <div className={styles.tableWrapper}>
      <table>{children}</table>
    </div>
  ),
};

const DocumentFrame = ({ children }: DocumentFrameProps) => {
  useEffect(() => {
    const htmlElement = window.document.documentElement;
    const previousBackgroundColor = htmlElement.style.backgroundColor;

    htmlElement.style.backgroundColor = colors.white;

    return () => {
      htmlElement.style.backgroundColor = previousBackgroundColor;
    };
  }, []);

  return (
    <AnimatedBlock
      animation={animationTypes.DEFAULT}
      transition={{
        duration: variables.duration,
        delay: 0,
      }}
      options={{ exit: { opacity: 0 } }}
    >
      <Layout theme="dark">
        <div className={styles.container}>
          <div className={styles.content}>{children}</div>
        </div>
      </Layout>
    </AnimatedBlock>
  );
};

export const Document = ({ document }: DocumentProps) => {
  const lastModified = dateFormatter.format(
    new Date(`${document.lastModified}T00:00:00.000Z`)
  );

  return (
    <DocumentFrame>
      <div className={styles.headerBlock}>
        <h1 className="docMain">{document.title}</h1>
        <p className="docSubtitle">Last modified {lastModified}</p>
      </div>

      <div className={`${styles.description} docSubtitle`}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={markdownComponents}
          skipHtml
        >
          {document.content}
        </ReactMarkdown>
      </div>
    </DocumentFrame>
  );
};

export const DocumentStatus = ({
  status,
  onRetry,
}: DocumentStatusProps) => {
  const isError = status === 'error';

  return (
    <DocumentFrame>
      <div
        className={styles.status}
        role={isError ? 'alert' : 'status'}
        aria-live={isError ? 'assertive' : 'polite'}
      >
        <h1 className="docMain">
          {isError ? 'Document unavailable' : 'Loading document'}
        </h1>
        <p className="docSubtitle">
          {isError
            ? 'The document could not be loaded. Please try again.'
            : 'The document is being loaded.'}
        </p>
        {isError && onRetry && (
          <button
            type="button"
            className={styles.retryButton}
            onClick={onRetry}
          >
            Try again
          </button>
        )}
      </div>
    </DocumentFrame>
  );
};
