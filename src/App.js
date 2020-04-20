import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Projects from "./components/Projects/Projects";
import Project from "./components/Projects/Project";

function App() {
  return (
    <div className="container app">
      <Route exact path="/" component={Projects} />
      <Route path="/:id" component={Project} />
    </div>
  );
}

export default App;
