import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Subscribe from "./Pages/Subscribe";
import Login from "./Pages/Login"

function App() {
 

  return (
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      
      </BrowserRouter>


  )
}

export default App
