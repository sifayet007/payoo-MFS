document
  .getElementById("button-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputMoney = document.getElementById("input-money").value;
    const addInputMoney = parseFloat(inputMoney);
    const inputPin = document.getElementById("input-pin").value;
    if (inputPin === "5588") {
      const balance = document.getElementById("account-balance").innerText;
      const addInputBalance = parseFloat(balance);
      const newBalance = addInputMoney + addInputBalance;
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to add money please try again");
    }
  });
