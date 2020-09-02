import React from 'react';
import MainWrapper from './MainWrapper';

const Main = (props) => {
  return (
    <MainWrapper>
      <h2>Good day, DrBeats inc!</h2>
      <p>
        Today you have +{props.participiants || '1,321'} new participiants and 
        +{props.participiants || '23,782'} views in all your campaigns. Good work!
      </p>
      <button>Create new +</button>

      <div className="group-rect">
        <div className="rect"></div>
        <div className="rect-s"></div>
        <div className="rect-s"></div>
      </div>

      <div className="schedule">
        График
      </div>

      <div className="tasks">Your Tasks</div>

      <div className="footer">Footer</div>
    </MainWrapper>
  );
}

export default Main;
