import { IoMdStar } from "react-icons/io";
import styles from '../Depoimentos.module.css'

export default function Card({ nome, texto }) {
  return (
    <div className={styles["card-item"]}>
      <img src="/me.jpg" alt="Cliente" />
      <p className={styles["nome-user"]}>{nome}</p>
      <p className={styles["depoimento-user"]}>{texto}</p>
      <div className={styles.estrelas}>
        <IoMdStar color="blue" size={23} />
        <IoMdStar color="blue" size={23} />
        <IoMdStar color="blue" size={23} />
        <IoMdStar color="blue" size={23} />
        <IoMdStar color="blue" size={23} />
      </div>
    </div>
  )
}