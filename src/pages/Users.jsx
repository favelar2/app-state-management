import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import UserCard from '../components/UserCard';
import { userActions } from '../store/user/user.actions';

function Users() {
  const { users } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getUsers());
  }, [dispatch]);

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
        {users.length &&
          users.map((user) => <UserCard user={user} key={user.id} />)}
      </div>
    </>
  );
}

export default Users;
