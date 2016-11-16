export default class DataFactory {
  createDatasource (url, pagesize, callback) {
    console.log('agtable data ajax run this...........')
    let datasource = {
      pageSize: pagesize,
      getRows: function (params) {
        // const URL = `${}?size=${pagesize}&page=${params.endRow / pagesize}`
        fetch(URL)
        .then(function (response) {
          if (response.status !== 200) {
            console.error('error')
            return
          }
          return response.json()
        })
        .then(function (json) {
          if (json) {
            return json.body
          }
        })
        .then(function (data) {
          if (data) {
            const rowsThisPage = data.items
            let lastRow = -1
            lastRow = data.pageInfo.total
            callback(data.pageInfo.total, data.pageInfo.pages)
            document.querySelector('#current').onfocus = (e) => {
              const currentVal = e.target.value
              const reg = /^\+?[1-9][0-9]*$/
              e.target.onblur = (e) => {
                if (!reg.test(e.target.value)) {
                  e.target.value = currentVal
                }
              }
            }
            params.successCallback(rowsThisPage, lastRow)
          }
        })
        .catch(function (err) {
          console.error(err)
          params.failCallback()
        })
      }
    }

    return datasource
  }
}
