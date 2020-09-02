import styled from 'styled-components';

const MainWrapper = styled.div`
  width: 1300px;
  .group-rect {
    display: flex;
    .rect, .rect-s {
      width: 422px;
      height: 245px;
      background: #0056D3;
      border-radius: 10px;
      margin-right: 20px;
    }
    .rect-s {
      width: 403px;
    }
  }

  .schedule {
    height: 448px;
    background: red;
  }

  .tasks {
    height: 753px;
    background: green;
  }

  .footer {
    width: 100%;
    height: 65px;
    background: #FFFFFF;
  }
  `;

export default MainWrapper;
