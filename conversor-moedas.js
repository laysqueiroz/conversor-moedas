function conversion() {
    var dollarValue = document.getElementById("dollar-value").value;
    var realValue  = document.getElementById("real-value").value;
    
    dollarValue = parseFloat(dollarValue);
    realValue = parseFloat(realValue);
    result = realValue / dollarValue;
    
    if (result) {
      document.getElementById("result").value = "USD: " + result.toFixed(2);
    } else {
      document.getElementById("result").value = "";
    }
}

function clearValues() {
    document.getElementById("dollar-value").value = "";
    document.getElementById("real-value").value = "";
    document.getElementById("result").value = "";
  }