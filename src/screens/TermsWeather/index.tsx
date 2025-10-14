import { Document } from "../../components/Document";

import terms from "../../data/terms/termsWeather.json";

const TermsWeather = () => {
  const { description, dateUpdate, title } = terms;

  return (
    <Document
      title={title}
      date={dateUpdate}
      description={description}
    />
  );
};

export default TermsWeather;
