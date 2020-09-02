import styled from 'styled-components';

const ChartWrapper = styled.div`
  width: 1300px;
  
  div {
    display: flex;
    justify-content: space-between;
    .chart-menu li {
      margin-right: 30px;
      list-style-type: none;
      color: #A2ACC0;
      font-family: Inter;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
    }

    .chart-menu .choose {
      color: #0056D3;
    }

    ul {
      display: flex;
      align-items: center;
      padding: 0;
      .chart-time {
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

    hr {
      transform: translate(90deg);
    }
  }
  `;

export default ChartWrapper;
