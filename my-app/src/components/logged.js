import React from 'react'

class LoggedInOrOut extends React.Component {
  constructor(){
    super()
    this.state = {
      loggedIn: false
    }
    this.handleClick = this.handleClick.bind(this)
  };

  handleClick(){
    this.setState(prevState=>{
      return({
        loggedIn: !prevState.loggedIn
      })
    })
  }

  render(){
    let buttonText = this.state.loggedIn ? "log out": "log in";
    let displayText = this.state.loggedIn ? "Now you are IN" : "Now you are OUT"


    return(

      <div>
        <button onClick = {this.handleClick}>{buttonText}</button>
        <p>{displayText}</p>
      </div>
    )
  }
}

export default LoggedInOrOut
