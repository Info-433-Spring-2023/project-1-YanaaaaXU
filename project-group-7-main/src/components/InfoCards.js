import React from 'react'; //import React library

export function InfoCards(props) {

    let InfoCards = props.info.map((element) => {
        return <InfoCard key={element.name} animal={element} />
    });

    return (
        <section className="animals">

            <div className="container">
                <h2>These animals are critically endangered!!!</h2>
            </div>
            <div className="animal-c">
                {InfoCards}
            </div>

        </section>
    );
}

function InfoCard(props) {
    return (
        <div className="animal-i">
            <img src={props.animal.img} alt={"a picture of a" + props.animal.name} />
            <h3 className="animal-title">{props.animal.name}</h3>
            <p className="animal-text">{"There are only " + props.animal.count + " pandas left in the world!"}</p>
            <a href={"#" + props.animal.name}><button type="button">Learn More</button></a>
        </div>
    )

}

