import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import React, { useState } from 'react'; 

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload. Cool huh?
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const Button = styled.button`
  background-color: black;
  color: white;
  font: helvetica;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
`;

function MainView(props){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Sensor Glass.
        </p>
        <Button onClick = {props.addView}>Start</Button>
        <a
          className="App-link"
          href="https://github.com/brendon-z/sensor-glass"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github 😎
        </a>
      </header>
    </div>
  )
}

const ComparisonView = (props) => {
  return (
    <div>
      <h1>{"Blah"}</h1>
    </div>
  );
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {started: false};
  }

  addView = () => {
    this.setState({
      started: true
    })
  }

  
  render() {
    if (this.state.started === false) {
      return (
        <div>
          <MainView addView = {this.addView}/>
        </div>
      );
    } else {
      return <ComparisonView/>
    }
  }
}

export default App;
