import { Document } from "../../components/Document";

import privacy from "../../data/privacy/privacyNeverEver.json"

const PrivacyNeverEver = () => {
  const { title, description, dateUpdate } = privacy

  return <Document title={title} date={dateUpdate} description={description}/>
};

export default PrivacyNeverEver;
