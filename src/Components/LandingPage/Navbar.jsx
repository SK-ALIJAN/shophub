import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

let Links = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Manage product", path: "/manageproduct" },
  { label: "Login", path: "/login" },
  { label: "Signup", path: "/signup" },
  { label: "My Account", path: "/myaccount" },
];
let Default = {
  color: "#0c0c0c",
};
let activeLink = {
  color: "#c05f09",
};

const Navbar = () => {
  let [toggle, setToggle] = useState(false);

  let handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <WRAPPER toggle={toggle}>
      <Link className="Logo" to={"/"}>
        shophub
      </Link>

      <div className="Menus">
        <div className="Submenu">
          <p className="menuIcon" onClick={handleToggle}>
            <AiOutlineMenu />
          </p>
          <div className="allmenu-underSub">
            {Links.map((ele, id) => {
              return (
                <NavLink
                  key={id}
                  to={ele.path}
                  style={({ isActive }) => (isActive ? activeLink : Default)}
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  {ele.label}
                </NavLink>
              );
            })}
          </div>
        </div>

        <Link to={"/cart"} className="CartIcon">
          <BsCartCheckFill />
        </Link>
      </div>
    </WRAPPER>
  );
};

export default Navbar;

let WRAPPER = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  .Logo {
    text-decoration: none;
    font-family: "Times New Roman", Times, serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: black;
    &:hover {
      color: #c05f09;
    }
  }

  .Menus {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .Submenu {
      .menuIcon {
        display: none;
      }
      a {
        text-decoration: none;
        margin-right: 2rem;
        font-size: 1.1rem;
        font-weight: 600;

        &:hover {
          color: #c05f09 !important;
        }
      }
    }

    .CartIcon {
      width: 2.5rem;
      height: 2.5rem;
      display: grid;
      place-content: center;
      border-radius: 100%;
      font-size: 1.4rem;
      color: black;
      background-color: white;

      &:hover {
        color: #c05f09;
      }
    }
  }

  @media screen and (max-width: 900px) {
    .Menus {
      flex-direction: row-reverse;

      .Submenu {
        .allmenu-underSub {
          display: ${({ toggle }) => (!toggle ? "none" : "flex")};
          flex-direction: column;
          position: fixed;
          height: 100vh;
          background-color: #f8d4bd;
          width: 16rem;
          right: 0rem;
          padding-left: 2rem;
          padding-top: 2rem;

          a {
            margin-bottom: 2rem;
          }
        }

        .menuIcon {
          display: block;
          cursor: pointer;
          font-size: 2rem;
        }
      }

      .CartIcon {
        position: relative;
        left: 40%;
        transform: translate(-50%);
      }
    }
  }
`;
