var inputValue = document.getElementsByClassName('inputEl');
let phoneInput = document.getElementById('phoneInput');
let emailInput = document.getElementById('emailInput');
let emailPattern = /^$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(?:[a-zA-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)$/
function Check(){
  /* email check */
  if(emailInput.value != "" && emailPattern.test(emailInput.value) == false){
    document.getElementById('emailInvalid').style.opacity = 1;
    event.preventDefault();
  } else{
    document.getElementById('emailInvalid').style.opacity = 0;
  }

  /* phone number check(just simple check) */
  if(isNaN(phoneInput.value) == true){
    document.getElementById('phoneInvalid').style.opacity = 1;
    event.preventDefault();
  } else{
    document.getElementById('phoneInvalid').style.opacity = 0;
  }

  /* check blank value */
  for(let i = 0; inputValue.length; i++){
    if(inputValue[i].value == ""){
      inputValue[i].placeholder = "Please fill in the infomation here";
      event.preventDefault();
    }
  }

}
