import React from 'react'


class UnreadMassages extends React.Component {
  constructor(){
    super()
    this.state = {
      unread:[
        'call your mom', 'it\'s for you...', 1, 2, 3,3,3,4,5,6,6,67,
      ]
    }
  }
  render(){
    return(
      <div>
      {this.state.unread.length > 0 && <h1>You have {this.state.unread.length} unread massages!</h1>}
      </div>
    )
  }
}

export default UnreadMassages
