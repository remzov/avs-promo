import React, { Component } from 'react';
import './nextBtn.css';

export default class nextBtn extends Component {
  render() {
    const {caption, setReady} = this.props;
    return (
      <button className="nextBtn" type="button" onClick={setReady}>
        {caption}
      </button>
    );
  }
}

