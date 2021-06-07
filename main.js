//------------------------------------------------------------------------------ Variables del buscador
const searchForm = document.getElementById('searchForm');
const searchInputs = document.querySelectorAll('#searchForm input');

//------------------------------------------------------------------------------ Variables del LogIn
const logInForm = document.getElementById('logInForm');
const logInInputs = document.querySelectorAll('#logInForm input');
 
//------------------------------------------------------------------------------ Variables del Registre
const registerForm = document.getElementById('registerForm');
const registerInputs = document.querySelectorAll('#registerForm input');
const registerProvinceSelect = document.querySelectorAll('#registerForm select');

//------------------------------------------------------------------------------- Expresiones
const validations = {
    search : /^[a-zA-Z0-9\_\-\s]{3,150}$/ ,
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ ,
    pass: /[a-zA-Z0-9\_\-]{8,}/ ,
    province: /[a-zA-Z]/
}

//------------------------------------------------------------------------------- Validación del Search
function validationSearch(e){ 

    if(validations.search.test(e.target.value)){
        document.getElementById('searchInput').classList.remove('is-invalid');
        document.getElementById('searchInput').classList.add('is-valid');
    }else{
        document.getElementById('searchInput').classList.add('is-invalid');
        document.getElementById('searchInput').classList.remove('is-valid');
    }
}

searchInputs.forEach((input)=>{
    input.addEventListener('keyup', validationSearch );
    input.addEventListener('blur', validationSearch );
})

searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
})

//--------------------------------------------------------------------------------- Validación del LogIn
function validationLogIn(e){
    switch(e.target.name){

        case 'emailLogIn':
            if(validations.mail.test(e.target.value)){
                document.getElementById('emailLogIn').classList.remove('is-invalid');
                document.getElementById('emailLogIn').classList.add('is-valid');
            }else{
                document.getElementById('emailLogIn').classList.add('is-invalid');
                document.getElementById('emailLogIn').classList.remove('is-valid');
            }
            break;
        case 'passLogIn':
            if(validations.pass.test(e.target.value)){
                document.getElementById('passLogIn').classList.remove('is-invalid');
                document.getElementById('passLogIn').classList.add('is-valid');
            }else{
                document.getElementById('passLogIn').classList.add('is-invalid');
                document.getElementById('passLogIn').classList.remove('is-valid');
            }
            break;
    }
}

logInInputs.forEach((input)=>{
    input.addEventListener('keyup', validationLogIn );
    input.addEventListener('blur', validationLogIn );
})

logInForm.addEventListener('submit', (e)=>{
    e.preventDefault();
})

//--------------------------------------------------------------------------------- Validación del Register
function validationRegister(e){
    switch(e.target.name){

        case 'emailRegister':
            if(validations.mail.test(e.target.value)){
                document.getElementById('emailRegister').classList.remove('is-invalid');
                document.getElementById('emailRegister').classList.add('is-valid');
            }else{
                document.getElementById('emailRegister').classList.add('is-invalid');
                document.getElementById('emailRegister').classList.remove('is-valid');
            }
            break;
        case 'passRegister':
            if(validations.pass.test(e.target.value)){
                document.getElementById('passRegister').classList.remove('is-invalid');
                document.getElementById('passRegister').classList.add('is-valid');
            }else{
                document.getElementById('passRegister').classList.add('is-invalid');
                document.getElementById('passRegister').classList.remove('is-valid');
            }
            break;
        case 'confirmPassRegister':
            validationRegisterConfirmPass();
            break;
        case 'provinciaSelection':
            if(validations.province.test(e.target.value)){
                document.getElementById('provinciaSelection').classList.remove('is-invalid');
                document.getElementById('provinciaSelection').classList.add('is-valid');
            }else{
                document.getElementById('provinciaSelection').classList.add('is-invalid');
                document.getElementById('provinciaSelection').classList.remove('is-valid');
            }
            break;
    }
}

//------------------------------------------------> validacion confirmacion mail registro
function validationRegisterConfirmPass(){
    const pass1 =  document.getElementById('passRegister');
    const pass2 =  document.getElementById('confirmPassRegister');

    if( pass1.value !== pass2.value ){
        document.getElementById('confirmPassRegister').classList.add('is-invalid');
        document.getElementById('confirmPassRegister').classList.remove('is-valid');
    }else{
        document.getElementById('confirmPassRegister').classList.remove('is-invalid');
        document.getElementById('confirmPassRegister').classList.add('is-valid');
    }
};




registerInputs.forEach((input)=>{
    input.addEventListener('keyup', validationRegister );
    input.addEventListener('blur', validationRegister );
})

registerProvinceSelect.forEach((input)=>{
    input.addEventListener('click', validationRegister )
})

registerForm.addEventListener('submit', (e)=>{
    e.preventDefault();
})

 
