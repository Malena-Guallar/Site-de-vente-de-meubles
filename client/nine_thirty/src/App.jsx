// La fonction App permet de créer les routes vers les différentes pages du site. 
// On les importe dans le browser router avec le path de l'url.
// On rajoute également le header et le footer afin qu'ils apparaissent sur toutes les pages. 

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Furnitures from "./Pages/Furnitures";
import Indoor from "./Pages/Indoor";
import Outdoor from "./Pages/Outdoor";
import Header from "./Components/Header";
import Subscribe from "./Pages/Subscribe";
import Login from "./Pages/Login";
import Footer from "./Components/Footer";
import FirstVisit from "./Pages/FirstVisit";

function App() {
 
  return (
    <>
      <FirstVisit />
      
      <BrowserRouter>
        {/* <Header /> */}
      
        <Routes>
            {/* <Route path="/" element={<Home />} ></Route> */}

            {/* TEST AFFICHAGE  */}
            {/* <Route path="/" element={<FirstVisit />} ></Route> */}

            {/* <Route path="/furnitures" element={<Furnitures />} ></Route>
            <Route path="/outdoor" element={<Outdoor />} ></Route>
            <Route path="/indoor" element={<Indoor />} ></Route>
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/login" element={<Login />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      
    
    </>

  )
}

export default App;
