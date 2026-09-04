import { Document } from "../../components/Document";

import privacy from "../../data/privacy/privacyNames.json";

const PrivacyNames = () => {
  const { description, dateUpdate, title } = privacy;

  return (
    <Document
      title={title}
      date={dateUpdate}
      description={description}
    />
  );
};

export default PrivacyNames;
