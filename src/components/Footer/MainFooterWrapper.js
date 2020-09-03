import styled from 'styled-components';

const MainFooterWrapper = styled.div`
  width: 100%;
  background: #FFFFFF;

  .footer {
    width: 1300px;
    margin: auto;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
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
    }
  }
`;

export default MainFooterWrapper;
