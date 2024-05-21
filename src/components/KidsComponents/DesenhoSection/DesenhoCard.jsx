'use client'
import { useState } from 'react'
import styles from './DesenhosSection.module.scss'

export default function DesenhoCard({ img, index }) {
  const [ printableImage, setPrintableImage ] = useState(null);

  function printImg(id) {
    setPrintableImage(id);
    setTimeout(() => {
      window.print();
    }, 0);
  }

  return (
    <div className={styles.printContainer}>
      <img 
        src={img} 
        alt="" 
        id={`imageToPrint${index}`} 
        className={printableImage === index ? styles.onlyPrint : ''}
        onClick={() => printImg(index)}
      />
    </div>
  )
}
