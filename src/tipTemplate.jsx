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
  messageBox.style.maxWidth = '120px'
  messageBox.style.marginLeft = '10px'
  messageBox.style.backgroundColor = '#383838'
  messageBox.className = 'tip-message-box'
  messageBox.innerHTML = tips.message
  console.log(tips)
  const addMessageBox = (e) => {
    messageBox.style.left = e.target.getBoundingClientRect().left + 6 + 'px'
    messageBox.style.top = e.target.getBoundingClientRect().top + 6 + 'px'
    document.body.appendChild(messageBox)
    // console.log(e.target.getClientRects())
  }
  const moveMessageBox = () => {
    console.log('leave....')
    document.body.removeChild(messageBox)
  }
  const tip = document.createElement('span')
  const tipsIcon = {
    success: '<svg class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7152" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14"><defs><style type="text/css"><![CDATA[]]></style></defs><path d="M512 65.984C266.08 65.984 65.984 266.08 65.984 512c0 245.952 200.064 446.016 446.016 446.016 245.952 0 446.016-200.064 446.016-446.016C958.016 266.08 757.952 65.984 512 65.984zM727.232 438.432l-256.224 259.008c-0.064 0.064-0.192 0.096-0.256 0.192-0.096 0.064-0.096 0.192-0.192 0.256-2.048 1.984-4.576 3.2-6.944 4.544-1.184 0.672-2.144 1.696-3.392 2.176-3.84 1.536-7.904 2.336-11.968 2.336-4.096 0-8.224-0.8-12.096-2.4-1.28-0.544-2.304-1.632-3.52-2.304-2.368-1.344-4.832-2.528-6.88-4.544-0.064-0.064-0.096-0.192-0.16-0.256-0.064-0.096-0.192-0.096-0.256-0.192l-126.016-129.504c-12.32-12.672-12.032-32.928 0.64-45.248 12.672-12.288 32.896-12.064 45.248 0.64l103.264 106.112 233.28-235.84c12.416-12.576 32.704-12.704 45.248-0.256C739.52 405.6 739.648 425.856 727.232 438.432z" p-id="7153" fill="#666"></path></svg>',
    fail: '<svg class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7375" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14"><defs><style type="text/css"><![CDATA[]]></style></defs><path d="M512 64C264.992 64 64 264.96 64 512s200.96 448 448 448c247.008 0 448-200.96 448-448S759.04 64 512 64zM694.752 649.984c12.48 12.544 12.448 32.768-0.064 45.248-6.24 6.208-14.4 9.344-22.592 9.344-8.224 0-16.416-3.136-22.656-9.408l-137.6-138.016-138.048 136.576c-6.24 6.144-14.368 9.248-22.496 9.248-8.256 0-16.48-3.168-22.752-9.504-12.416-12.576-12.32-32.8 0.256-45.248l137.888-136.384-137.376-137.824c-12.48-12.512-12.448-32.768 0.064-45.248 12.512-12.512 32.736-12.448 45.248 0.064l137.568 137.984 138.048-136.576c12.544-12.448 32.832-12.32 45.248 0.256 12.448 12.576 12.32 32.832-0.256 45.248l-137.888 136.384L694.752 649.984z" p-id="7376" fill="#666"></path></svg>',
    error: '<svg class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14152" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14"><defs><style type="text/css"><![CDATA[]]></style></defs><path d="M512 39.384615c-259.938462 0-472.615385 212.676923-472.615385 472.615385s212.676923 472.615385 472.615385 472.615385 472.615385-212.676923 472.615385-472.615385-212.676923-472.615385-472.615385-472.615385zm234.338462 506.092308c-1.969231 13.784615-13.784615 25.6-29.538462 25.6l-409.6 0c-15.753846 0-27.569231-9.846154-29.538462-25.6-1.969231-23.630769-1.969231-45.292308 0-66.953846 1.969231-13.784615 13.784615-25.6 29.538462-25.6l409.6 0c15.753846 0 27.569231 11.815385 29.538462 25.6 1.969231 23.630769 1.969231 45.292308 0 66.953846z" p-id="14153" fill="#666"></path></svg>',
    warning: '<svg class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7646" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14"><defs><style type="text/css"><![CDATA[]]></style></defs><path d="M942.656 769.376 602.112 159.584c-22.144-39.712-55.104-62.496-90.304-62.496-35.232 0-68.16 22.784-90.368 62.528L81.312 769.344c-22.016 39.456-24.256 79.456-6.112 110.4C93.344 910.624 129.664 928 174.88 928l674.24 0c45.184 0 81.536-17.376 99.648-48.256C966.944 848.8 964.672 808.832 942.656 769.376zM480 320c0-17.664 14.336-32 32-32s32 14.336 32 32l0 288c0 17.696-14.336 32-32 32s-32-14.304-32-32L480 320zM512 832.128c-26.528 0-48-21.504-48-48s21.472-48 48-48 48 21.504 48 48S538.528 832.128 512 832.128z" p-id="7647" fill="#666"></path></svg>',
    info: '<svg class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7917" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14"><defs><style type="text/css"><![CDATA[]]></style></defs><path d="M512 65.984C266.048 65.984 65.984 266.048 65.984 512S266.048 958.016 512 958.016 958.016 757.952 958.016 512 757.952 65.984 512 65.984zM544 736c0 17.696-14.304 32-32 32s-32-14.304-32-32l0-288c0-17.696 14.304-32 32-32s32 14.304 32 32L544 736zM512 352c-26.496 0-48-21.536-48-48C464 277.472 485.504 256 512 256s48 21.472 48 48C560 330.464 538.496 352 512 352z" p-id="7918" fill="#666"></path></svg>'
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
  valueContainer.innerHTML = tips.value + '&nbsp;&nbsp;'
  valueContainer.appendChild(tip)
  return valueContainer
}

export default tipTemplate
