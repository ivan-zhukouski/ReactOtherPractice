import React from 'react'


class FirstForm extends React.Component {
  constructor(){
    super()
    this.state = {
      firstName:"",
      lastName:"",
      friendly:false
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    const {name, value, type, checked} = event.target;
    type ==="checkbox" ? this.setState({ [name]:checked}) : this.setState({[name]:value})

  }
  render(){
    return(
      <form>
        <input
           type="text"
           onChange={this.handleChange}
           name="firstName"
           value = {this.state.firstName}
        />
        <br />
        <input
           type="text"
           onChange={this.handleChange}
           name="lastName"
           value = {this.state.lastName}
        />
        <h2>{this.state.firstName} {this.state.lastName}</h2>
        <br />
        <textarea
          type= "text"
          onChange={this.handleChange}
          value = {"Something"}
        />
        <br/>
        <label>
          <input
            type="checkbox"
            name="friendly"
            checked = {this.state.friendly}
            onChange={this.handleChange}
          />
          Is friendly?
        </label>
      </form>
    )
  }
}
  export default FirstForm
