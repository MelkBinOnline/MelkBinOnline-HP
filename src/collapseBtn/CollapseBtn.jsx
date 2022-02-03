import React from 'react';
import './CollapseBtn.scss'
const CollapseBtn = () => {
    const infoToggle = (e)=>{
        e.target.nextSibling.classList.toggle('active');
    }
  return <div>
      <button className='toggle-btn' onClick={(e)=>infoToggle(e)}>جزئیات</button>
      <div className="toggle">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, unde?</p>
      </div>
  </div>;
};

export default CollapseBtn;
