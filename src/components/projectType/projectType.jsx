import  React, { Component } from 'react';
import './projectType.css';

export default class projectType extends Component {
  render() {
    const {type, title, image} = this.props;
    return (
      <div className="project-type">
        <input class="project-type__radio" id={type} type="radio" name="project-type" value={type}/>
        <label class="project-type__label" for={type}>
          <div className="project-type__image-container">
            <img className="project-type__image" src={image} alt={`${title} AVSWeb`}/>
          </div>
          <div className="project-type__title">
            {title}
          </div>
        </label>
      </div>
    );
  }
}