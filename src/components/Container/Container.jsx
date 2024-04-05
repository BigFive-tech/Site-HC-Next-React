import Link from 'next/link'
import styles from './Container.module.css'
import Image from 'next/image'

export default function Container({ titulo, texto, textoBotao, path, index, className }) {
  let divContainer
  console.log(path)
  if (typeof path === 'string' && path.includes('youtube')) {
    divContainer = 
      <div className={styles["video-container"]}>
          <iframe width="100%" height="315" src={path} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
  } else {
    divContainer = 
      <img src={path.src} alt={titulo} style={{ borderRadius: '10px'}} />
  }

  let orderClass = ''
  if (index % 2 === 0) {
    orderClass = 'order-invertida'
  }

  return (
    <div className={className ? className : styles.container}>
      <div className={`${styles["faca-mais-img"]} ${styles[orderClass]}`}>
        {divContainer}
      </div>
      <div className={styles["faca-mais-text"]}>
        <h3>{titulo}</h3>
        <p>{texto}</p>
        <Link href={`/${textoBotao}`} className="btn animate-btn">{textoBotao}</Link>
      </div>       
    </div>
  )
}