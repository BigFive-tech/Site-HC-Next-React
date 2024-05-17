import styles from '../ContatoSection.module.css'

export default function Mapa() {
  return (
    <div className={styles.mapa}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3545364949787!2d-46.67570482467008!3d-23.555706978803727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5786e667cbaf%3A0x4449495b4ef5165e!2sAv.%20Dr.%20En%C3%A9as%20Carvalho%20de%20Aguiar%2C%20647%20-%20Cerqueira%20C%C3%A9sar%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005403-000!5e0!3m2!1spt-BR!2sbr!4v1699831968073!5m2!1spt-BR!2sbr" width="100%" height="500" style={{ border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}