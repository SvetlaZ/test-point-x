import React from 'react';
import {Link} from 'react-router-dom';
// import car from '../../picture/car.svg'
import Step1Wrapper from './Step1Wrapper';

const Step1 = (props) => {
  return (
    <Step1Wrapper>
      <div className="new-task">
        <div className="block-nav">
          <h2>Create new task</h2>
          <p className="delete">Delete Draft</p>
          <Link to="/"><p  className="back">Back to dashboard</p></Link>
        </div>

        <ul className="steps">
          <li className="choose">1. General</li>
          <li>2. Questionnaire </li>
          <li>3. Details and check</li>
        </ul>

        <div className="title">
          <p>title</p>
          <input value="Super poll for token lovers 28/50" onChange={(event) => event.target.value} />
          <span>Tasks main title</span>
        </div>

        <div className="category">
          <p>category</p>
          <select>
            <option>Transport</option>
        </select>
        </div>
      </div>
      <div className="glossary">
      <h2>Glossary</h2>
        <ul>
          <li className="open">How long does it take to process a refund?</li>
          <p>We will reimburse you for returned items in the same way you<br />
            paid for them. For example, any amounts deducted from a gift<br />
            card will be credited back to a gift card. For returns by mail,<br />
            once we receive your return, we will process it within 4–5<br />
            business days. It may take up to 7 days after we process the<br />
            return to reflect in your account, depending on your financial<br />
            institution's processing time.</p>
          <li>What is the policy for late/non-delivery of items ordered online?</li>
          <li>When will my credit card be charged?</li>
          <li>Will I be charged sales tax for online orders?</li>
        </ul>
      </div>  
      
    </Step1Wrapper>
  );
}

export default Step1;
