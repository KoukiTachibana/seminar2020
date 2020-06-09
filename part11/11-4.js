
function buttonPressed() {
    var html = '';
    html = html + '<table border="1">';

    for (var i = 1; i <= 9; i++) {
        html = html + '<tr>';
        for (var x = 1; x <= 9; x++) {
            html = html + '<td>' + i * x + '</td>';

        }
        html = html + '</tr>';

    }
    html = html + '</table>';
    document.getElementById('tab').innerHTML = html;
}