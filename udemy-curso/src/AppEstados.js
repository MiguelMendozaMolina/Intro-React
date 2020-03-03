import React, {Component} from 'react'
import { render } from '@testing-library/react'

// gestion de estados en REACT
// primer componente con estado en REACT

class Contador extends Component {
    // agregar el state a el componente 
    // para ello es necesario poder inicializar el constructor de la clase
    // el metodo super extiende el metodo contructor de la clase que extendemos 
    // tambien se debe inicializar el state del componente 

  constructor(){
      super()
      this.state = { contador: 1 } // estado inicial del componente es 1 
  }
     
    render () {
      // const contador = 0
       return <span>{this.state.contador}</span>
    }
}

class App extends Component {
    render () {
        return (
            <div className="App">
            <p>Primer componente con state</p>
            <Contador/>
            </div>
        );
    }
}

export default App;