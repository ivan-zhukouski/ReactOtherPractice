import React, {Component} from 'react'
import Conditional from './conditional'

class MainContent extends React.Component {
  render(){
    return(
       <main>
         <Header username="Ivan"/>
         <Greeting/>
         <Age />
         <LogInOut />
         <ChangeNumber />
         <Inload />
       </main>
    );
  }
}

class Inload extends React.Component {
  constructor (){
    super()
    this.state = {
      inLoading: true
    }
  }

  componentDidMount() {
    setTimeout (() => {
      this.setState({
        inLoading: false
      })
    }, 1500)
  }

  render() {
    return(
      <Conditional inLoading = {this.state.inLoading}/>
    )
  }

}

class ChangeNumber extends React.Component{
constructor(){
  super()
      this.state = {
      count: 0,
    }
    this.handleClick = this.handleClick.bind(this)
}

handleClick(){
  this.setState(prevCount => {
    return{
      count: prevCount.count + 7
    }
  })
}

  render(){

    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick = {this.handleClick}>ClickMe</button>
      </div>
    )
  }
}
class LogInOut extends React.Component{
  constructor(){
    super()
    this.state = {
      inLog: true,
      outLog: false,
    }
  }
  render(){
    let log;
    if(this.state.inLog){
      log = 'IN';
    } else if(this.state.outLog) {
      log = 'OUT';
    } else{
      log = 'where are you?'
    }

    return(
      <div>
        <p>Ivan, now you {log}!</p>
      </div>
    )
  }
}

class Age extends React.Component{
  constructor(){
    super()
    this.state = {
      name: "Ivan",
      age: 18
    }
  }
  render(){
    return(
        <div>
          <p>I know you, you are {this.state.name}, and your age is{this.state.age}!</p>
        </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return(
      <header>
        <p>Welcome, {this.props.username}!</p>
      </header>
    )
  }
}



  class Greeting extends Component {

    render(){
      const date = new Date();
      const hours = date.getHours();
      let timeOfday;

      if(hours < 12) {
        timeOfday = 'morning'
      } else if(hours >= 12 && hours < 17) {
        timeOfday = 'afternoon'
      } else {
        timeOfday = 'night'
      }

      return(
          <h1>Good {timeOfday} sir or madam</h1>
      );
    }
  }

export default MainContent
