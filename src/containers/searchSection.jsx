import React from 'react';
import { connect } from 'react-redux';
import { searchItems, toggleLoading } from '../redux/actions/items';

import SearchSection from '../components/searchSection';

const mapStateToProps = state => ({
    token: state.loginReducer.token,
    resultOfSearch: state.reducer.resultOfSearch,
    searchIsLoading: state.reducer.searchIsLoading
  })
  
const mapDispatchToProps = dispatch => ({
    searchItems: (query, token) => dispatch(searchItems(query, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchSection);
