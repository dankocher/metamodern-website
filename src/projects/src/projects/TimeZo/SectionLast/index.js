import React from "react"
import * as styles from "./styles.module.scss"

import LinkButtons from "../../../components/LinkButtons"
import { Icon } from "../../../components/Icon"
import { StaticImage } from "gatsby-plugin-image"

const SectionLast = ({ nameShort, descriptionLast, link }) => (
  <div className={styles.containerLast}>
    <div  className={styles.contentBlock}>
      <div className={styles.phoneImg}>
        <StaticImage src="../../../assets/images/TimeZo-phone-left.png" alt="phone-left" height={640} quality={95} formats={["AUTO", "WEBP", "AVIF"]} placeholder="none"/>
      </div>

      <div className={styles.info}>
        <div className={styles.logo}><Icon name="TimeZoLogo" size={80}/></div>
        <p className={`${styles.title} title2`}>{nameShort}</p>
        <p className={`${styles.description} subtitleSmall`}>{descriptionLast}</p>
        <LinkButtons link={link} theme="dark"/>
      </div>

      <div className={styles.phoneImg}>
        <StaticImage src="../../../assets/images/TimeZo-phone-right.png" alt="phone-right" height={640} quality={95} formats={["AUTO", "WEBP", "AVIF"]} placeholder="none"/>
      </div>
    </div>
  </div>
)

export default SectionLast
