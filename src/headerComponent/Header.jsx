import React from 'react';
import './Header.css';
const Header = () => {
  return (
      <div class="pos-f-t test-header">
        <nav class="navbar navbar-dark bg-dark ">
          <h1 className='LOGO'>MelkBinOnline</h1>
          <button style={{border:'none',marginLeft:'auto',marginRight:'1rem',outline:'none'}} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark p-4">
            <ul className='list'>
              <li>Industrial</li>
              <li>Contact</li>
              <li>About us</li>
            </ul>
          </div>
        </div>
      </div>
  )
};

export default Header;
