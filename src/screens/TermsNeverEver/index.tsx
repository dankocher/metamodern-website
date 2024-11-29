import { Document } from "../../components/Document";

import info from "../../data/information-data.json"
import React from "react";

const TermsNeverEver = () => {
  const { description, dateUpdate } = info.never_ever.terms

  return <Document title="Did You Ever. Terms of Use" date={dateUpdate} description={description}/>
};

export default TermsNeverEver;
