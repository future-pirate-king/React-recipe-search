import React, { Component } from 'react';
import './loader.css';

const style = {
  width: 30,
  height: 30,
  boxSizing: 'border-box',
  borderRadius: '50%',
  borderTop: '3px solid purple',
  borderRight: '3px solid purple',
  borderLeft: '3px solid transparent',
  borderBottom: '3px solid transparent',
  animation: 'spinner 500ms linear infinite',
  margin: '0 auto',
};

export const LoadHtml = () => {
  return (
    <div>
      <div style={style} className="loader mt-2 mb-2">{null}</div>
      <h5 style={{ textAlign: 'center' }}>Please Wait...</h5>
    </div>
  );
};

// <div style={style} className="loader">{null}</div>

const Loader = (WrappedComponent) => {
  return class Loader extends Component {
    render() {
      return (
        this.props.recipes.length === 0 ? <LoadHtml /> : <WrappedComponent {...this.props} />
      );
    }
  };
};

export default Loader;
