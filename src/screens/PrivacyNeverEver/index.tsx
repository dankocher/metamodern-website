import { Document } from "../../components/Document";

import info from "../../data/information-data.json"
import React from "react";

const PrivacyNeverEver = () => {
  const { description, dateUpdate } = info.never_ever.privacy

  return <Document title="Did You Ever. Privacy policy" date={dateUpdate} description={description}/>
};

export default PrivacyNeverEver;
