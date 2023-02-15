
/* Portfolio part */
let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for(let i = 0; i < list.length; i++){
  list[i].addEventListener('click', function(){
    for(let j = 0; j < list.length; j++){
      list[j].classList.remove('focus');
    }
    this.classList.add('focus');
    let dataFilter = this.getAttribute('data-filter');

    for(let k = 0; k < itemBox.length; k++){
      itemBox[k].classList.remove('active');
      itemBox[k].classList.add('hide');

      if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
        itemBox[k].classList.remove('hide');
        itemBox[k].classList.add('active');
      }
    }
  })
}

/* Image model part */
var modal = document.getElementsByClassName('modal');
var img = document.getElementsByClassName('myImg');
var myModelImg = document.getElementsByClassName("myModelImg");
var captionText = document.getElementsByClassName("caption");
var captionInfo = document.getElementsByClassName("inFo");
for(let i = 0; i < modal.length; i++){
  img[i].addEventListener('click', function(){
    modal[i].style.display = "block";
    myModelImg[i].src = img[i].src;
    captionText[i].innerHTML = captionInfo[i].innerHTML;
    document.body.style.overflow = "hidden";
  })
}

var span = document.getElementsByClassName("close");
for(let i = 0; i < span.length; i++){
  span[i].addEventListener('click', function(){
    modal[i].style.display = "none";
    document.body.style.overflow = "visible";
  })
}


/* next + prev */
/* still get bug when you choose a place instead of all and click next or prev at the last and first picture, I known what's the problem but idk how to fix it */
var next = document.getElementsByClassName("next");
var prev = document.getElementsByClassName("prev");
const allSection = document.getElementById("All");
console.log(allSection.classList.contains("focus"));

if(allSection.classList.contains("focus") == true){
  for(let i = 0; i < next.length; i++){
    next[i].addEventListener('click',function(){
      if(i == next.length - 1){
        modal[i].style.display = "none";
        document.body.style.overflow = "visible";
        modal[0].style.display = "block";
        myModelImg[0].src = img[0].src;
        captionText[0].innerHTML = captionInfo[0].innerHTML;
        document.body.style.overflow = "hidden";
      } else{
        modal[i].style.display = "none";
        document.body.style.overflow = "visible";
        modal[i+1].style.display = "block";
        myModelImg[i+1].src = img[i+1].src;
        captionText[i+1].innerHTML = captionInfo[i+1].innerHTML;
        document.body.style.overflow = "hidden";
      }
    })


    prev[i].addEventListener('click',function(){
      if(i == 0){
        modal[i].style.display = "none";
        document.body.style.overflow = "visible";
        modal[prev.length - 1].style.display = "block";
        myModelImg[prev.length - 1].src = img[prev.length - 1].src;
        captionText[prev.length - 1].innerHTML = captionInfo[prev.length - 1].innerHTML;
        document.body.style.overflow = "hidden";
      } else{
        modal[i].style.display = "none";
        document.body.style.overflow = "visible";
        modal[i-1].style.display = "block";
        myModelImg[i-1].src = img[i-1].src;
        captionText[i-1].innerHTML = captionInfo[i-1].innerHTML;
        document.body.style.overflow = "hidden";
      }
    })
  }
}
