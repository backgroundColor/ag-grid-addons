"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function EditCell(params, colKey) {
  params.api.startEditingCell({
    rowIndex: params.rowIndex,
    colKey: colKey
  });
  var preValue = params.api.getValue(colKey, params);
  return preValue;
}

exports.default = EditCell;

// controllContent (params) {
//   const controllTemp = document.createElement('span')
//   const controllBtn = document.createElement('a')
//   const cancelBtn = document.createElement('a')
//   controllBtn.href = 'javascript:;'
//   controllBtn.className = classes['systemview-container-grid-link']
//   controllBtn.innerHTML = '修改'
//
//   cancelBtn.setAttribute('id', 'cancel')
//   cancelBtn.href = 'javascript:;'
//   cancelBtn.className = classes['systemview-container-grid-link']
//   cancelBtn.innerHTML = '取消'
//
//   let preValue
//   controllTemp.onclick = (e) => {
//     switch (e.target.innerHTML) {
//       case '修改':
//         e.target.innerHTML = '保存'
//         controllTemp.appendChild(cancelBtn)
//         params.api.setFocusedCell(0, 'value')
//         params.api.startEditingCell({
//           rowIndex: params.rowIndex,
//           colKey: 'value'
//         })
//         preValue = params.api.getValue('value', params)
//         break
//       case '保存':
//         // console.log(`a: ${preValue}`)
//         let value, name, description, json
//         e.target.innerHTML = '修改'
//         controllTemp.removeChild(cancelBtn)
//         params.api.stopEditing()
//         name = params.api.getValue('name', params)
//         description = params.api.getValue('description', params)
//         value = params.api.getValue('value', params)
//         // console.log(`b: ${value}`)
//         json = {
//           name,
//           current: {
//             value,
//             description
//           }
//         }
//         this.saveEdit(json, () => {
//           params.api.startEditingCell({
//             rowIndex: params.rowIndex,
//             colKey: 'value',
//             charPress: preValue
//           })
//           params.api.stopEditing()
//         })
//         break
//       case '取消':
//         params.api.startEditingCell({
//           rowIndex: params.rowIndex,
//           colKey: 'value',
//           charPress: preValue
//         })
//         params.api.stopEditing()
//         controllBtn.innerHTML = '修改'
//         controllTemp.removeChild(cancelBtn)
//         break
//       default:
//         return
//     }
//   }
//   controllTemp.appendChild(controllBtn)
//   return !params.value ? controllTemp : '只读'
// }
//
// saveEdit (json, failCallback) {
//   fetch(`${__BASE_URL__}systemConfs/${json.name}`, {
//     method: 'PUT',
//     headers: {
//       'Accept': 'application/json, text/plain,*/*',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(json.current)
//   })
//   .then(function (response) {
//     if (response.status !== 200) {
//       console.error(response)
//     }
//     return response.json()
//   })
//   .then(function (json) {
//     if (json.code === 0) {
//       message.success('保存成功')
//     } else {
//       message.error(`保存失败，${json.message}`, 3)
//       failCallback()
//     }
//     console.log(json)
//   })
// }