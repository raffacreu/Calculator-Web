import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Calculadora Web</title>
        <meta name="description" content="Desenvolvido por Rafael Rocha" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src='./api/script.js'></script>
      </Head>
      <main>
        <div>
          <p>
            Standard
          </p>
        </div>
        <div className='calculator-container'>
          <span className='screen-display'>0</span>
          <table className='calculator-buttons'>
            <tr>
              <td>C</td>
              <td>&#60;</td>
              <td>x</td>
              <td>&#247;</td>
            </tr>

            <tr>
              <td data-number='7'>7</td>
              <td data-number='8'>8</td>
              <td>9</td>
              <td>-</td>
            </tr>

            <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>+</td>
            </tr>

            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td rowSpan={2}>=</td>
            </tr>

            <tr>
              <td colSpan={2}>0</td>
              <td>.</td>
            </tr>
          </table>
        </div>
      </main>
    </>
  )
}
