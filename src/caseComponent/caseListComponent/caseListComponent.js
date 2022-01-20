import React from 'react';
import CaseComponent from '../caseComponent';
import './caseListStyle.css'


const CaseListComponent = () => {
  return (
  <div className='case-list'>
      <h2>MelkBinOnline</h2>
      <CaseComponent/>
      <CaseComponent/>
      <CaseComponent/>
  </div>);
};

export default CaseListComponent;
