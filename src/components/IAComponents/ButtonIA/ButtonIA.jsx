import styles from './ButtonIA.module.scss'

export default function ButtonIA({ handleClick, openTela }) {
  return (
    <div className={`${openTela ? styles.none : styles.ia_button}`} onClick={handleClick}>
      <button>ChatBot</button>
    </div>
  )
}
