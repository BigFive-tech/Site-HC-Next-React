import styles from './Header.module.css'
import NavBar from "./NavBar/NavBar";

export default function Header({ pathImg, children }) {
  return (
    <header className={styles.header} style={{ backgroundImage: `url(${pathImg})`}}>
      <div className={styles.container}>
          <NavBar />
          <section className={styles.banner}>
            {children}
          </section>
      </div>
    </header>
  )
}