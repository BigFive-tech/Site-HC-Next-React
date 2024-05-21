import DesenhoSection from "@/components/KidsComponents/DesenhoSection/DesenhoSection";
import Footer from "@/components/KidsComponents/Footer/Footer";
import Header from "@/components/KidsComponents/Header/Header";

export default function Desenhos() {
  return (
    <>
      <Header imagem='/paleta-de-cores.png.png' titulo='Desenhos' imagemBg='/nav_ilustração_desenhos.svg' cor='#F0B23A' />
        <DesenhoSection />
      <Footer />
    </>
  )
}
