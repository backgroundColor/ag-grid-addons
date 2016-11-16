import React from 'react'
// import TopChangePage from '../lib/TopPageChange.js'
import AgTable from '../lib/AgTable.js'
// import ColDefs from '../lib/ColDefs.js'
export default class App extends React.Component {

  render () {
    const colDefs = [{
      headerName: '序号', width: 40, cellRenderer: function (params) {
        return params.node.id + 1
      }},
      {
        headerName: 'test1', field: 'test1'
      },
      {
        headerName: 'test2', field: 'test2'
      }
    ]
    const gridOptions = {
      rowSelection: 'single'
      // rowModelType: 'pagination',
      // rowStyle: {'font-size': '12px'},
      // localeText: {
      //   page: '',
      //   more: '...',
      //   to: '',
      //   of: '/',
      //   next: '>',
      //   last: '>>',
      //   first: '<<',
      //   previous: '<',
      //   loadingOoo: '数据加载中...',
      //   noRowsToShow: '暂无数据'
      // }
    }

    const rowdata = [{
      test1: '123',
      test2: '456'
    }, {
      test1: '789',
      test2: '098'
    }]
    return (
      <div style={{ height: '600px', width: '800px' }}>
        <AgTable
          gridOptions={gridOptions}
          columnDefs={colDefs}
          rowData={rowdata}
          enableColResize='true'
          enableSorting='true'
          rowHeight='34'
          headerHeight='28'
          rowBuffer='50'
          debug='false'
          />
      </div>
    )
  }
}
