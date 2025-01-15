import { Document } from "../../components/Document";

import privacy from "../../data/privacy/privacyContractions.json";

const PrivacyContractions = () => {
  const { description, dateUpdate, title } = privacy;

  return (
    <Document
      title={title}
      date={dateUpdate}
      description={description}
    />
  );
};

export default PrivacyContractions;
