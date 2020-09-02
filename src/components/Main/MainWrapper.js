import styled from 'styled-components';

const MainWrapper = styled.div`
  width: 1300px;

  h2 {
    font-family: Cheyenne Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
    letter-spacing: -0.07em;
    color: #1E266D;
    margin-top: 41px;
    margin-bottom: 10px;
  }

  .block-text {
    display: flex;
    margin-bottom: 45px;
    justify-content: space-between;

    button {
      width: 150px;
      height: 40px;
      color: #FFFFFF;
      font-family: Inter;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      background: #336BEC;
      border-radius: 4px;
      border: none;
    }

    button:hover {
      cursor: pointer;
    }
  }

  .text {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #455880;
    margin: 0;

    span {
      color: #0056D3;
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
    }
  }

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
    background: #FFFFFF;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1300px;
      height: 65px;

      p {
        width: 50%;
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #A2ACC0;
      }

      a {
        text-decoration: none;
      }
    }
  }
  `;

export default MainWrapper;
