import React from 'react'
import { useTranslation } from 'react-i18next';
import { saveAs } from 'file-saver';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var _ = require('lodash');


function recursiveMap (value, fn) {
    if (_.isArray(value)) {
      return value.map(v => recursiveMap(v, fn));
    } else if (typeof value === 'object') {
        return _.mapValues(value, function(v) {
            return recursiveMap(v, fn);
        });
    } else {
        return fn(value);
    }
};


const Footer = ({person}) => {
  const { t, i18n } = useTranslation();

  function DownloadJson () {
    const translated = recursiveMap(_.cloneDeep(person), (v) => i18n.exists(v) ? t(v) : v)
    const json = JSON.stringify(translated, null, '\t')
    var blob = new Blob([json], {type: "data:text/json;charset=utf-8"});
    saveAs(blob, "resume.json");
  }

  return (
    <Container>
      <Row>
        <Col>
          <div>TODO : get PDF</div>
          <button onClick={DownloadJson}>
            Download Json
          </button>
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
