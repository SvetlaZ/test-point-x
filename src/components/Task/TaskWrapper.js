import styled from 'styled-components';

const TaskWrapper = styled.div`
  width: 1310px;
  height: 108px;
  background: #FFFFFF;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #1E266D;

  .task-question {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }

  div {
    display: flex;
    .number {
      display: inline-block;
      margin-left: 10px;
      color: #FFFFFF;
      font-family: Inter;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 24px;
      width: 34px;
      height: 24px;
      background: #FF2C9C;
      border-radius: 100px;
      text-align: center;
    }
  }
  
  .block-question {
    width: 40%;
  }

  .block-quantity, .block-medal {
    width: 12%;
  }

  img {
    margin-right: 9px;
  }

  .quantity {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #1E266D;
  }

  .status {
    color: grey;
  }

  .result {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    color: #0E47C2;
  }
`;

export default TaskWrapper;
