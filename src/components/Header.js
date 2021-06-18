import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next';
const uuidv4 = require('uuid/v4');

const Header = ({color, categories, basicsLogo}) => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasMenu" role="button" aria-controls="offcanvasExample">
        Link with href
      </a>

      <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasExample">
        Button with data-bs-target
      </button>
    </div>
    );
}

export default Header
