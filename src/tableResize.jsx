
function tableResize () {
  const that = this
  const onSrceenResize = (obj, type, callback) => {
    if (obj === null || typeof (obj) === 'undefined') { return }
    if (obj.addEventListener) {
      obj.addEventListener(type, callback, false)
    } else {
      obj['on' + type] = callback
    }
  }
  const onContainerResize = (callback) => {
    const center = document.querySelector('#center')
    const MutationObserver = window.MutationObserver || window.WebkitMutationObserver ||
      window.MozMutationObserver
    let observer = new MutationObserver(function (mutations) {
      callback()
    })
    const config = {attributes: true, childList: true, characterData: true}
    observer.observe(center, config) // 监听ag-grid内部的center，响应时间最短，不用设置setTimtout
  }

  onSrceenResize (window, 'resize', () => {
    that.api.sizeColumnsToFit()
    // console.log('resize ....')
  })
  onContainerResize(() => { that.api.sizeColumnsToFit() })
}

export default tableResize
