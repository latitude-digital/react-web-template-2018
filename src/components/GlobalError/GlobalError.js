import style from './_GlobalError.module.scss'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import connect from 'utils/route_connect'

import {
  setError,
} from 'state/actions'

import Transition from 'react-transition-group/Transition';

const duration = 200;
const width = 400;

const defaultStyle = {
  transition: `left ${duration}ms ease-in`,
};

const transitionStyles = {
  entering: { left: -width },
  entered:  { left: 0 },
};

class GlobalError extends Component{

  state = {
    show: false,
  };

  constructor(props){
    super(props);
  }

  componentDidMount(){
    if(this.props.error){
      this.setState({ show: true })
    }
  }

  componentWillReceiveProps(next){
    if(next.error){
      this.setState({ show: true });
      return;
    }
    this.setState({ show: false })
  }

  _clearError = () => {
    this.setState({ show: false }, () => {
      setTimeout(() =>{
        this.props.setError('');
      }, duration);
    })
  };

  render(){
    const {
      error,
    } = this.props;

    return(
      <Transition in={this.state.show} timeout={duration}>
        {(state) => (
          <div
            className={style.container}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <div className={style.error}>
              <span className={style.close} onClick={this._clearError}>
                &#10005;
              </span>
              <p>
                {error}
              </p>
            </div>
          </div>
        )}
      </Transition>
    )
  }

}

GlobalError.propTypes = {
  error: PropTypes.string,
  setError: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    error: state.error,
  }),
  {
    setError,
  }
)(GlobalError)