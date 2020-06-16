var answer;

function buttonStartPressed() {
    answer = Math.floor(Math.random() * 20) + 1;
    document.getElementById('output-result').innerHTML = '数あてゲームを開始しました．いくつかな？';
}

function buttonAnswerPressed() {
    var x = document.getElementById('input-number').value;
    if (x = answer) {
        document.getElementById('result').innerHTML = '正解';
    }
    else if (x < answer) {
        document.getElementById('result').innerHTML = '違うよ、正解はおおきい;
    }
    else if (x > answer) {
        document.getElementById('result').innerHTML = '違うよ、正解は小さい;
    }
}