//import React from 'react';
import React, { Component } from 'react';
import './App.css';

import tasksList from './sample/tasks.json';

import Tasks from './components/Tasks';

class App extends Component {

  state = {
    tasksList: tasksList
  }

  render() {
    return (
      <div>
        <Tasks tasksList={this.state.tasksList} />
      </div>
    )
  }
}

export default App;
