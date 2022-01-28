import React from 'react';
import srcImg from './coverImage2-min.jpg';
import './caseComponent.css';
const Case2 = () => {
  return (
  <div className='case'>
      <div className="img-con">
          <img  src={srcImg} alt="img" />
      </div>
      <a className='link' href="https://test-m-page2.hostman.site/i-1/i-1.htm">بازدید آنلاین</a>
  </div>
  );
};

export default Case2;