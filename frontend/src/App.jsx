import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
     <Navbar/>
     <Footer/>
    </BrowserRouter>
  )
}


