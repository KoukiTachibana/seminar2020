
function buttonAPressed() {
    var apple = document.getElementById("apple-img");
    var orange = document.getElementById("orange-img");

    console.log("clicked")
    var ctx = document.getElementById("canvas1").getContext("2d");
    ctx.clearRect(0, 0, 400, 300);

    var w = document.getElementById("input-word").value;

    if (w == 'りんご') {
        ctx.drawImage(apple, 10, 10, 100, 100);
    }
    else if (w == 'みかん') {
        ctx.drawImage(orange, 10, 10, 100, 100);
    }
    else {
        ctx.clearRect(0, 0, 400, 300);
    }
}
