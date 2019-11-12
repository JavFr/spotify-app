import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getToken, retrieveUserData } from './redux/actions/login';
import { searchItems } from './redux/actions/items';

import App from './App';

const mapStateToProps = state => ({
    token: state.loginReducer.token,
    resultOfSearch: state.reducer.resultOfSearch,
    userId: state.loginReducer.userId
  })
  
const mapDispatchToProps = dispatch => ({
    getToken: () => dispatch(getToken()),
    searchItems: (query, token) => dispatch(searchItems(query, token)),
    getUserData: (token) => dispatch(retrieveUserData(token)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
