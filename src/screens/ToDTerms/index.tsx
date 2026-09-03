import { Document } from "../../components/Document"

import terms from "../../data/terms/termsTOD.json"

const TermsTOD = () => {
  const { title, description, dateUpdate } = terms

  return <Document title={title} date={dateUpdate} description={description}/>
}

export default TermsTOD
