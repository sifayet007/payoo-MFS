document
  .getElementById("button-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputMoney = document.getElementById("input-money").value;
    const inputPin = document.getElementById("input-pin").value;
    if (inputPin === "5588") {
      console.log("adding money to your account");
      const balance = document.getElementById("account-balance").innerText;

      const addInputBalance = parseFloat(balance);
      const addInputMoney = parseFloat(inputMoney);
      const newBalance = addInputBalance + addInputMoney;
      console.log(newBalance);
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to add money please try again");
    }
  });
