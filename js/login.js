// console.log("clicked button");
//search : form submit reloading the page
// step 1: set event handlers
document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    //step 2: prevent default behavior (prevent reloading browser)
    event.preventDefault();
    console.log("login button clicked");
    const phoneNumber = document.getElementById("phone-number").value;
    console.log(phoneNumber);
  });
