import React from 'react';
import srcImg from './coverImage4-min.jpg';
import './caseComponent.css';
const Case4 = () => {
  return (
  <div className='case'>
      <div className="img-con">
          <img  src={srcImg} alt="img" />
      </div>
      <a className='link' href="https://test-m-page2.hostman.site/i-3/i-3.htm">بازدید آنلاین</a>
  </div>
  );
};

export default Case4;