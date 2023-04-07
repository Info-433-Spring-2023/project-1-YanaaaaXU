import React, { useState } from 'react';
import { Intro } from './Intro.js';
import { Search } from './Search.js';
import { Counter } from "./Counter.js"

export function HomePage(props) {

    let selectCountry = useState("Australia");
    let selectSpecies = useState("Mammals");
    let selectDataType = useState(false);

    function applyFilter(country, specie, data) {
        selectCountry[1](country)
        selectSpecies[1](specie)
        selectDataType[1](data)
    }

    const displayedCounts = props.counts.filter((element) => {
        if (element.country == selectCountry[0] && element.species == selectSpecies[0] && (selectDataType[0] ? element.type.includes("indigenous") : !element.type.includes("indigenous"))) {
            return true
        } else {
            return false
        }
    })


    /*Filtering Options*/
    let cSet = new Set();
    let sSet = new Set();

    props.counts.forEach((currentValue) => {

        cSet.add(currentValue.country)
    })

    props.counts.forEach((currentValue) => {
        sSet.add(currentValue.species)
    })


    return (
        <>

            <Intro />
            <Search applyFilterCallback={applyFilter} countryOptions={Array.from(cSet)} speciesOptions={Array.from(sSet)} />
            <Counter counts={displayedCounts} selectedCountry={selectCountry[0]} selectedSpecie={selectSpecies[0]}/>

        </>
    );
}
