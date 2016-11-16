function tipTemplate (params, callback) {
  // console.log(params)
  const tips = callback(params)
  const valueContainer = document.createElement('span')
  const gridBody = document.getElementById('borderLayout_eGridPanel')
  const messageBox = document.createElement('span')
  messageBox.style.position = 'absolute'
  messageBox.style.font = '300 12px Open Sans,sans-serif'
  messageBox.style.color = '#eee'
  messageBox.style.padding = '5px 10px'
  messageBox.style.textAlign = 'center'
  messageBox.style.borderRadius = '3px'
  messageBox.style.display = 'inline-block'
  messageBox.style.minHeight = '10px'
  messageBox.style.minWidth = '20px'
  messageBox.style.maxWidth = '100px'
  messageBox.style.marginLeft = '10px'
  messageBox.style.backgroundColor = '#383838'
  messageBox.className = 'tip-message-box'
  messageBox.innerHTML = tips.message
  // console.log(tips)
  const addMessageBox = (e) => {
    messageBox.style.left = e.target.getBoundingClientRect().left + 6 + 'px'
    messageBox.style.top = e.target.getBoundingClientRect().top + 6 + 'px'
    // gridBody.appendChild(messageBox)
    // document.body
    document.body.appendChild(messageBox)
    // console.log(e.target.getClientRects())
    // console.log(e.target.getBoundingClientRect())
  }
  const moveMessageBox = () => {
    console.log('leave....')
    document.body.removeChild(messageBox)
    // gridBody.removeChild(messageBox)
  }
  const tip = document.createElement('span')
  const tipsIcon = {
    success: '<svg class="icon" style="fill: #666" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1857" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><style type="text/css"><![CDATA[]]></style></defs><path d="M511.955996 127.668705c-212.016454 0-383.891013 171.870416-383.891013 383.880017 0 212.007555 171.87456 383.880017 383.891013 383.880017 212.02464 0 383.90227-171.872462 383.90227-383.880017C895.858266 299.53912 723.98166 127.668705 511.955996 127.668705zM697.731731 408.725892 468.554735 650.647757c-5.097302 5.379521-11.893364 7.866155-18.564577 7.468089-6.767408 0.36839-13.654548-2.006703-18.821438-7.181563L326.31432 545.983999c-9.652229-9.654894-9.652229-25.317619 0-34.980699 9.652229-9.661034 25.301284-9.661034 34.948397 0l87.688742 87.764879 214.402904-226.329748c9.489517-10.026354 24.879665-10.026354 34.377368 0C707.221247 382.456598 707.221247 398.701584 697.731731 408.725892z" p-id="1858"></path></svg>',
    fail: '<svg class="icon" style="fill: #666" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5261" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12"><defs><style type="text/css"><![CDATA[]]></style></defs><path d="M512 1023.995679C229.23137 1023.995679 0.00216 794.765389 0.00216 512 0.00216 229.22921 229.23137 0 512 0 794.76755 0 1023.99676 229.22921 1023.99676 512 1023.99676 794.765389 794.76755 1023.995679 512 1023.995679ZM750.624478 311.004122 713.993949 274.362792 512.513078 475.89119 311.010603 274.405998 274.369273 311.047329 475.876068 512.535761 274.42004 714.039316 311.050569 750.677406 512.513078 549.168451 714.083603 750.720613 750.724934 714.083603 549.149008 512.52388 750.624478 311.004122Z" p-id="5262"></path></svg>',
    error: '<svg class="icon" style="fill: #666" viewBox="0 0 1152 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3520" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><style type="text/css"><![CDATA[]]></style></defs><path d="M64 944l512-896 512 896-1024 0zM576 832c19.2 0 35.2-16 35.2-38.4 0-19.2-16-38.4-35.2-38.4s-35.2 16-35.2 38.4 16 38.4 35.2 38.4zM611.2 345.6c0-19.2-16-38.4-35.2-38.4s-35.2 16-35.2 38.4l0 297.6c0 19.2 16 38.4 35.2 38.4s35.2-16 35.2-38.4l0-297.6z" p-id="3521"></path></svg>',
    warning: '<svg class="icon" style="fill: #666" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4301" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14"><defs><style type="text/css"><![CDATA[]]></style></defs><path d="M511.999 95.003c-230.524 0-418.076 187.552-418.075 418.077 0 230.527 187.552 418.077 418.075 418.077s418.077-187.55 418.077-418.077c0-230.525-187.552-418.077-418.077-418.077zM512 722.12c-28.86 0-52.26-23.399-52.26-52.263 0-28.858 23.399-52.257 52.26-52.257s52.26 23.399 52.26 52.257c0 28.863-23.399 52.263-52.26 52.263zM564.26 513.078c0 28.86-23.399 52.26-52.26 52.26s-52.26-23.399-52.26-52.26l0-156.775c0-28.86 23.399-52.26 52.26-52.26s52.26 23.399 52.26 52.26l0 156.775z" p-id="4302"></path></svg>'
  }
  tip.style.display = 'inline-block'
  tip.style.position = 'relative'
  tip.style.margin = '0px 2px'
  tip.style.verticalAlign = 'sub'
  tip.innerHTML = tipsIcon[tips.type]
  tip.addEventListener('mouseenter', function (e) {
    addMessageBox(e)
  })
  tip.addEventListener('mouseleave', function (e) {
    moveMessageBox()
  })
  tip.removeEventListener('mouseleave', function (e) {
    addMessageBox(e)
  })
  valueContainer.innerHTML = params.value
  valueContainer.appendChild(tip)
  return valueContainer
}

export default tipTemplate
