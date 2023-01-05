import Head from 'next/head'
import { Inter } from '@next/font/google'
  //import { resultado } from '../pages/api/scripts'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [resultado, setResultado] = useState(0)
  
  function inputResultado(e){
    const input = e.target.value

      if (resultado === 0) {
        setResultado( input )
          if (input == 0) {
          alert(`Zeros à esquerda não possuem valor, tente um outro número`)
          return setResultado(0)
          }
      }else{
        setResultado( resultado + input )
      }      
  }

  function clearResultado(e){
    setResultado(0)
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

          <span className='screen-display'>{resultado}</span>

          <div className='calculator-buttons'>

            <button className='darkGray' onClick={clearResultado} >AC</button>
            <button className='darkGray' >+/-</button>
            <button className='darkGray' >%</button>
            <button className="blue"  value="/">
              /
            </button>
            <button className="gray" onClick={inputResultado} value={7}>
              7
            </button>
            <button className="gray" onClick={inputResultado} value={8}>
              8
            </button>
            <button className="gray" onClick={inputResultado} value={9}>
              9
            </button>
            <button className="blue"  value="X">
              X
            </button>
            <button className="gray" onClick={inputResultado} value={4}>
              4
            </button>
            <button className="gray" onClick={inputResultado} value={5}>
              5
            </button>
            <button className="gray" onClick={inputResultado} value={6}>
              6
            </button>
            <button className="blue"  value="-">
              -
            </button>
            <button className="gray" onClick={inputResultado} value={1}>
              1
            </button>
            <button className="gray" onClick={inputResultado} value={2}>
              2
            </button>
            <button className="gray" onClick={inputResultado} value={3}>
              3
            </button>
            <button className="blue" value="+">
              +
            </button>
            <button className="gray" onClick={inputResultado} id='buttonZero' value={0}>
              0
            </button>
            <button className="gray" onClick={inputResultado} value={"."}>
              ,
            </button>
            <button className="blue" >
              =
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
