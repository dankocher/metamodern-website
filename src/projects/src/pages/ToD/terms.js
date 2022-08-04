import React from "react"
import { Document } from "../../components/Document"
import info from "../../../content/information-data.json"

const Terms = () => {
  const { description, dateUpdate } = info.tod.terms

  return <Document title="Truth or Dare. Terms of Use" date={dateUpdate} description={description} />
}

export default Terms
