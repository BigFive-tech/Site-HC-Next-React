'use client'

import { useState } from 'react'
import Modal from '../Modal/Modal'
import styles from './Exame.module.css'

export default function Exame({ path, titulo, texto, videoUrl }) {
  const [ modalClass, setModalClass ] = useState('none')
  
  function abreModal() {
    setModalClass('')
  }

  function fechaModal() {
    setModalClass('none')
  }

  return (
    <div className={styles['row-card']}>
      {modalClass !== 'none' && <Modal fechaModal={fechaModal} videoUrl={videoUrl} />}
      <div className={styles["row-card-item"]} onClick={abreModal}>
        <button className={styles["play-button"]}>▶</button>
        <img src={path.src} alt={titulo} />
        <p className={styles["nome-exame"]}><strong>{titulo}</strong></p>
        <p className={styles["descricao-exame"]}>
          {texto}
        </p>
      </div>
    </div>
  )
}