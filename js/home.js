document
  .getElementById("button-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputMoney = document.getElementById("input-money").value;
    const inputPin = document.getElementById("input-pin").value;
    console.log(inputMoney, inputPin);
  });
