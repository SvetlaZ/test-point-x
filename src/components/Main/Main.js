import React from 'react';
import {Link} from 'react-router-dom';
import Tasks from '../Tasks/Tasks';
import Chart from '../Chart/Chart';
import MainFooter from '../Footer/MainFooter';
import MainWrapper from './MainWrapper';

import ProgressBar from 'react-customizable-progressbar'
import check from '../../picture/check.svg';

import Card from '../Card/Card'
import quantity from '../../picture/quantity.svg';
import view from '../../picture/view.svg';
import label from '../../picture/label.svg';
import graph from '../../picture/graph.svg';

const Main = (props) => {
  return (
    <MainWrapper>
      <div className="wrap">
        <h2>Good day, DrBeats inc!</h2>

        <div className="block-text">
          <p className="text">
            Today you have <span>+{props.participiants || '1,321'}</span> new participiants and 
            <span>+{props.participiants || '23,782'}</span> views in all your campaigns. Good work!
          </p>
          <Link to="/create"><div className="btn">Create new +</div></Link>
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
          <Card 
            children={
              <div className="graph">
                <img src={graph} alt="graph" />
                <p className="cost">12,500.0 Px (€)</p>
                <div>
                  <span>Totaly expenses</span>
                  <span className="down">↓ 13%</span>
                </div>
              </div>
            }
          />
        </div>

        <Chart />

        <Tasks />
      </div>

      <MainFooter />
    </MainWrapper>
  );
}

export default Main;
