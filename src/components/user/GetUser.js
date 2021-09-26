let user =  JSON.parse(localStorage.getItem('registeredUser'))
let name = user.name
let email = user.email
let username = user.username
let password = user.password

export default {
    name,
    email,
    username,
    password
}
