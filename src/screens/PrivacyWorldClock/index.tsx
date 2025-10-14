import { Document } from "../../components/Document";
import privacy from "../../data/privacy/privacyWorldClock.json";

const PrivacyWorldClock = () => {
  const { description, dateUpdate, title } = privacy;

  return (
    <Document
      title={title}
      date={dateUpdate}
      description={description}
    />
  );
};

export default PrivacyWorldClock;
