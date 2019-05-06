import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className='title-bar'>
        <h1>{title}</h1>
      </div>
    );
  }
}

const { string } = PropTypes;

TitleBar.propTypes = {
  title: string.isRequired
}

TitleBar.defaultProps = {
  title: 'Default Title!!'
}

