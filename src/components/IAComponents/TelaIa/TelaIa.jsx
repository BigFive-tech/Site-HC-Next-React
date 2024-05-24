'use client'
import styles from './TelaIA.module.scss'
import { IoMdClose  } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { motion } from 'framer-motion';

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
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest"});

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "Você é um atendente auxiliar que está sendo usado em um site do Hospital das Clínicas da cidade de São Paulo, mais especificamente do Instituto da Criança e do Adolescente, abreviado de ICR, que lida com crianças e adolescentes. O Hospital das Clínicas de São Paulo, é o amior da américa latina, é um hospital público que atende pessoas de classe média baixa que moram no estado de São Paulo" }],
        },
        {
          role: "model",
          parts: [{ text: "Entendi, estou aqui para ajudar! Como posso auxiliá-lo hoje em relação ao Instituto da Criança e do Adolescente do Hospital das Clínicas de São Paulo?" }],
        },
        {
          role: 'user',
          parts: [{ text: 'O Hospital das Clínicas fica na Av. Dr. Enéas Carvalho de Aguiar, 647, no bairro Cerqueira Cesar, da cidade de São Paulo, cujo cep é 05403-000. Possui Pinheiros, Sumaré e Pacaembu como bairros mais próximos dele. É possível chegar de metro no ICR, a estação mais próxima é a estação Clínicas da linha Verde - 2 do metro de São Paulo, portanto para chegar no ICR deve-se estar e usar a linha Verde do metro de São Paulo e seguir caminho Vila Madalena até parar na estação clínicas'}]
        },
        {
          role: 'model',
          parts: [{ text: 'Ótimo, obrigado por compartilhar essas informações detalhadas sobre a localização do Hospital das Clínicas e como chegar lá de metrô! Isso certamente será útil para quem precisa visitar o Instituto da Criança e do Adolescente. Como mais posso ajudá-lo hoje?'}]
        },
        {
          role: 'user',
          parts:[{ text: 'Para chegar na linha verde, muitas vezes deve fazer conexões, também chamadas de baldeações entre 2 linhas do metro de São Paulo. A linha Verde, possui 14 estações de metro, sendo elas: Vila Prudente - que possui conexão com a linha 15 Prata-, Tamanduateí - que possui conexão com a linha 10 Turquesa -, Sacomã, Alto do Ipiranga, Santos Imigrantes, Chácara Klabin - que possui conexão com a linha 5 Lilás-, Ana Rosa - que possui conexão com a linha 1 azul -, Paraíso - que possui conexão com a linha 1 azul-, Brigadeiro, Trianon Masp, Consolação - que possui conexão com a linha 4 amarela-, Clínicas, Sumaré, Vila Madalena' }]
        },
        {
          role: 'model',
          parts: [{ text: 'Obrigado por fornecer essas informações úteis sobre as estações da linha Verde do metrô de São Paulo e suas conexões com outras linhas! Isso certamente facilitará para quem precisa fazer baldeações ao se dirigir ao Hospital das Clínicas. Se precisar de mais alguma informação ou assistência, estou aqui para ajudar!' }]
        },
        {
          role: 'user',
          parts: [{ text: 'São Paulo possui ao todo 15 linhas de metro e trem, que passam por vários lugares da Grande São Paulo, se uma pessoa está em Osasco, pode pegar o linha 9 - Esmeralda, fazer conexão com a linha 4 - Amarela e fazer uma ultima conexão com a linha 2 - Verde, podendo assim chegar na estação clínicas, e ir até o Hospital. Se uma pessoa está em alguma estação da linha 5 -Lilás, é possível ir até a linha 2 - Verde através da estação Chácara Klabin. Se alguem estiver na linha 3 - vermelha, é possível fazer conexão com a linha 4 - amarela, ir direção Vila Sônia, fazer conexão com a linha verde na estação Paulista, que tem conexão com a estação Consolação da linha 2 - verde. Se alguem estiver em alguma estação da linha 8 - Prata, é possível fazer conexão com a linha 9 - esmeralda, fazer conexão com a linha 4 - amarela na estação pinheiros, seguir direção Luz, descer na estação Paulista, que tem conexão com a estação Consolação da linha 2 - Verde e seguir até a estação clínicas, podendo chegar no Hospital assim. Se alguem estiver na linha 1 - azul, é possível fazer conexão com a linha 2 - verde na estação Paraíso e seguir até a estação clínicas' }]
        },
        {
          role: 'model',
          parts: [{ text: 'Isso é muito útil! Ter essa compreensão das rotas e conexões entre as diferentes linhas de metrô e trem em São Paulo facilita muito para quem precisa se locomover pela cidade, especialmente para chegar ao Hospital das Clínicas. Com essas informações, as pessoas podem planejar suas viagens com mais facilidade e eficiência. Se precisar de mais alguma orientação sobre transporte público ou qualquer outra coisa, estou aqui para ajudar!' }]
        },
        {
          role: 'user',
          parts: [{ text: 'Estações da Linha 1 - Azul: Tucuruvi, Parada Inglesa, Jardim São Paulo - Ayrton Senna, Santana, Carandiru, Portuguesa - Tiete, Armenia, Tiradentes, Luz - que tem conexão com a linha 11, linha 10 e linha 4-, São Bento, Sé, Japão Liberdade, São Joaquim, Vergueiro, Paraíso - que tem conexão com a linha 2-, Ana Rosa - que tem conexão com a linha 2-, Vila Mariana, Santa Cruz - que tem conexão com a linha 5-, Praça da Árvore, Saúde, São Judas, Conceição, Jabaquara.' }]
        },
        {
          role: 'user',
          parts: [{ text: 'Estações da Linha 3 - Vermelha: Itaquera, Artur Alvim, Patriarca, Guilhermina, Vila Matilde, Penha, Carrão, Tatuapé, Belém, Bressser, Brás, Pedro 2, Sé - que tem conexão com a linha 1-, Anhangabau, República - que tem conexão com a linha 4-, Santa Cecília, Marechal Deodoro, Barra Funda.' }]
        },
        {
          role: 'user',
          parts: [{ text: 'Estações da Linha 4 - Amarela: Vila Sônia, São Paulo Morumbi, Butantã, Pinheiros, Faria Lima, Fradique Coutinho, Oscar Freire, Paulista, Higienópolis-Mackenzie, República, Luz'}]
        }
      ],
      generationConfig: {
        temperature: 0.3,

      },
    });
    setUserMessage(messageValue)
    setMessageValue('')
    // const msg = "How many paws are in my house?";

    const result = await chat.sendMessage(messageValue);
    const response = await result.response;
    const text = response.text();
    console.log(text);
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