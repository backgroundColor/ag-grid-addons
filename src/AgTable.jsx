import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid/dist/styles/ag-grid.css'
import 'ag-grid/dist/styles/theme-fresh.css'
export default class AgTable extends React.Component {
  // constructor () {
  //   super()
  //   this.gridOptions = {
  //     onGridReady: (params) => { console.log(params) }
  //   }
  // }
  componentDidMount () {
    // for (let key in this.gridOptions) {
    //   this.props.gridOptions[key] = this.gridOptions[key]
    // }
    console.log(this.props)
  }
  render () {
    return (
      <div style={{ height: '90%' }}
        className='ag-fresh ag-container'>
        <AgGridReact
          {...this.props}
        />
      </div>
    )
  }
}
