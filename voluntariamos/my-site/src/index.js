import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import Sobre from './Sobre/Sobre'

import Eventos from './Eventos/Ativos/Ativos'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cabecalho from './Componentes/Navbar/Navbar'

function App() {
    return (
        <div>
            <Cabecalho/>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/Sobre' exact component={Sobre} />
                    {/* <Route path='/Assine' exact component={Assine} /> */}
                    <Route path='/Eventos' exact component={Eventos} />
                </Switch>
        
        </div>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app-voluntariamos')
)