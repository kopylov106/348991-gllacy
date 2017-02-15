var link = document.querySelector(".btn-feedback");
var popup = document.querySelector(".feedback-hidden");
var close = document.querySelector(".feedback-hidden-close");
var form = popup.querySelector("form");
var username = popup.querySelector("#feedback");
var email = popup.querySelector("#send-feedback");
var feed = popup.querySelector("textarea");
var storage = localStorage.getItem("username");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("feedback-hidden-show");
  if (storage) {
    username.value = storage;
    email.focus();
  } else {
    username.focus();
  };
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("feedback-hidden-show");
  popup.classList.remove("feedback-hidden-error");
});

form.addEventListener("submit", function(event) {
  if (!username.value || !email.value || !feed.value) {
    event.preventDefault();
    popup.classList.remove("feedback-hidden-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("feedback-hidden-error");
  } else {
    localStorage.setItem("username", username.value);
  };
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("feedback-hidden-show")) {
      popup.classList.remove("feedback-hidden-show");
      popup.classList.remove("feedback-hidden-error");
    }
  }
});
