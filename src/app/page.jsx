import Container from "@/components/Container/Container";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Depoimentos from "@/components/Depoimentos/Depoimentos";
import Certificados from "@/components/Certificados/Certificados";
import Footer from "@/components/Footer/Footer";

import { containersData } from "@/data/containers-home";
import servicoHumanizadoImg from '@/assets/imagem-servico_humanizado.jpg'
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header pathImg='/crianças-se-divertindo-home.png'>
        <div>
          <h1>Instituto da Criança e do Adolescente</h1>
          <p>Prestar assistência de alta complexidade e de excelência ao recém-nascido, criança e adolescente, por meio de atendimento humanizado e interdisciplinar, integrado ao ensino e à pesquisa.</p>
          <Link href="/contato" className={'btn animate-btn'}>Contato</Link>
        </div>
      </Header>
      <section className={styles['faca-mais']}>
        {containersData.map(data => (
          <Container key={data.index} {...data} />
        ))}
      </section>
      <Depoimentos />
      <Certificados />      
      <section>
        <Container
          titulo='Serviço Humanizado'
          texto='A equipe da Assessoria de Humanização do ICr concentra seus esforços no atendimento aos usuários (pacientes e acompanhantes), voluntários e colaboradores. Suas iniciativas humanizadoras abrangem diversas áreas de atuação, incluindo Práticas de Bem-Estar e Melhoria da Qualidade de Vida, Acolhimento, Cuidado, Ambiente, Educação Permanente, Expressões Artísticas e Culturais, bem como Práticas Inclusivas de Gestão.' 
          textoBotao='contato'
          path={servicoHumanizadoImg}
          index={2}
        />
      </section>
      <Footer />
    </>
  );
}
