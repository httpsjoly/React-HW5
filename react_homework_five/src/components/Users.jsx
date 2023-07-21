import React, { useState, useEffect } from 'react';
import Albums from './Albums';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p className='small-text'>{user.name}</p>
          <Albums userId={user.id} />
        </div>
      ))}
    </div>
  );
};

export default Users;