import styles from '../Dados.module.css'

export default function Dado({ path, numero, texto }) {
  return(
    <div className={styles["dados-item"]}>
      <img src={path.src} alt="" />
      <p>
        <strong>{numero}</strong><br />
        {texto}
      </p>
    </div>
  )
}