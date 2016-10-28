import React from 'react';
import './ag-grid-addons.css';
type Props = {
  total: Number,
  onChange: Function,
  pagesize: Number,
  options: Array
}
export default class pageNumChange extends React.Component {
  props: Props;
  render() {
    return (
      <div className="agtable-pagenum-change">
        <select onChange={this.props.onChange}
          defaultValue={this.props.pagesize}>
          {
            this.props.options.map(num => {
              return <option key={num}>{num}</option>;
            })
          }
        </select>
        条/页  共<span>{this.props.total}</span>条
      </div>
    );
  }
}
