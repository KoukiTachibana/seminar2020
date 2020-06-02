function buttonPressed() {


    var html = "";
    html = html + '<table border="1">';

    for (var i = 1; i <= 20; i++) {

        html = html + '<tr>';
        html = html + '<td>' + i + '</td>';
        html = html + '</tr>';

    }

    html = html + '</table>';
    document.getElementById('tab').innerHTML = html;

}
