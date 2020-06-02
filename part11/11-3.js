function buttonPressed() {


    var html = "";
    html = html + '<table border="1">';


    for (var i = 1; i <= 20; i++) {

        if (i % 3 == 0 && i % 5 == 0) {

            html = html + '<tr>';
            html = html + '<td>' + i + '</td>';
            html = html + '<td>' + "fizz buzz" + '</td>';
            html = html + '</tr>';
        }
        else if (i % 3 == 0) {
            html = html + '<tr>';
            html = html + '<td>' + i + '</td>';
            html = html + '<td>' + "fizz" + '</td>';
            html = html + '</tr>';
        }
        else if (i % 5 == 0) {
            html = html + '<tr>';
            html = html + '<td>' + i + '</td>';
            html = html + '<td>' + "buzz" + '</td>';
            html = html + '</tr>';
        }
        else {
            html = html + '<tr>';
            html = html + '<td>' + i + '</td>';
            html = html + '<td>' + "  " + '</td>';
            html = html + '</tr>';
        }
    }

    html = html + '</table>';
    document.getElementById('tab').innerHTML = html;
}

