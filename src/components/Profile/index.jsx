import React, { useEffect, useState } from 'react';
import Axios from 'axios';
const index = () => {
  const [user, setUser] = useState({});

  const handleUser = () => {
    Axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:3000/user/profile',
    }).then((res) => {
      setUser(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    console.log('useEffect');
    handleUser();
  }, []);
  return (
    <div style={{ height: '100vh' }}>
      <h2>{user.fullName}</h2>
    </div>
  );
};

export default index;
