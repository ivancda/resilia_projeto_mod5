import React from 'react'
import styles from './Dashboard.module.css'
import { Route, NavLink, Routes, BrowserRouter as Router } from "react-router-dom"
import Faturas from '../Faturas/Faturas'

const data = [
  {
    nome: 'faturas',
    url: 'https://faturas-hotel-api.herokuapp.com/faturas'
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
  <div className={styles.dashContainer}>
    <div className={styles.buttonBox}>
        <NavLink to="faturas" className={styles.botao}>Faturas</NavLink>
        <NavLink to="hospedes" className={styles.botao}>Hospedes</NavLink>
        <NavLink to="reservas" className={styles.botao}>Reservas</NavLink>
        <NavLink to="funcionarios" className={styles.botao}>Funcionarios</NavLink>
    </div>    
        <Routes>
          <Route path="faturas" element={
            <Faturas info={data[0]}/>
          }/>
        </Routes>
          
    

    
  </div> 
  )
}

export default Dashboard
