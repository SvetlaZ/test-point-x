import React from 'react';
import BadgeWrapper from './BadgeWrapper';

var classNames = require('classnames');

const Badge = ({text, cls, isActive}) => {
  return (
    <BadgeWrapper>
      <li className={classNames(cls, {active: isActive})}>{text}</li>
    </BadgeWrapper>
  );
}

export default Badge;