import React, {Component} from 'react'


class MainContent extends React.Component {
  render(){
    return(
       <main>
         <Header username="Ivan"/>
         <Greeting/>
         <Age />
       </main>
    );
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
