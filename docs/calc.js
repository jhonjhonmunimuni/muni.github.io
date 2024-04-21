function calculate(operator) {
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    var result;

    switch(operator) {
        case '+':
            result = Number(input1) + Number(input2);
            break;
        case '-':
            result = Number(input1) - Number(input2);
            break;
        case '*':
            result = Number(input1) * Number(input2);
            break;
        case '/':
            result = Number(input1) / Number(input2);
            break;
    }

    document.getElementById('result').innerText = '結果: ' + result;
}