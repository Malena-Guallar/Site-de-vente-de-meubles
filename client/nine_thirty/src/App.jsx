import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Furnitures from "./Pages/Furnitures";
import Indoor from "./Pages/Indoor";
import Outdoor from "./Pages/Outdoor";
import Header from "./Components/Header";

function App() {
 

  return (
    <>
      
      <BrowserRouter>
      <Header />
      
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/furnitures" element={<Furnitures />} ></Route>
          <Route path="/outdoor" element={<Outdoor />} ></Route>
          <Route path="/indoor" element={<Indoor />} ></Route>


        </Routes>
      
      
      </BrowserRouter>
    </>

  )
}

export default App
