import  React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';
import Greetings from '../../components/greetings/greetings.jsx';
import Test from '../../components/test/test.jsx';
import { setReady } from '../../actions/index';

class App extends Component {
  render() {
    return (
      <div className="app">
         <Greetings setReady={this.props.setReady}/>
         { this.props.userReady ? <Test/> : ''}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userReady: state.userReady
    // userFinished: state.userFinished,
    // points: state.points
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setReady: () => dispatch(setReady())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
