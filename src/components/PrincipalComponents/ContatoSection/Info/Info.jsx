import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Form from "./Form";
import styles from '../ContatoSection.module.css'

export default function Info() {
  return (
    <div className={styles["contato-info"]}>
      <div className={styles.feedback}></div>
      <div className={styles["left-side"]}>
        <div>
          <FaMapMarkerAlt color="white" />
          <p>Av. Dr. Enéas Carvalho de Aguiar, 647 - Cerqueira César</p>
        </div>
        <div>
          <FaPhoneAlt color="white" />
          <p>Instituto da criança e do adolecente: (11) 2661-8500</p>
        </div>
        <div>
          <FaPhoneAlt color="white" />
          <p>Marcação de consultas: <br />ICr – (11) 2661-8635, das 7:00 às 16:00 <br />
          ITACI – (11) 2661-8962 ou (11) 2661-8963, das 14:00 às 16:00</p>
        </div>
        <div>
          <FaPhoneAlt color="white" />
          <p>Agendamento de Exames: <br />(11) 2661-8548 ou (11) 2661-8670 ou pessoalmente no 2º andar do ICr – das 11:00 às 15:00</p>
        </div>
      </div>
      <div className={styles["right-side"]}>
        <Form />
      </div>
    </div>
  )
}