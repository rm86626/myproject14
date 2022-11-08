import React, { Component } from 'react'

export default class App extends Component {

    state={
        count:0
    }
    handdleClick=()=>{
        let {count}=this.state;
        this.setState({count:count+1});
    }
  render() {
    let {count}=this.state;
    console.log("render");
    return (
      <div>
        <h3>计数器1</h3>
        <p>count:{count}</p>
        <button onClick={this.handdleClick}>+</button>
      </div>
    )
  }
  componentDidMount(){
    console.log("同步语句1------>count值:",this.state.count);
    this.setState((prevState,porps)=>({count:prevState.count+1}));
    console.log("同步语句1------>count值:",this.state.count);
    this.setState((prevState,porps)=>({count:prevState.count+1}));
    console.log("同步语句1------>count值:",this.state.count);

    }
    
}
