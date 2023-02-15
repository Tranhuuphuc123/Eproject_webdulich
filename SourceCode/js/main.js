

/*==================== HIỆU ỨNG SWIPER kéo ảnh hàng ngang ====================*/
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
    rotate: 10,
    stretch: 10,
    depth: 60,
    modifier: 6,
    slideShadows : true,
    },
    pagination: {
    el: '.swiper-pagination',
    },
});

/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){ 
    if (videoFile.paused){
        // Play video
        videoFile.play()
        // We change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else {
        // Pause video
        videoFile.pause(); 
        // We change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')

    }
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)


/*====================Hiển thị cho nút quay về thẻ nav ( nút mũi tên cúi trang) ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // khi dịch chuyển croll quá 200px nút cropp up sẽ hiện lên
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== hiển thị  chức năng ảnh động khi croll ảnh  ====================*/
// đây là phẩn tùy chỉnh hiệu ứng xuất hiện  kiểu animations hiệu ứng động xuất hiện khi croll ảnh kéo trang
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true, /* chức năng reset lại hiệu ứng croll animation khi rê trang( khóa lại do mất reset liên tục mất time) */
})


sr.reveal(`.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data, 
           .video__description,
           .subscribe__description`,{
    origin: 'left',
})

sr.reveal(`.about__img-overlay, 
           .video__content,
           .subscribe__form`,{
    origin: 'right',
    interval: 100,
})





    