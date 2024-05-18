import styles from './Input.module.scss'

export default function Input({ sonho, setSonho }) {
  return (
    <div className={styles['input-group']}>
      <input type="text" name="text" className={styles.input} value={sonho} onChange={e => setSonho(e.target.value)} />
      <label className={styles.label}>Qual o seu maior sonho?</label>
    </div>
  )
}
