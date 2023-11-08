import React, { useEffect, useState } from "react";

const MyAccount = () => {
  let [user, setUser] = useState();

  useEffect(() => {
    let data = JSON.parse(localStorage.get("userDt"));
    setUser(data.email);
  }, []);
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default MyAccount;
