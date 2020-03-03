import React, {Component} from 'react'
import { render } from '@testing-library/react'

class Contador extends Component {
    state = {contador: 22};
    render() {
      return (
        <div>
          <h2>El contador está a {this.state.contador}.</h2>
        </div>
      );
    }
  }
export default Contador;