var button = document.forms.feebackForm.send;
button.addEventListener('click', output);

function output(){
    var name = document.getElementById('userName').value;
    var email = document.getElementById('userEmail').value;
    alert('Мы рады приветствовать Вас, ' + name + '.' + '\n' + 'В ближайшее время мы свяжемся с Вами по указанному E-mail: ' + email);
}