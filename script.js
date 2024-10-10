const sidemenu = document.querySelector("#sidemenu");
function openMenu() {
  sidemenu.style.transform = "translateX(-16rem)";
}
function closeMenu() {
  sidemenu.style.transform = "translateX(16rem)";
}
function copyEmail() {
  navigator.clipboard.writeText("anurajupadhyay6@gmail.com");
  alert("Email copied to clipboard! :)");
}

var count = 1;
function tenthclick() {
  if (count < 10) {
    count++;
  } else {
    window.location = "https://youtu.be/RdkW3plOX6o?si=t1LfSVXgXohVdBCD";
  }
}
