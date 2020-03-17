// Функция закрытия окна загрузки (спинера)
function closeLoad() {
    var load = document.getElementById("load");
    load.style.display = "none";
}

setTimeout(closeLoad, 1000); // Вызов функции closeLoad через 1 секунду