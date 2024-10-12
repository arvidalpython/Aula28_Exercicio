import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);


    const renderizaImc = () => {
      const imc = peso / (altura*altura);

      if (parseInt(imc*10000) < 19) {
        return (
        <>
          <table border={1}>
            <tr>
              <th>IMC</th>
              <th>Classificação</th>
            </tr>
            <tr>
              <td>{parseInt(imc*10000)}</td>
              <td>Abaixo do peso ideal</td>
            </tr>
          </table>
      </>);
      } else if (parseInt(imc*10000) < 25) {
        return (
          <>
            <table border={1}>
              <tr>
                <th>IMC</th>
                <th>Classificação</th>
              </tr>
              <tr>
                <td>{parseInt(imc*10000)}</td>
                <td>Seu peso saudável</td>
              </tr>
            </table>
        </>);
      } else if (parseInt(imc*10000) < 30) {
        return (
          <>
            <table border={1}>
              <tr>
                <th>IMC</th>
                <th>Classificação</th>
              </tr>
              <tr>
                <td>{parseInt(imc*10000)}</td>
                <td>Excesso de peso</td>
              </tr>
            </table>
        </>);
      } else if (parseInt(imc*10000) > 30) {
        return (
          <>
            <table border={1}>
              <tr>
                <th>IMC</th>
                <th>Classificação</th>
              </tr>
              <tr>
                <td>{parseInt(imc*10000)}</td>
                <td>Obeso</td>
              </tr>
            </table>
        </>);
      } else {
        return <>Você precisa digitar os valores de peso e altura.</>;
      }
      
    }



  return (
    <>
    <form action="">
      Digite sua altura: <input type="number" placeholder='digite em cm' onChange={evento => setAltura(evento.target.value)}/> <br />
      Digite seu peso: <input type="number" placeholder='digite em kg' onChange={evento => setPeso(evento.target.value)}/>
    </form>
    <p>Peso: {peso}</p>
    <p>Altura: {altura}</p>
    <p><strong>{renderizaImc()}</strong></p>
    </>
  )
}

export default App
