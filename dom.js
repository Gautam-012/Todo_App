var userList = document.querySelector(".namelist");
var listInput = document.querySelector(".list-input");
var addList = document.querySelector(".add");

listInput.addEventListener("keypress", listInput);

function listInput(e) {
  if (input.value !== "" && e.keyCode === 13) {
    Enter();
  }
}

function Enter() {
  //create a node
  const newLi = document.createElement("li");
  const ab = document.createElement("span");
  const xy = document.createElement("i");
  i.className = "fas fa-trash-alt";
  ab.textContent = input.value;

  newLi.appendChild("ab");
  newLi.appendChild("xy");

  userList.appendChild("newLi");

  // const liContent = document.createTextNode(input.value);
  // //adding values
  // newLi.appendChild(liContent);
  // //attaching the node
  // userList.appendChild(newLi);
}

var line = document.querySelector(".namelist");

line.addEventListener("toggle", (e) => {
  if (e.target.tagName === "SPAN") {
    line.style.textDecoration = "line-through";
  }
});

var removeList = document.querySelector(".namelist");
removeList.addEventListener("click", (e) => {
  console.log(e.target.tagName);
  if (e.target.tagName === "I") {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      removeList.removeChild(li);
    }
  }
});
