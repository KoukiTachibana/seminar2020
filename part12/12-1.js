var le;
var he
function buttonAPressed() {
    le = Math.floor(Math.random() * 300);
    he = Math.floor(Math.random() * 300);

    var ctx = document.getElementById('canvas1').getContext('2d');
    ctx.clearRect(0, 0, 400, 300);

    ctx.fillStyle = '#0000FF';

    ctx.beginPath();
    ctx.arc(le, he, 10, 0, Math.PI * 2);
    ctx.fill();
}
function buttonBPressed() {
    var ctx = document.getElementsById('canvas1').getContext('2d');
    ctx.clearRect(0, 0, 400, 300);
}