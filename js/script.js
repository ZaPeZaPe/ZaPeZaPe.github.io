var info
var activity
var contact 
var buttoni 
var buttona 
var buttonc 

function showActivity() {
    refresh()

    info.style.display = "none";
    contact.style.display = "none";
    activity.style.display = "block";

    remove(buttoni, buttonc);
    buttona.classList.add("buttonActive")
}

function showInfo() {
    refresh()

    activity.style.display = "none";
    contact.style.display = "none";
    info.style.display = "block";

    remove(buttona, buttonc);
    buttoni.classList.add("buttonActive")
}

function showContact() {
    refresh()

    activity.style.display = "none";
    info.style.display = "none";
    contact.style.display = "block";

    remove(buttona, buttoni);
    buttonc.classList.add("buttonActive")
}

function remove(button1, button2) {
    button1.classList.remove("buttonActive")
    button2.classList.remove("buttonActive")
}

function refresh() {
    info = document.getElementById("infoAbtMe")
    activity = document.getElementById("myActivity")
    contact = document.getElementById("contactMe")
    buttoni = document.getElementById("buttonInfo")
    buttona = document.getElementById("buttonActivity")
    buttonc = document.getElementById("buttonContact")
}

