import DocumentWrapper from "../../components/DocumentWrapper";
import { Document } from "../../components/Document";

import privacy from "../../data/privacy/privacyMetaModern.json";

const PrivacyPartyGames = () => {
  const { title, description, dateUpdate } = privacy;

  return (
    <DocumentWrapper>
      <Document
        title={title}
        date={dateUpdate}
        description={description}
      />
    </DocumentWrapper>
  );
};

export default PrivacyPartyGames;
