import React from "react"
import * as styles from "./styles.module.scss"
import { StaticImage } from "gatsby-plugin-image"

import LinkButtons from "../../../components/LinkButtons"
import { Icon } from "../../../components/Icon"

const SectionMain = ({ name, descriptionMain, link}) => {

  return (
    <div className={styles.container}>
      <div className={styles.centerBlock}>
        <div className={styles.headerBlock} />

        <div className={styles.block}>
          <div className={styles.content}>
            <div className={styles.logo}><Icon name="TimeZoLogo" size={96} /></div>
            <p className={`${styles.title} bigTitle`}>{name}</p>
            <p className={`${styles.description} subtitleMain`}>{descriptionMain}</p>
            <LinkButtons link={link} theme="dark" />
          </div>

          <div className={styles.phoneBlock}>
            <StaticImage src="../../../assets/images/TimeZo-mainPhone.png" alt="phone" height={626} quality={95}
              formats={["AUTO", "WEBP", "AVIF"]} placeholder="none" />
          </div>
        </div>

        <div className={styles.headerBlockMin}/>
      </div>
    </div>
  )}

export default SectionMain
