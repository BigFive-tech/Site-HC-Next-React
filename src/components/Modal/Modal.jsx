import { IoMdCloseCircle } from "react-icons/io";
import styles from './Modal.module.css'
import { delay, motion } from "framer-motion";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
    transition: {
      delay: 1.5
    }
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 1.6,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const flip = {
  hidden: {
    transform: "scale(0) rotateX(-180deg)",
    opacity: 0,
    transition: {
      delay: 0.2,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const video = {
  hidden: {
    transform: 'scale(0)',
    opacity: 0,
    transition: {
      delay: 1.4
    }
  },
  visible: {
    transform: 'scale(1)',
    opacity: 1,
    transition: {
      duration: 1.65
    }
  }
}

export default function Modal({ fechaModal, videoUrl }) {

  return(
    <>
      <div className={styles.fade} onClick={fechaModal}></div>
      <motion.div
        onClick={(e) => e.stopPropagation()}  
        className={styles['modal-item']}
        // className="modal orange-gradient"
        variants={flip}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className={styles["modal-item__header"]}>
            <span className={styles["close-modal"]} onClick={fechaModal}>
              <IoMdCloseCircle />
            </span>
        </div>
        <div className={styles["modal-item__body"]}>
            <motion.iframe
              initial='hidden'
              animate='visible'
              variants={video}
              width="65%" height="80%"
              src={videoUrl} 
              title="YouTube video player" frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen> 
            </motion.iframe>
            {/* <motion.img 
              initial='hidden'
              animate='visible'
              variants={dropIn}
              className={styles.galho} 
              src="/GALHO.png" alt="" 
            /> */}
            {/* <img className={styles.galho2} src="/GALHO.png" alt="" /> */}
        </div>
      </motion.div>
    </>
  )
}