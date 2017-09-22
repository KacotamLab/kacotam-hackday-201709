// 自然数（1,2,3, ... , n）の和を求める
function sumNN(n) {
    var result = 0;
    for (var i = 1; i <= n; i++) {
        result = result + i;
    }
    return result;
}


var input = document.getElementById('q001-input');
var output = document.getElementById('q001-output');
input.addEventListener('change', function(e){
    output.innerText = sumNN(input.value);
}, false);
