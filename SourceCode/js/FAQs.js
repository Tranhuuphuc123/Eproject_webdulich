const accordion = document.getElementsByClassName('label');
const content = document.getElementsByClassName('content')
for(let i = 0; i < accordion.length; i++){
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('expand');
    content[i].classList.toggle('expand');
  })
}
