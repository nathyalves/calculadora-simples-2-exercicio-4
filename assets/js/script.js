function appendToDisplay(value) {
    document.getElementById("display").value += value;
  }

  function clearDisplay() {
    document.getElementById("display").value = '';
  }

  function calculate() {
    var expression = document.getElementById("display").value;
    var result = eval(expression);
    document.getElementById("display").value = result;
  }

  function calculatePower() {
    var base = parseFloat(prompt("Digite a base:"));
    var exponent = parseFloat(prompt("Digite o expoente:"));
    var result = Math.pow(base, exponent);
    alert("O resultado da potência é: " + result);
  }

  function calculateRound() {
    var number = parseFloat(prompt("Digite o número para arredondar:"));
    var result = Math.round(number);
    alert("O número arredondado é: " + result);
  }

  function calculateSquareRoot() {
    var number = parseFloat(prompt("Digite o número para calcular a raiz quadrada:"));
    var result = Math.sqrt(number);
    alert("A raiz quadrada é: " + result);
  }