import React from 'react';

function Header() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <span>Navbar</span>
        <button className='btn btn-info'>Show Sidebar</button>
      </div>
    </nav>
  );
}

export default Header;
