import React, { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {

  render(){
    
    return(
      <div>
        <h1>My counter app</h1>
        <Counter color="blue" />
        <Counter color="cyan"/>
        <Counter color="lightGray"/>
        <Counter color="darkGray"/>
      </div>
    )
  }
}

export default App;
