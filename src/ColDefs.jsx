export default class ColDefs {
  createColDefs (props) {
    let colsHeader = []
    if (props) {
      props.map(col => {
        colsHeader.push(col)
      })
      return colsHeader
    }
  }
}
