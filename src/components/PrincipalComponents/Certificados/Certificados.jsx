import styles from './Certificados.module.css'

export default function Certificados() {
  return (
    <section className={styles.certificados}>
      <h3>Nossas Acreditações e Certificações</h3>
      <p>Prestamos serviços médicos para crianças e adolecentes, olhe agumas das nossas acreditações e Certificações</p>
      <div>
        <img src="/certificado-CARF.png" alt="Certificado CARF" />
        <img src="/certificado-JCI.jpg" alt="Certificado JCI" />
        <img src="/certificado-ONA.jpg" alt="Certificado ONA" />
        <img src="/certificado-word.jpg" alt="Certificado word" />
      </div>
    </section>
  )
}