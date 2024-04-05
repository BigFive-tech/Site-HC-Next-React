'use client'
import { useState } from "react"
import Feedback from "./Feedback"

export default function Form() {
  const [ formData, setFormData ] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  })

  const [ feedbackMessage, setFeedbackMessage ] = useState('')

  function mudaValores(event, dado) {
    setFormData(prevFormData => (
      {...prevFormData,
      [dado]: event.target.value
    }))
  }

  function validaCampo(campo) {
    return campo.trim().length > 2
  }

  function validaEmail(email) {
    if (!email.includes('@')) {
      return false
    }
    const [ nome, dominio ] = email.split('@')
    if(!validaCampo(dominio) || !validaCampo(nome)) {
      return false
    }
    return true
  }

  function mensagemDeFeedback(validacao) {
    if (validacao) {
      setFeedbackMessage(<Feedback classe={'sucesso'} msg='Formulario enviado com sucesso' />)
    } else {
      setFeedbackMessage(<Feedback classe='erro' msg='Erro ao preencher um dos campos' />)
    }
    return
  }

  function armazenaDados() {
    localStorage.setItem(formData.nome, JSON.stringify(formData))
  }

  function limpaCampos() {
    setFormData({
      nome: '',
      email: '',
      assunto: '',
      mensagem: ''
    })
  }

  function confirmaEnvioForm(e) {
    e.preventDefault()
    let validacao
    for (const key in formData) {
      if (key === 'email') {
        validacao = validaEmail(formData[key])
      }
      else {
        validacao = validaCampo(formData[key])
      }
      if (!validacao) {
        break
      }
    }

    mensagemDeFeedback(validacao)
    if (validacao) {
      armazenaDados()
      limpaCampos()
    }
    setTimeout(() => setFeedbackMessage(''), 3000)
    return
  }

  return (
    <form action="">
      {feedbackMessage}
      <input type="text" placeholder="Nome" required value={formData.nome} onChange={e => mudaValores(e, 'nome')} />
      <input type="email" placeholder="E-mail" required value={formData.email} onChange={e => mudaValores(e, 'email')} />
      <input type="text" placeholder="Assunto" required value={formData.assunto} onChange={e => mudaValores(e, 'assunto')} />
      <textarea value={formData.mensagem} onChange={(e) => mudaValores(e, 'mensagem')} cols="30" rows="10" placeholder="Sua Mensagem" required></textarea>
      <button className="btn" onClick={e => confirmaEnvioForm(e)}>Enviar Mensagem</button>
    </form>
  )
}