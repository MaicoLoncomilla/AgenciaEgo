import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Modelos from './components/body/models/Modelos';
import ModelDetails from './components/body/modelDetails/ModelDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/AgenciaEgo/" render={() => (
          <>
          <Route path="/" component={Header}/>
          <Route exact path="/AgenciaEgo/" component={Modelos}/>
          <Route exact path="/AgenciaEgo/detalles/:id" component={ModelDetails}/>
          <Route path="/" component={Footer}/>
          </>
        )}/>
      </Switch>
    </div>
  );
}

export default App;
