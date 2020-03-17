// Тело функции выполняется при полном загрузке DOM
$(document).ready(function(){
    // Установление обработчика нажатия кнопки на элемент .button
    $('.button').on('click', function() {
        // event.preventDefault();
        var delay = 1000; // Задержка
        var button = $('.button');
        var text = "This looks. I want to complexity. That's come to testify to complexity. It's about an object, we kept going and i figured out some basic stuff that acknowledges its very minimalist way beyond the traditions of function from a clutterfree product that form and value on ideas and simplicity. What products have disconnected function of anything of the computer.";
        // Выбираем элемент с классом .contact-us_form
        var showArticleItemChild = $('.article_item > p');
        if (button.css("display", "block")) {
            showArticleItemChild.append("<p class='moreText'>" + text + "</p>");
            $('.moreText').css("margin","20px 0px")
            $('.moreText').animate({height: "show"}, delay);
            button.text('Hide');
            button.css("display", "none");
        }
        else {
            $('.moreText').animate({height: "hide"}, delay);
                setTimeout(function(){
                    $('.moreText').remove();
                    }, delay);
        }
        
        // var showContactDisplay = showContact.css("display");
        // // console.log(showContactDisplay);
        //     if (showContact.css("display") == "none"){
        //         showContact.animate({height: "show"}, delay);
        //         // showContact.show( 'scale', delay );
        //         $('.button').text('Hide form');
        //     }
        //     else {
        //         showContact.animate({height: "hide"}, delay);
        //         // showContact.hide( 'scale', delay );
        //         $('.button').text('Shote us an Email');
        //     }
    });
});