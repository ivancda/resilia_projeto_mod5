import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Suporte from './Components/Suporte/Suporte'
import Dashboard from './Components/Dashboard/Dashboard'


function App() {
  return (
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
