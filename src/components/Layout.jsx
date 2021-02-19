import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';

function Layout({ children }) {
  const {
    layout: { sidebar },
  } = useSelector((store) => store);

  return (
    <div>
      <Header />
      <div className='d-flex'>
        {sidebar && <Sidebar />}
        <div className='p-5 w-100'>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
