// import Grid from './dist';
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import { AppContainer } from 'react-hot-loader';
//
// import App from './src/App';
//
// const render = (Component) => {
//   ReactDOM.render(
//     <AppContainer>
//       <Component />
//     </AppContainer>,
//     document.getElementById('app')
//   );
// };
//
// console.log('module', module === true);
//
// render(App);
// if (module.hot) {
//   console.log('hot');
//   module.hot.accept('./src/App', () => {
//     render(App);
//   });
// }
// export default Grid;

module.exports = require('./dist/index.js');

