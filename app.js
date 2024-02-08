//functiion
let w;
let b;
class creatPassword {
    weakPassword() {
    let password = "";
    let VehiclesName = [
      "Landstalker",
      "Bravura",
      "Buffalo",
      "Linerunner",
      "Pereniel",
      "Sentinel",
      "Dumper",
      "Firetruck",
      "Trashmaster",
      "Stretch",
    ];
    password += VehiclesName[Math.floor(Math.random() * VehiclesName.length)];
    let ran = [21, "07", 101, 55, "007", 65];
    password += ran[Math.floor(Math.random() * ran.length)];
    // alert(`Weak password : ${password}`);
    return password
  }
  strongPassword() {
    let spass = ""
    let alpha = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "a",
      "b",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
      spass+=alpha[Math.floor(Math.random()*alpha.length)].toUpperCase()
    for(let i = 0; i<3; i++){
        spass+=alpha[Math.floor(Math.random()*alpha.length)].toLowerCase()
    }
    spass+=num[Math.floor(Math.random()*num.length)]
    spass+=special[Math.floor(Math.random()*special.length)]
    spass+=num[Math.floor(Math.random()*num.length)]
    spass+=alpha[Math.floor(Math.random()*alpha.length)].toLowerCase()
    // alert(`Strong password :${spass}`)
    return spass
  }
}

let func = new creatPassword()
document.getElementById("createBtn").addEventListener("click",(e)=>{
    e.preventDefault()
    document.getElementById("first").innerHTML = "Weak password :"+ " "+func.weakPassword()
    document.getElementById("second").innerHTML = "Strong password :"+ " "+func.strongPassword()
})
let cont = document.getElementsByClassName("container")[0]
let a = func.weakPassword()
console.log(a)
