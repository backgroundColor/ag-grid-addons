function copyOrClick (callback) {
  const centerRow = document.querySelector('#centerRow')
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
  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 17) {
      // console.log(that.props)
      that.gridOptions.api.removeEventListener('rowClicked', rowclick)
      listenerState = false
    }
  })
  window.addEventListener('keyup', function (event) {
    that.gridOptions.api.addEventListener('rowClicked', rowclick)
    listenerState = true
  })
  centerRow.addEventListener('mousedown', function (event) {
    let currPointer = getPointXy(event)
    this.onmousemove = function (e) {
      let pointer = getPointXy(e)
      // console.log(pointer)
      if (Math.abs(currPointer.x - pointer.x) > 5 || Math.abs(currPointer.y - pointer.y) > 12) {
        that.gridOptions.api.removeEventListener('rowClicked', rowclick) // 先移除rowclick事件
        console.log('cancel rowclick')
        this.onmousemove = null
        // listenerState = false // 判断滚动的距离是否应该监听rowclick
      }
    }
    // console.log(currPointer)
    this.onmouseup = function (event) {
      this.onmousemove = null
      let movePonter = getPointXy(event)
      // console.log(movePonter)
      if (Math.abs(currPointer.x - movePonter.x) < 5 &&
      Math.abs(currPointer.y - movePonter.y) < 12 && listenerState === true) {
        console.log(1)
        that.gridOptions.api.addEventListener('rowClicked', rowclick)
        listenerState = true
      }
    }
  })
}

export default copyOrClick
