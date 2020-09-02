import React from 'react';
import quantityPic from '../../picture/quantity.svg'
import medalPic from '../../picture/medal.svg'

import TaskWrapper from './TaskWrapper';

const Task = ({question, number, status, quantity, medal, result}) => {
  return (
    <TaskWrapper>
      <div className="block-question">
        <p className="task-question">{question}</p>
        {number !== 0 ? 
          <p className="number">{number}</p>
          : null
        }
      </div>
      <p className="status">{status}</p>

      <div className="block-quantity">
        <img src={quantityPic} alt="quantity" />
        <p className="quantity">{quantity}</p>
      </div>

      <div className="block-medal">
        <img src={medalPic} alt="medal" />
        <p>{medal}</p>
      </div>

      <p className="result">{result}</p>
      
    </TaskWrapper>
  );
}

export default Task;
