import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Signin from './pages/Signin'
import Signup from './pages/Signup'
import MyTasks from './pages/MyTasks'
import NewTasks from './pages/NewTasks'
import Home from './pages/Home'

function Routes(){
    return (
       <BrowserRouter>
         <Switch>
             <Route path="/" exact component={Signin}/>
             <Route path="/signup" component={Signup}/>
             <Route path="/mytasks" component={MyTasks}/>
             <Route path="/new" component={NewTasks}/>
             <Route path="/home" component={Home}/>
         </Switch>
       </BrowserRouter>
    )
}

export default Routes


