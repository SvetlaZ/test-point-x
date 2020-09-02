import React from 'react';
import Task from '../Task/Task'
import TasksWrapper from './TasksWrapper';

const tasksArr = [
  {
    question: 'Please, give the answer. That kind of childhood did you have?',
    number: 31,
    status: '23 days left',
    quantity: '53/1350',
    medal: '0.15 Px',
    result: 'Result'
  },
  {
    question: 'Please, give the answer. That kind of childhood did you have?',
    number: 10,
    status: '23 days left',
    quantity: '53/1350',
    medal: '0.15 Px',
    result: 'Result'
  },
  {
    question: 'What are your personal goals?',
    number: 0,
    status: 'Moderation',
    quantity: '53/1350',
    medal: '0.30 Px',
    result: 'Result'
  },
  {
    question: 'Please, give the answer. That kind of childhood did you have?',
    number: 0,
    status: 'Draft',
    quantity: '0/200',
    medal: '0.15 Px',
    result: ''
  },
  {
    question: 'What are your personal goals?',
    number: 0,
    status: 'Draft',
    quantity: '0/300',
    medal: '0.15 Px',
    result: ''
  },
  {
    question: 'What are your personal goals?',
    number: 0,
    status: 'Draft',
    quantity: '0/200',
    medal: '0.15 Px',
    result: ''
  },
];

const Tasks = (props) => {
  return (
    <TasksWrapper>
      <div className="tasks-header">
        <p className="tasks-length">Your tasks ({tasksArr.length})</p>
        <ul>
          <li className="task-status active">All</li>
          <li className="task-status">Active</li>
          <li className="task-status">Draft</li>
          <li className="task-status">Archived</li>
        </ul>
      </div>

      {tasksArr.map((item, index) => {
        return <Task
          key={index}
          question={item.question}
          number={item.number}
          status={item.status}
          quantity={item.quantity}
          medal={item.medal}
          result={item.result}
        />
      })}
    </TasksWrapper>
  );
}

export default Tasks;
