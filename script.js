window.addEventListener('load', function () {
    var button = document.getElementById("hamburger-icon");
    var title = document.getElementById("title");
    var popup = document.getElementById("popup");
    var counter = document.getElementById("click-counter");
    if (counter) {
      counter.innerText = "Clicks: " + sessionStorage.getItem("clicks");
    }
    if (sessionStorage.getItem("allowed-in-sigma-room")) {
      addSigmaRoomToLinks()
    }
    if (button) {
      button.addEventListener("click", toggleDropdownMenu)
    }
    if (title) {
      title.addEventListener("click", titleClicked);
    }
    popup.addEventListener("click", closePopupClicked)


  })

function makeHTMLElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template
}

function toggleDropdownMenu() {
    var menu = document.getElementById("sidebar");
    // console.log(menu);
    menu.classList.toggle("show-sidebar");
}

function addSigmaRoomToLinks() {
  var sidebar = document.getElementById("sidebar");
  var links = document.getElementById("links");
  links.innerHTML += "<a href=\"sigma-room.html\" name=\"sigma-link\">Profile</a>"
  sidebar.innerHTML += "<a href=\"sigma-room.html\" name=\"sigma-link\">Profile</a>"

  
}

function closePopupClicked() {
  var popup = document.getElementById("popup");
  popup.classList.remove("popup-show");

}

function titleClicked() {
  var popup = document.getElementById("popup");
  var popupText = document.getElementById("popup-text");
  var clicks = sessionStorage.getItem('clicks');
  clicks++;
  sessionStorage.setItem('clicks', clicks)
  if (clicks == 10) {
    popupText.innerText = "Hey, could you stop that";
    popup.classList.add("popup-show");
  }
  else if (clicks == 25) {
    popupText.innerText = "You know I can still feel that right?";
    popup.classList.add("popup-show");
  }
  else if (clicks == 50) {
    popupText.innerText = "That's getting pretty annoying...";
    popup.classList.add("popup-show");
  }
  else if (clicks == 100) {
    popupText.innerText = "Ok, I'll give you this cool new page. Will you stop now?";
    sessionStorage.setItem("allowed-in-sigma-room", true)
    popup.classList.add("popup-show");
    addSigmaRoomToLinks()
  }
  else if (clicks == 250) {
    popupText.innerText = "Could you PLEASE stop?";
    popup.classList.add("popup-show");
  }
  else if (clicks == 500) {
    popupText.innerText = "Seriously, STOP!!";
    popup.classList.add("popup-show");
  }
  else if (clicks == 1000) {
    popupText.innerText = "STOP FOR ALL THINGS SIGMA";
    popup.classList.add("popup-show");
  }
}

