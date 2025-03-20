// console.log("clicked button");
//search : form submit reloading the page
// step 1: set event handlers
// document
//   .getElementById("login-btn")
//   .addEventListener("click", function (event) {
//     //step 2: prevent default behavior (prevent reloading browser)
//     event.preventDefault();
//     //get phone number and pin
//     const phoneNumber = document.getElementById("phone-number").value;
//     const pinNumber = document.getElementById("pin-number").value;
//     // console.log(phoneNumber, pinNumber);
//     if (phoneNumber === "01890727967" && pinNumber === "5588") {
//       console.log("you are logged in");
//       window.location.href = "home.html";
//     } else {
//       alert("wrong phone number or pin.");
//     }
//   });

document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    if (phoneNumber === "01890727967" && pinNumber === "5588") {
      console.log("you are logged in");
      window.location.href = "home.html";
    } else {
      alert("wrong phone number or pin");
    }
  });
