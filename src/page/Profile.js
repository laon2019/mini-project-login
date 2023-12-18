import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const id = useSelector((state) => state.auth.id);
  const username = useSelector((state) => state.auth.username);
  const pw = useSelector((state) => state.auth.password);
  
  return <div>
    <h1>{id}</h1>
    <h1>{username}</h1>
    <h1>{pw}</h1>
  </div>;
};

export default Profile;
