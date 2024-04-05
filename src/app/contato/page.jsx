import Header from "@/components/Header/Header";
import ContatoSection from "@/components/ContatoSection/ContatoSection";
import Footer from "@/components/Footer/Footer";

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