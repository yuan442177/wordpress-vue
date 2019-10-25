export default{
  getErrMsg (error) { // 通过error处理错误码
    if (!error.response) { // 无网络时单独处理
      return {errCode: null, errMsg: '网络不可用，请重试'}
    }
    const errCode = error.response.status // 错误码
    // const errMsg = ERR_CODE_LIST[errCode] // 错误消息
    switch (errCode) {
      case 400:
        error.message = '错误请求'
        break
      case 403:
        error.message = '拒绝访问'
        break
      case 404:
        error.message = '请求错误，没有了更多了'
        break
      case 405:
        error.message = '请求方法不允许'
        break
      case 500:
        error.message = '服务器出错'
        break
      case 502:
        error.message = '网络错误'
        break
      default:
        error.message = `出错了,错误代码${error.response.status}`
    }
    return {errCode: errCode, errMsg: error.message}
  }
}
