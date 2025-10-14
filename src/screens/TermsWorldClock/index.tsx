import { Document } from "../../components/Document";
import terms from "../../data/terms/termsWorldClock.json";

const TermsWorldClock = () => {
  const { description, dateUpdate, title } = terms;

  return (
    <Document
      title={title}
      date={dateUpdate}
      description={description}
    />
  );
};

export default TermsWorldClock;
