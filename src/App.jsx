// import { useState } from "react";
// import reactLogo from "./img/react.svg";
// import viteLogo from "/img/vite.svg";
import { HashRouter, Routes, Route } from "react-router-dom"
//Componentes de layout
import { Header } from "./features/layout/components/Header";
import { Content } from "./features/layout/components/Content";
import { Footer } from "./features/layout/components/Footer";
//Componentes Auth
import { Account } from "./features/auth/components/Account";
import { Favorites } from "./features/auth/components/Favorites"; // coincide con Favorites.jsx
import { Purchases }  from "./features/auth/components/Purchases"; // coincide con Purchases.jsx
import { Cart } from "./features/auth/components/Cart"; // coincide con Cart.jsx

//Componentes de view
import {Article} from "./features/view/components/Article";
import { Offers } from "./features/view/components/Offers";

import {
  Box,
} from "@mui/material";

function App() {


  return (
    <>
    <HashRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={ <Content> </Content> }></Route>
      <Route path="/article" element={ <Article></Article> }></Route>
      <Route path="/offers" element={ <Offers></Offers> }></Route>
      <Route path="/account" element={ <Account></Account> }></Route>
      <Route path="/favorites" element={ <Favorites></Favorites> }></Route>
      <Route path="/purchases" element={ <Purchases></Purchases> }></Route>
      <Route path="/cart" element={ <Cart></Cart> }></Route>
    
    </Routes>
    <Footer></Footer>
    </HashRouter>
    </>
  )
}

export default App
