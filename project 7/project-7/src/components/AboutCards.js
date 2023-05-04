import React from 'react'; //import React library

export function AboutCards(props) {

    let AboutCards = props.info.map((element) => {
        return <AboutCard key={element.name} team={element} />
    });
    return (
        <section className="animals">
            <div className="about-container">
                <h2>Meet our Team: </h2>
            </div>
            <div className="animal-c">
                    {AboutCards}
            </div>
        </section>
    );
}

function AboutCard(props) {
    return (
        <div className="animal-i">
            <img src={props.team.img} alt={"a picture of a" + props.team.name} />
            <h3 className="aboutName">{props.team.name}</h3>
            <p className="animal-text">{"This is " + props.team.name + ' a ' + props.team.year + ",at the University of Washington"}</p>
            <button arial-label="Linkedin button"><a href="https://www.LinkedIn.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></button>
        </div>
    )

}