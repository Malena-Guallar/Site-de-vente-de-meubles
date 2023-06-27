import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Subscribe from "./Pages/Subscribe";

function App() {
 

  return (
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscribe" element={<Subscribe />} />

        </Routes>
      
      </BrowserRouter>


  )
}

export default App
