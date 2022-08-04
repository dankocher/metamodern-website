import React, { useEffect } from "react"
import { isAndroid, isIOS } from "react-device-detect"
import Data from "../../../content/main-data-projects.json"


const game = () => {
  const googlePlay = Data.projects.tod.links.googlePlay
  const appStore = Data.projects.tod.links.appStore

  useEffect(() => {
    if (isIOS) {
      window.location.replace(`${appStore}`)
    } else if (isAndroid) {
      window.location.replace(`${googlePlay}`)
    } else {
      window.location.replace("https://metamodern.dev/ToD")
    }
  }, [])

  return <div/>
}

export default game
