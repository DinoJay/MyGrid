import React, { Component } from 'react';
import * as d3 from 'd3';

import Grid from '../src';
// import Comp from './components/Comp';
// import Comp2 from './components/Comp2';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props, selected: null };
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  updData() {
    this.setState(oldState => ({
      data: d3.range(0, oldState.data.length + 1)
    }));
  }
  extData(i) {
    console.log('extData');
    this.setState(({ selected }) => {
      console.log('selected', selected);
      return {
        selected: selected === null ? i : null
      };
    });
  }

  render() {
    const { data, selected } = this.state;
    return (
      <div
        style={{ border: '1px green solid', width: '100%', height: '2000px' }}
      >
        <Grid cols={1} rows={data.length * 3} gap={0}>
          {data.map((d, i) => (
            <div
              onClick={() => this.extData(i)}
              style={{
                height: '100%',
                width: '100%',
                border: 'blue 1px solid'
              }}
              selected={selected === i}
              rowSpan={selected === i ? 12 : 2}
            >
              {i}
            </div>
          ))}
        </Grid>
      </div>
    );
  }
}

App.defaultProps = { data: d3.range(0, 20) };

export default App;
