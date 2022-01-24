import React from 'react';
import srcImg from './coverImage2.jpg';
import './caseComponent.css';
const Case2 = () => {
  return (
  <div className='case'>
      <div className="img-con">
          <img  src={srcImg} alt="" />
      </div>
      <a className='link' href="https://i-0004.hostman.site/">بازدید آنلاین</a>
  </div>
  );
};

export default Case2;