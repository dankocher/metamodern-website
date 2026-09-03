import React, { useEffect } from "react"
import { isAndroid, isIOS } from "react-device-detect"
import Data from "./TimeZo-data.json"

const WorldClockRedirect = () => {
  const googlePlay = Data.mainData.link.googlePlay
  const appStore = Data.mainData.link.appStore

  useEffect(() => {
    if (isIOS) {
      window.location.replace(`${appStore}`)
    } else if (isAndroid) {
      window.location.replace(`${googlePlay}`)
    } else {
      window.location.replace("https://metamodern.dev/TimeZo")
    }
  }, [])

  return <div/>
}

export default WorldClockRedirect
