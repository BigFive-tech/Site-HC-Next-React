import Header from "@/components/PrincipalComponents/Header/Header";
import ContatoSection from "@/components/PrincipalComponents/ContatoSection/ContatoSection";
import Footer from "@/components/PrincipalComponents/Footer/Footer";

export default function Contato() {
  return (
    <>
      <Header pathImg='/background-contacto.jpg'>
        <div>
          <h1>Contato</h1>
        </div>
      </Header>
      <ContatoSection />
      <Footer />
    </>
  )
}