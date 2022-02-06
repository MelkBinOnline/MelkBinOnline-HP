import React from 'react';
import CASE from './CASE';

import './caseListStyle.scss';




const data = {
  case : [
    {
      id : 'i_003',
      cover: 'https://test-m-page2.hostman.site/covers/cover-i-003.jpg',
      url: "https://test-m-page2.hostman.site/i-3/i-3.htm",
      type:"زمین",
      area:"2400m",
      usage:"بافت",
      province:"البرز",
      city:"نظرآباد",
      loc:"حومه"
    },
    {
      id : 'i_002',
      cover: 'https://test-m-page2.hostman.site/covers/cover-i-002.jpg',
      url: "https://test-m-page2.hostman.site/i-2/i-2.htm",
      type:"زمین و سوله",
      area:"1500m",
      usage:"صنعتی",
      province:"البرز",
      city:"هشتگرد",
      loc:"شهرک صنعتی هشتگرد"
    },
    {
      id : 'i_001',
      cover: 'https://test-m-page2.hostman.site/covers/cover-i-001.jpg',
      url: "https://test-m-page2.hostman.site/i-1/i-1.htm",
      type:"زمین و سوله",
      area:"2000m",
      usage:"صنعتی",
      province:"البرز",
      city:"نظرآباد",
      loc:"شهرک صنعتی سپهر"
    },
    {
      id : 'i_000',
      cover: 'https://test-m-page2.hostman.site/covers/cover-i-000.jpg',
      url: "https://test-m-page2.hostman.site/i-0/i-0.htm",
      type:"مغازه",
      area:"90",
      usage:"تجاری",
      province:"البرز",
      city:"نظرآباد",
      loc:"حومه"
    }
  ]
}

const CaseListComponent = () => {

  return (
  <div className='case-list'>
    <h4>جدید ترین ها</h4>
       {
         data.case.map((i) => {
           return(
             <CASE 
             key={i.id} 
             cover={i.cover} 
             url={i.url}
             type={i.type}
             usage={i.usage}
             area={i.area}
             provice={i.province}
             city={i.city}
             loc={i.loc}/>
           )
         })
       }
        
      
  </div>);
};


export default CaseListComponent;
