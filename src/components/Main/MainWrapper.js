import styled from 'styled-components';

const MainWrapper = styled.div`
  width: 100%;

  .wrap {
    width: 1300px;
    margin: auto;

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

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
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

        a {
          text-decoration: none;
        }
      }

      .btn:hover {
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
      margin-bottom: 60px;
      .rect {
        width: 422px;
        height: 245px;
        background: #0056D3;
        border-radius: 10px;
        margin-right: 20px;
      }

      .rect {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p {
          font-family: Inter;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;
          color: #FFFFFF;

          img {
            margin-right: 10px;
          }
        }
        .indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          margin: 0 auto;
          font-family: Inter;
          font-style: normal;
          font-weight: bold;
          font-size: 28px;
          line-height: 34px;
          color: #F7F7F7;;
          user-select: none;
        }
      }

      .rect-table {
        display: flex;
        flex-direction: column;

        div {
          margin: 0 25px;

          .category {
            font-family: Inter;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
            color: #1E266D;

            span {
              margin-left: 25px;
              font-size: 12px;
              line-height: 15px;
              color: #10B269;
            }
          }
        }
      }

      .graph {
        display: flex;
        flex-direction: column;
        margin: 15px 25px 0;

        p {
          margin-top: 25px
        }

        span {
          font-size: 14px;
          line-height: 17px;
          color: #455880;
        }

        .down {
          font-size: 12px;
          line-height: 15px;
          color: #EB5757;
        }

        .cost {
          font-family: Inter;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 22px;
          color: #1E266D;
        }
      }
    }
  }
`;

export default MainWrapper;
