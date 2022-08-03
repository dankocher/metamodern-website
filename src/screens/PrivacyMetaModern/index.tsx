import DocumentWrapper from "../../components/DocumentWrapper";
import { Document } from "../../components/Document";

import info from "../../data/information-data.json";

const PrivacyPartyGames = () => {
  const { description, dateUpdate } = info.main.privacy;

  const privacyPolicy = "MetaModern LLC. Privacy policy";

  return (
    <DocumentWrapper>
      <Document
        title={privacyPolicy}
        date={dateUpdate}
        description={description}
      />
    </DocumentWrapper>
  );
};

export default PrivacyPartyGames;
