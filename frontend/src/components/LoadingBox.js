import React from 'react';
import { BallBeat } from 'react-pure-loaders';
 
class LoadingBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div>
        <BallBeat
          color={'#73d9bc'}
          loading={this.state.loading}
        />
      </div>
    )
  }
}

export default LoadingBox