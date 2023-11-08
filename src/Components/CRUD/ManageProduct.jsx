import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import NotLoggin from "./NotLoggin";
import { getItems, deleteItem } from "../../Redux/action/productActions";
import Loader from "../Loader";
import styled from "styled-components";
import UpdateData from "./UpdateData";
import AddData from "./AddProduct";

const ManageProduct = () => {
  let { isLoggedIn, isLoading, data, isError, errorMessage } = useSelector(
    (store) => {
      return {
        isLoggedIn: store.userLogin.isLoggedIn,
        isLoading: store.crudReducer.isLoading,
        data: store.crudReducer.data,
        isError: store.crudReducer.isError,
        errorMessage: store.crudReducer.errorMessage,
      };
    },
    shallowEqual
  );

  let dispatch = useDispatch();
  let [updateModal, setUpdateModal] = useState(null);
  let [addProduct, setAddProduct] = useState(false);

  useEffect(() => {
    dispatch(getItems());
  }, []);

  if (isLoggedIn===false) <NotLoggin />; // if not logged in
  if (isLoading) {
    return (
      <DIV>
        <Loader />
      </DIV>
    );
  }

  let handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  let handleModal = () => {
    setUpdateModal(null);
  };

  let addModal = () => {
    setAddProduct(false);
  };

  return (
    <>
      <div>
        <BUTTON
          onClick={() => {
            setAddProduct(true);
          }}
        >
          Add Product
        </BUTTON>
      </div>
      <WRAPPER>
        {data.map((ele) => {
          return (
            <div key={ele.id} className="container">
              <div className="imageContainer">
                <img src={ele.image} alt="" loading="lazy" />
                <p>{ele.category}</p>
              </div>

              <div className="details">
                <p id="des">{ele.description.substring(0, 40)}</p>
                <div>
                  <p>{ele.title}</p>
                  <p>{ele.price}</p>
                </div>
              </div>

              <div className="crud">
                <button
                  onClick={() => {
                    setUpdateModal(ele);
                  }}
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    handleDelete(ele.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}

        {updateModal ? (
          <UPDATEWRAPPER>
            <UpdateData data={updateModal} handleModal={handleModal} />
          </UPDATEWRAPPER>
        ) : (
          ""
        )}
      </WRAPPER>

      {addProduct ? (
        <UPDATEWRAPPER>
          <AddData addModal={addModal} />
        </UPDATEWRAPPER>
      ) : (
        ""
      )}
    </>
  );
};

export default ManageProduct;

let DIV = styled.div`
  height: 100vh;
`;

let BUTTON = styled.button`
  display: block;
  margin: auto;
  width: 10rem;
  margin-top: 1rem;
  border: 0px;
  padding: 10px 20px;
  background-color: #fa8907;
  text-align: center;
  font-weight: 600;
  letter-spacing: 2px;
  cursor: pointer;
  &:hover {
    background-color: #fa8907a3;
    border-radius: 11px;
  }
`;

let WRAPPER = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  .container {
    background-color: white;
    padding: 1rem;
    text-align: center;
    border-radius: 11px;
    position: relative;
    .imageContainer {
      img {
        width: 15rem;
        height: 15rem;
      }
      p {
        position: absolute;
        left: -13px;
        top: 0px;
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        background-color: #fa8907;
        padding: 10px;
        border-radius: 8px;
        color: white;
      }
    }

    .details {
      p {
        margin-bottom: 10px;
      }
      #des {
        font-weight: 600;
      }
    }

    .crud {
      display: flex;
      justify-content: space-between;
      button {
        border: 0;
        padding: 10px 20px;
        background-color: #f8d4bd;
        border-radius: 11px;
        font-weight: 600;
        cursor: pointer;
        &:hover {
          color: #fa8907;
        }
      }
    }
  }
`;

let UPDATEWRAPPER = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  background-color: #4c494885;
`;
