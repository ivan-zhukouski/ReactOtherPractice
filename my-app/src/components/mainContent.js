import React, {Component} from 'react'


class MainContent extends React.Component {
  render(){
    return(
       <main>
         <Header username="Ivan"/>
         <Greeting/>
       </main>
    );
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
