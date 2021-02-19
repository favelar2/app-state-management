import React from 'react';
import { useDispatch } from 'react-redux';
import { layoutActions } from '../store/layout/layout.actions';

function Header() {
  const dispatch = useDispatch();

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <span>Navbar</span>
        <button
          onClick={() => dispatch(layoutActions.toggleSidebar())}
          className='btn btn-info'
        >
          Toggle Sidebar
        </button>

        <button
          onClick={() => dispatch(layoutActions.setSidebar(true))}
          className='btn btn-success'
        >
          Open Sidebar
        </button>

        <button
          onClick={() => dispatch(layoutActions.setSidebar(false))}
          className='btn btn-danger'
        >
          Close Sidebar
        </button>
      </div>
    </nav>
  );
}

export default Header;
