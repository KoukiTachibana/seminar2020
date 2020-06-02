function buttonPressed() {

    var x = document.getElementById('aaaa').Value;
    var html = "";
    var z = 1;
    for (var i = 1; i <= x; i++) {
        var kai = i * z
        z = kai
        html = html + '< li >' + kai + '</li>';
    }
    document.getElementById('ran').innerHTML = html;

}
