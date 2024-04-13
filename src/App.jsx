//

import { BrowserRouter, Route, Routes } from "react-router-dom";

import CryptoHome from "./pages/cryptoHome";
import CryptoDetail from "./pages/cryptoDetail";
import Navbar from "./components/navbar";

function App() {
  //

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CryptoHome />} />
        <Route path="/coin/:id" element={<CryptoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
