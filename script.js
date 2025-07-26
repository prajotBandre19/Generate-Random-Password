
function passwordGenerator(){
    let passvalue ='0123456789@#$%&*^_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    console.log(passvalue.length)
    let password=''
    for(let i=0;i<10;i++){
    password += passvalue[Math.floor(Math.random()*70)]
}
return password
}
// console.log(passwordGenerator())
let button = document.querySelector('button')
let input = document.querySelector('input')

button.addEventListener('click',function(){
    let generatePassword = passwordGenerator()
    input.value = generatePassword
})


function copypassword(){
    input.select();
    document.execCommand('copy')

}