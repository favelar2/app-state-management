import { Link, useParams } from 'react-router-dom';

const UserCard = ({ user }) => {
  const { userId } = useParams();

  let path = '/users';

  //If is not in the SingleUser Page
  if (!userId) {
    path = `${path}/${user.id}`;
  }

  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={user.avatar} className='card-img-top' alt={user.first_name} />
      <div className='card-body'>
        <h5 className='card-title'>{`${user.first_name} ${user.last_name}`}</h5>
        <p className='card-text'>{user.email}</p>
        <Link to={path} className='btn btn-primary'>
          {userId ? 'Go to Users' : "See user's profile"}
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
