import Jogo from './Jogo'
import styles from './JogosSection.module.scss'

const jogos = [
  {
    nome: 'Jogo da Memória',
    img: '/jogo_memoria.png',
    link: '#',
    id: 0
  },
  {
    nome: 'Caça Palavras',
    img: '/caca_palavras.png',
    link: '#',
    id: 1
  },
  {
    nome: 'Jogo da Velha',
    img: '/jogo_velha.png',
    link: '#',
    id: 2
  },
]

export default function JogosSection() {
  return (
    <section className={styles.section}>
      {jogos.map(jogo => (
        <Jogo key={jogo.id} {...jogo} />
      ))}
    </section>
  )
}
