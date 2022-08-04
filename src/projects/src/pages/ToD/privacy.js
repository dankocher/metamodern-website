import React from "react"
import { Document } from "../../components/Document"
import info from "../../../content/information-data.json"

const Privacy = () => {
  const { description, dateUpdate } = info.tod.privacy

  return <Document title="Truth or Dare. Privacy policy" date={dateUpdate} description={description} />
}

export default Privacy
