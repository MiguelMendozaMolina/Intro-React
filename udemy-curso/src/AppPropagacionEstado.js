import React, {Component} from 'react'

// Ejemplo de proparagacion de estado 
class Contador extends Component {
    constructor (){
        super()
        this.state = {contador: 1}
        setInterval(() => {
            this.setState({ contador: this.state.contador + 1})
        },1000)
    }
    render() {
      return <ContadorNumero numero={this.state.contador} />
    }
  }

  class ContadorNumero extends Component {
      render() {
          console.log('ContadorNumero render()')
      return <span>{this.props.numero}</span>
      }
  }

  class App extends Component {
      render() {
          return (
              <div className="App">
              <p><h1>Propagando el state de nuestros componentes</h1></p>
              <h2><Contador/></h2>
              </div>
          )
          }
    }

  
export default App;