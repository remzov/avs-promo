import  React, { Component } from 'react';
import './pickingType.css';
import NextBtn from '../nextBtn/nextBtn.jsx';
import ProjectType from '../projectType/projectType.jsx';
import developingImg from '../../assets/harold-1.jpg';
import redesignImg from '../../assets/harold-4.gif';
import promotionImg from '../../assets/harold-3.jpg';

export default class pickingType extends Component {
  render() {
    return (
      <div className="picking-type">
        <div className="section-desc">
          Выберите, что надо!
        </div>
        <div className="picking-type__container">
          <div>
            <ProjectType type="developing" title="Разработка" image={developingImg}/>
          </div>
          <div>
            <ProjectType type="redesign" title="Редизайн" image={redesignImg}/>
          </div>
          <div>
            <ProjectType type="promotion" title="Продвижение" image={promotionImg}/>
          </div>
        </div>
        <NextBtn caption="Далее"/>
      </div>
    );
  }
}