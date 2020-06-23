function buttonAPressed() {

    var ca = document.getElementById('input-count').value;
    var ctx = document.getElementById('canvas1').getContext('2d');
    ctx.clearRect(0, 0, 400, 300);
    ctx.strokeStyle = '#0000FF';

    for (var x = 1; x <= ca; x++) {

        for (var y = 1; y <= x; y++) {
            ctx.beginPath();
            ctx.arc(10 * y, 10 * x, 5, 0, Math.PI * 2);
            ctx.stroke()
        }

    }
}