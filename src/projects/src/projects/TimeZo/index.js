import SectionMain from './SectionMain';
import Map from './Map';
import Section from './Section';
import SectionLast from './SectionLast';

import Data from './TimeZo-data.json';

import { colors } from '../../styles/colors';

const { mainData, sections } = Data;

const TimeZo = () => (
  <div style={{ backgroundColor: colors.timeZo }}>
    <SectionMain {...mainData} />
    <Map />
    {sections.map((section) => (
      <Section key={section.id} {...section} />
    ))}
    <SectionLast {...mainData} />
  </div>
);

export default TimeZo;
