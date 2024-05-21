import styles from './LoadingSpinner.module.scss'

export default function LoadingSpinner() {
  return (
    <div className={styles.loading}>
      <span></span>
    </div>
  )
}
