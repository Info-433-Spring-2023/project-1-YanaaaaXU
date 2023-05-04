import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Search } from './components/Search.js';

describe('Search', () => {

//applyFilterCallback
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

  test('renders the correct number of search items', () => {
    const countryOptions = ['Australia', 'Canada', 'USA'];
    const speciesOptions = ['Mammals', 'Reptiles', 'Birds'];
    render(<Search countryOptions={countryOptions} speciesOptions={speciesOptions} />);
    const searchItems = screen.getAllByRole('combobox');
    expect(searchItems).toHaveLength(2);
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

  
  test('selectDataType updates isIndigenous state correctly when checkbox is checked', () => {
    const selectDataType = jest.fn();
    render(<input type="checkbox" onChange={event => selectDataType(event.target.checked)} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(selectDataType).toHaveBeenCalledWith(true);
  });

  test('selectDataType updates isIndigenous state correctly when checkbox is unchecked', () => {
    const selectDataType = jest.fn();
    render(<input type="checkbox" onChange={event => selectDataType(event.target.checked)} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    fireEvent.click(checkbox);
    expect(selectDataType).toHaveBeenCalledWith(false);
  });

//


});