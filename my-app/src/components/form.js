import React from 'react'


class FirstForm extends React.Component {
  constructor(){
    super()
    this.state = {
      firstName:"",
      lastName:"",
      age:"",
      gender: "",
      destination:"",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
  const {name, value, type, checked,} = event.target;
  type === "checkbox" ? this.setState({[name]: checked}): this.setState({[name]: value})

  }

  render(){
    return(
      <main>
      <form>
        <input
           placeholder = "First name"
           type="text"
           onChange={this.handleChange}
           name="firstName"
           value = {this.state.firstName}
        />
        <br />
        <input
           placeholder = "Last name"
           type="text"
           onChange={this.handleChange}
           name="lastName"
           value = {this.state.lastName}
        />

        <br />
        <input
           placeholder = "age"
           type="text"
           onChange={this.handleChange}
           name="age"
           value = {this.state.age}
        />
        <br/>
        <label>
          <input
            type="radio"
            name="gender"
            value = {"male"}
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
            checked = {this.state.gender === "female"}
            onChange={this.handleChange}
          />
          Female
        </label>
        <br/>
        <label> Your destination:
          <select
            onChange={this.handleChange}
            name = "destination">

            <option value="">--Choose please the country--</option>
            <option value="Germany">Germany</option>
            <option value="USA">USA</option>
            <option value="Australia">Australia</option>
            <option value="Belarus">Belarus</option>
            <option value="Norway">Norway</option>
            <option value="Russia">Russia</option>
          </select>
        </label>
        <br />
        <label>
          <input type = "checkbox" name= "isVegan" onChange= {this.handleChange} checked = {this.state.isVegan}/>
          Is vegan?
        </label>
        <br/>
        <label>
          <input type = "checkbox" name= "isKosher" onChange= {this.handleChange} checked = {this.state.isKosher}/>
          Is kosher?
        </label>
        <br/>
        <label>
          <input type = "checkbox" name= "isLactoseFree" onChange= {this.handleChange} checked = {this.state.isLactoseFree}/>
          Is lactose Free?
        </label>



      </form>
      <hr/>
      <h1>{this.state.firstName} {this.state.lastName}</h1>
      <h1>Your age is {this.state.age}</h1>
      <h1>Your gender is {this.state.gender}</h1>
      <h1>Your destination is {this.state.destination}</h1>
      <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
      <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
      <p>Lactose free: {this.state.isLactoseFree ? "Yes" : "No"}</p>
      </main>
    )
  }
}
  export default FirstForm
