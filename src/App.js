
import React,{Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './componnents/layout/Navbar';
import Dashboard from './componnents/dashboard/Dashboard';
import Projectdetails from './componnents/project/Projectdetails';


class App extends Component{
  render(){
  return (
    <BrowserRouter>

        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path = '/' component = {Dashboard}/>
            <Route path = '/project/:id' component = {Projectdetails}/>

          </Switch>
    
        </div>
    

    </BrowserRouter>

  );
  }
}


export default App;
