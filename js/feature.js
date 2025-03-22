document.getElementById("cush-out-btn").addEventListener("click", function () {
  document.getElementById("cush-out-money1").classList.remove("hidden");
  document.getElementById("add-money").classList.add("hidden");
});
document.getElementById("add-money-btn").addEventListener("click", function () {
  document.getElementById("add-money").classList.remove("hidden");
  document.getElementById("cush-out-money1").classList.add("hidden");
});
