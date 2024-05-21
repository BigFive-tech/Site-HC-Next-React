'use client'

import Link from "next/link";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";
import styles from '../Header.module.scss'

export default function NavBar() {
  const [ ulClass, setUlClass ] = useState('')
  
  function closeMenu() {
    setUlClass('')
  }

  function openMenu() {
    setUlClass('open')
  }
  return (
    <nav className={styles}>
      <ul className={`${styles.ul} ${styles[ulClass]}`}>
        <li>
          <Link href='/kids'>Home</Link>
        </li>
        <li>
          <Link href='/kids/jogos'>Jogos</Link>
        </li>
        <li>
          <Link href='/kids/desenhos'>Desenhos</Link>
        </li>
        <li>
          <Link href='/kids/videos'>Videos</Link>
        </li>
        <li>
          <Link href='/kids/educacao'>Área Educacional</Link>
        </li>
        <li>
          <Link href='/'>Área Informativa</Link>
        </li>
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
