import React from 'react'


class FirstForm extends React.Component {
  constructor(){
    super()
    this.state = {
      firstName:"",
      lastName:"",
      friendly:false,
      gender: "",
      favColor:""
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
        <br/>
        <label>
          <input
            type="radio"
            name="gender"
            value={"male"}
            checked = {this.state.gender === "male"}
            onChange={this.handleChange}
          />
          Male
        </label>
        <br/>
        <label>
          <input
            type="radio"
            name="gender"
            value={"female"}
            checked = {this.state.gender ==="female"}
            onChange={this.handleChange}
          />
          Female
        </label>
        <br/>
        <label>Favorit color:
          <select
            onChange={this.handleChange}
            name = "favColor">

            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="black">Black</option>
            <option value="pink">Pink</option>
            <option value="purple">Purple</option>
          </select>
        </label>
        <h1>You are a {this.state.gender}</h1>
        <h2>Your favorit color is {this.state.favColor}</h2>
      </form>
    )
  }
}
  export default FirstForm
