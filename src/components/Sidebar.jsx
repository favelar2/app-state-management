import React from 'react';

function Sidebar() {
  return (
    <div className='w-25 border p-3' style={{ height: '90vh' }}>
      <h4>Sidebar</h4>
      <ul className='list-group'>
        <li className='list-group-item'>An item</li>
        <li className='list-group-item'>A second item</li>
        <li className='list-group-item'>A third item</li>
        <li className='list-group-item'>A fourth item</li>
        <li className='list-group-item'>And a fifth one</li>
      </ul>
    </div>
  );
}

export default Sidebar;
