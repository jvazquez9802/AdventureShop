//Dependencies
import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

//Components

import App from './Components/app';
import home from './Components/Home/containers/homeContainer';
import nanatsu from './Components/Nanatsu/containers/nanatsuContainer';
import fate from './Components/Fate/containers/fateContainer';
import kart from './Components/Kart/containers/kartContainer';
import page404 from './Components/Page404/containers/Page404Container';

class AppRoutes extends Component{
    render() {
        return(
            <App>
                <Switch>
                    <Route exact path = '/' component = {home} />
                    <Route exact path = '/Nanatsu' component = {nanatsu} />
                    <Route exact path = '/Fate' component = {fate} />
                    <Route exath path = '/Kart' component = {kart} />
                    <Route component = {page404} />
                </Switch>
            </App>
        );
    }
}
    
export default AppRoutes;
