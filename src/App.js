
import React,{Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './componnents/layout/Navbar';
import Dashboard from './componnents/dashboard/Dashboard';
import Projectdetails from './componnents/project/Projectdetails';
import Signedin from './componnents/auth/Signedin';
import SignUp from './componnents/auth/SignUp';


class App extends Component{
  render(){
  return (
    <BrowserRouter>

        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path = '/' component = {Dashboard}/>
            <Route path = '/project/:id' component = {Projectdetails}/>
            <Route path = '/signin' component = {Signedin}/>
            <Route path = '/signup' component = {SignUp}/>

          </Switch>
    
        </div>
    

    </BrowserRouter>

  );
  }
}


export default App;
