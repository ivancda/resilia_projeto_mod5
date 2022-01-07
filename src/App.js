import { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Suporte from './Components/Suporte/Suporte'
import Dashboard from './Components/Dashboard/Dashboard'
import Loading from "./Components/Loading/Loading";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
      setLoading(false);
    },2000)
  }, [])

  return (
    loading? <Loading/> :
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <Home />
          } />
          <Route path="/suporte" element={
            <Suporte />
          } />
          <Route path="/dashboard/*" element={
            <Dashboard />
          } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
