function buttonPressed() {

    var x = document.getElementById('inn').Value;
    var html = "";
    var z = 1;
    for (var i = 1; i <= inn; i++) {
        var kai = i * z
        z = kai
        html = html + '< li > i + "の階乗は" + kai + "です"</li >';
    }

    document.getElementById('ran').innerHTML = html;

}
