import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchProducts } from "../../Redux/action/productActions";
import { BsCartCheckFill } from "react-icons/bs";
import { BiShowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { TbFaceIdError } from "react-icons/tb";
import { ADD_TO_CART } from "../../Redux/actiontype";
import Loader from "../Loader";

const Home = () => {
  let dispatch = useDispatch();
  let { isLoading, isError, products, errorMessage } = useSelector(
    (store) => store.products
  );
  let { isLoggedIn } = useSelector((store) => store.userLogin);

  let [text, setText] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchProducts({ flag: "search", value: text }));
    setText("");
  };

  let handleNavigate = (id) => {
    navigate(`/shop/${id}`);
  };

  let handleCart = (product) => {
    if (isLoggedIn) {
      dispatch({ type: ADD_TO_CART, payload: product });
      navigate(`/cart`);
    } else navigate("/login");
  };

  let handleSelect = (e) => {
    dispatch(fetchProducts({ flag: "select", value: e.target.value }));
  };

  return (
    <WRAPPER flag={(isError && errorMessage) || isLoading}>
      <div className="YellowBox">
        <div>
          <p>
            <span className="white">Home </span>/ Shop
          </p>
          <p className="middle"> Shop</p>
          <select id="" onChange={handleSelect}>
            <option value="">Sort by price</option>
            <option value="asc">Asending</option>
            <option value="desc">Decending</option>
          </select>
        </div>

        <div className="searching">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search items..."
              autoComplete="false"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>

      {isLoading ? (
        <Loader />
      ) : isError && errorMessage ? (
        <div className="errormessage">
          <p className="errorIcon">
            <TbFaceIdError />
          </p>
          <p> {errorMessage}</p>
        </div>
      ) : (
        <>
          {products.length !== 0 ? (
            <div className="container">
              {products.map((ele, i) => {
                return (
                  <div key={ele.id}>
                    <div className="icons">
                      <BiShowAlt
                        className="icon"
                        onClick={() => {
                          handleNavigate(ele.id);
                        }}
                      />
                      <BsCartCheckFill
                        className="icon"
                        onClick={() => {
                          handleCart(ele);
                        }}
                      />
                    </div>
                    <img src={ele.image} alt={ele.title} loading="lazy" />
                    <h3>{ele.title}</h3>
                    <h4>{ele.price}</h4>
                  </div>
                );
              })}
            </div>
          ) : null}
        </>
      )}
    </WRAPPER>
  );
};

export default Home;

let WRAPPER = styled.div`
  padding: 1rem;
  height: ${({ flag }) => (flag ? "100vh" : "")};
  .YellowBox {
    height: 20rem;
    background-color: #fa8907;
    border-radius: 51px;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div {
      display: flex;
      justify-content: space-between;

      .white {
        color: white;
      }
      .middle {
        font-weight: 600;
        font-size: 1.4rem;
        position: relative;
      }

      select {
        border-radius: 7px;
        border: 0;
        width: 10rem;
        background-image: linear-gradient(to right, #f8d4bd, #ffffff);
      }
    }

    .searching {
      align-self: center;
      position: relative;
      bottom: 5rem;
      display: flex;
      input {
        outline: 0;
        background-image: linear-gradient(to right, #f8d4bd, #ffffff);
        border: 0;
        width: 20rem;
        height: 3rem;
        padding-left: 1rem;
        border-radius: 11px;
        font-weight: 600;
        &::placeholder {
          color: #fa8907;
        }
      }

      button {
        padding: 13px 20px;
        font-weight: 600;
        border-radius: 9px;
        border: 0;
        background-color: white;
        margin-left: 2rem;
        cursor: pointer;
        background-image: linear-gradient(to right, #f8d4bd, #ffffff);
      }
    }
  }

  .errormessage {
    text-align: center;
    margin-top: 7rem;

    .errorIcon {
      font-size: 4rem;
    }
  }

  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;

    position: relative;
    bottom: 5rem;

    div {
      background-color: white;
      text-align: center;
      padding: 1rem;
      border-radius: 11px;
      .icons {
        display: flex;
        justify-content: space-between;
        .icon {
          width: 3rem;
          height: 3rem;
          padding: 10px;
          border-radius: 100%;
          background-color: #f8d4bd;
          cursor: pointer;
          &:hover {
            color: #fa8907;
          }
        }
      }
      img {
        width: 15rem;
        height: 15rem;
        margin-bottom: 1rem;
      }
      h3 {
        margin-bottom: 1rem;
      }
    }
  }
`;
