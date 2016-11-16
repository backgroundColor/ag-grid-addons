import React from 'react'

export default class PageNumChange extends React.Component {

  constructor () {
    super()
    this.pageSizeChange = this.pageSizeChange.bind(this)
  }
  pageSizeChange (e) {
    this.props.onChange(e.target.value)
  }
  render () {
    const selectItem = this.props.pagesize[0]
    return (
      <div className='page-size-container'>
        <select defaultValue={selectItem} onChange={this.pageSizeChange}>
          {
            this.props.pagesize.sort().map((item, index) => {
              return <option key={`size${index}`} value={item}>{item}</option>
            })
          }
        </select>
        条/页
        <span>
          &nbsp;&nbsp;共{this.props.total}条
        </span>
      </div>
    )
  }
}
PageNumChange.propTypes = {
    pagesize: React.PropTypes.array,
    onChange: React.PropTypes.func,
    total: React.PropTypes.number
}
