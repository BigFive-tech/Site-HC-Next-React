'use client'
import ButtonIA from "@/components/IAComponents/ButtonIA/ButtonIA";
import TelaIa from "@/components/IAComponents/TelaIa/TelaIa";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
 
export function Providers({ children }) {
  const [ openTela, setOpenTela ] = useState(false)

  function abreTela() {
    setOpenTela(true)
  }

  function fechaTela() {
    setOpenTela(false)
  }

  return (
    <>
      {children}
      {!openTela && <ButtonIA handleClick={abreTela} openTela={openTela}/>}
      <AnimatePresence 
        initial={false}
        wait={true}
        onExitComplete={() => null}
      >
        {openTela && <TelaIa key='modal1' fechaTela={fechaTela} openTela={openTela} />}
      </AnimatePresence>
    </>
  )
}