import { Document } from "../../components/Document"

import info from "../../data/information-data.json"

const TermsTOD = () => {
  const { description, dateUpdate } = info.tod.terms

  return <Document title="Truth or Dare. Terms of Use" date={dateUpdate} description={description} />
}

export default TermsTOD
