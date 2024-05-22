import styles from './DesenhosSection.module.scss'
import DesenhoCard from "./DesenhoCard"

const desenhos = [
  '/desenho_colorir_9.png',
  '/desenho_colorir_10.png',
  '/desenho_colorir_11.png',
  '/desenho_colorir_12.png',
  '/desenho_colorir_13.png',
  '/desenho_colorir_14.png',
  '/desenho_colorir_15.png',
  '/desenho_colorir_16.png',
  '/desenho_colorir_17.png',
]

export default function DesenhoSection() {
  
  return (
    <section className={styles.section}>
      <h3>Clique na imagem que deseja imprimir e colorir:</h3>
      {desenhos.map((desenho, index) => (
        <DesenhoCard key={desenho} img={desenho} index={index} />
      ))}
    </section>
  )
}
