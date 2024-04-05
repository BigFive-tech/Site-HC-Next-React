import styles from '../ContatoSection.module.css'

export default function Feedback({ classe, msg }) {
  return (
    <div className={styles.feedback}>
      <p className={styles[classe]}>{msg}</p>
    </div>
  )
}