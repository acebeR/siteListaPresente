import React, { Component } from 'react';
import FirebaseService from './services/FirebaseService.js';
import {BrowserRouter} from 'react-router-dom'
import Login from './login/Login';
import Site from './Site'
import PesquisaCasal from './pesquisa/PesquisaCasal'
import Footer from './footer/Footer'

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Site/>
            <Login/>
            <PesquisaCasal/>
            <Footer/>
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
