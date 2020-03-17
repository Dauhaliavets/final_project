// Тело функции выполняется при полном загрузке DOM
$(document).ready(function(){
    // Функция прокрутки вниз на расстояние высоты .header
    function forwardToBottom() {
        var scrollBottom = $('.scroll_bottom');
        // Присоединяем обработчик на событие click элемента scrollBottom
        scrollBottom.on('click', function (e) {
            // Вычисляем высоту у элемента с классом .header
            var heightHeader = $('.header').outerHeight();
            // Отменяем действие по умолчанию
            e.preventDefault();
            //console.log(heightHeader);
            // анимированная прокрутка вверх до 0 за промежуток в 1 секунду
            $('html').animate({scrollTop: heightHeader}, 1000);
        });
    }
    forwardToBottom(); // Вызов функция прокрутки вниз
});