import React from 'react';
import Tasks from '../Tasks/Tasks'
import MainWrapper from './MainWrapper';

import facebook from '../../picture/facebook.svg';
import twitter from '../../picture/twitter.svg';
import linkedin from '../../picture/linkedin.svg';
import telegram from '../../picture/telegram.svg';

const Main = (props) => {
  return (
    <MainWrapper>
      <h2>Good day, DrBeats inc!</h2>

      <div className="block-text">
        <p className="text">
          Today you have <span>+{props.participiants || '1,321'}</span> new participiants and 
          <span>+{props.participiants || '23,782'}</span> views in all your campaigns. Good work!
        </p>
        <button>Create new +</button>
      </div>

      <div className="group-rect">
        <div className="rect"></div>
        <div className="rect-s"></div>
        <div className="rect-s"></div>
      </div>

      <div className="schedule">
        График
      </div>

      <Tasks />

      <div className="footer">
        <div>
          <p>© 2020 SIA "Point-X", Go World! Go EU! Made with in Latvia LV40203240033</p>
          <a href="https://www.facebook.com/"><img src={facebook} alt="facebook" /></a>
          <a href="https://twitter.com/"><img src={twitter} alt="twitter" /></a>
          <a href="https://linkedin.com/"><img src={linkedin} alt="linkedin" /></a>
          <a href="https://web.telegram.org/"><img src={telegram} alt="telegram" /></a>
          <a href="/#">Terms of Service</a>
          <a href="/#">Privacy Policy</a>
        </div>
      </div>
    </MainWrapper>
  );
}

export default Main;
