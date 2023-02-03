import SectionMain from "./SectionMain";
import Map from "./Map";
import Section from "./Section";
import SectionLast from "./SectionLast";

import Data from "./TimeZo-data.json";
import { motion } from "framer-motion";
import { variables as v } from "../../constants/animationVariables";
import { colors } from "../../styles/colors";

const { mainData, sections } = Data;

const TimeZo = () => (
  <div style={{ backgroundColor: colors.timeZo }}>
    <motion.div
      initial={{ opacity: 0, y: v.y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: v.duration, delay: 2 * v.delay }}
      viewport={{ once: true }}
    >
      <SectionMain {...mainData} />
    </motion.div>
    <Map />
    {sections.map((section) => (
      <Section key={section.id} {...section} />
    ))}
    {/* <motion.div
      initial={{ opacity: 0, y: v.y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: v.duration, delay: 2 * v.delay }}
      viewport={{ once: true }}
    > */}
    <div>
      <SectionLast {...mainData} />
    </div>
    {/* </motion.div> */}
  </div>
);

export default TimeZo;
