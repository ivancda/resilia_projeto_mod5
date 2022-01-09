import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../assets/logo.png'

export default function Header(){
  return (
    <nav className={styles.headerContainer}>
      <Link className={styles.logoStyle} to="/resilia_projeto_mod5"><a><img src={logo} alt="" /></a></Link>
      
      <ul className={styles.lista}>
      <Link to="/resilia_projeto_mod5"><li>Home</li></Link>
      <Link to="/resilia_projeto_mod5/dashboard"><li>Dashboard</li></Link>
      <Link to="/resilia_projeto_mod5/suporte"><li>Suporte</li></Link>
      </ul>
    </nav>
  )
}