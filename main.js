let container_btn= document.querySelector('.container__btn')
let username = document.querySelector('#username')
let email = document.querySelector('#email')
let pass = document.querySelector('#password')
let confirmPass = document.querySelector('#confirm_pass')
let control= document.querySelector('control')
let form = document.querySelector('form')

function showError(input,message){
    let parent = input.parentElement;
    let small = parent.querySelector('small')

    parent.classList.add('error')
    small.innerText=message
}
function showSuccess(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small')

    parent.classList.remove('error')
    small.innerText=''
}

function checkEmptyInvalid(listInput){
    let isEmptyInvalid = false;
    listInput.forEach(input => {
      input.value = input.value.trim();
      
      if(!input.value){
        showError(input,'The input can not be empty')
      }else{
      showSuccess(input)
      }
    });
    return isEmptyInvalid
}

function checkEmail(input){
    regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    input.value = input.value.trim()

    let isEmailInvalid = !regexEmail.test(input.value)

    if(regexEmail.test(input.value)){
        showSuccess(input)
    }else{
        showError(input,'Email Invalid')    
    }
    return isEmailInvalid
}

function checkLengthInvalid(input,min,max){
    input.value=input.value.trim();

    if(input.value.length < min){
        showError(input,`Can not be less than ${min} characters`)
        return true
    }
    if(input.value.length > max){
        showError(input,`Can not be more than ${max} characters`)
        return true
    }
    return false
}

function checkMatchPass(passInput, confirmPassInput){
    if(passInput.value !== confirmPassInput.value){
        showError(confirmPassInput,'Password is not match')
        return true
    }
    return false
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    let isEmptyInvalid = checkEmptyInvalid([email,username,pass,confirmPass])
    let isCheckEmail = checkEmail(email)
    let isCheckLengthUser=checkLengthInvalid(username,3,50)
    let isCheckLengthPass=checkLengthInvalid(pass ,6,16)
    let isCheckMatchPass = checkMatchPass(pass,confirmPass)

    if(isEmptyInvalid || isCheckEmail || isCheckLengthUser || isCheckLengthUser || isCheckLengthPass || isCheckMatchPass){
        //do nothing
    }else{
        //logic call api...
    }
})

