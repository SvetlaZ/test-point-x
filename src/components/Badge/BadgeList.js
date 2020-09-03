import React from 'react';
import BadgeListWrapper from './BadgeListWrapper';

const BadgeList = (props) => {
  return (
    <BadgeListWrapper>
      <ul>
        {props.children}
      </ul>
    </BadgeListWrapper>
  );
}

export default BadgeList;