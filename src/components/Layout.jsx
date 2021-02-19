import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className='d-flex'>
        <Sidebar />
        <div className='p-5 w-100'>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
