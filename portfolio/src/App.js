import React, { Component } from "react";
import Home from "./Pages/Home";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from 'react-router-dom';



class App extends Component(){
  render(){
    return(
      <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            <Route path="/" component={Home} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
