import React from 'react';
import Footer from './Footer';
import MainFooterWrapper from './MainFooterWrapper';

const MainFooter = (props) => {
  return (
    <MainFooterWrapper>
      <div className="footer">
        <div>
          <p>© 2020 SIA "Point-X", Go World! Go EU! Made with in Latvia LV40203240033</p>
          <Footer />
        </div>
      </div>
    </MainFooterWrapper>
  );
}

export default MainFooter;