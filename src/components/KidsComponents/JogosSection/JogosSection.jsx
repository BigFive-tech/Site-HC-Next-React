import Jogo from './Jogo'
import styles from './JogosSection.module.scss'

const jogos = [
  {
    nome: 'Jogo da Memória',
    img: '/jogo_memoria.svg',
    link: 'https://bigfivejogomemoria-9iszjmurd-lucasbioris-projects.vercel.app/',
    id: 0
  },
  {
    nome: 'Quiz',
    img: '/quiz.svg',
    link: 'https://react-quiz-app-navy-nine.vercel.app/',
    id: 1
  },
  {
    nome: 'Jogo da Velha',
    img: '/jogo_velha.svg',
    link: 'https://jogo-da-velha-react-beta.vercel.app/',
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
