import { useEffect } from 'react';

import { Layout } from '../../components/layout';
import TimeZo from '../../projects/TimeZo';

import { colors } from '../../styles/colors';

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
      <TimeZo />
    </Layout>
  );
};

export default TimeZoPage;
