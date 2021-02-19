import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus commodi
        voluptas hic accusamus odio impedit! Quisquam aut odio vitae illo.
        Voluptatem rem eius recusandae? Quas maiores facilis quos officiis
        corrupti!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus commodi
        voluptas hic accusamus odio impedit! Quisquam aut odio vitae illo.
        Voluptatem rem eius recusandae? Quas maiores facilis quos officiis
        corrupti!
      </p>
      <Link to='/users'>
        <button className='btn btn-info'>Users</button>
      </Link>
    </>
  );
}

export default Home;
