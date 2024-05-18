import HomeMenuItem from "./HomeMenuItem/HomeMenuItem";
import styles from './HomeSection.module.scss'

export default function HomeSection() {
  return (
    <section className={styles.section}> 
      <div className={styles.left}>
        <HomeMenuItem texto='Jogos' img='/controle-de-video-game 1.png' corPrincipal='#97C5B2' corSecundaria="#97c5b257" bgImg="/fundo_controle_verde.png" link='jogos' />
        <HomeMenuItem texto='Videos' img='/video 1.png' corPrincipal='#809FD2' corSecundaria="#809FD257" bgImg="/fundo_videos.pmg.png" link='videos' />
        <HomeMenuItem texto='Educação' img='/educacao 1.png' corPrincipal='#FF9053' corSecundaria="#FF905357" bgImg="/fundo_educação.pmg.png" link='educacao' />
        <HomeMenuItem texto='Histórias' img='/paleta-de-cores.png.png' corPrincipal='#F0B23A' corSecundaria="#F0B23A57" bgImg="/fundo_paleta.pmg.png" link='desenhos' />
      </div>
      <div className={styles.right}>

      </div>
    </section>
  )
}
