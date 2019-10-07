import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Landing from './Pages/Landing';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
function App() {
  return (
    <HashRouter basename='/'>
      <div>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/Projects' component={Projects}/>
          <Route exact path='/Skills' component={Skills}/>

        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
