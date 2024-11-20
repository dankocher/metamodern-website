import React from "react"
import { Document } from "../../components/Document"
import info from "../../data/information-data.json"

const Privacy = () => {
  const { description, dateUpdate } = info.time_zo.privacy

  return <Document title="World Clock. Privacy policy" date={dateUpdate} description={description} />
}

export default Privacy
