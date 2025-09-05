let addtaskbtn = document.getElementById("addtaskbtn");
function addfunction() {
  let newtask = document.getElementsByTagName("ul");
  let newli = document.createElement("li");
  newli.setAttribute("class", "newli")
  button = document.createElement("button");
  button.innerText = "x";
  let newtext = document.getElementById("yyy").value;
  newli.append(newtext);
  newli.append(button);
  newtask[0].append(newli);
  document.getElementById("yyy").value = "";
  //remove krne ka code
  button.addEventListener("click", () => {
    newli.remove();
  });
}
addtaskbtn.addEventListener("click", addfunction);
