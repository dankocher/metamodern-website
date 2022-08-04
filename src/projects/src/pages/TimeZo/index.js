import React, { useEffect } from "react"

import { Layout } from "../../components/layout"
import Seo from "../../components/seo"
import TimeZo from "../../projects/TimeZo"

import { colors } from "../../styles/colors"

const TimeZoPage = () => {
  useEffect(() => {
    window.document.getElementsByTagName("html")[0].scrollTop = 0
    window.document.getElementsByTagName("html")[0].removeAttribute("id")
    window.document.getElementsByTagName("html")[0].style.backgroundColor = colors.timeZo
  }, [])

  return (
    <Layout theme="dark">
      <Seo title="TimeZo" themeColor={colors.timeZo} />
      <TimeZo />
    </Layout>
  )
}

export default TimeZoPage
