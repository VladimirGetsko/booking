import React from "react";
import ReactDOM from "react-dom";
import { createStore, bindActionCreators } from "redux";

import Container from "./components/Container/Container";

const App = () => {
  return (
   <Container />
  )
}



ReactDOM.render(<App /> , document.getElementById('root'));