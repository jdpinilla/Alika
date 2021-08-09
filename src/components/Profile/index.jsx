import React, { useEffect, useState } from 'react';
import useUser from '../../hooks/useUser';
const Profile = () => {
  const { user } = useUser();


  return (
    <div style={{ height: '100vh' }}>
      <h2>{user.fullName}</h2>
    </div>
  );
};

export default Profile;
