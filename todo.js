const text = document.getElementById("text");
const page = document.getElementById("page");
const myList = document.getElementById("myList");

page.onsubmit = function(event) {
    event.preventDefault();

var newlist = document.createElement("li");
newlist.innerHTML = text.value;


myList.appendChild(newlist);
text.value = "";

}
newlist = document.querySelector('ul');
newlist.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);




