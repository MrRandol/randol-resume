import React from 'react'
import { useTranslation } from 'react-i18next';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import moment from 'moment';  

const Experience = ({experience, color}) => {
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  const startDate = moment(experience.startDate);
  let startYear = startDate.format("YYYY");

  var endDate = moment(experience.endDate);
  var endYear = experience.endDate != null ? experience.endDate.toLowerCase() : "";
  if (endYear === 'today') {
    endYear = experience.endDate;
  } else {
    endYear = endDate.format("YYYY");
  }
  var endDate = moment(experience.endDate);
  

  return (
  <Row>
    <Col className="right-align" md={3}>
      <span className="experience-date">{startYear} - {endYear}</span>
      <hr />
      <span>{experience.company}</span>
      <p>{t(experience.position)}</p>dw
      <Image height="15" src={experience.logo} />
    </Col>
    <Col md={9}>
      <p>{t(experience.summary)}</p>
      <span>{experience.highlights}</span>
    </Col>
  </Row>
  );
}

const Work = ({color, work}) => {
  const { t } = useTranslation();

  return (
    <Container fluid>
      <h2 className="category">{t('work')}</h2>
      {work.map(experience => (
        <Experience experience={experience} color={color}/>
      ))}
    </Container>
  );
}


export default Work
