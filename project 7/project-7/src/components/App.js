import React from 'react'; //import React library
import { Routes, Route } from 'react-router-dom'
import { Header } from './Header.js';
import { HomePage } from './HomePage.js'
import { About } from './About.js'
import { Footer } from './Footer.js'
import { MiniGame } from "./MiniGame.js"
import {PersonalImpact} from "./PersonalImpact.js"
import {KnowledgeQuiz} from './KnowledgeQuiz.js';



export default function App(props) {

    
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage  counts={props.counts}/>} />
                <Route path="about" element={<About team={props.team} />} />
                <Route path="minigame" element={<MiniGame info={props.info}/>} />
                <Route path="personal-impact" element={<PersonalImpact />} />
                <Route path= "knowledge-quiz" element={<KnowledgeQuiz/>}/>
            </Routes>
            <Footer />
        </>

    );
}