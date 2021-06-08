var getUserName = prompt("Insert Name Below"); 
//pop up + getUserName is just a file name to store the data inputed

console.log(getUserName);
// sends Input into consoles log

document.getElementById("username").innerText = getUserName;
//gets ID from index ( username ) and changes it

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })