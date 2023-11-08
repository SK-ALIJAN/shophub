import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateItem } from "../../Redux/action/productActions";
import AOS from "aos";
import "aos/dist/aos.css";

const UpdateData = ({ data, handleModal }) => {
  let [details, setDetails] = useState(data);
  if (data.title !== details.title) {
    setDetails(data);
  }

  let dispatch = useDispatch();
  useEffect(() => {
    AOS.init();
  }, []);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateItem(details.id, details));
    handleModal();
  };

  return (
    <DIV>
      <form action="" onSubmit={handleSubmit}>
        <textarea
          placeholder="title"
          name="title"
          value={details.title}
          onChange={handleChange}
        />
        <textarea
          placeholder="description"
          name="description"
          value={details.description}
          onChange={handleChange}
        />
        <textarea
          placeholder="price"
          name="price"
          value={details.price}
          onChange={handleChange}
        />
        <textarea
          placeholder="image"
          name="image"
          value={details.image}
          onChange={handleChange}
        />

        <button type="submit">Update it</button>
        <button onClick={handleModal}>Cancel it</button>
      </form>
    </DIV>
  );
};

export default UpdateData;

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
