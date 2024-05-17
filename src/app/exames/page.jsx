import styles from './page.module.css'

import Header from "@/components/PrincipalComponents/Header/Header";
import Exame from '@/components/PrincipalComponents/Exame/Exame';
import Footer from '@/components/PrincipalComponents/Footer/Footer';

import { exames } from '@/data/exames';

export default function Exames() {
  return (
    <>
      <Header pathImg='/exames.PNG'>
        <div>
          <h1>Exames</h1>
        </div>
      </Header>
      <section className={styles.exames}>
        <h3>Nossos Exames</h3>
        <p>Conheça alguns dos exames que temos para vocé</p>
        <div className={styles['rows-cards']}>
          {exames.map(exame => (
            <Exame key={exame.index} {...exame} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}