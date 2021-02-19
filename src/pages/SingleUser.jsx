import React from 'react';
import { useParams } from 'react-router-dom';
import UserCard from '../components/UserCard';

function SingleUser() {
  const { userId } = useParams();
  return <h1>{userId}</h1>;
}

export default SingleUser;
