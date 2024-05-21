import styles from './JogosSection.module.scss'

export default function Jogo({ nome, img, link, id  }) {
  return (
    <div className={`${styles.jogo} ${id === 1 && styles.baixo}`}>
      <a href={link}>
        <img src={img} alt={nome} />
        <p>{nome}</p>
      </a>
    </div>
  )
}
