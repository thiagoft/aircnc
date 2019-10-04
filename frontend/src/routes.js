import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login'; //caso não seja especificado ele utiliza index.js
import Dashboard from './pages/Dashboard';
import New from './pages/New';

//o atributo exact da primeira rota é utilizado para chamar que seja verificado exatamente
//o conteudo da url, no caso "/" pois por default a comparação é feita sobre a clausula de "contem"
//logo todas as rotas conte "/"
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/new" component={New} />
            </Switch>
        </BrowserRouter>
    );
}