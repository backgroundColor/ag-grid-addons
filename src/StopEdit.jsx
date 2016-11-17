function StopEdit (params, colKey, value) {
  params.api.startEditingCell({
    rowIndex: params.rowIndex,
    colKey,
    charPress: value
  })
  params.api.stopEditing()

}

export default StopEdit
