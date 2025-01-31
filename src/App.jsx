import { Link, Route, Routes, useLocation } from "react-router-dom";

import "./App.scss";

import Form from "./components/Form.jsx";
import All from "./components/All.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPlus } from "@fortawesome/free-solid-svg-icons";

function App() {
  const {pathname} = useLocation()


  return (
    <div className="app">
      <main className="content">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/all" element={<All />} />
        </Routes>
      </main>
      <nav className="navigation">
        <div className="link-box">
          <Link to="/" className={`link ${pathname === "/" ? "active" : ""}`}>
            <FontAwesomeIcon icon={faPlus} className="icon" />
          </Link>
        </div>
        <div className="link-box">
          <Link to="/all" className={`link ${pathname === "/all" ? "active" : ""}`}>
            <FontAwesomeIcon icon={faBook} className="icon" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default App;
