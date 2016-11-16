import moment from 'moment'
export default function timeFormat (params) {
  return params.value ? moment(params.value).format('YYYY-MM-DD HH:mm:ss') : params.value
}
