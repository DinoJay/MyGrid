import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { range } from 'd3';
import PropTypes from 'prop-types';

// import { ScrollView, ScrollElement } from './ScrollView';
// import cx from './index.scss';

// function getCol(n) {
//   // return  (3 + (-1) ** n - 2 * n)/ 4 * 3;
//   return -3 * (3 + (-1) ** n - 2 * n) / 4;
// }

function getCol(i, n, span) {
  // const a = d3.range(0, n, span);
  // return d3.range(0, n).map(d => a[Math.floor(d / 2)]);
  // return [1, 1, 4, 4, 7, 7, 10, 10, 13, 13, 16, 16, 19, 19, 22, 22];
  const cols = range(1, n * span, span);
  return cols[Math.floor(i / 2)]; // Math.floor(i / 2) + 1;
}

class Grid extends Component {
  static propTypes = {
    children: PropTypes.node,
    height: PropTypes.number,
    clickHandler: PropTypes.function,
    span: PropTypes.number,
    selectedColSpan: PropTypes.number,
    colWidth: PropTypes.number,
    selected: PropTypes.string,
    style: PropTypes.object
  };

  static defaultProps = { selected: null };

  constructor(props) {
    super(props);
    // this.scrollTo = this.scrollTo.bind(this);
  }

  // componentDidUpdate() {
  //   const { children } = this.props;
  //   const selectedIndex = children.findIndex(d => d.props.selected);
  //   if (selectedIndex) this.scrollTo(selectedIndex);
  // }
  //
  // // scrollTo = name => {
  //   this._scroller.scrollTo(name);
  // };

  render() {
    const {
      children,
      selectedColSpan,
      selectedRowSpan,
      colWidth,
      rowHeight,
      cols,
      colSpan,
      rowSpan,
      rows,
      gap,
      style
    } = this.props;

    let gridTemplateColumns = null;
    if (cols !== null && colWidth !== null) {
      gridTemplateColumns = `repeat(${cols}, ${colWidth})`;
    } else if (cols !== null) {
      const columnWidth = (100 - cols * gap) / cols;
      gridTemplateColumns = `repeat(${cols}, ${columnWidth}%)`;
    } else if (colWidth !== null)
      gridTemplateColumns = `repeat(${children.length}, ${colWidth})`;

    let gridTemplateRows = null;
    if (rows && rowHeight) gridTemplateRows = `repeat(${rows}, ${rowHeight})`;
    else if (rows)
      gridTemplateRows = `repeat(${rows}, ${Math.floor(100 / rows)}%)`;
    else if (rowHeight)
      gridTemplateRows = `repeat(${children.length}, ${colWidth})`;
    else gridTemplateRows = null;

    return (
      <div
        style={{
          display: 'grid',
          height: '100%',
          gridTemplateRows,
          gridTemplateColumns,
          gridGap: `${gap}%`,
          ...style
        }}
      >
        {React.Children.map(children, (comp, i) => {
          const col = getCol(i, children.length, colSpan); // Math.floor(i / 2) + 1;
          const { colSpan: cspan, rowSpan: rspan, selected } = comp.props;
          const props = {
            colSpan: cspan || colSpan,
            rowSpan: rspan || colSpan
          };
          return (
            <Item {...props} index={i} col={selected ? col : null}>
              {comp}
            </Item>
          );
        })}
      </div>
    );
  }
}

Grid.defaultProps = {
  data: [],
  id: '0',
  height: 100,
  children: () => <div>test</div>,
  span: 1,
  selectedColSpan: 2,
  selctedRowSpan: 2,
  colWidth: null,
  colHeight: null,
  cols: null,
  rows: null,
  gap: 0,
  style: {}
};

class Item extends Component {
  static propTypes = {
    children: PropTypes.node,
    selected: PropTypes.bool,
    col: PropTypes.number,
    rowSpan: PropTypes.number,
    colSpan: PropTypes.number,
    opacity: PropTypes.number,
    clickHandler: PropTypes.func
  };

  static defaultProps = {
    clickHandler: d => d
  };

  render() {
    const {
      children,
      opacity,
      colSpan,
      rowSpan,
      col,
      // clickHandler,
      selected
    } = this.props;

    return (
      <div
        style={{
          // overflow: 'hidden',
          gridColumn: col ? `${col} / span ${colSpan}` : `span ${colSpan}`,
          gridRowEnd: `span ${rowSpan}`
        }}
      >
        {children}
      </div>
    );
  }
}

Item.defaultProps = {
  clicked: false,
  opacity: 0.56,
  colSpan: 1,
  rowSpan: 1,
  clickHandler: d => d,
  selected: false
};

export default Grid;
