// La fonction App permet de créer les routes vers les différentes pages du site. 
// On les importe dans le browser router avec le path de l'url.
// On rajoute également le header et le footer afin qu'ils apparaissent sur toutes les pages. 

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Furnitures from "./Pages/Furnitures";
import Indoor from "./Pages/Indoor";
import Outdoor from "./Pages/Outdoor";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Firstpage from "./Pages/FirstPage";
import Admin from "./Pages/Admin";
import ShoppingCart from "./Pages/ShoppingCart";

function App() {
  // Assuming you have a session variable to check its existence
  const sessionExists = !!sessionStorage.getItem("User");
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return (
    <>
      <BrowserRouter>
        {sessionExists ? (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/furnitures" element={<Furnitures />} />
              <Route path="/outdoor" element={<Outdoor />} />
              <Route path="/indoor" element={<Indoor />} />
              {isAdmin && <Route path="/admin" element={<Admin />} />} {/* Render Settings only if isAdmin is true */}
              <Route path="/ShoppingCart" element={<ShoppingCart />}></Route>
            </Routes>
            <Footer />
          </>
        ) : (
          
          <Firstpage />
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
