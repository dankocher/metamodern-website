import React from "react"
import { Document } from "../../components/Document"
import info from "../../data/information-data.json"

const Terms = () => {
  const { description, dateUpdate } = info.time_zo.terms

  return <Document title="World Clock. Terms of Use" date={dateUpdate} description={description} />
}

export default Terms
