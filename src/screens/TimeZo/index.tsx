import { useEffect } from 'react';

import { Layout } from '../../components/layout';

import { colors } from '../../styles/colors';
import { motion } from "framer-motion";
import { variables as v } from "../../constants/animationVariables";
import SectionMain from "./SectionMain";
import Map from "./Map";
import Section from "./Section";
import SectionLast from "./SectionLast";
import Data from "./TimeZo-data.json";

const { mainData, sections } = Data;

const TimeZoPage = () => {
  useEffect(() => {
    const html = window.document.getElementsByTagName('html')[0];
    html.style.backgroundColor = colors.timeZo;

    return () => {
      html.style.removeProperty('background-color');
    };
  }, []);

  return (
    <Layout theme="dark">
      <div style={{ backgroundColor: colors.timeZo }}>
        <motion.div
          initial={{ opacity: 0, y: v.y }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: v.duration, delay: 2 * v.delay }}
          viewport={{ once: true }}
        >
          <SectionMain {...mainData} />
        </motion.div>

        <Map/>

        {sections.map((section) => (
          <Section key={section.id} {...section} />
        ))}

        <div>
          <SectionLast {...mainData} />
        </div>
      </div>
    </Layout>
  );
};

export default TimeZoPage;
