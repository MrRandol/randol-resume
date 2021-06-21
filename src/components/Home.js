import React from 'react';
import { basicsPropType } from '../common/PropTypes'
import { useTranslation } from 'react-i18next';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Home = ({ basics, color }) => {
  const { t } = useTranslation();
  const {
    name,
    label,
    picture,
    email,
    phone,
    website,
    summary,
    profiles
  } = basics


  return (
    <Container fluid>
      <Row>
        <Col>
          <Image src={picture} roundedCircle width="300" height="300" />
        </Col>
        <Col>
          <h4>{name}</h4>
          <h6>{t(label)}</h6>
          <p>{t(summary)}</p>
        </Col>
      </Row>

      <Row>
        <Col></Col>
        <Col>
          <div>
            {phone &&
              <span className={color.className} >
                <i className="fas fa-phone" /> {phone}
              </span>
            }
            {website &&
              <span className={color.className}
                      waves="light"
                      node="a"
                      href={website}>
                <i className="fas fa-globe" /> {website}
              </span>}
            {email &&
              <span className={color.className}
                      waves="light"
                      node="a"
                      href={`mailto:${email}`}>
                <i className="far fa-envelope" /> {email}
              </span>}
          </div>

          <div>
            {profiles.map(profile => (
              <a key={"social-" + profile.network}
                href={profile.url} target="_blank"
                rel="noopener noreferrer">
                <i className={"light-color social-icon fab fa-" + profile.network.toLowerCase()}>
                </i>
              </a>
            ))}
          </div>
        </Col>
      </Row>
      <hr/>
    </Container>
  );
};

Home.defaultProps = {
  basics: basicsPropType
};

export default Home;
