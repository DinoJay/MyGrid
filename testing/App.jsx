import React from 'react';
import * as d3 from 'd3';

import Grid from '../src';
// import Comp from './components/Comp';
// import Comp2 from './components/Comp2';

export default () => (
  <div style={{ border: '1px green solid', width: '100%' }}>
    <Grid cols={3} colSpan={2} rows={20} gap={0}>
      {d3
        .range(0, 10)
        .map(d => <div style={{ border: 'blue 1px solid' }}>{d}</div>)}
    </Grid>
  </div>
);
