'use client'
import styles from './TelaIA.module.scss'
import { IoMdClose  } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { AnimatePresence, motion } from 'framer-motion';

const dropIn = {
  hidden: {
    x: "100vw",
    opacity: 0,
    transition: {
      delay: 1
    }
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 1.6,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: {
      duration: 0.5
    }
  },
};


export default function TelaIa({ fechaTela, openTela }) {
  const genAI = new GoogleGenerativeAI('AIzaSyDyi_l85WTZcYGG7uYvnwatvKfYiNNmN6Q');

  const [ messageValue, setMessageValue ] = useState('')
  const [ userMessage, setUserMessage ] = useState('Olá, digite alguma coisa para que eu possa te responder')
  const [ chatMessage, setChatMessage ] = useState('')
  
  async function run(e) {
    // For text-only input, use the gemini-pro model
    e.preventDefault()
    setUserMessage(messageValue)
    setMessageValue('')
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
    const result = await model.generateContent(messageValue);
    const response = await result.response;
    const text = response.text();
    setChatMessage(text)
  }
  
  return (
    <motion.aside 
      className={`${openTela ? styles.aside : styles.none}`}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      key='modal'
      >
      <div className={styles.top}>
        <span>ChatBot</span>
        <IoMdClose  onClick={fechaTela} color='white' size={28}/> 
      </div>
      <div className={styles.chat}>
        <p>{userMessage}</p>
        <p>{chatMessage}</p>
      </div>
      <form className={styles.prompt}>
        <textarea type="text" placeholder='Escreva sua mensagem' value={messageValue} onChange={e => setMessageValue(e.target.value)} />
        <button type='submit' onClick={run}>
          <IoSend size={28} />
        </button>
      </form>
    </motion.aside>
  )
}
