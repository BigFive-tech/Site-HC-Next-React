import styles from './Dados.module.css'
import farmaciaImg from '@/assets/farmacia.png'
import medicoImg from '@/assets/medico.png'
import Dado from './Dado/Dado'

const dados = [
  {
    path: farmaciaImg,
    numero: '+226',
    texto: 'leitos',
    index: 0
  },
  {
    path: farmaciaImg,
    numero: '+1944',
    texto: 'cirurgias infantis',
    index: 1
  },
  {
    path: farmaciaImg,
    numero: '+4490',
    texto: 'quimioterapias',
    index: 2
  },
  {
    path: medicoImg,
    numero: '+4490',
    texto: 'força de trabalho',
    index: 3
  },
]

export default function Dados() {
  return(
    <section className={styles.dados}>
      {dados.map(dado => (
        <Dado key={dado.index} {...dado} />
      ))}
    </section>
  )
}