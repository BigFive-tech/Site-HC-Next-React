import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import styles from './Footer.module.css'


export default function Footer() {
  return(
    <footer className={styles.footer}>
      <div>
        <div className={styles.links}>
          <a href="https://m.facebook.com/hospitaldasclinicasdafmusp" target="_blank">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com/hospitalhcfmusp?igshid=MXdsZm9pY2R6bWhkcw==" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/hospitalHCFMUSP" target="_blank">
            <FaTwitter />
          </a>
          <a href="#" >
            <FaLinkedinIn />
          </a>
        </div>
        <p><a href="https://portalpaciente.icr.usp.br/portal/" target="_blank">Portal do paciente</a></p>
        <p><a href="https://sigma.icr.usp.br/login.aspx?ReturnUrl=%2frestrito%2fdefault.aspx" target="_blank">Portal Sigma</a></p>
        <p><a href="https://www.itaci.org.br/" target="_blank">ITACI</a></p>
        <p>Desenvolvido por BigFive</p>
      </div>
    </footer>
  )
}