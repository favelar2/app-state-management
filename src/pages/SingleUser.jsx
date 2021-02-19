import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserCard from '../components/UserCard';

function SingleUser() {
  const { userId } = useParams();
  const { users } = useSelector((state) => state.user);
  const [selected, setSelected] = useState();

  useEffect(() => {
    setSelected(users.find((user) => user.id === parseInt(userId)));
  }, [users.length, userId, users]);

  return selected ? <UserCard user={selected} /> : null;
}

export default SingleUser;
