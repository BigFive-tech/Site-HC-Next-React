import { IoMdCloseCircle } from "react-icons/io";
import styles from './Modal.module.css'

export default function Modal({ fechaModal, videoUrl }) {
  return(
    <>
      <div className={styles.fade} onClick={fechaModal}></div>
      <div className={styles['modal-item']}>
          <div className={styles["modal-item__header"]}>
              <span className={styles["close-modal"]} onClick={fechaModal}>
                <IoMdCloseCircle />
              </span>
          </div>
          <div className={styles["modal-item__body"]}>
              <iframe 
                width="100%" height="400" 
                src={videoUrl} 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen> 
              </iframe>
          </div>
      </div>
    </>
  )
}