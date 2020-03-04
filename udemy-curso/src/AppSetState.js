import React, {Component} from 'react'

// alteracion de elemento en tiempo de ejecucción 
// SetState 
// 1.- Se debe utilizar como informacion inmutable 
// 2.- Se debe utilizar el metodo setState
// 3.- Es asincrono
class Contador extends Component {
    constructor (){
        super()
        this.state = {contador: 1}
        setInterval(() => {
            this.setState({ contador: this.state.contador + 1})
        },1000)
    }
    render() {
      return (
        <div>
          <h2>El contador está a {this.state.contador}.</h2>
        </div>
      );
    }
  }
export default Contador;