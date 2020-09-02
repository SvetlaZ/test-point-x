import styled from 'styled-components';

const TasksWrapper = styled.div`

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
    ul {
      display: flex;
      align-items: center;
      .task-status {
        list-style-type: none;
        margin-left: 30px;
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 30px;
        text-align: center;
        color: #A2ACC0;
      }

      .active {
        width: 78px;
        height: 30px;
        background: #0056D3;
        border-radius: 40px;
        color: #FFFFFF;
      }
    }
  }
`;

export default TasksWrapper;
