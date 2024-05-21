import styles from './HeaderHome.module.scss'
import Link from "next/link";

export default function HeaderHome() {
  return (
    <header className={styles.kids_header_home}>
      <div>
        <Link href='/'>
          <img src='/lo.PNG' alt="Logo ICR" />      
        </Link>
        <h1>O mundo dos sonhos</h1>
        <Link href='/'>Área Informativa</Link>
      </div>
      <img src='/footer_nuvem.svg' alt="Nuvem"  className={styles.nuvem}/>
    </header>
  )
}
