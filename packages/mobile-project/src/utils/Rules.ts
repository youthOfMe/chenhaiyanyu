const mobileRules = [
  { required: true, message: '请输入手机号' },
  {
    pattern: /^\d{11}$/,
    message: '手机号格式不正确',
  },
]
const passwordRules = [
  { required: true, message: '请输入密码' },
  {
    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/,
    message: '密码需6-18个字符',
  },
]
const usernameRules = [
  { required: true, message: '请输入用户名' },
  {
    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/,
    message: '用户名需6-18个字符',
  },
]
export { mobileRules, passwordRules, usernameRules }
