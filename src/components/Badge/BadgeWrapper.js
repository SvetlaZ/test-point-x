import styled from 'styled-components';

const BadgeWrapper = styled.div`
  li {
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
`;

export default BadgeWrapper;
