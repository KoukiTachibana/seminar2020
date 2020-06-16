

function buttonAPressed() {

    var le = document.getElementById('input-x').value;
    var he = document.getElementById('input-y').value;

    var ctx = document.getElementById('canvas1').getContext('2d');
    ctx.clearRect(0, 0, 400, 300);

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(le, he, 70, 50);

    ctx.fillStyle = '#FF0000';
    ctx.fillRect(le + 20, he + 20, 30, 10);
    ctx.fillRect(le + 30, he + 10, 10, 30);
}