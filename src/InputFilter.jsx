import React from 'react'
import './ag-grid-addons.css'
class InputFilter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.onButtonPressed = this.onButtonPressed.bind(this)
  }

  doesFilterPass (params) {
    let passed = true
    const that = this
    this.state.value.toLowerCase().split(' ').forEach(function (filterWord) {
      const value = that.props.valueGetter(params)
      if (value.toString().toLowerCase().indexOf(filterWord) < 0) {
        passed = false
      }
    })
    return passed
  }

  getModel () {
    return {
      value: this.state.value
    }
  }
  setModel (model) {
    this.setState({
      value: model.value
    })
  }
  // called by agGrid
  isFilterActive () {
    return this.state.value !== '' && this.state.value !== null && this.state.value !== undefined
  }

  onButtonPressed (e) {
    const newState = {value: e.target.value.trim()}
    this.setState(newState, this.props.filterChangedCallback)
  }

  render () {
    return (
      <div className='filter-box'>
        <div className='filter-box-title'>
          <b>{this.props.colDef.headerName}查询</b>
        </div>
        <div className='filter-box-container'>
          <input type='text'
            placeholder={this.props.colDef.headerName}
            value={this.state.value} ref='serchInput'
            onChange={this.onButtonPressed} />
        </div>
      </div>
    )
  }
}

InputFilter.props = {
  filterChangedCallback: Function,
  valueGetter: Function,
  colDef: Object
}
export default InputFilter
