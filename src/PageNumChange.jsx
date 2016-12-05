import React from 'react'
type Props = {
    pagesize: Array,
    onChange: Function,
    total: Number
}
export default class PageNumChange extends React.Component {
  props: Props
  constructor (props) {
    super(props)
    this.pageSizeChange = this.pageSizeChange.bind(this)
  }
  pageSizeChange (e) {
    this.props.onChange(e.target.value)
  }
  render () {
    const selectItem = (() => {
      return this.props.pagesize && this.props.pagesize instanceof Array && this.props.pagesize.length !== 0
        ? this.props.pagesize[0]
          : ''
    })()
    return (
      <div className='page-size-container'>
        <div className='ag-page-size'>
          <select id="pageNumChange" defaultValue={selectItem} onChange={this.pageSizeChange}>
            {
              this.props.pagesize && this.props.pagesize instanceof Array && this.props.pagesize.length !== 0
                ? this.props.pagesize.sort().map((item, index) => {
                    return <option key={`size${index}`} value={item}>{item}</option>
                  })
                  : ''

            }
          </select>
          <label className="select-arrow" id="forChangeBox">
            <svg width="22px" height="20px" version="1.1" fill="#656D78">
              <path d="M7 8 L 10 13 L 13 8 Z"></path>
            </svg>
          </label>
        </div>
        条/页
        <span>
          &nbsp;&nbsp;共{this.props.total}条
        </span>
      </div>
    )
  }
}
