import  React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';
import Greetings from '../../components/greetings/greetings.jsx';
import PickingType from '../../components/pickingType/pickingType.jsx';
import { setReady } from '../../actions/index';

class App extends Component {
  render() {
    return (
      <div className="app">
        {!this.props.userReady ?
        <Greetings setReady={this.props.setReady}/> : ''}
        {this.props.userReady ? 
        <PickingType/> : ''}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userReady: state.userReady
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setReady: () => dispatch(setReady())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
