import React, { Suspense } from 'react';

import HeaderContainer from '../containers/HeaderContainer'
import FooterContainer from '../containers/FooterContainer'
import ProfileContainer from '../containers/ProfileContainer'
import WorkContainer from '../containers/WorkContainer'
import EducationContainer from '../containers/EducationContainer'
import SkillsContainer from '../containers/SkillsContainer'
import InterestsContainer from '../containers/InterestsContainer'
import LanguagesContainer from '../containers/LanguagesContainer'

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

const App = ({ locale, changeLocale, store }) => {

    return (
      // TODO translate
      <Suspense fallback={<Container fluid classname="center"><Spinner animation="border" />Fetching data ...</Container>}>
        <Container>
          <HeaderContainer changeLanguage={null} />
          <section id="basics"> <ProfileContainer /></section>
          <section id="work"> <WorkContainer /></section>

          {/* <section id="skills"> <SkillsContainer /></section> */}
          {/* <section id="education"> <EducationContainer /></section> */}
          {/* <section id="interests"> <InterestsContainer /></section> */}
          {/* <section id="languages"> <LanguagesContainer /></section> */}

          <FooterContainer locale={locale} />
        </Container>
      </Suspense>
    );
}
export default App
