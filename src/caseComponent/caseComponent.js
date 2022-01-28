import React from 'react';
import srcImg from './coverImage1-min.jpg';
import './caseComponent.css';
const CaseComponent = () => {
  return (
  <div className='case'>
      <div className="img-con">
          <img  src={srcImg} alt="img" />
      </div>
      <a className='link' href="https://test-m-page2.hostman.site/i-2/i-2.htm">بازدید آنلاین</a>
  </div>
  );
};

export default CaseComponent;
