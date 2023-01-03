import Head from 'next/head'
import { Inter } from '@next/font/google'
  //import { resultado } from '../pages/api/scripts'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const [resultado, setResultado] = useState(0)
  
  function inputResultado(e){
    const input = e.target.value
    setResultado( resultado + input )
    //setResultado(valor)
  }

  return (
    <>
      <Head>
        <title>Calculadora Web</title>
        <meta name="description" content="Desenvolvido por Rafael Rocha" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"></link>
      </Head>
      <main>
        <div className='calculator-container'>
        
          <div><span className='screen-display'>{resultado}</span></div>
          <div className='calculator-buttons'>
            <tr>
              <button data-clear-all>C</button>
              <button data-delete><i className='fas fa-backspace'></i></button>
              <button data-operator='x'>x</button>
              <button data-operator='/' className='orange'>&#247;</button>
            </tr>

            <tr>
              <button onClick={inputResultado} value={7} className='gray'>7</button>
              <button onClick={inputResultado} value={8} className='gray'>8</button>
              <button onClick={inputResultado} value={9} className='gray'>9</button>
              <button data-operator='-' className='orange'>-</button>
            </tr>

            <tr>
              <button onClick={inputResultado} value={4} className='gray'>4</button>
              <button onClick={inputResultado} value={5} className='gray'>5</button>
              <button onClick={inputResultado} value={6} className='gray'>6</button>
              <button data-operator='+' className='orange'>+</button>
            </tr>

            <tr>
              <button onClick={inputResultado} value={1} className='gray'>1</button>
              <button onClick={inputResultado} value={2} className='gray'>2</button>
              <button onClick={inputResultado} value={3} className='gray'>3</button>
              <button data-equal className='orange'>=</button>
            </tr>

            <tr>
              <button onClick={inputResultado} value={0} className='gray'>0</button>
              <button data-number='.' className='gray'>.</button>
            </tr>
          </div>
        </div>
      </main>
    </>
  )
}
