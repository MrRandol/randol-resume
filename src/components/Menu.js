import React from 'react'

import { useTranslation } from 'react-i18next';
const uuidv4 = require('uuid/v4');


const Menu = ({color, categories, basicsLogo}) => {

  const { t, i18n } = useTranslation();

  // TODO : put in container
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
      <div>
        {categories.map(category => {
          var content = t(category)
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
    );
}

export default Menu
