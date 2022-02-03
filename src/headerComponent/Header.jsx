import React from 'react';
import './Header.scss';

const Header = () => {
  return (
      <header class="pos-f-t header">
        <nav class="navbar navbar-dark bg-dark ">
          <h1 className='LOGO'><a href="#HOME">MelkBinOnline</a></h1>
          <button  class="navbar-toggler personal" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
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
      </header>
  )
};

export default Header;
