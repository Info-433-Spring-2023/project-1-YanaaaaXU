import React, { useState } from 'react';


export function Search(props) {

    let selectCountry = useState("Australia");
    let selectSpecies = useState("Mammals");
    let selectDataType = useState(false);

    const selectCountries = (event) => {
        selectCountry[1](event.target.value)
    }

    const selectASpecie = (event) => {
        selectSpecies[1](event.target.value)
    }

    const selectData = (event) => {
        selectDataType[1](event.target.checked)
    }


    const handleButton = (event) => {
        event.preventDefault();
        props.applyFilterCallback(selectCountry[0], selectSpecies[0], selectDataType[0])
    }

    return (
        <section className="searchSection">
            <h2>Narrow your search results with filters</h2>
            <p>WildLived has an rich database for you to learn about endangered animals. You can create visual images with just a few clicks.</p>
            <p>Have a particular interest? Use the filter below!</p>

            
            <form>
                <div className="search-container">


                    <div className="search-item">
                        <div className="form">
                            <label htmlFor="country">Select a specific country: </label>
                            <select name="country" id="select_1" onChange={selectCountries} value={selectCountry[0]}>
                                <SearchOptions options={props.countryOptions} />
                            </select>
                        </div>
                    </div>



                    <div className="search-item">
                        <div className="form">
                            <label htmlFor="specie">Select a specific specie: </label>
                            <select name="specie" id="select_2" onChange={selectASpecie} value={selectSpecies[0]}>
                                <SearchOptions options={props.speciesOptions} />


                            </select>
                        </div>
                    </div>

                </div>

                <div className="search-box">
                    <div className="form">
                        <input type="checkbox" name="attributes" id="inputCheckBox" onChange={selectData} checked={selectDataType[0]} />
                        <label htmlFor="attributes">Only indigenous data </label>
                    </div>
                </div>

                <div className="search-box">
                    <div className="form">
                        <button arial-label="go button" onClick={handleButton}>Go! </button>
                    </div>
                </div>
            </form>
        </section>

    );
}

function SearchOptions(props) {
    return props.options.map((element) => {
        return <option key={element} value={element}>{element}</option>
    })
}


