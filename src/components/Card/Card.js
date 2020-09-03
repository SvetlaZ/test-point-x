import React from 'react';
import CardWrapper from './CardWrapper';

import upPic from '../../picture/up.svg';

const Card = ({line, up, children}) => {
  return (
    <CardWrapper>
      <div>
        {up ? <p className="growth"><img src={upPic} alt="up" /> Growth</p> : <div />}
        <ul>
          <li className="card">Today</li>
          <li className="card">Week</li>
          <li className="card active">Month</li>
        </ul>
      </div>
      {line ? <hr className="hor" /> : null}
      {children}
    </CardWrapper>
  );
}

export default Card;
