import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  const [result, setResult] = useState("")
  const [operadorA, setOperadorA] = useState("")
  const [operadorB, setOperadorB] = useState("")
  const [operacion, setOperacion] = useState("")
  
  function reset(){
    setResult("")
  }

  function calculo(operador){
    const A = result
    setOperadorA(A)
    switch (operador) {
      case "+":
        setOperacion(operador)
        break;
      case "-":
        setOperacion(operador)
        break;
      case "*":
        setOperacion(operador)
        break;
      case "/":
        setOperacion(operador)
        break;
    
      default:
        break;
    }

    reset()
  }

  function igual(){
    let res
    const B = result
    operadorB(B)
    setOperadorB(B)
    switch (operacion) {
      case "+":
        res = parseInt(operadorA) + parseInt(B)
        break;
      case "-":
        res = parseInt(operadorA) - parseInt(B)
        break;
      case "*":
        res = parseInt(operadorA) * parseInt(B)
        break;
      case "/":
        res = parseInt(operadorA) / parseInt(B)
        break;
    
      default:
        break;
    }
    setResult(res)
    
  }


  return (
    <div className="calculadora">
      <table>
        <tr>
          <td colSpan="4"><span><p id="resultado" type="number" >{result}</p></span></td>
        </tr>
        <tr>
          <td><button onClick={()=>(setResult(result+"7"))}>7</button></td>
          <td><button onClick={()=>(setResult(result+"8"))}>8</button></td>
          <td><button onClick={()=>(setResult(result+"9"))}>9</button></td>
          <td><button onClick={()=>{calculo("/")}}>/</button></td>
        </tr>
        <tr>
          <td><button onClick={()=>(setResult(result+"4"))}>4</button></td>
          <td><button onClick={()=>(setResult(result+"5"))}>5</button></td>
          <td><button onClick={()=>(setResult(result+"6"))}>6</button></td>
          <td><button onClick={()=>{calculo("*")}}>*</button></td>
        </tr>
        <tr>
          <td><button onClick={()=>(setResult(result+"1"))}>1</button></td>
          <td><button onClick={()=>(setResult(result+"2"))}>2</button></td>
          <td><button onClick={()=>(setResult(result+"3"))}>3</button></td>
          <td><button onClick={()=>{calculo("-")}}>-</button></td>
        </tr>
        <tr>
          <td><button onClick={igual}>=</button></td>
          <td><button onClick={reset}>C</button></td>
          <td><button onClick={()=>(setResult(result+"0"))}>0</button></td>
          <td><button onClick={()=>{calculo("+")}}>+</button></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
