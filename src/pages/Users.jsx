import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import UserCard from '../components/UserCard';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users');
        const { data } = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('ERROR', error);
      }
    };
    getUsers();
  }, []);

  const grid = {
    display: 'grid',
    gridGap: '25px',
    gridTemplateColumns: 'auto auto auto',
  };

  return (
    <>
      <h1>Users</h1>

      <Link to='/'>
        <button className='btn btn-info mb-3'>Home</button>
      </Link>

      <div style={grid}>
        {users.length && users.map((user) => <UserCard user={user} />)}
      </div>
    </>
  );
}

export default Users;
