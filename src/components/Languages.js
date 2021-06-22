import React from 'react'
import { Trans } from 'react-i18next';
import CustomCard from './Utils'
const uuidv4 = require('uuid/v4');

const Language = ({language, color}) => (
    <CustomCard
          title={<Trans>{language.name}</Trans>}
          logo={language.logo}
          color={color}>
        <Trans>{language.level}</Trans>
    </CustomCard>
)

const Languages = ({languages, color}) => (
  <div className="languages">
    <h3 className="category-title"><Trans>languages</Trans></h3>
    {languages.map(language => (
      <Language key={"language-" + uuidv4()} language={language} color={color} />
    ))}
  </div>
)

export default Languages
