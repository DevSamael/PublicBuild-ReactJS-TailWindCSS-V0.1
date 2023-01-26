import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./Pages/About";
import Home from "./Pages/Home";



function App(){
  return(
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<About />} />
    </Routes>
    </>
  );
}

export default App;
