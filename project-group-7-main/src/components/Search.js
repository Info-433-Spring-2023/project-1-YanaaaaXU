import React, { useState } from 'react';

export function Search(props) {
    const [selectCountry, setSelectCountry] = useState("Australia");
    const [selectSpecies, setSelectSpecies] = useState("Mammals");
    const [selectDataType, setSelectDataType] = useState(false);

    const selectCountries = (event) => {
        setSelectCountry(event.target.value);
    }

    const selectASpecie = (event) => {
        setSelectSpecies(event.target.value);
    }

    const selectData = (event) => {
        setSelectDataType(event.target.checked);
    }

    const handleButton = (event) => {
        event.preventDefault();
        props.applyFilterCallback(selectCountry, selectSpecies, selectDataType);
    }

    return (
        <section className="searchSection">
            <h2>Narrow your search results with filters</h2>
            <p>WildLived has a rich database for you to learn about endangered animals. You can create visual images with just a few clicks.</p >
            <p>Have a particular interest? Use the filter below!</p >

            <form>
                <div className="search-container">
                    <div className="search-item">
                        <div className="form">
                            <label htmlFor="country">Select a specific country: </label>
                            <select name="country" id="select_1" onChange={selectCountries} value={selectCountry}>
                                <SearchOptions options={props.countryOptions} />
                            </select>
                        </div>
                    </div>

                    <div className="search-item">
                        <div className="form">
                            <label htmlFor="specie">Select a specific species: </label>
                            <select name="specie" id="select_2" onChange={selectASpecie} value={selectSpecies}>
                                <SearchOptions options={props.speciesOptions} />
                            </select>
                        </div>
                    </div>
                </div>

                <div className="search-box">
                    <div className="form">
                        <input type="checkbox" name="attributes" id="inputCheckBox" onChange={selectData} checked={selectDataType} />
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

export function SearchOptions(props) {
    return props.options.map((element) => {
        return <option key={element} value={element}>{element}</option>
    });
}