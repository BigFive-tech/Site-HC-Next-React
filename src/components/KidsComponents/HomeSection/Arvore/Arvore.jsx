'use client'
import Input from "../Input/Input";
import { useState } from "react";
import styles from '../HomeSection.module.scss'

export default function Arvore() {
  const [ sonho, setSonho ] = useState('')

  const [componenteImg, setComponenteImg] = useState('/arvore dos sonhos.svg')
  const [className, setClassName] = useState('estatica')

  function enviarSonho(e) {
    e.preventDefault()
    setSonho('')
    setComponenteImg('/arvore_gif.gif')
    setClassName('gif')
    setTimeout(() => {
      setComponenteImg('/arvore dos sonhos.svg')
      setClassName('estatica')
    }, 4000)
  }

  return (
    <article>
      <div className={styles.arvore}>
        <img src={componenteImg} alt="Arvore" className={styles[className]}/>
      </div>
      <form>
        <Input sonho={sonho} setSonho={setSonho}/>
        <button onClick={enviarSonho}>Enviar</button>
      </form>
    </article>
  )
}
