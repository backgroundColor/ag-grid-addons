function copyOrClick (callback) {
  // const centerRow = document.querySelector('#centerRow')
  // const centerRow = document.body
  const centerRow = document.querySelector('.ag-fresh')
  const that = this
  let rowclick = (params) => {
    callback(params)
  }
  let getPointXy = function (e) {
    e = e || window.event
    let x = e.pageX || (e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft))
    let y = e.pageY || (e.clientY + (document.documentElement.scrollTop || document.body.scrollTop))
    return {'x': x, 'y': y}
  }
  let listenerState = true
  const copyEvent = function (event) {
    let currPointer = getPointXy(event)
    this.onmousemove = function (e) {
      let pointer = getPointXy(e)
      // console.log(pointer)
      if (Math.abs(currPointer.x - pointer.x) > 5 || Math.abs(currPointer.y - pointer.y) > 12) {
        that.gridOptions.api.removeEventListener('rowClicked', rowclick) // 先移除rowclick事件
        console.log('cancel rowclick')
        this.onmousemove = null
        listenerState = false // 判断滚动的距离是否应该监听rowclick
      } else {
        listenerState = true
      }
    }
    this.onmouseup = function (event) {
      this.onmousemove = null
      let movePonter = getPointXy(event)
      if (Math.abs(currPointer.x - movePonter.x) < 5 &&
      Math.abs(currPointer.y - movePonter.y) < 12 && listenerState === true) {
        that.gridOptions.api.addEventListener('rowClicked', rowclick)
        listenerState = true
      } else {
        that.gridOptions.api.removeEventListener('rowClicked', rowclick);
        listenerState = true // 判断滚动的距离是否应该监听rowclick
      }
    }
  }
  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 17 && that.gridOptions.api) {
      that.gridOptions.api.removeEventListener('rowClicked', rowclick)
      centerRow.removeEventListener('mousedown', copyEvent)
    }
  })
  window.addEventListener('keyup', function (event) {
    if (that.gridOptions.api) {
      that.gridOptions.api.addEventListener('rowClicked', rowclick)
      centerRow.addEventListener('mousedown', copyEvent)
    }
  })
  centerRow.addEventListener('mousedown', copyEvent)
}

export default copyOrClick
