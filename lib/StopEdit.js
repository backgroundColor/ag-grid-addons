"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function StopEdit(params, colKey, value) {
  params.api.startEditingCell({
    rowIndex: params.rowIndex,
    colKey: colKey,
    charPress: value
  });
  params.api.stopEditing();
}

exports.default = StopEdit;