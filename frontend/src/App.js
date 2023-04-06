import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import React, { useState } from 'react';
import axios from 'axios';

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
      <p>{props.state.data}</p>
    </div>
  )
}

class FormatForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', width: 0, height: 0};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:5000/format/add', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Format name:
          <input name="name" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          Format width:
          <input name="width" type="number" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          Format height:
          <input name="height" type="number" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const ComparisonView = (props) => {
  const format = JSON.parse(props.format);
  return (
    <div className="App">
      <header className="App-header">
        {Object.entries(format).map(([key, value]) =>
              <p>{key} : {value}</p>
        )}
      </header>
      <div>
        <FormatForm/>
      </div>
    </div>
  );
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {started: false, data: null, url: 'http://localhost:5000/', postUrl: '', postData: null};
  }

  componentDidMount() {
    this.callBackend();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.url !== this.state.url) {
      this.callBackend();
    }
  }

  addView = () => {
    this.setState({
      started: true,
      url: 'http://localhost:5000/format/view/0'
    });
  }

  callBackend = () => {
    fetch(this.state.url)
      .then(res => res.text())
      .then(res => this.setState({ data: res }))
      .catch(err => console.error(err));
  }

  postBackend = () => {
    fetch(this.state.postUrl, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(this.state.postData)
    })
  }

  render() {
    if (this.state.started === false) {
      return (
        <div>
          <MainView 
            addView = {this.addView}
            state = {this.state} />
        </div>
      );
    } else {
      return (
      <ComparisonView
        format = {this.state.data}/>
      );
    }
  }
}

export default App;
