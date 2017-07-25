import React , { Component } from 'react';
import './App.css';
import Clock from './Clock';
import { Form,FormControl,Button } from 'react-bootstrap';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      deadline: 'Feburary 12, 2018',
      newDeadline:''
    }
  }

  setDeadline() {
    this.setState({deadline:this.state.newDeadline})
  }

  render() {
    return (
      <div className="App">
        <div className="App-title"> CountDown to {this.state.deadline} </div>
        <Clock
          deadline={this.state.deadline}
         />
        <Form inline={true}>
          <FormControl className='Deadline-input' placeholder='new date' onChange={event => this.setState({newDeadline: event.target.value})} />
          <Button bsStyle="primary" onClick={() => this.setDeadline()}>Press me</Button>
        </Form>
      </div>

      )

  }
}

export default App ;
