import styled from 'styled-components';

const NavbarWrapper = styled.div`
  width: 100%;
  background: #FFFFFF;
  display: flex;
  justify-content: center;
  
  nav {
      height: 96px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1300px;

    .navbar-brand {
      display: flex;
      width: 10%;
      img {
        margin-right: 12px;
      }
      .navbar-brand-text {
        text-align: initial;
        font-family: Trebuchet MS;
        font-style: normal;
        font-weight: bold;
        font-size: 9px;
        line-height: 10px;
        letter-spacing: 0.021em;
        h1 {
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 0.005em;
          color: #000000;
          margin: 0;
        }
      }
    }

    .navbar-nav {
      display: flex;
      width: 75%;
      .nav-item {
        list-style-type: none;
        margin-right: 30px;
        a {
          text-decoration: none;
          cursor: pointer;
          font-family: Inter;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;
          color: #A2ACC0;
        }
        .balance {
          color: #336BEC;
        }
        .goodItems {
          color: #FFFFFF;
          font-family: Inter;
          font-style: normal;
          font-weight: 600;
          font-size: 12px;
          line-height: 15px;
          width: 34px;
          height: 24px;
          background: #FF2C9C;
          border-radius: 100px;
        }
        .active {
          color: #0056D3;
        }
      }
    }

    .navbar-name {
      display: flex;
      width: 15%;
      img {
        margin-right: 17px;
      }
      .navbar-name-text {
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #1E266D;
        .navbar-name-status {
          font-size: 11px;
          line-height: 13px;
          color: #A2ACC0;
        }
      }
    }
  }
`;

export default NavbarWrapper;
