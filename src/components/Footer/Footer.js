import React from 'react';

import FooterWrapper from './FooterWrapper';

import facebook from '../../picture/facebook.svg';
import twitter from '../../picture/twitter.svg';
import linkedin from '../../picture/linkedin.svg';
import telegram from '../../picture/telegram.svg';

const Footer = (props) => {
  return (
    <FooterWrapper>
      <div className="contacts">
        <a href="https://www.facebook.com/"><img src={facebook} alt="facebook" /></a>
        <a href="https://twitter.com/"><img src={twitter} alt="twitter" /></a>
        <a href="https://linkedin.com/"><img src={linkedin} alt="linkedin" /></a>
        <a href="https://web.telegram.org/"><img src={telegram} alt="telegram" /></a>
      </div>
      <a href="/#">Terms of Service</a>
      <a href="/#">Privacy Policy</a>
    </FooterWrapper>
  );
}

export default Footer;
