// import {io } from '/socket.io-client';
// const socket = io('http://localhost:3000');
 socket = io();
socket.on("connect", ()=>{
   console.log('test da index');
});
// socket.emit("name", "test emesso dal client")
// const socket = io();
 

const username= document.querySelector('#name');
const btnPurchase = document.querySelector('#btnPurchase');
const numberBeer = document.querySelector('#numberBeer');
const beers = document.querySelector('#beer');
const numberSnack = document.querySelector('#numberSnack');
const snack = document.querySelector('#snack');
const table = document.querySelector('#address');
const comment = document.querySelector('#comment');
const checkbox = document.querySelector('#checkbox');

let sendData = function(e){
    this.style.backgroundColor = "red";
    //prevent form submission refreshing page
e.preventDefault();

let data = JSON.stringify({
    username: `${username.value}`, 
    beers: `${beers.textContent}`,
    numberBeer: `${numberBeer.textContent}`,
    snack: `${snack.textContent}`,
    numberSnack:`${numberSnack.textContent}`,
    table:`${table.value}`,
    comment:`${comment.value}`,
    isChecked:`${checkbox.value}`
})
console.log(data);
socket.emit("name" , data)
// reset input value
// username.value = "";

console.log(checkbox.value);
}

btnPurchase.addEventListener("click", sendData);
// var checkboxed = document.querySelector("input[name=checkbox]");
$( "#checkbox" ).click(function() {
    if (this.checked) {
        console.log("Checkbox is checked..");
      } else {
        console.log("Checkbox is not checked..");
      }
      // let change = new Event('change');
      // this.dispatchEvent(change);
  });
//   $(document).on("change", "input[name='checkbox']", function () {
//     alert("FECK");
//     if (this.checked) {}
// });



