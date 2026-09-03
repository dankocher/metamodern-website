import { Document } from "../../components/Document"

import privacy from "../../data/privacy/privacyTOD.json"

const PrivacyTOD = () => {
  const { title, dateUpdate, description } = privacy

  return <Document
    title={title}
    date={dateUpdate}
    description={description}
  />
}

export default PrivacyTOD
