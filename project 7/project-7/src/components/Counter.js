import React from 'react'; //import React library

export function Counter(props) {

    let InfoCards = props.counts.map((element) => {
            return <InfoCard key={element.type} data={element} />

    });

    return (
        <section className="Info">
            <h2>2021 {props.selectedSpecie} Data for {props.selectedCountry}</h2>
            <div className="infoRow">
                {InfoCards}
            </div>
        </section>
    );
}

function InfoCard(props) {

    return (
        <div className='infoCard'>
            <h3>{props.data.value}</h3>
            <p>{props.data.type}</p>
        </div>
    )

}

