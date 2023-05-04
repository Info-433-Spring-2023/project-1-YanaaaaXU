import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react"


export function Header() {
    const [smallNav, setSmallNav] = useState(false);

    const toggleSmallNav = () => {
        //take current value of responsive and flip it
        setSmallNav(prev => !prev);
    }




    return (
        <section className='header'>
            <header>
                <div className="container">
                    <img src="/img/smallnav.png" alt="Navigation Bar" className='smallnav' onClick={toggleSmallNav}></img>
                    <h1 className="animate-content">Wildlived</h1>
                </div>
            </header>

            <SmallNavBars smallNav={smallNav} toggleSmallNav={toggleSmallNav}/>

            <nav className="big">
                <div className='container'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/minigame" >Mini Game</Link></li>
                        <li><Link to="/personal-impact" >Personal Impact</Link></li>
                    </ul>
                </div>
            </nav>

        </section>
    )
}

function SmallNavBars(props) {
    if (props.smallNav==true) {
        return (
            <nav className='small'>
                <ul>
                    <li onClick={props.toggleSmallNav}><Link to="/" >Home</Link></li>
                    <li onClick={props.toggleSmallNav}><Link to="/minigame" >Mini Game</Link></li>
                    <li onClick={props.toggleSmallNav}><Link to="/personal-impact" >Personal Impact</Link></li>
                </ul>
            </nav>

        )
    }
}