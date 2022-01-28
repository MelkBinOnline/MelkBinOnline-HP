import React from 'react';
import Case2 from '../case2';
import Case3 from '../case3';
import Case4 from '../case4';
import CaseComponent from '../caseComponent';
import './caseListStyle.css'


const CaseListComponent = () => {
  return (
  <div className='case-list'>
      <h2>MelkBinOnline</h2>
      <CaseComponent/>
      <Case2/>
      <Case3/>
      <Case4/>
      
  </div>);
};

export default CaseListComponent;
