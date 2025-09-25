import React, {useState} from 'react'
import Numbers from './components/Numbers'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'


// Función Flecha o Arrow Function
const App = () => {
    const arrayTextoFuncionModificaText = useState("");
    const texto = arrayTextoFuncionModificaText[0];
    const funcionModificaTexto = arrayTextoFuncionModificaText[1];

    const clickHandlerFunction = (text) => {
        console.log("Button.clickHandler1", text)
    }

    // Lo que ejecuta la función
    console.log("Renderización de App")
    return (
    <main className='react-calculator'>
        <Result value={texto} />
        <Numbers onClickNumber={number => {
            funcionModificaTexto(number)
        }}/> 
        <Functions 
            onContentClear={() => 
                console.log("Content Clear")}
            onDelete={() => 
                console.log("onDelete")}
        />
        <MathOperations 
            onClickOperation={operation => 
                console.log("Operation:", operation)
            } 
            onClickEqual={equal => 
                console.log("Equal:", equal)
            }

        />
    </main>)
}

export default App

