let elem = document.getElementById('wrapper'); // получить элемент      
elem.style.background = 'lightblue'; // сделать его фон красным



// function  clickMe(){
// const inputValueNameInput = NameInput.value
// const inputValuesurNameInput = surNameInput.value
// const inputValueEmailInput = emailInput.value
// const inputValuecontactsInput = contactsInput.value
//     if (NameInput.value=='' | surNameInput.value=='' | contactsInput.value == '' |  emailInput.value == ''  ){
//         alert ('Проверьте анкету, Вы пропустили поле для заполнения')
//     }
//     else  {
//             alert('Добро пожаловать' +',' + NameInput.value +'!' )
//     }
// }

function  clickMe(){
    const NameInput = document.getElementById('Name1');
    const surNameInput = document.getElementById('surName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const contactsInput = document.getElementById('contacts');
    const photoInput = document.getElementById('photo')

document.getElementById("errorMessage").innerHTML = "";

if (NameInput.value=='' | surNameInput.value=='' | contactsInput.value == '' |  emailInput.value == '' |  passwordInput.value == '' ){
    document.getElementById("errorMessage")
    .innerHTML+="Пропущено поле для заполнения<br>";
}
else  if (photoInput.value==''){
    document.getElementById("errorMessage")
    .innerHTML+="Вы не добавили фото профиля<br>";
}

else  if (passwordInput.value.length <= 8){
    document.getElementById("errorMessage")
    .innerHTML += "Ваш пароль слишком короткий<br>";
} 

else  {
                alert('Добро пожаловать' +',' + NameInput.value +'!' )
        }
}