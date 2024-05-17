import styles from './ContatoSection.module.css'
import Info from './Info/Info'
import Mapa from './Mapa/Mapa'

export default function ContatoSection() {
  return(
    <section className={styles.contato}>
      <Mapa />
      <Info />
    </section>
  )
}