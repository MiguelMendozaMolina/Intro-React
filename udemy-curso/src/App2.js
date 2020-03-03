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
   // Destructuracion de objeto para escribir esto solo una vez 
   // de esta manera podemos acceder a todas las props del componente 
   // realizada las destructuracion se puede eliminar la referencia this del codigo 
   const {
     arrayOfNumbers, 
   //  isActivated, 
     multiply,
     objectWithInfo,
     title

    } = this.props


    // Utilizacion de propiedad ternaria 
    //const textoSegunBool = this.props.boolean ? 'Cierto': 'Falso'

    // Utilizacion de la destructuracion 

    //const textoSegunBool = isActivated ? 'Cierto': 'Falso'


    // paso de array de numeros con opcion de multiplicación 
    // es importante agregar la palabra map 
   // const mappedNumbers = this.props.arrayOfNumbers.map(n => n * 2)

   // Props mas avanzados 
   //const mappedNumbers = this.props.arrayOfNumbers.map(this.props.multiply)

   // props con referencia destructurada 

   const mappedNumbers = arrayOfNumbers.map(multiply)


    return (
      // Siempre es necesario poder tener un elemento padre 
      // Para que encapsule los otros elementos 

      // ejemplo de bool 
      //  <p>{JSON.stringify(this.props.boolean)}</p> 

      // Para realizar comentarios en JSX es necesario realizarlo dentro de {}


      // Evaluacion de props 
      <div>
         <p>{title}</p>  {/* render del elemento H1 por props */}
          <p>{this.props.text}</p>
          <p>{this.props.number}</p>
    { /*  <p>{textoSegunBool}</p> */}
    { /*  <p>{this.props.arrayOfNumbers.join(', ')}</p>  */}
          <p>{mappedNumbers.join(', ')}</p>
          {/* Estructura sin destructuracion  
          <p>{this.props.objectWithInfo.key}</p>
          */}
          <p>{objectWithInfo.key}</p>

          
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
        <Text 
        arrayOfNumbers={[2, 3, 10]}
        objectWithInfo={{ key: 'First Value', key2: 'otherValue'}}
     //   isActivated
        multiply={(number) => number * 4}
        number={2} 
        text='Texto en string' 
    //  boolean={true}
    //  Utilización de un objeto React 
        title={<h1>Este es el titulo en H1 </h1>}
    />
      </header>
     
      <h3>Vamos a Aprender React</h3>
      <p>Hola Mundo estoy usando React</p>
    </div>
  );
}

export default App;
