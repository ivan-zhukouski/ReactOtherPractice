import React from 'react';
import ReactDOM from 'react-dom';


function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}

function App() {
  return(
    <div>
      <Welcome name='Ivan'/>
      <Welcome name='Ivan'/>
      <Welcome name='Ivan'/>
    </div>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
