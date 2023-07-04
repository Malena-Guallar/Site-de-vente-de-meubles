// La fonction App permet de créer les routes vers les différentes pages du site. 
// On les importe dans le browser router avec le path de l'url.
// On rajoute également le header et le footer afin qu'ils apparaissent sur toutes les pages. 

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Furnitures from "./Pages/Furnitures";
import Indoor from "./Pages/Indoor";
import Outdoor from "./Pages/Outdoor";
import Header from "./Components/Header";
<<<<<<< HEAD
import Subscribe from "./Pages/Subscribe";
import Login from "./Pages/Login"
=======
import Firstpage from "./Pages/FirstPage";
import Footer from "./Components/Footer";
>>>>>>> 18979781f0663ace5194e2002b3b5542814a69c7

function App() {
  // Assuming you have a session variable to check its existence
  const sessionExists = !!sessionStorage.getItem("User");

  return (
    <>
      <BrowserRouter>
<<<<<<< HEAD
      <Header />
      
        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/furnitures" element={<Furnitures />} ></Route>
            <Route path="/outdoor" element={<Outdoor />} ></Route>
            <Route path="/indoor" element={<Indoor />} ></Route>
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/login" element={<Login />} />
        </Routes>
      
=======
        {sessionExists ? (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/furnitures" element={<Furnitures />} />
              <Route path="/outdoor" element={<Outdoor />} />
              <Route path="/indoor" element={<Indoor />} />
            </Routes>
            <Footer />
          </>
        ) : (
          <Firstpage />
        )}
>>>>>>> 18979781f0663ace5194e2002b3b5542814a69c7
      </BrowserRouter>
    </>
  );
}

export default App;
