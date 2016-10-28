import React from 'react';
import './ag-grid-addons.css';
type Props = {
  total: Number
}
export default class TopChangePage extends React.Component {
  props: Props;
  state = {
    currentNum: 1
  }
  render() {
    return (
      <div className="ag-table-top-page-change">
        <button ref="preBtn">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </button>
          {this.state.currentNum}/{
            this.props.total
              ? this.props.total
                : '...'
          }
        <button ref="nextBtn">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}
