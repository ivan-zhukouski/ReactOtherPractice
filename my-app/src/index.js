import React from 'react';
import ReactDOM from 'react-dom';

function UserGreeting (props){
  return <h1>Hallo</h1>;
}

function GuestGreeting (props){
  return <h1>Sign in</h1>;
}

function Greeting (props) {
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting />;
  }
  return <GuestGreeting />;

}


ReactDOM.render(
  <Greeting isLoggedIn={true} />,
  document.getElementById('root')
)
