import styles from './page.module.css'

import Container from "@/components/Container/Container";
import Header from "@/components/PrincipalComponents/Header/Header";
import Dados from '@/components/PrincipalComponents/Dados/Dados'
import Footer from '@/components/PrincipalComponents/Footer/Footer';

import sobreImg from '@/assets/centro referencia.jpg'

export default function Sobre() {
  return (
    <>
      <Header pathImg='/sobre.PNG'>
        <div>
          <h1>Sobre</h1>
        </div>
      </Header>
      <section className={styles.sobre}>
        <Container
          titulo='Fundado em 1976'
          texto='O Instituto da Criança e do Adolescente do Hospital das Clínicas destaca-se como uma referência em cuidados pediátricos, oferecendo serviços médicos especializados e humanizados. Com uma equipe dedicada de profissionais, o instituto busca proporcionar um ambiente acolhedor e seguro para crianças e adolescentes, promovendo o bem-estar físico e emocional. Além dos avançados tratamentos médicos, o instituto prioriza a abordagem lúdica, visando minimizar o impacto negativo das experiências hospitalares. Sua missão inclui não apenas a cura, mas também o desenvolvimento saudável e feliz das crianças, com programas integrados e atendimento personalizado. O Instituto da Criança e do Adolescente no Hospital das Clínicas reafirma seu compromisso com a excelência em saúde infantojuvenil, representando um pilar fundamental na busca pela qualidade de vida dessa parcela da população.'
          textoBotao='contato'
          path={sobreImg}
          index={2}
          className={styles.container}
        />
      </section>
      <Dados />
      <Footer />
    </>
  )
}