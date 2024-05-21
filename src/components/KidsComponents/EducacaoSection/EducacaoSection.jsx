import styles from './EducacaoSection.module.scss'
import VideoCard from './VideoCard'

const videos = [
  {
    img: '/apertado.png',
    videoUrl: 'https://www.youtube.com/embed/izBZ9sGnHNE?si=GKJJM75n6tGGFgGt',
    id: 0
  },
  {
    img: '/galinha_caipira.png',
    videoUrl: 'https://www.youtube.com/embed/hbR_z14DlWs?si=tw-eJ8y3PxrIaqR0',
    id: 1
  },
  {
    img: '/dorminhoco.png',
    videoUrl: 'https://www.youtube.com/embed/OzOqlFHIsGI?si=O__uFRr9Bg2Gnv6T',
    id: 2
  },
  {
    img: '/girassolino.png',
    videoUrl: 'https://www.youtube.com/embed/6nRQzjeX3RE?si=F1m3ylywuo1S-T8c',
    id: 3
  },
  {
    img: '/monstro_das_cores.png',
    videoUrl: 'https://www.youtube.com/embed/UdXn0lqiy6w?si=SiaYRjE1UrT1HW98',
    id: 4
  },
  {
    img: '/leao_rato.png',
    videoUrl: 'https://www.youtube.com/embed/38bAnRTa0Wg?si=DCKqTkN4NsAZCbH0',
    id: 5
  },
]

export default function EducacaoSection() {
  return (
    <section className={styles.section}>
      {videos.map(video => (
        <VideoCard key={video.id} {...video} />
      ))}
    </section>
  )
}
