import { Document } from "../../components/Document";

import terms from "../../data/terms/termsNeverEver.json"

const TermsNeverEver = () => {
  const { title, description, dateUpdate } = terms

  return <Document title={title} date={dateUpdate} description={description}/>
};

export default TermsNeverEver;
