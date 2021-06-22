import React from 'react'
import { Trans } from 'react-i18next'
import { Circle } from 'rc-progress'
import * as categoriesStyle from '../common/categoriesColors'
import { highlightParse } from './Utils'
const uuidv4 = require('uuid/v4');

var _ = require('lodash');

const Skill = ({ skill, level, keywords }) => {
  var split = skill ? skill.split("_", 2) : "---"
  var skillName = split.length === 2 ? split[1] : split[0]
  var skillColor = (split.length === 2 && categoriesStyle[split[0]]) ? categoriesStyle[split[0]].hex : categoriesStyle.other.hex
  return (
    <div s={4} m={3} l={3} xl={2}>
      <div className="skill">
        <Circle percent={level} strokeWidth="8" strokeColor={skillColor} />
        <p>
          <Trans>{skillName}</Trans>
        </p>
      </div>
    </div>
  );
};

const collapsibleHeader = ( category, titleRef ) => (
  <span>
    <i className={category.icon} style={{"color": category.hex}} ></i>
    <Trans>{titleRef}</Trans>
  </span>
)

const Skills = ({ skills }) => {
  var groupedSkills = _.groupBy(skills, (skill) => (
    highlightParse(skill.name).category
  ))

  return (
    <div className="skills">
      <h3 className="category-title"><Trans>skills</Trans></h3>
      <ul>
        {_.keys(groupedSkills).map((groupName) => {
          var groupSkills = groupedSkills[groupName]
          return <li key={"skills-group-" + uuidv4()}
                  header={collapsibleHeader(categoriesStyle[groupName], groupName)}
                  className="hoverable">
            <div>
              {groupSkills.map((j, i) => (
                <Skill
                  key={"skill-"+i}
                  skill={j.name}
                  level={j.level}
                  keywords={j.keywords}
                />
              ))}
            </div>
          </li>
        })}
      </ul>
    </div>
  );
};


export default Skills;
