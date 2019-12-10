import React from 'react';
import 'bootstrap/scss/bootstrap-grid.scss';
import './App.css';

import { HackerControl } from "./pages/HackerControl/HackerControl";
import axios from "axios";

function App() {
    axios('https://jsonblob.com/api/jsonBlob/41233357-17a5-11ea-9c04-0b73e70fa0e6', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: {
            "title": "María Ramajo e Irene Pinar se hicieron con el oro",
            "description": "El lunes finalizó en Hípica Rancho Alegre el Campeonato de España de Concurso Completo Alevín e Infantil. María Ramajo e Irene Pinar se hicieron con el oro",
            "date": "05/12/2019",
            "img": "https://cdn.zeplin.io/5818c5d58b33db103f6a78f6/assets/B800EB17-996C-4FF0-AD67-DC47B4B9E197.png"
        },
    })
        .then((response) => {
            console.log('##ABEL## >>  >>  ', response);
        });
    return (
        <div className="container-fluid">
            <HackerControl/>
        </div>
    );
}

export default App;
