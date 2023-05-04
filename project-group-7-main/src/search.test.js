import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Search, SearchOptions } from './components/Search';

describe("handleButton", () => {
  test("renders a button with text 'Go!'", () => {
    const applyFilterCallbackMock = jest.fn();
    render(
      <Search
        applyFilterCallback={applyFilterCallbackMock}
        countryOptions={["Australia", "USA"]}
        speciesOptions={["Mammals", "Birds"]}
      />
    );
  
    const goButton = screen.getByRole("button", { name: "Go!" });
    expect(goButton).toBeInTheDocument();
  });
  
  test("calls applyFilterCallback with correct arguments", () => {
    const applyFilterCallbackMock = jest.fn();
      render(
        <Search
          applyFilterCallback={applyFilterCallbackMock}
          countryOptions={["Australia", "USA"]}
          speciesOptions={["Mammals", "Birds"]}
        />
      );
    fireEvent.click(screen.getByRole("button"));

    expect(applyFilterCallbackMock).toHaveBeenCalledWith(
      "Australia",
      "Mammals",
      false
    );
  });

  test('handleButton calls applyFilterCallback with the correct state', () => {
    const applyFilterCallback = jest.fn();
    const countryOptions = ['Australia', 'Canada', 'USA'];
    const speciesOptions = ['Mammals', 'Reptiles', 'Birds'];
  
    render(
      <Search
        applyFilterCallback={applyFilterCallback}
        countryOptions={countryOptions}
        speciesOptions={speciesOptions}
      />,
    );
  
    const goButton = screen.getByRole('button', { name: /Go!/i });
  
    fireEvent.click(goButton);
  
    expect(applyFilterCallback).toHaveBeenCalledWith('Australia', 'Mammals', false);
  });
});

describe('SearchOptions', () => {
  test('renders all options passed in as props', () => {
    const options = ['Australia', 'USA', 'India'];
    render(
      <div>
        <label htmlFor="search-select">Select an option:</label>
        <select id="search-select">
          <SearchOptions options={options} />
        </select>
      </div>
    );
    const selectOptionLabel = screen.getByLabelText('Select an option:');
    expect(selectOptionLabel).toBeInTheDocument();
    
    options.forEach((option) => {
      const selectOption = screen.getByText(option);
      expect(selectOption).toBeInTheDocument();
    });
  });

  test('renders no options when empty array is passed as props', () => {
    const options = [];
    render(
      <div>
        <label htmlFor="search-select">Select an option:</label>
        <select id="search-select">
          <SearchOptions options={options} />
        </select>
      </div>
    );
    const selectOptionLabel = screen.getByLabelText('Select an option:');
    expect(selectOptionLabel).toBeInTheDocument();
    
    const selectOptions = screen.queryAllByRole('option');
    expect(selectOptions.length).toBe(0);
  });

});

describe("select data type checkbox", () => {
  test("updates the checkbox when clicked", () => {
    const applyFilterCallbackMock = jest.fn();
    render(
      <Search
        applyFilterCallback={applyFilterCallbackMock}
        countryOptions={["Australia", "USA"]}
        speciesOptions={["Mammals", "Birds"]}
      />
    );
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
  
    expect(checkbox.checked).toBe(true);
  });
  
  test("checkbox is not checked by default", () => {
    render(
      <Search
        applyFilterCallback={() => {}}
        countryOptions={["Australia", "USA"]}
        speciesOptions={["Mammals", "Birds"]}
      />
    );
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });
});

describe("select country input", () => {
  test("updates the selected country when select input value changes", () => {
    const applyFilterCallbackMock = jest.fn();
    const { container } = render(
      <Search
        applyFilterCallback={applyFilterCallbackMock}
        countryOptions={["Australia", "USA"]}
        speciesOptions={["Mammals", "Birds"]}
      />
    );
    const countrySelect = container.querySelector("#select_1");
    fireEvent.change(countrySelect, { target: { value: "USA" } });

    expect(countrySelect.value).toBe("USA");
  });

  test('selectCountries updates selectCountry state correctly', () => {
    const selectCountry = jest.fn();
    const event = { target: { value: 'Canada' } };
    render(
      <select onChange={event => selectCountry(event.target.value)} value="Australia">
        <option value="Australia">Australia</option>
        <option value="Canada">Canada</option>
        <option value="USA">USA</option>
      </select>
    );
    fireEvent.change(screen.getByRole('combobox'), event);
    console.log(selectCountry.mock.calls); // output the number of times `selectCountry` has been called and with what arguments
    console.log(selectCountry.mock.calls[0][0]); // output the first argument of the first call to `selectCountry`
    expect(selectCountry).toHaveBeenCalledWith('Canada');
  });

  test('selectCountry updates the state of the country select correctly', () => {
    const { container } = render(
      <Search
        applyFilterCallback={() => {}}
        countryOptions={['Australia', 'Canada', 'USA']}
        speciesOptions={['Mammals', 'Reptiles', 'Birds']}
      />,
    );
    
    const countrySelect = container.querySelector('#select_1');
    
    fireEvent.change(countrySelect, { target: { value: 'Canada' } });
    
    expect(countrySelect.value).toBe('Canada');
  });
  
});

describe("select species input", () => {
  test("updates the selected species when select input value changes", () => {
    const applyFilterCallbackMock = jest.fn();
    const { container } = render(
      <Search
        applyFilterCallback={applyFilterCallbackMock}
        countryOptions={["Australia", "USA"]}
        speciesOptions={["Mammals", "Birds"]}
      />
    );
    const speciesSelect = container.querySelector("#select_2");
    fireEvent.change(speciesSelect, { target: { value: "Birds" } });

    expect(speciesSelect.value).toBe("Birds");
  });

  test('selectSpecies updates the state of the species select correctly', () => {
    const { container } = render(
      <Search
        applyFilterCallback={() => {}}
        countryOptions={['Australia', 'Canada', 'USA']}
        speciesOptions={['Mammals', 'Reptiles', 'Birds']}
      />,
    );
    
    const speciesSelect = container.querySelector('#select_2');
    
    fireEvent.change(speciesSelect, { target: { value: 'Reptiles' } });
    
    expect(speciesSelect.value).toBe('Reptiles');
  });
});



