'use client'
import { useState } from "react"
import Modal from "@/components/Modal/Modal"
import styles from './EducacaoSection.module.scss'
import { AnimatePresence } from 'framer-motion'
import { FaPlayCircle } from "react-icons/fa";

export default function VideoCard({ img, videoUrl, id }) {
  const [ modalClass, setModalClass ] = useState('none')
  
  function abreModal() {
    setModalClass('')
  }

  function fechaModal() {
    setModalClass('none')
  }
  return (
    <AnimatePresence
      initial={false}
      wait={true}
      onExitComplete={() => null}
    >
      <div className={styles.video_card}>
        {modalClass !== 'none' && <Modal fechaModal={fechaModal} videoUrl={videoUrl} />}
        <img src={img} alt="" onClick={abreModal} className={styles.img}/>
        <button onClick={abreModal}>
          <FaPlayCircle color="rgba(255, 255, 255, 0.839)" size={100}/>
        </button>
      </div>
    </AnimatePresence>
  )
}
