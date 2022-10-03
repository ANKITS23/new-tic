import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/Navbar";
import Home from "./Pages/Home";
import News from "./Pages/News";



const App  = () => {
  return (
    <BrowserRouter>
    <NavBar />
  <Routes>
    <Route>
      <Route path="/" element={<Home />} />   
      <Route path="/news" element={<News />} />  
  
    </Route>
  </Routes>
</BrowserRouter>
  )
}

export default App;
