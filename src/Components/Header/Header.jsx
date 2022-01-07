import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../assets/logo.png'

export default function Header(){
  return (
    <nav className={styles.headerContainer}>
      <Link to="/"><a><img src={logo} alt="" /></a></Link>
      
      <ul className={styles.lista}>
      <Link to="/"><li>Home</li></Link>
      <Link to="/dashboard"><li>Dashboard</li></Link>
      <Link to="/suporte"><li>Suporte</li></Link>
      </ul>
    </nav>
  )
}