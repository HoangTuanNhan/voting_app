import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList.js';

function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
     return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
