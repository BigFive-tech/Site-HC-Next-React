'use client'
import styles from './TelaIA.module.scss'
import { IoMdClose  } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { motion } from 'framer-motion';
// import { run } from '@/data/gemini';

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

const API_KEY = 'AIzaSyDyi_l85WTZcYGG7uYvnwatvKfYiNNmN6Q'
const genAI = new GoogleGenerativeAI(API_KEY)
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest"})

// const genAI = new GoogleGenerativeAI('AIzaSyDyi_l85WTZcYGG7uYvnwatvKfYiNNmN6Q');

export default function TelaIa({ fechaTela, openTela }) {

  const [ messageValue, setMessageValue ] = useState('')
  const [ userMessage, setUserMessage ] = useState('Olá, digite alguma coisa para que eu possa te responder')
  const [ chatMessage, setChatMessage ] = useState('')
  
  // async function run(e) {
  //   // For text-only input, use the gemini-pro model
  //   e.preventDefault()
  //   setUserMessage(messageValue)
  //   setMessageValue('')
  //   const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
  //   const result = await model.generateContent(messageValue);
  //   const response = await result.response;
  //   const text = response.text();
  //   setChatMessage(text)
  // }

  async function run(e) {
    e.preventDefault()
    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest"});
    setUserMessage(messageValue)
    setMessageValue('')
    const result = await model.generateContent(messageValue);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }
//gemini-1.5-flash-latest
  async function run(e) {
    // The Gemini 1.5 models are versatile and work with multi-turn conversations (like chat)
    e.preventDefault()
    const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro"});
  
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "Ola, este site é um protótipo de um novo site do Hospital das Clinicas de São Paulo" }],
        },
        // {
        //   role: "model",
        //   parts: [{ text: "Ótimo, o que você gostaria de saber" }],
        // },
      ],
      generationConfig: {
        candidateCount: 1,
        temperature: 0.3,
      },
    });
    setUserMessage(messageValue)
    // const msg = "How many paws are in my house?";
    
    const result = await chat.sendMessage(messageValue);
    setMessageValue('')
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }

  // async function conversaIa(e) {
  //   e.preventDefault()
  //   setUserMessage(messageValue)
  //   setMessageValue('')
  //   let response = await run(messageValue)
  //   console.log(response)
  //   // let text = await run(messageValue)
  //   // setChatMessage(text)
  // }
  
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
