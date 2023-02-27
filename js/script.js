var list = document.querySelector(`ul`)

list.addEventListener(`click`, (c) => {
    if (c.target.tagName === `LI`) {
        c.target.classList.toggle(`checked`)
    }
}, false)

// Создаем кнопку закрыть, "крестик"
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Реализация функционала кнопки закрыть, скрыввание элемента
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


let btn = document.querySelector("#click");
let image = document.querySelector("#img");
let containerNode = document.querySelector(".green");
let box = document.querySelector("#textContainer");

btn.addEventListener('click', ()=>{
    image.innerHTML = '<img src="assets/end.png" class="card-img-top" alt="...">';
    containerNode.classList.add("color");
    box.innerHTML = '<p>Всё выполнено!</p>';
})