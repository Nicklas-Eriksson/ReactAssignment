import React from 'react'
import HomePage from '../../view/app/App'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import LoginPage from '../../view/login/login/LoginView'
import LoginHandler from '../../view/login/login/LoginHandler'
import RegisterView from '../../view/login/register/RegisterView'
import ProfilePage from '../../view/profile/ProfilePage'

function Navigation() {
    return (
        <div>            
            <Router>        
                <Switch>
                {/* exact path */}
                    <Route exact path={RoutingPath.home} component={HomePage} />

                    <Route exact path={RoutingPath.loginhandler} component={LoginHandler} />

                    <Route exact path={RoutingPath.login} component={LoginPage} />

                    <Route exact path={RoutingPath.register} component={RegisterView} />

                    <Route exact path={RoutingPath.profile} component={ProfilePage} />

                {/* path */}
                {/* Keep in the bottom!*/}
                    <Route path={RoutingPath.home2} component={HomePage} />                    
                </Switch>
            </Router>            
        </div>
    )
}

export default Navigation
