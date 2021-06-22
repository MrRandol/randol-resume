import React from 'react';
import { useTranslation } from 'react-i18next';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Profile = ({ basics, color }) => {
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
        <Col md={4}>
          <Container className="d-flex justify-content-center">
            <div className="profile-pic-wrapper2 masked-pixel-circle">
              <div className="profile-pic-wrapper masked-pixel-circle">
                <div className="profile-pic masked-pixel-circle">
                  <Image className="masked-pixel-circle" src={picture} width="275" height="275" />
                </div>
              </div>
            </div>
          </Container>
        </Col>
        <Col md={8}>
          <h1 className="intro-title pixel-border">{name}</h1>
          <h2>{t(label)}</h2>
          <p>{t(summary)}</p>
        </Col>
      </Row>

      <Row>
        <Col md={4}></Col>
        <Col><h2>{t('contact')}</h2></Col>
      </Row>


      <Row>
        <Col md={4}></Col>
        <Col>
            {phone &&
              <Container>
                <h3>Phone</h3>
                <a className={color.className} >
                  <i className="fas fa-phone" /> {phone}
                </a>
              </Container>
            }
            {website &&
              <Container>
                <h3>Website</h3>
                <a className={color.className}
                        waves="light"
                        node="a"
                        href={website}>
                  <i className="fas fa-globe" /> {website}
                </a>
              </Container>
            }
            {email &&
              <Container>
                <h3>Email</h3>
                <a className={color.className}
                        waves="light"
                        node="a"
                        href={`mailto:${email}`}>
                  <i className="far fa-envelope" /> {email}
                </a>
              </Container>
            }

            <Container>
              <h3>Socials</h3>
              {profiles.map(profile => (
                  <a key={"social-" + profile.network}
                    href={profile.url} target="_blank"
                    rel="noopener noreferrer">
                    <i className={"light-color social-icon fab fa-" + profile.network.toLowerCase()}>
                    </i>
                  </a>
              ))}
            </Container>
        </Col>
      </Row>
      <hr/>
    </Container>
  );
};

export default Profile;
