var link = document.querySelector(".btn-feedback");
var popup = document.querySelector(".feedback-hidden");
var close = document.querySelector(".feedback-hidden-close");
var form = popup.querySelector("form");
var username = popup.querySelector("#feedback");
var email = popup.querySelector("#send-feedback");
var feed = popup.querySelector("textarea");
var storage = localStorage.getItem("username");
var input = document.querySelectorAll("input");
var textarea = document.querySelectorAll("textarea");

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

for (var i = 0; i < input.length; i++) {
  input[i].addEventListener("focusout", function() {
    var elem = this;
    var placeholder = this.nextElementSibling;
    var label = placeholder.firstElementChild;
    if (elem.value.length == 0) {
      label.classList.remove("lostfocus");
    } else {
      label.classList.add("lostfocus");
    }
  }, false);
}

for (var i = 0; i < textarea.length; i++) {
  textarea[i].addEventListener("focusout", function() {
    var elem2 = this;
    var placeholder2 = this.nextElementSibling;
    var label = placeholder2.firstElementChild;
    if (elem2.value.length == 0) {
      label.classList.remove("lostfocus");
    } else {
      label.classList.add("lostfocus");
    }
  }, false);
}
