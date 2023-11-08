import React from "react";
import styled from "styled-components";
import { BiSad } from "react-icons/bi";
import { Link } from "react-router-dom";
const NotLoggin = () => {
  return (
    <DIV>
      <p>
        <BiSad />
      </p>
      <h1>Sorry you are not logged in !</h1>
      <Link to={"/login"}>
        <button>Please login now</button>
      </Link>
    </DIV>
  );
};

export default NotLoggin;

let DIV = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
  position: relative;
  bottom: 4rem;

  p {
    font-size: 6rem;
  }
  button {
    margin-top: 1rem;
    width: 15rem;
    height: 3rem;
    border: 0;
    font-weight: 600;
    letter-spacing: 2px;
    cursor: pointer;
    background-color: #fa8907;
    border-radius: 6px;
  }
`;
