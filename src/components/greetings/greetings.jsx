import React, { Component } from 'react';
import './greetings.css';
import NextBtn from '../nextBtn/nextBtn.jsx';

export default class Greetings extends Component {
  constructor(props) {
    super(props);
    this.setReady = this.props.setReady;
  }
  render() {
    return (
      <div className="greetings">
        <div className="greetings__title">Приветствуем!</div>
        <div className="greetings__text">
          В этом приложении мы поможем вам выбрать услугу...  
        </div>
        <NextBtn caption="Поехали!" setReady={this.setReady}/>
      </div>
    );
  }
}

