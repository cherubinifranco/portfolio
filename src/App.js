import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import IndexPage from "./pages/IndexPage";
import BeanItPage from "./pages/BeanPage.jsx";
import BchmapPage from "./pages/BchmapPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<IndexPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/beanit" element={<BeanItPage />} />
        <Route path="/projects/bchmap" element={<BchmapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
