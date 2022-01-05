import './App.css';
<<<<<<< HEAD
import Suporte from './Components/Suporte/Suporte';
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Suporte from './Components/Suporte/Suporte'
import Dashboard from './Components/Dashboard/Dashboard'

>>>>>>> 5570d4f87fc364b482d5ecdf235a1440339b0b77

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header>
       
      </header>
      <Suporte/>
=======
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <Home />
          } />
          <Route path="/login" element={
            <Login />
          } />
          <Route path="/suporte" element={
            <Suporte />
          } />
          <Route path="/dashboard" element={
            <Dashboard />
          } />
        </Routes>
        <Footer />
      </Router>
>>>>>>> 5570d4f87fc364b482d5ecdf235a1440339b0b77
    </div>
  );
}

export default App;
