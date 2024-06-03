import './App.css'
import React, { useState, useEffect } from 'react'
import style from 'styled-components'
import { motion } from "framer-motion"
import Carta from './components/Carta'

const Spinner = style(motion.div)`
  width: 3rem;
  height: 3rem;
  border: 4px solid black;
  border-top: 4px solid red;
  border-radius: 50%;
  display: inline-block;
`;

function App() {
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const tempo = setTimeout(() => {
      setCarregando(false);
    }, 4000)
    return () => clearTimeout(tempo);
  }, [])

  return (
    <>
      {carregando ? (
        <Spinner
          animate={{ rotate: 360 }}
          transition={{ duration: 0.5, repeat: Infinity, ease: 'linear' }}
        ></Spinner>
      ) : (
        <Carta />
      )}

    </>
  )
}


export default App






