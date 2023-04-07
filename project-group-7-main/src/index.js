import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App.js';
import './index.css';
import {initializeApp} from "firebase/app";

import GRAPH_DATA from "./Data/graphs.json";
import INFO_DATA from "./Data/infocard.json";
import TEAM_DATA from "./Data/team.json";
import COUNT_DATA from "./Data/counts.json";

const firebaseConfig = {
  apiKey: "AIzaSyAeOO8mCngEvyuPY_ZNxaUqbil10EjyD2o",
  authDomain: "project-group-7-17975.firebaseapp.com",
  databaseURL: "https://project-group-7-17975-default-rtdb.firebaseio.com",
  projectId: "project-group-7-17975",
  storageBucket: "project-group-7-17975.appspot.com",
  messagingSenderId: "363480521052",
  appId: "1:363480521052:web:689cc4c236ac0e4e2e8999",
  measurementId: "G-YK2TKDSQ9Q"
};

const app = initializeApp(firebaseConfig);
//test
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App graphs={GRAPH_DATA} info={INFO_DATA} team={TEAM_DATA} counts={COUNT_DATA}/>
  </BrowserRouter>
);

