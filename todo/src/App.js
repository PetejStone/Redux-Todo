import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import {Route} from 'react-router-dom';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={(props) =>  <Todo {...props} />} />
      <Route render={() => <Form />} />
    </div>
  );
}

export default App;
