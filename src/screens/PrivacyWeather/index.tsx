import { Document } from "../../components/Document";

import privacy from "../../data/privacy/privacyWeather.json";

const PrivacyWeather = () => {
  const { description, dateUpdate, title } = privacy;

  return (
    <Document
      title={title}
      date={dateUpdate}
      description={description}
    />
  );
};

export default PrivacyWeather;
