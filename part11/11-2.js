
function BP() {
    var x = document.getElementById('in').value;
    x = Number(x);

    var html = '';
    var z = 1;

    for (var i = 1; i <= x; i++) {
        z = i * z;
        html = html + '<li>' + z + '</li>';
    }
    document.getElementById('list').innerHTML = html;
}
