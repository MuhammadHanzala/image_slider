var index = 1;
imageSlider(index);

function onClickSlide(n){
    imageSlider(index += n);
}

function currentImg(n){
    imageSlider(index = n);
}

function imageSlider(n){
    var slides = document.getElementsByClassName('slides');
    var dots = document.getElementsByClassName('dots');
    if(n > slides.length){
        index = 1;
    }
    if(n < 1){
        index = slides.length;
    }
    for(var i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(var i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
     slides[index - 1].style.display = "block";
    dots[index - 1].className += " active";
}