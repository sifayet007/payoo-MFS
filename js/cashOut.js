document
  .getElementById("button-cush-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cushOutMoney = document.getElementById("cush-out-money").value;
    const cushOutNumber = parseFloat(cushOutMoney);
    const cushOutPin = document.getElementById("cush-out-pin").value;
    if (cushOutPin === "5588") {
      const balance = document.getElementById("account-balance").innerText;
      const cushOutBalance = parseFloat(balance);
      const newBalance = cushOutBalance - cushOutNumber;
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to cush out please try again");
    }
  });
