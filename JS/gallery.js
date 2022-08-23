const btns = document.querySelectorAll('.pbtn');
const gmain = document.querySelector('.gallery-main');
const photos = document.querySelectorAll('.photopp');
gmain.addEventListener('click', function(e){
    // console.log(e.target.dataset.id);
    // console.log(e.target);
    const id = e.target.dataset.id;


    if(id){
        btns.forEach(function(f){
            f.classList.remove('active');
            e.target.classList.add('active');
        });
        photos.forEach(function(g){
            g.classList.remove('active');
        });
        const elem =document.getElementById(id);
        elem.classList.add('active');
    }
});