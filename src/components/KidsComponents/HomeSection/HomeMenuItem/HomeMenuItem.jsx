import styles from '../HomeSection.module.scss'
import Link from 'next/link'

export default function HomeMenuItem({ img, texto, corPrincipal, corSecundaria, bgImg, link }) {
  return (
    <Link href={`/kids/${link}`}>
      <article>
        <img src={bgImg} alt="Fundo" className={styles.fundo}/>
        <img src={img} alt={texto} className={styles.img}/>
        <div style={{backgroundColor: corSecundaria}}>
          <p style={{color: corPrincipal}}>{texto}</p>
        </div>
      </article>
    </Link>
  )
}
