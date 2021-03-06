let activeArr = []
let memoryData = []
function tagCellRender (params, callback) {
  // console.log(document.getElementById('current').innerHTML)
  // console.log(memoryData)
  // 自定义数组移除元素的方法，元素类型是普通或是数组
  Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
      if (val instanceof Array) {
        if (this[i].toString() == val.toString()) return i
      } else {
        if (this[i] == val) return i
      }
    }
    return -1
  }
  Array.prototype.remove = function(val) {
    var index = this.indexOf(val)
    if (index > -1) {
      this.splice(index, 1)
    }
  }

  if (params.value instanceof Array) {
    const valueArr = params.value
    const tagBody = document.createElement('div')
    const tagClick = (e, i) => {
      if (e.target.className.indexOf('active') === -1) {
        let activeOrder = []
        e.target.className = 'active'
        e.target.style.backgroundColor = '#76c0da'
        e.target.style.color = '#fff'
        // 记录选中的单词，防止重复添加选中的
        if (activeArr.length !== 0) {
          console.log('run this...')
          if (activeArr.join().indexOf(e.target.innerHTML) === -1) {
            activeArr.push(e.target.innerHTML)
          }
        } else {
          activeArr.push(e.target.innerHTML)
        }
        activeOrder.push(params.rowIndex)
        activeOrder.push(i)
        activeOrder.push(parseInt(document.getElementById('current').innerHTML))
        memoryData.push(activeOrder)
      } else {
        let removeOrder = []
        e.target.className = ''
        e.target.style.backgroundColor = '#e3e3e3'
        e.target.style.color = '#666'
        removeOrder.push(params.rowIndex)
        removeOrder.push(i)
        removeOrder.push(parseInt(document.getElementById('current').innerHTML))
        activeArr.remove(e.target.innerHTML)
        memoryData.remove(removeOrder)
      }
      // console.log(memoryData)
      // 执行回调，方便在使用时获取到激活标签的值
      callback(activeArr)
    }
    for (let i = 0, len = valueArr.length; i < len; i++) {
      const tagItem = document.createElement('span')
      tagItem.style.display = 'inline-block'
      tagItem.style.padding = '0px 3px'
      tagItem.style.margin = '2px'
      tagItem.style.color = '#666'
      tagItem.style.textAlign = 'center'
      tagItem.style.borderRadius = '2px'
      tagItem.style.cursor = 'pointer'
      tagItem.style.backgroundColor = '#e3e3e3'
      tagItem.innerHTML = valueArr[i]
      // 记录翻页情况下返回的时候仍然被选中
      if (memoryData.length !== 0) {
        for (let j = 0, len = memoryData.length; j < len; j++) {
          if (params.rowIndex === memoryData[j][0] && i === memoryData[j][1]
              && parseInt(document.getElementById('current').innerHTML) === memoryData[j][2]) {
            tagItem.className = 'active'
            tagItem.style.backgroundColor = '#76c0da'
            tagItem.style.color = '#fff'
          }
        }
      }
      //tag添加ctrl + click事件
      window.addEventListener('keydown', function (e) {
        if (event.keyCode === 17) {
          tagItem.onclick = function (e) {
            tagClick(e, i)
          }
        }
      })
      //移除ctrl + click事件
      window.addEventListener('keyup', function (e) {
        if (event.keyCode === 17) {
          tagItem.onclick = null
        }
      })

      tagBody.appendChild(tagItem)
    }
    return tagBody
  } else {
    return params.value ? params.value : ''
  }
}
tagCellRender.activeData = activeArr

export default tagCellRender
