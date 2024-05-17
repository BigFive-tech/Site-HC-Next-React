'use client'

import styles from  '../Header.module.css'
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";

export default function NavBar() {
  const [ ulClass, setUlClass ] = useState('')
  
  function closeMenu() {
    setUlClass('')
  }

  function openMenu() {
    setUlClass('open')
  }

  return (
    <nav className={styles.nav}>
      <Link href="/">
          <img src="/lo.PNG" alt=""  />

      </Link>
      <ul className={`${styles.ul} ${styles[ulClass]}`}>
          <Link href="/">Home</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/exames">exames</Link>
          <Link className='btn' href="/contato">Contato</Link>
          <div className={styles['close-icon']} onClick={closeMenu}>
            <IoClose />
          </div>
      </ul>
      <div className={styles['menu-icon']}  onClick={openMenu}>
        <IoMenu />
      </div>
    </nav>
  )
}