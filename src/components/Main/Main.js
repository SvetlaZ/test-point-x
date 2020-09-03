import React from 'react';
import Tasks from '../Tasks/Tasks';
import Chart from '../Chart/Chart';
import MainWrapper from './MainWrapper';

import facebook from '../../picture/facebook.svg';
import twitter from '../../picture/twitter.svg';
import linkedin from '../../picture/linkedin.svg';
import telegram from '../../picture/telegram.svg';

import ProgressBar from 'react-customizable-progressbar'
import check from '../../picture/check.svg';

import Card from '../Card/Card'
import quantity from '../../picture/quantity.svg';
import view from '../../picture/view.svg';
import label from '../../picture/label.svg';

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
        <div className="rect">
          <ProgressBar
              progress={50}
              radius={51}
              trackStrokeWidth={10}
              strokeWidth={10}
              trackStrokeColor={'rgba(255, 255, 255, 0.3)'}
              strokeColor={'#FFFFFF'}
              strokeLinecap={'straight'}
          ><div className="indicator">
            <div>2/4</div>
          </div></ProgressBar>
          <p><img src={check} alt="check" />Active campaigns</p>
        </div>
        <Card line={true} up={true}
          children={
            <div className="rect-table">
              <div>
                <p className="category">Participiants <span>↑ 67%</span></p>
                <p className="growth"><img src={quantity} alt="quantity" />+ 12,827</p>
              </div>
              <div>
                <p className="category">Views <span>↑ 13%</span></p>
                <p className="growth"><img src={view} alt="view" />+ 121,371</p>
              </div>
              <div>
                <p className="category">Top category</p>
                <p className="growth"><img src={label} alt="label" />Music</p>
              </div>
            </div>
          }
        />
        <Card />
      </div>

      <Chart />

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
