import React, { Component } from 'react';
import * as d3 from 'd3';

import Grid from '../src';
// import Comp from './components/Comp';
// import Comp2 from './components/Comp2';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    const { data } = this.state;
    return (
      <div style={{ border: '1px green solid', width: '100%' }}>
        <Grid cols={4} colSpan={2} rows={20} gap={0}>
          {data.map(d => (
            <div style={{ border: 'blue 1px solid' }}>
              <button
                onClick={() =>
                  this.setState(oldState => ({
                    data: d3.range(0, oldState.data.length + 1)
                  }))
                }
              >
                {d}
              </button>
            </div>
          ))}
        </Grid>
      </div>
    );
  }
}

App.defaultProps = { data: d3.range(0, 10) };

export default App;
