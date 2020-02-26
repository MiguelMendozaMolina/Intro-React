import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Esta funcion lo que realiza crear un componente 
// el llamado del componente es <Hello/>

// Para poder hacer un props es necesario poder 
// pasarle el parametro en el props declarado

// Función normal 
// function Hello (props){
// return <h2>{props.title}</h2>
// }

// Función de flecha 
//const Hello = (props) => <h2>{props.title}</h2>

// Tambien se pueden declarar los componentes como clase
 class Hello extends Component{
    render(){
    return <h2>{this.props.title}</h2>
    }
 }

// Otro elemento para poder realizar pruebas 

class Text extends Component {
  render () {
    return (
      // Siempre es necesario poder tener un elemento padre 
      // Para que encapsule los otros elementos 
      <div>
          <p>{this.props.text}</p>
          <p>{this.props.number}</p>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title='Hola desde React Componente'/>
        <Text number={2} text='Texto en string'/>
      </header>
     
      <h3>Vamos a Aprender React</h3>
      <p>Hola Mundo estoy usando React</p>
    </div>
  );
}

export default App;
