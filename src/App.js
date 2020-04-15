
import React,{Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './componnents/layout/Navbar';
import Dashboard from './componnents/dashboard/Dashboard';
import Projectdetails from './componnents/project/Projectdetails';
import Signin from './componnents/auth/Signin';
import SignUp from './componnents/auth/SignUp';
import CreateProject from './componnents/project/CreateProject';


class App extends Component{
  render(){
  return (
    <BrowserRouter>

        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path = '/' component = {Dashboard}/>
            <Route path = '/project/:id' component = {Projectdetails}/>
            <Route path = '/signin' component = {Signin}/>
            <Route path = '/signup' component = {SignUp}/>
            <Route path = '/create-project' component = {CreateProject}/>

          </Switch>
    
        </div>
    

    </BrowserRouter>

  );
  }
}


export default App;
