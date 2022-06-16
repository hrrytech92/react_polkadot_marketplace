import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './assets/scss/app.scss';

// import Layout from './Layout/Layout';
import Home from "./pages/Home";
import Play from "./pages/Play";
import Sales from "./pages/Sales";
import Shop from "./pages/Shop";
import NFTS from "./pages/Nfts";
import About from "./pages/About";
import Design from "./pages/Design";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./Layout/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/sales" element={<Sales/>} />
          <Route exact path="/play" element={<Play/>} />
          <Route exact path="/shop" element={<Shop/>} />
          <Route exact path="/nft" element={<NFTS/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/design" element={<Design/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/play" element={<Design/>} />
            <Route exact path="/shop" element={<Shop/>} />
            <Route exact path="/nft" element={<NFTS/>} />
            <Route exact path="/about" element={<About/>} />
          </Routes>
        </Layout> */}
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
