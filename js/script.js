let cross = document.querySelector('.formCross'),
    regist = document.querySelectorAll('.regist'),
    darknessForm = document.querySelector('.darknessForm'),
    body = document.getElementsByTagName('body')[0];

for(let i = 0; i < regist.length; i++) {
    regist[i].addEventListener('click', function() {
        darknessForm.style.display = 'block';
        if (window.matchMedia('(max-width: 680px)').matches) {
            body.style.overflowY = 'hidden';
        } 
    });
}

cross.addEventListener('click', function(){
    darknessForm.style.display = 'none';
    body.style.overflowY = 'auto';
});

// галерея

// let galleryPhoto = document.querySelectorAll('.image'),
//     Search = document.querySelectorAll('.fa-search'),
//     leftAr = document.querySelector('.image .fa-arrow-left'),
//     rightAr = document.querySelector('.image .fa-arrow-right'),
//     imageCross = document.querySelectorAll('.image .fa-times');


// for(let i = 0; i < Search.length; i++) {
//     galleryPhoto[i].classList.remove('galleryPhoto');
//     Search[i].addEventListener('click', function() {
//         galleryPhoto[i].classList.add('galleryPhoto');
//         imageCross[i].style.display = 'block';
//         Search[i].classList.remove('fa-search');
//         body.style.overflowY = 'hidden';
//     });
// }

// for(let i = 0; i < imageCross.length; i++) {
//     imageCross[i].addEventListener('click', function(){
//         galleryPhoto[i].classList.remove('galleryPhoto');
//         Search[i].classList.add('fa-search');
//         imageCross[i].style.display = 'none';
//         leftAr.style.left
//         body.style.overflowY = 'auto';
//     });
// }


//slider 

let galleryPhoto = document.querySelectorAll('.image'),
    leftAr = document.querySelector('.image .fa-arrow-left'),
    rightAr = document.querySelector('.image .fa-arrow-right');

    // function slidePhoto() {
    //     if (galleryPhoto.length + 1 > 3)
    // }
