import NavBar from './NavBar/NavBar';
import styles from './Header.module.scss'

export default function Header({ imagem, titulo, imagemBg, cor }) {
  return (
    <>
      <header className={styles.header} style={{backgroundColor: cor}}>
        <div className={styles.nav}>
          <img src="/lo.PNG" alt="Logo ICR" />
          <NavBar />
        </div>
        <div className={styles.content}>
          <div>
            <img src="/fundo_controle.pmg.png" alt="Fundo Branco" className={styles.fundo} />
            <img src={imagem} alt="" className={styles.img} />
          </div>
          <h2>{titulo}</h2>
        </div>
      </header>
      <img src={imagemBg} alt="" className={styles.bg} />
    </>
  )
}
