import styled from "styled-components";
import "./App.css";
import MainRoute from "./Routes/MainRoute";
import Navbar from "./Components/LandingPage/Navbar";

function App() {
  return (
    <DIV className="App">
      <Navbar />
      <MainRoute />
    </DIV>
  );
}

export default App;

let DIV = styled.div`
  background-color: #f8d4bd;
`;
