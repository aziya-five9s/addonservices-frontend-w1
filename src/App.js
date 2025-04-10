
import './App.css';
import Header from "./components/Header";
import Contact from "./components/Contact";
import { Navigate, Routes, Route, Link, useNavigate ,useRoutes,BrowserRouter  } from "react-router-dom";

function App() {
  return (
    // <Header/>


    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;
