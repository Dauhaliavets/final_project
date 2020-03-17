// Тело функции выполняется при полном загрузке DOM
$(document).ready(function(){
    // Установление обработчика нажатия кнопки на элемент .what-we-do_item
    $('.what-we-do_item').on('click', function() {
        var delay = 1000; // Задержка
        var image = $(this).find('img'); // Находим img в текущем элементе 
        var src = image.attr('src'); // Значение атрибута src в переменную
        if($('.what-we-do').width() > 880) { // Условие из медиа-запроса
            //Добавляем в конец блока .what-we-do блок .show_full_screen
            $('.what-we-do').append("<div class='show_full_screen'>" + 
            "<img class='full_screen_image' src=" + src +"></div>");
            // Выбираем элемент с классом .show_full_screen
            var showFullScreen = $('.show_full_screen');
            showFullScreen.show( 'scale', delay );
            $(showFullScreen).on('click', function(){
                showFullScreen.hide( 'scale', delay );
                setTimeout(function(){
                    showFullScreen.remove();
                    }, delay);
            });
        }
    });
});
