import React, { useState } from 'react'
import styles from './Dashboard.module.css'
import { Route, NavLink, Routes, BrowserRouter as Router } from "react-router-dom"
import Faturas from '../Faturas/Faturas'
import Funcionarios from '../Funcionarios/Funcionarios'
import Hospedes from '../Hospedes/Hospedes'
import Reservas from '../Reservas/Reservas'
import imagemFundo from '../../assets/foto-dashboard.jpg'


const data = [
  {
    nome: 'faturas',
    url: 'https://faturas-hotel-api.herokuapp.com/faturas'
  },
  {
    nome: 'funcionarios',
    url: 'https://api-hotel-m4.herokuapp.com/funcionarios'
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
    <div className={styles.buttonBox} >
        <NavLink to="faturas" className={styles.botao} >Faturas</NavLink>
        <NavLink to="hospedes" className={styles.botao}>Hospedes</NavLink>
        <NavLink to="reservas" className={styles.botao}>Reservas</NavLink>
        <NavLink to="funcionarios" className={styles.botao}>Funcionarios</NavLink>
    </div>    
        <Routes>
          <Route path="faturas" element={
            <Faturas info={data[0]} />
          }/>
          <Route path="funcionarios" element={
            <Funcionarios info={data[1]}/>
          }/>
          <Route path="hospedes" element={
            <Hospedes />
          }/>
          <Route path="reservas" element={
            <Reservas />
          }/>
        </Routes>
          
    <img className={styles.imagemFundo} src={imagemFundo}/>

  </div> 
  )
}

export default Dashboard
