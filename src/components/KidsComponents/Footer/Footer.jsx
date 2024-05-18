import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="/footer_nuvem_invertida.svg" alt="Nuvem invertida" className={styles.nuvem} />
      <div>
        <p>COPYRIGHT @ 2024 BIG FIVE</p>
      </div>
      <img src="/footer_nuvem.svg" alt="Nuvem" className={styles.nuvem} />
    </footer>
  )
}
