// import logo from './logo.svg';
import "./App.css";
import Navbar from "./pages/Navbar";
import Header from "./pages/Header";
import Homepage from "./pages/Homepage";
import Faqpage from "./pages/Faqpage";
import Tokenpage from "./pages/Tokenpage";
import Revenuepage from "./pages/Revenuepage";
import Footer from "./pages/Footer";

import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="faqs" element={<Faqpage />} />
          <Route path="token" element={<Tokenpage />} />
          <Route path="revenue-share" element={<Revenuepage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
