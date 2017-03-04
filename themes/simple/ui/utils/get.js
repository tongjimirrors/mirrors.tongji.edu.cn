import ajax from './ajax';

export default function get(url, qs = {}, dataType = 'json') {
  return ajax({
    url,
    data: qs,
    method: 'get',
  }, dataType);
}
