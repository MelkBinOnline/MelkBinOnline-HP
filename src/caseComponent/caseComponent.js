import React from 'react';
import test from './img-amlak.png';
import './caseComponent.css';
const CaseComponent = () => {
  return (
  <div className='case'>
      <div className="img-con">
          <img src={test} alt="" />
      </div>
      <a className='link' href="https://ian-0000.hostman.site/">Visiting virtual</a>
  </div>
  );
};

export default CaseComponent;
