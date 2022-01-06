import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../assets/logo.png'

export default function Header(){
  return (
    <nav className={styles.headerContainer}>
      
      <Link to="/"><li><img src={logo} alt="" /></li></Link>
      <Link to="/suporte"><li>Suporte</li></Link>
      <Link to="/login"><li>Login</li></Link>
      <Link to="/dashboard"><li>Dashboard</li></Link>
    </nav>
  )
}