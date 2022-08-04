import React from "react"
import { Document } from "../components/Document"
import info from "../../content/information-data.json"

const Privacy = () => {
  const { description, dateUpdate } = info.main.privacy
  
  return <Document title="MetaModern LLC. Privacy policy" date={dateUpdate} description={description} />
}

export default Privacy
