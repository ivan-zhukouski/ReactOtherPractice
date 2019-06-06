import React from 'react'
function FormComponent (props){
  return(
    <main>
    <form>
      <input
         placeholder = "First name"
         type="text"
         onChange={props.handleChange}
         name="firstName"
         value = {props.data.firstName}
      />
      <br />
      <input
         placeholder = "Last name"
         type="text"
         onChange={props.handleChange}
         name="lastName"
         value = {props.data.lastName}
      />

      <br />
      <input
         placeholder = "age"
         type="text"
         onChange={props.handleChange}
         name="age"
         value = {props.data.age}
      />
      <br/>
      <label>
        <input
          type="radio"
          name="gender"
          value = {"male"}
          checked = {props.data.gender === "male"}
          onChange={props.handleChange}
        />
        Male
      </label>
      <br/>
      <label>
        <input
          type="radio"
          name="gender"
          value={"female"}
          checked = {props.data.gender === "female"}
          onChange={props.handleChange}
        />
        Female
      </label>
      <br/>
      <label> Your destination:
        <select
          onChange={props.handleChange}
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
        <input type = "checkbox" name= "isVegan" onChange= {props.handleChange} checked = {props.data.isVegan}/>
        Is vegan?
      </label>
      <br/>
      <label>
        <input type = "checkbox" name= "isKosher" onChange= {props.handleChange} checked = {props.data.isKosher}/>
        Is kosher?
      </label>
      <br/>
      <label>
        <input type = "checkbox" name= "isLactoseFree" onChange= {props.handleChange} checked = {props.data.isLactoseFree}/>
        Is lactose Free?
      </label>



    </form>
    <hr/>
    <h1>{props.data.firstName} {props.data.lastName}</h1>
    <h1>Your age is {props.data.age}</h1>
    <h1>Your gender is {props.data.gender}</h1>
    <h1>Your destination is {props.data.destination}</h1>
    <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
    <p>Kosher: {props.data.isKosher ? "Yes" : "No"}</p>
    <p>Lactose free: {props.data.isLactoseFree ? "Yes" : "No"}</p>
    </main>
  )
}
export default FormComponent
