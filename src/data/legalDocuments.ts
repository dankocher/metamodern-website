import bbNamePrivacy from '../content/legal/bb-name/privacy.md';
import bbNameTerms from '../content/legal/bb-name/terms.md';
import contractionTimerPrivacy from '../content/legal/contraction-timer/privacy.md';
import contractionTimerTerms from '../content/legal/contraction-timer/terms.md';
import didYouEverPrivacy from '../content/legal/did-you-ever/privacy.md';
import didYouEverTerms from '../content/legal/did-you-ever/terms.md';
import metaModernPrivacy from '../content/legal/meta-modern/privacy.md';
import truthOrDarePrivacy from '../content/legal/truth-or-dare/privacy.md';
import truthOrDareTerms from '../content/legal/truth-or-dare/terms.md';
import weatherPrivacy from '../content/legal/weather-v/privacy.md';
import weatherTerms from '../content/legal/weather-v/terms.md';
import worldClockPrivacy from '../content/legal/world-clock/privacy.md';
import worldClockTerms from '../content/legal/world-clock/terms.md';

interface LegalDocumentDefinition {
  source: string;
  withDocumentWrapper?: boolean;
}

const defineLegalDocuments = <
  T extends Record<string, LegalDocumentDefinition>
>(
  documents: T
): { [Key in keyof T]: LegalDocumentDefinition } => documents;

export const legalDocuments = defineLegalDocuments({
  metaModernPrivacy: {
    source: metaModernPrivacy,
    withDocumentWrapper: true,
  },
  truthOrDarePrivacy: { source: truthOrDarePrivacy },
  truthOrDareTerms: { source: truthOrDareTerms },
  contractionTimerPrivacy: { source: contractionTimerPrivacy },
  contractionTimerTerms: { source: contractionTimerTerms },
  weatherPrivacy: { source: weatherPrivacy },
  weatherTerms: { source: weatherTerms },
  worldClockPrivacy: { source: worldClockPrivacy },
  worldClockTerms: { source: worldClockTerms },
  bbNamePrivacy: { source: bbNamePrivacy },
  bbNameTerms: { source: bbNameTerms },
  didYouEverPrivacy: { source: didYouEverPrivacy },
  didYouEverTerms: { source: didYouEverTerms },
});

export type LegalDocumentId = keyof typeof legalDocuments;
