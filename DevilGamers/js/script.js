let cross = document.querySelector('.formCross'),
    regist = document.querySelectorAll('.regist'),
    darknessForm = document.querySelector('.darknessForm'),
    body = document.getElementsByTagName('body')[0];

for(let i = 0; i < regist.length; i++){
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
