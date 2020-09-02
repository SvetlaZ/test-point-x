import styled from 'styled-components';

const Step1Wrapper = styled.div`
  width: 1300px;
  background: #FFFFFF;
  display: flex;

  .new-task {
    width: 60%;
    .block-nav {
      display: flex;

      h2 {
        font-family: Cheyenne Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 37px;
        letter-spacing: -0.07em;
        color: #1E266D;
        width: 60%;
      }

      .delete, .back {
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #EB5757;
        width: 20%;
      }

      .back {
        color: #0E47C2;
      }
    }

    .steps {
      padding: 0;
      display: flex;
      align-items: center;
      width: 735px;
      height: 63px;
      background: #F7FAFC;
      border-radius: 40px;
      li {
        list-style-type: none;
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #A2ACC0;
        margin-right: 70px;
      }
      .choose {
        color: #FFFFFF;
        background: #336BEC;
        width: 254px;
        height: 63px;
        border-radius: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .glossary {
    width: 40%;
    background: #f9f9f9;
    h2 {
      margin-left: 58px;
      margin-top: 52px;
      font-family: Cheyenne Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 125%;
      letter-spacing: -0.07em;
      color: #1E266D;
    }

    ul {
      padding: 0;
      margin-left: 58px;
      li {
        list-style-type: none;
        font-family: Cheyenne Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 180%;
        letter-spacing: -0.025em;
        color: #1E266D;
        margin-top: 29px;
        margin-bottom: 21px;
      }
      .open {
        color: #336BEC;
      }
      p {
        font-family: Cheyenne Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 180%;
        letter-spacing: -0.025em;
        color: #455880;
      }
    }
  }
  `;

export default Step1Wrapper;
