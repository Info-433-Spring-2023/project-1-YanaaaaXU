import React, { useState } from 'react';

export function MiniGame(props) {

    const randomAnimal = useState("")

    const handleClick = (event) => {
        let selectAnimal = props.info[Math.floor(Math.random() * props.info.length)];
        randomAnimal[1](selectAnimal)
    }

    return (
        <>
            <div className="main">
                <section className="introduction">
                    <div className="container">
                    </div>
                </section>
            </div>
            <div className="bodyText">
                <div className="container">
                    <h2> Endangered Animal Facts That May Surprise You</h2>
                </div>

                <p>Click the button below. The numbers of these nearly-extinct animal species will surprise you!</p>


                <div className="container">
                    <div className="vertical-center">
                        <button type="button" onClick={handleClick}>Click Me!</button>
                    </div>
                </div>
                <div className="animalCard">
                        <DisplayFact animal={randomAnimal[0]} />
                </div>


               
            </div>

        </>




    );
}

function DisplayFact(props) {
    console.log(props)
    if (props.animal != "") {
        return (
            <div className='animal-c'>
                <div className='animal-i'>
                    <img src={props.animal.img} alt={props.animal.name}></img>
                    <h2 className="animal-title">{props.animal.name}</h2>
                    <p className="animal-text">There are only {props.animal.count} {props.animal.name + "s"} left in the world!</p>

                </div>
            </div>
        )
    }
}
