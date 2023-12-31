import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';

export default function Rotas(){
    return (
        <BrowserRouter> 
            <Switch>
                <Route exact path="/" component={Logon} />
                <Route path="/register" component={Register} />
            </Switch> 
        </BrowserRouter>
    );
}