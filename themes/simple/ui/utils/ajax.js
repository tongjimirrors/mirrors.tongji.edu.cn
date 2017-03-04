export default async function ajax(options, dataType = 'json') {
  try {
    const data = await $.ajax({
      dataType,
      ...options,
    });
    return data;
  } catch (resp) {
    if (resp.status === 0) {
      throw new Error('Connection failed');
    }
    if (resp.responseJSON) {
      throw new Error(resp.responseJSON.err);
    }
    throw new Error(resp.statusText);
  }
}
