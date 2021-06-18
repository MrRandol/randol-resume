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
    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        {categories.map(category => {
          var content = t(category)
          if(category === "basics") {
            content = <img src={basicsLogo} alt="navbar-avatar" className="navbar-avatar circle" />
          }
          return (
            <div key={"head-" + uuidv4()}
              href={"#" + (category !== "basics" ? category : "")}
              className="valign-wrapper">
                {content}
            </div>
          )
        })}

          {i18n.language!=="fr" &&
            <div
              className="hoverable halfway-fab waves-effect waves-light circle language-button french"
              onClick={() => changeLanguage('fr')} >
                fr
            </div>
          }
          {i18n.language!=="en" &&
            <div
              className="hoverable halfway-fab waves-effect waves-light circle language-button english"
              onClick={() => changeLanguage('en')} >
                en
            </div>
          }
          </div>
      </div>
    );
}

Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  basicsLogo: PropTypes.string,

}

export default Header
