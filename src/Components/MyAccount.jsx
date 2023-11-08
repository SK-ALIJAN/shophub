import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { USER_LOGOUT } from "../Redux/actiontype";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  let [userName, setUserName] = useState({});
  let { user } = useSelector((store) => store.userLogin);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    let FetchUser = async () => {
      let res = await fetch(
        `https://654b22d45b38a59f28ee8f8e.mockapi.io/user/${user}`
      );
      let data = await res.json();

      setUserName(data);
    };

    FetchUser();
  }, []);

  let handleClick = () => {
    dispatch({ type: USER_LOGOUT });
    navigate("/");
  };

  return (
    <DIV>
      <h1> Hi ! {userName.name}</h1>
      <p>Your email is : {userName.email}</p>
      <button onClick={handleClick}>Log Out</button>
    </DIV>
  );
};

export default MyAccount;

let DIV = styled.div`
  height: 100vh;
  text-align: center;
  margin-top: 10%;
  h1 {
    font-size: 4rem;
    letter-spacing: 2px;
  }
  p {
    margin-bottom: 1rem;
    font-weight: 600;
  }
  button {
    width: 10rem;
    padding: 10px 20px;
    border: 0;
    cursor: pointer;
    border-radius: 8px;
    font-weight: 600;
  }
`;
