function buttonPressed() {

    var x = document.getElementById('input-base').value;
    x = Number(x);
    var y = document.getElementById('input-interest').value;
    y = Number(y);
    y = y / 100;

    var sum = x + (x * y + 1);

    var html = "";
    html = html + '<table border="1">';


    for (var a = 1; a <= 10; a++) {

        if (a == 1) {
            html = html + '<tr>';
            html = html + '<td>' + a + '</td>';
            html = html + '<td>' + sum + '</td>';
            html = html + '</tr>';
        }
        else {
            html = html + '<tr>';
            html = html + '<td>' + a + '</td>';
            html = html + '<td>' + pre + '</td>';
            html = html + '</tr>';
        }
        var pre = sum + (sum * y + 1)
        sum = pre;
    }


    html = html + '</table>';
    document.getElementById('tab').innerHTML = html;

}