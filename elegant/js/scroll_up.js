// Тело функции выполняется при полном загрузке DOM
$(document).ready(function(){
    // Функция анимированной прокрутки вверх
    function backToTop(){
        // Находим элемент с классом .scroll_top
        var scroll = $('.scroll_top');
        // Присоединяем обработчик scroll, если scrollTop >= 50 
        $(window).on('scroll', function () {
            if ($(this).scrollTop() >= 50){
                // Элемент с классом .scroll_top отображается
                scroll.fadeIn();
            }
            else {
                // Элемент с классом .scroll_top не отображается (затухает)
                scroll.fadeOut();
            }
        });
        // Присоединяем обработчик на событие click элемента scroll
        scroll.on('click', function (e) {
            // Отменяем действие по умолчанию
            e.preventDefault();
            // анимированная прокрутка вверх до 0 за промежуток в 1 секунду
            $('html').animate({scrollTop: 0}, 1000);
        });
    }
    backToTop(); // Вызов функции прокрутки вверх
});
