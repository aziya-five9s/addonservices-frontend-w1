
import './App.css';
import Header from "./components/Header";
import Contact from "./components/Contact";
import { Navigate, Routes, Route, Link, useNavigate ,useRoutes,BrowserRouter  } from "react-router-dom";
import Gallery from './components/Gallery';
import Home from './components/Home';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    // <Header/>

    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      <div className="page-container">
        <div className="content-wrap">
          {/* Your Routes or Page Components here */}
        </div>
        <Footer />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default App;
