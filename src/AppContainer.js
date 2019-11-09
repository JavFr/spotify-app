import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getToken } from './redux/actions/login';
import { searchItems } from './redux/actions/items';

import App from './App';

const mapStateToProps = state => ({
    token: state.loginReducer.token,
    resultOfSearch: state.reducer.resultOfSearch
  })
  
const mapDispatchToProps = dispatch => ({
    getToken: () => dispatch(getToken()),
    searchItems: (query, token) => dispatch(searchItems(query, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
