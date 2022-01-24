import React from 'react';
import Case2 from '../case2';
import CaseComponent from '../caseComponent';
import './caseListStyle.css'


const CaseListComponent = () => {
  return (
  <div className='case-list'>
      <h2>MelkBinOnline</h2>
      <CaseComponent/>
      <Case2/>
  </div>);
};

export default CaseListComponent;
