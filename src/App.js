import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import IndexPage from "./pages/IndexPage";
import BeanItPage from "./pages/BeanPage.jsx";

import {BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<IndexPage />} />
          <Route path="/beanit" element={<BeanItPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;