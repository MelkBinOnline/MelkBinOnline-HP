import React from 'react';
import './CollapseBtn.scss'
const CollapseBtn = () => {
    const infoToggle = (e)=>{
        e.target.previousSibling.classList.toggle('active');
    }
  return <div>
      <div className="toggle">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, unde?</p>
      </div>
      <button className='toggle-btn' onClick={(e)=>infoToggle(e)}>جزئیات</button>
  </div>;
};

export default CollapseBtn;
