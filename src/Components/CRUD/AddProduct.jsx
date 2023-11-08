import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addItem } from "../../Redux/action/productActions";

const AddData = ({ addModal }) => {
  let [details, setDetails] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
  });

  let dispatch = useDispatch();

  let handleChange = (e) => {
    let { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(details));
    addModal();
  };

  return (
    <DIV>
      <form action="" onSubmit={handleSubmit}>
        <textarea
          placeholder="title"
          name="title"
          value={details.title}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="description"
          name="description"
          value={details.description}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="price"
          name="price"
          value={details.price}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="image"
          name="image"
          value={details.image}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Product</button>
        <button onClick={addModal}>Cancel it</button>
      </form>
    </DIV>
  );
};

export default AddData;

let DIV = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 35rem;

  form {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    textarea {
      width: 100%;
      margin-bottom: 1rem;
      padding: 1rem;
      border: 0;
      outline: 0;
      border: 2px solid grey;
      border-radius: 11px;
    }

    button {
      height: 2.4rem;
      margin-bottom: 1rem;
      border-radius: 11px;
      border: 0;
      background-color: #f8d4bd;
      font-weight: 600;
      cursor: pointer;

      &:hover {
        background-color: #fa8907;
      }
    }
  }
`;
