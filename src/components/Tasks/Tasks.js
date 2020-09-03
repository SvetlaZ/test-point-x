import React from 'react';
import Task from '../Task/Task'
import TasksWrapper from './TasksWrapper';
import Badge from '../Badge/Badge';
import BadgeList from '../Badge/BadgeList';

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
        <BadgeList>
          <Badge text="All" cls="task-status" isActive={true} />
          <Badge text="Active" cls="task-status" isActive={false} />
          <Badge text="Draft" cls="task-status" isActive={false} />
          <Badge text="Archived" cls="task-status" isActive={false} />
        </BadgeList>
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
