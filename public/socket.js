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


btnPurchase.addEventListener("click", function(e) {
    this.style.backgroundColor = "red";
        //prevent form submission refreshing page
    e.preventDefault();
    // send input value to server as type 'message'
    // socket.emit("name", `Nome Cliente: ${username.value} \n Ordine birre: ${beers.textContent} \n Numero:${numberBeer.textContent} \n Ordine Snack: ${snack.textContent} \n Numero snack: ${numberSnack.textContent} \n Numero Tavolo: ${table.value} \n Commento: ${comment.value}`);
    let data = JSON.stringify({
        username: `${username.value}`, 
        beers: `${beers.textContent}`,
        numberBeer: `${numberBeer.textContent}`,
        snack: `${snack.textContent}`,
        numberSnack:`${numberSnack.textContent}`,
        table:`${table.value}`,
        comment:`${comment.value}`
    })
    console.log(data);
    socket.emit("name" , data)

    // reset input value
    // username.value = "";
    console.log(beers.textContent);
});

// socket.emit("hello", "world");
// handle sending message to server & input reset

 btnPurchase.addEventListener("click", sendMessage(username));
 function sendMessage() {
   
     console.log('test ciao');
    // prevent form submission refreshing page
    // e.preventDefault();
    // // send input value to server as type 'message'
    // socket.emit("message", username.value);

    // // reset input value
    // username.value = "";
  }

