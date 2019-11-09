import React from 'react';

import SearchBar from '../components/searchBar';
import SearchList from '../components/searchList';
import SearchSection from '../components/searchSection';
import SearchOptions from '../components/searchOptions';



export default {
    title: 'Search Bar'
};

export const searchBar = () => <SearchBar isLoading={false}/>;

export const searchBarWithLoading = () => <SearchBar isLoading={true}/>;

export const searchList = () => <SearchList resultOfSearch={[{name: 'Item 1'}, {name: 'item2'}]} />;

export const searchSection = () => <SearchSection items={[{name: 'Item 1'}, {name: 'item2'}]} />

export const searchOptions = () => <SearchOptions />