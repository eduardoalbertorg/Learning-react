import React from 'react';
import './App.css';

/* function HelloWorld(props) {
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.myText}
    </div>
  );
} */

class HelloWorld extends React.Component {
  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.myText}
          <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
      );
    } else {
      return (
        <h1>
          There are no elements
          <button onClick={this.toggleShow}>
            Toggle Show
          </button>
        </h1>
      )
    }
  }
}

// Arrow function
/*
const App = () => <div>This is my component: <HelloWorld/></div>
*/

// Through a class
/*
class App extends React.Component {
  render() {
    return <div>This is my component <HelloWorld/></div>
  }
}
*/

// App through regular function
function App() {
  return (
    <div>
      This is my component: 
      <HelloWorld myText="Hello Edu" subtitle="lorem ipsum"/>
      <HelloWorld myText="Holi" subtitle="asdadsa"/>
      <HelloWorld myText="Hola dijo Lola" subtitle="soy el 3ero"/>
    </div>
  );
}

export default App;
