import React, { useEffect, useRef, useState } from "react"
import * as styles from "./styles.module.scss"
import styled from "styled-components"

import { Icon } from "../../../components/Icon"

import timezone from "./timezone"
import { StaticImage } from "gatsby-plugin-image"

const minHeight = 920

const MapStyles =styled.div`
  height: ${({ height }) => height >= 920 ? `${height}px` : `${minHeight}px`};
  width: ${({ height }) => height >= 920 ? height*1720/1080 : minHeight*1720/1080}px;
  align-self: ${({ width, height }) => width > height*1720/1080 && "center"};
  
  .New-York {
    top: 54%;
    left: 27.5%;
    .${styles.dateBlock} {
      top: 119%;
      left: -78px;
    }
 }

  .Paris {
    top: 48%;
    left: 49%;
    .${styles.dateBlock} {
      top: 104%;
      left: 12px;
    }
  }

  .Moscow {
    top: 42.6%;
    left: 57%;
    .${styles.dateBlock} {
      top: 18px;
      left: 119%;
    }
  }
  
  .Tokyo {
    top: 55%;
    left: 85.5%;
    .${styles.dateBlock} {
      top: 110%;
      left: -51px;
    }
  }

  .Canberra {
    top: 87.4%;
    left: 88.3%;
    .${styles.dateBlock} {
      bottom: 111%;
      left: -109px;
    }
  }
`

const Map = () => {
  const myRef = useRef()
  const [windowDimensions, setWindowDimensions] = useState({
    height: 0,
    width: 0,
  })

  const getWindowDimensions = () => {
    if (typeof window === "undefined") return
    const { innerHeight: height, innerWidth: width } = window
    return { height, width }
  }

  const scrollXMap = () => {
    const timeline = myRef.current

    timeline.onmousedown = () => {
      let pageX = 0

      document.onmousemove = event => {
        if (pageX !== 0) {
          timeline.scrollLeft = timeline.scrollLeft + (pageX - event.pageX)
        }
        pageX = event.pageX
      }

      timeline.onmouseup = () => {
        document.onmousemove = null
        timeline.onmouseup = null
      }

      timeline.ondragstart = () => false
    }
  }

  useEffect(() => {
    setWindowDimensions(getWindowDimensions())
    scrollXMap()
  }, [])

  useEffect(() => {
    const scrollSize = (myRef.current.scrollWidth - windowDimensions.width)/2

    myRef.current.scrollWidth > windowDimensions.width && (myRef.current.scrollLeft = scrollSize)
  }, [])

  return (
    <div className={styles.container} ref={myRef} style={{opacity: windowDimensions.width === 0 && windowDimensions.height === 0 ? 0 : 1}}>
      <MapStyles id="Map" className={styles.map} height={windowDimensions?.height} width={windowDimensions?.width}>
        <StaticImage src="../../../assets/images/map.png" quality={95} formats={["AUTO", "WEBP", "AVIF"]} alt="map" placeholder="none"/>

        {timezone.map(({ capital, country, zone, time }) => (
          <div key={capital} className={`${styles.location} ${capital}`}>
            <div key={capital} className={styles.icon}>
              <Icon name="location" />

              <div className={styles.dateBlock}>
                <div className={styles.country}>
                  <span className={`${styles.capital} subtitle1`}>{capital}</span>
                  <span className="subtitle2">{country}</span>
                  <span className={`${styles.zone} subtitle3`}>{zone}</span>
                </div>

                <p className={`${styles.time} subtitle4`}>{time}</p>
              </div>
            </div>
          </div>
        ))}
      </MapStyles>
    </div>
  )
}

export default Map
