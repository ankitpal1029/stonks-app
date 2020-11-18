import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/alwaysthere/Navbar'
import MemeDetails from './components/memes/MemeDetails';
import SignUp from './components/auth/SignUp'


function App() {
    //to try out
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/meme/:id' component={MemeDetails} />
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/signup' component={SignUp} />
        </Switch>

      </div>
    </BrowserRouter>

  );
}

export default App;
