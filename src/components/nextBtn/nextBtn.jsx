import React, { Component } from 'react';
import './nextBtn.css';

export default class nextBtn extends Component {
  constructor(props) {
    super(props);
    this.caption = this.props.caption;
    this.setReady = this.props.setReady;
  }
  render() {
    return (
      <button className="nextBtn" type="button" onClick={this.setReady}>
        {this.caption}
      </button>
    );
  }
}

