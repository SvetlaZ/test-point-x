import styled from 'styled-components';

const CardWrapper = styled.div`
    width: 403px;
    height: 245px;
    background: #FFFFFF;
    border-radius: 10px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 4px rgba(50, 50, 71, 0.08), inset 0px -4px 0px #386CE9;

    div {
      display: flex;
      justify-content: space-between;
    }

    .growth {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      font-family: Inter;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #0E47C2;

      img {
        margin-right: 10px;
        margin-left: 30px;
      }
    }

    ul {
      display: flex;
      justify-content: flex-end;
      .card {
        margin-right: 30px;
        list-style-type: none;
        color: #A2ACC0;
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
      }
  
      .active {
        color: #0056D3;
      }
    }  
    .hor {
      transform: translate(90deg);
      color: #F9F9F9;
      width: 99%;
    }
  }
  `;

export default CardWrapper;
