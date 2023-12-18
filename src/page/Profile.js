import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  
  return (
    <div>
      <h1>{userInfo.userId}</h1>
      <h1>{userInfo.username}</h1>
    </div>
  );
};

export default Profile;