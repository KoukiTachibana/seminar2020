function buttonPressed() {
    var html = "";
    for (var i = 1; i <= 10; i++) {
        var x = Math.floor(Math.random() * 7)
        html = html + '<li>' + x + '</li>';
    }
    document.getElementById('ran').innerHTML = html;

}
