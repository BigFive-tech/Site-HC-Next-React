import Jogo from './Jogo'
import styles from './JogosSection.module.scss'

const jogos = [
  {
    nome: 'Jogo da Memória',
    img: '/jogo_memoria.svg',
    link: '#',
    id: 0
  },
  {
    nome: 'Caça Palavras',
    img: '/caca_palavras.svg',
    link: '#',
    id: 1
  },
  {
    nome: 'Jogo da Velha',
    img: '/jogo_velha.svg',
    link: '#',
    id: 2
  },
]

export default function JogosSection() {
  return (
    <section className={styles.section}>
      <h3>Escolha qual jogo você quer jogar: </h3>
      <div>
        {jogos.map(jogo => (
          <Jogo key={jogo.id} {...jogo} />
        ))}
      </div>
    </section>
  )
}
