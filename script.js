let addtaskbtn = document.getElementById("addtaskbtn");
function addfunction() {
  let newtask = document.getElementsByTagName("ul");
//   console.log(newtask)
  let newli = document.createElement("li");
  newli.setAttribute("class", "newli")
//   console.log(newli);
  button = document.createElement("button");
  button.innerText = "x";
//   console.log(button);
//   console.log(button.innerText);
  let newtext = document.getElementById("yyy").value;
  newli.append(newtext);
  newli.append(button);
//   console.log(newli.innerHTML);
  newtask[0].append(newli);

  //remove krne ka code
  button.addEventListener("click", () => {
    newli.remove();
  });
}
addtaskbtn.addEventListener("click", addfunction);
