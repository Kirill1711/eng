//Бургер меню
let bg_menu_open = document.querySelector('.header__bg_open');
let bg_menu_close =document.querySelector('.header__bg_close');
let bg__menu = document.querySelector('.bg__menu');

bg_menu_open.addEventListener('click', function() {
    bg_menu_close.style.display = 'block';
    bg_menu_open.style.display = 'none';
    bg__menu.style.display = 'flex';
});
bg_menu_close.addEventListener('click', function() {
    bg_menu_open.style.display = 'block';
    bg_menu_close.style.display = 'none';
    bg__menu.style.display = 'none';
});


//Скрыть показать тескт
let showItem1 = document.getElementById('item1');
let showItem2 = document.getElementById('item2');


function showText (item) {
    item.addEventListener('click', function () {
        let elem = item.querySelector('img');
        let style = getComputedStyle(elem);
        if(style.rotate == '180deg') {
            elem.style.rotate = '0deg';
            item.previousElementSibling.style.display = 'block';
        } else {
            elem.style.rotate = '180deg';
            item.previousElementSibling.style.display = '-webkit-box';
        }
    });
}

showText (showItem1);
showText(showItem2);

//Кнопка скрол вверх 
let button_up = document.querySelector('.button_up');
button_up.addEventListener('click',function (){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});


//Модальное окно
let modal_close = document.querySelector('.modal__close');
let modal_Background = document.querySelector('.modal__Background');
let modal_open = document.querySelectorAll('.modal_open');


modal_close.addEventListener('click', function() {
    modal_Background.style.display = 'none';
});

for (let elem of modal_open) {
    elem.addEventListener('click', function(event) {
        event.preventDefault();
        modal_Background.style.display = 'block';
});
}
