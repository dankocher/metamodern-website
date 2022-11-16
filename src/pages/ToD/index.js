import { Layout } from '../../components/layout';

import { colors } from '../../styles/colors';

import TodLanding from '../../projects/TOD';
import { useEffect } from 'react';
import { SCREENS } from '../../navigation/constants';

const TodPage = () => {
  useEffect(() => {
    const html = window.document.getElementsByTagName('html')[0];
    html.style.backgroundColor = colors.todTheme;

    return () => {
      html.style.removeProperty('background-color');
    };
  }, []);

  return (
    <Layout theme="white" privacyLink={SCREENS.TOD_PRIVACY}>
      <TodLanding />
    </Layout>
  );
};

export default TodPage;
