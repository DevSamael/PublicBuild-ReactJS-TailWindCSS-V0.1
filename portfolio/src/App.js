import {Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./Pages/Home";



function App(){
  return(
    <>
    <Nav />
    <Routes>
      <Route path="/Home" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
