import styled from 'styled-components';

const TasksWrapper = styled.div`
  margin-bottom: 110px;

  .tasks-header {
    display: flex;
    justify-content: space-between;

    .tasks-length {
      font-family: Cheyenne Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 125%;
      letter-spacing: -0.07em;
      color: #1E266D;
    }
  }
`;

export default TasksWrapper;
