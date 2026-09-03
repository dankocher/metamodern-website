import styles from "./styles.module.scss";

import StaticImage from "../../../components/StaticImage";
import LinkButtons from "../../../components/LinkButtons";
import Image from "../../../components/Image";

import timeZo_mainPhone from "../../../assets/images/TimeZo-mainPhone.png";

const SectionMain = ({ name, descriptionMain, link }) => {
  return (
    <div className={styles.container}>
      <div className={styles.centerBlock}>
        <div className={styles.headerBlock}/>

        <div className={styles.block}>
          <div className={styles.content}>
            <div className={styles.logo}>
              <Image name={'timezoLogo'} alt={'TimeZo-logo'} size={96}/>
            </div>
            <p className={`${styles.title} bigTitle`}>{name}</p>
            <p className={`${styles.description} subtitleMain`}>
              {descriptionMain}
            </p>
            <LinkButtons link={link} theme="dark"/>
          </div>

          <div className={styles.phoneBlock}>
            <StaticImage
              src={timeZo_mainPhone}
              alt="phone"
              height={626}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              placeholder="none"
            />
          </div>
        </div>

        <div className={styles.headerBlockMin}/>
      </div>
    </div>
  );
};

export default SectionMain;
