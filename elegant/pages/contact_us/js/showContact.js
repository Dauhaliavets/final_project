// Тело функции выполняется при полном загрузке DOM
$(document).ready(function(){
    // Установление обработчика нажатия кнопки на элемент .button
    $('.button').on('click', function() {
        // event.preventDefault();
        var delay = 1000; // Задержка
        // Выбираем элемент с классом .contact-us_form
        var showContact = $('.contact-us_form');
        var showContactDisplay = showContact.css("display");
        // console.log(showContactDisplay);
            if (showContact.css("display") == "none"){
                showContact.animate({height: "show"}, delay);
                // showContact.show( 'scale', delay );
                $('.button').text('Hide form');
            }
            else {
                showContact.animate({height: "hide"}, delay);
                // showContact.hide( 'scale', delay );
                $('.button').text('Shote us an Email');
            }
    });
});