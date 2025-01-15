import { Document } from "../../components/Document";

import terms from "../../data/terms/termsContractions.json";

const TermsContractions = () => {
  const { description, dateUpdate, title } = terms;

  return (
    <Document
      title={title}
      date={dateUpdate}
      description={description}
    />
  );
};

export default TermsContractions;
