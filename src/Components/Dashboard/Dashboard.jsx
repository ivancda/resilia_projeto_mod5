import React from 'react'
import styles from './Dashboard.module.css'
import { Route, NavLink, Routes, BrowserRouter as Router } from "react-router-dom"
import Faturas from '../Faturas/Faturas'

const data = [
  {
    nome: 'teste',
    url: 'https://randomuser.me/api/'
  },
  {
    nome: 'teste',
    url: 'teste Url'
  },
  {
    nome: 'teste',
    url: 'teste Url'
  },
  {
    nome: 'teste',
    url: 'teste Url'
  },
]

function Dashboard() {



  return (
  <div className={styles.container}>
    <div className={styles.buttonBox}>
        <NavLink to="faturas" className={styles.botao}>Faturas</NavLink>
        <NavLink to="hospedes" className={styles.botao}>Hospedes</NavLink>
        <NavLink to="reservas" className={styles.botao}>Reservas</NavLink>
        <NavLink to="funcionarios" className={styles.botao}>Funcionarios</NavLink>
        
        <Routes>
          <Route path="faturas" element={
            <Faturas info={data[0]}/>
          }/>
        </Routes>
          
    </div>

    
  </div> 
  )
}

export default Dashboard
