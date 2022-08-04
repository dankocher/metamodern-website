import React, { useEffect, useRef, useState } from "react"
import * as styles from "./styles.module.scss"

import grained from "../utils/grained"
import { isMobile } from "react-device-detect"

import { Layout } from "../components/layout"
import Seo from "../components/seo"
import ProjectCard from "../components/ProjectCard"

import Data from "../../content/main-data-projects.json"
import { colors } from "../styles/colors"

import useElementSize from "../utils/hooks/useElementSize"
import { isThemeColorSupported } from "../utils/themeColorSupported"
import { randomInteger } from "../utils/randomInteger"

const HEIGHT_HEADER = 140

const IndexPage = () => {
  const textBlockRef = useRef()
  const [topContent, setTopContent] = useState("0")

  const [delay, setDelay] = useState(randomInteger(5000, 20000))
  const [delayShowGlitch, setDelayShowGlitch] = useState(randomInteger(3000, 5000))
  const [style, setStyle] = useState("")

  const [activeGlitchMob, setActiveGlitchMob] = useState(false)

  const { height: heightTextBlock } = useElementSize(textBlockRef)

  useEffect(() => {
    setTopContent(`calc(50vh - ${(heightTextBlock + 240)/2}px - ${HEIGHT_HEADER}px)`)
  }, [heightTextBlock])

  useEffect(() => {
    window.document.getElementsByTagName("html")[0].scrollTop = 0
    window.document.getElementsByTagName("html")[0].id = "container-noise"

    grained("#container-noise", {
      animate: true,
      patternWidth: 200,
      patternHeight: 200,
      grainOpacity: 0.04,
      grainDensity: 2,
      grainWidth: 2,
      grainHeight: 2,
      grainChaos: 0.5,
      grainSpeed: 5,
    })
  }, [])

  const randomEffect = () => {
    setTimeout(function run() {
      setStyle(styles.glitchTextInterval)

      setTimeout(() => {
        setStyle("")
      }, delayShowGlitch)

      setDelay(randomInteger(5000, 20000))
      setDelayShowGlitch(randomInteger(3000, 5000))
    }, delay)
  }

  useEffect(() => {
    if (isMobile) return

    randomEffect()
    return () => clearTimeout(randomEffect)
  }, [delay])

  const toggleActiveGlitchMob = () => {
    if (!isMobile) return
    setActiveGlitchMob(prevValue => !prevValue)
  }

  return (
    <Layout theme="dark" positionHeader="absolute" mail={Data.link.mail} privacy={Data.link.privacy}>
      <Seo title="Home" themeColor={isThemeColorSupported() ? colors.mainPage : colors.main} />
          
      <div className={styles.content} style={{ paddingTop: `${topContent}`, opacity: heightTextBlock === 0 ? 0 : 1}}>
        <div className={styles.header} />

        <div className={styles.textBlock} ref={textBlockRef}>
          <div className={styles.glitchWrapper}>
            <h1 className={`${styles.glitchText} ${style} ${activeGlitchMob ? styles.glitchTextInterval : ""} mainBigTitle`} data-glitch={Data.title}>
              {Data.title}
            </h1>
            {isMobile && <div className={styles.emptyBlock} onClick={toggleActiveGlitchMob} />}
          </div>

          <p className={`${styles.text} mainSubtitle2`}>
            <span className={styles.textMob}>{Data.text}</span> {Data.textMob}
          </p>
        </div>

        <div className={styles.projects}>
          {Object.values(Data.projects).map(project => <ProjectCard key={project.name} {...project} />)}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
