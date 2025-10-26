import React, {useState} from 'react'
import Numbers from './components/Numbers'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'


// Función Flecha o Arrow Function
const App = () => {
    const [stack, setStack] = useState("");
    //const texto = arrayTextoFuncionModificaText[0];
    //const funcionModificaTexto = arrayTextoFuncionModificaText[1];

    const clickHandlerFunction = (stack) => {
        console.log("Button.clickHandler1", stack)
    }

    // Lo que ejecuta la función
    console.log("Renderización de App")
    return (
    <main className='react-calculator'>
        <Result value={stack} />
        <Numbers onClickNumber={number => {setStack(`${stack}${number}`)}}/> 
        <Functions 
            onContentClear={() => { 
                console.log("Content Clear")
                setStack("") 
            }}
                
            onDelete={() => {
                console.log("onDelete")
                if(stack.length > 0){
                    const newStack = stack.substring(0, stack.length - 1)
                    setStack(newStack)
                }
            }}
        />
        <MathOperations 
            onClickOperation={operation => {
                console.log("Operation:", operation)
                setStack(`${stack}${operation}`)
            }}
            onClickEqual={equal => {
                console.log("Equal:", equal)
                setStack(`${stack}${equal}`)
            }}

        />
    </main>)
}

export default App

