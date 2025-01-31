import { Link, Route, Routes } from "react-router-dom";

import "./App.css";

import Form from "./components/Form.jsx";
import All from "./components/All.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPlus } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div>
      
      <main>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/all" element={<All />} />
        </Routes>
      </main>
      <nav>
        <Link to="/">
          <FontAwesomeIcon icon={faPlus} />
        </Link>
        <Link to="/all">
          <FontAwesomeIcon icon={faBook} />
        </Link>
      </nav>
    </div>
  );
}

export default App;
