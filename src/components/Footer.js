import React from 'react'
import { useTranslation } from 'react-i18next';
import { saveAs } from 'file-saver';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { recursiveMap } from '../common/recursiveMap'

const Footer = ({person, refToRender}) => {
  const { t, i18n } = useTranslation();

  function downloadJson () {
    const translated = recursiveMap(person, (v) => i18n.exists(v) ? t(v) : v)
    const json = JSON.stringify(translated, null, '\t')
    var blob = new Blob([json], {type: "data:text/json;charset=utf-8"});
    saveAs(blob, "resume.json");
  }

  return (
    <Container>
      <Row>
        <Col>
          // TODO : extract to actions and utils, then put dl buttons in menus and on top too
          <button onClick={window.print}>Pdf / Print</button>
          <button onClick={downloadJson}>Download Json</button>
        </Col>
        <Col>
          <div>
            {t('powered_by')}
            <a href="https://reactjs.org/">ReactJS</a>
            &nbsp; <i className="fab fa-react"></i>
          </div>
          <div>
            {t('based_on')}
            <a href="https://jsonresume.org/">JSON Resume</a>
            &nbsp; <i className="fas fa-code"></i>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer
