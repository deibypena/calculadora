import './App.css';
import Boton from './components/boton';
import Pantalla from './components/pantalla';
import BotonClear from './components/botonClear';
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [inputValue, setInputValue] = useState('');

  const addNumber = (value) => setInputValue(inputValue + value);
  const calculateResult = () => inputValue ? setInputValue(evaluate(inputValue)) : alert('Debes Ingresar un número primero');

  return (
    <div className='container'>
      <h1>Calculadora</h1>
      <div className='calculator'>
        <Pantalla input={inputValue}/>
        <div className='calculator__fila'>
          <Boton handlerClick={addNumber}>1</Boton>
          <Boton handlerClick={addNumber}>2</Boton>
          <Boton handlerClick={addNumber}>3</Boton>
          <Boton handlerClick={addNumber}>+</Boton>
        </div>
        <div className='calculator__fila'>
          <Boton handlerClick={addNumber}>4</Boton>
          <Boton handlerClick={addNumber}>5</Boton>
          <Boton handlerClick={addNumber}>6</Boton>
          <Boton handlerClick={addNumber}>-</Boton>
        </div>
        <div className='calculator__fila'>
          <Boton handlerClick={addNumber}>7</Boton>
          <Boton handlerClick={addNumber}>8</Boton>
          <Boton handlerClick={addNumber}>9</Boton>
          <Boton handlerClick={addNumber}>*</Boton>
        </div>
        <div className='calculator__fila'>
          <Boton handlerClick={calculateResult}>=</Boton>
          <Boton handlerClick={addNumber}>0</Boton>
          <Boton handlerClick={addNumber}>.</Boton>
          <Boton handlerClick={addNumber}>/</Boton>
        </div>
        <div className='calculator__fila'>
          <BotonClear handlerClear={() => setInputValue('')}>Borrar</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
