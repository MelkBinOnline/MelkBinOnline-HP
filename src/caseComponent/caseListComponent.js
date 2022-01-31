import React from 'react';
import CASE from './CASE';

import './caseListStyle.css'




const data = {
  case : [
    {
      id : 'i_003',
      cover: 'https://test-m-page2.hostman.site/covers/cover-i-003.jpg',
      url: "https://test-m-page2.hostman.site/i-3/i-3.htm"
    },
    {
      id : 'i_002',
      cover: 'https://test-m-page2.hostman.site/covers/cover-i-002.jpg',
      url: "https://test-m-page2.hostman.site/i-2/i-2.htm"
    },
    {
      id : 'i_001',
      cover: 'https://test-m-page2.hostman.site/covers/cover-i-001.jpg',
      url: "https://test-m-page2.hostman.site/i-1/i-1.htm"
    },
    {
      id : 'i_000',
      cover: 'https://test-m-page2.hostman.site/covers/cover-i-000.jpg',
      url: "https://test-m-page2.hostman.site/i-0/i-0.htm"
    }
  ]
}

const CaseListComponent = () => {

  return (
  <div className='case-list'>
       {
         data.case.map((i) => {
           return(
             <CASE 
             key={i.id} 
             cover={i.cover} 
             url={i.url}/>
           )
         })
       }
        
      
  </div>);
};


export default CaseListComponent;
