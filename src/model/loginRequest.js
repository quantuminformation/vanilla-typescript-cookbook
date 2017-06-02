export default function LoginRequest (username = '', password = '') {
  this.username = {
    name: 'username',
    type: 'text',
    placeholder: 'Username..',
    value: username,
    editable: true
  }
  this.password = {
    name: 'password',
    type: 'password',
    placeholder: 'Password..',
    value: password,
    editable: true
  }
}
