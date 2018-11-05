document.addEventListener('DOMContentLoaded', function(){


//Rozwijane menu


//kiedy kursor najeżdża na ten element
let showList = document.querySelector(".mainLi:nth-of-type(1)");
//console.log(showList);

//ten element (klasa) znika
let noShowList = document.querySelector(".noShow");
//console.log(noShowList);

//po najechaniu na showList usuwana jest klasa noShow
showList.addEventListener('mouseover', function() {
    noShowList.classList.remove('noShow');
});

//kiedy kursor opuszcza showList klasa automatycznie wraca swoje miejsce
showList.addEventListener('mouseout', function() {
    noShowList.classList.add('noShow');
});





//Slider 

//przyciski lewy i prawy w sekcji Slider

let leftBtn = document.querySelector('#slider .col1 p:nth-of-type(1)');
//console.log(leftBtn);
let rightBtn = document.querySelector('#slider .col1:last-of-type p');
//console.log(rightBtn);

//lista obrazów - znajduje pierwszy element li (black chair)
let chairImgClass = document.querySelectorAll('.chairImageClass li');
//console.log(chairImgClass);

//zakładam zmienną o wartości 0
let index = 0;


//dane zdjęcie ma mieć dodaną klasę "visible"
chairImgClass[index].classList.add('visible');


//po naciśnięciu prawego przycisku usuwana jest klasa "visible"
rightBtn.addEventListener('click', function(){
    chairImgClass[index].classList.remove('visible');
    index++;
    if(index==chairImgClass.length){
        index=0;
    }
    chairImgClass[index].classList.add('visible');
});


leftBtn.addEventListener('click', function(){
    chairImgClass[index].classList.remove('visible');
    index--;
    if(index==-1){
        index=chairImgClass.length-1;
    }
    chairImgClass[index].classList.add('visible');
});



  

//Znikające paski po najechaniu kursorem 

//kiedy kursor najeżdża na ten element 
let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');

//w tej części
let nameChairDiv1 = document.querySelector('.transparent1');
let nameChairDiv2 = document.querySelector('.transparent2');

//pojawia się ta klasa
let noShowList2 = document.querySelector(".noShow2");


//Akcja
//dla pierwszego zdjęcia
img1.addEventListener('mouseover', function() {
    nameChairDiv1.classList.add('noShow2');
});

img1.addEventListener('mouseout', function() {
    nameChairDiv1.classList.remove('noShow2');
});

//dla drugiego zdjęcia
img2.addEventListener('mouseover', function() {
    nameChairDiv2.classList.add('noShow2');
});

img2.addEventListener('mouseout', function() {
    nameChairDiv2.classList.remove('noShow2');
});



});