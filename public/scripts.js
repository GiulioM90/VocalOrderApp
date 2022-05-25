



// var alanBtnInstance = alanBtn({
//     key: "f2cba9987d2a14aa7cb6e10679ab84552e956eca572e1d8b807a3e2338fdd0dc/stage",
//     onCommand: function (commandData) {
//        if (commandData.command === "highlight") {
//        //call client code that will react on the received command
//        highlightProduct(commandData.item);
//        }else if(commandData.command === "addBeer"){
//          //  document.getElementById('beer').value = commandData.name;
//           setBeer(commandData.item)
//        }else if(commandData.command === "addName"){
//           document.getElementById('name').value = commandData.name;
//           setName(commandData.item)
//        }else if(commandData.command === "addSnack"){
//          setSnack(commandData.item)
//           document.getElementById('addSnack').value = commandData.name;
//        }else if(commandData.command === "addAddress"){
//           document.getElementById('addAddress').value = commandData.name;
//        }else if(commandData.command === "addComment"){
//           document.getElementById('addComment').value = commandData.name;
//        }
//     },
//     rootEl: document.getElementById("alan-btn"),
//  });
 
 
//     let beer = '';
//     let dessert = '';
//     let order = { };
    
//     function setBeer(beer) {      
//         // Adding the order to the cart
//         document.getElementById("beer").innerHTML = beer.charAt(0).toUpperCase() + beer.slice(1);
//         order['beer'] = beer;
//        alanBtnInstance.setVisualState({order});
//         // Highlighting tiles
//         let item = beer.replace(/\s+/g, '-').toLowerCase();
//       //   let item = beer.toLowerCase();
//         highlightProduct(item);
//     }         
    
//     function setSnack(snack) {    
//         // Adding the order to the cart
//         document.getElementById("snack").innerHTML = snack.charAt(0).toUpperCase() + snack.slice(1);
//         order['snack'] = snack;
//         alanBtnInstance.setVisualState({order});
//         // Highlighting tiles
//         let item = snack.replace(/\s+/g, '-').toLowerCase();
//         highlightProduct(item);
//     }
//     function setName(name) {    
//         // Adding the order to the cart
//         document.getElementById("name").innerHTML = name.charAt(0).toUpperCase() + name.slice(1);
//         order['name'] = name;
//         alanBtnInstance.setVisualState({order});
//         // Highlighting tiles
//         let item = snack.replace(/\s+/g, '-').toLowerCase();
//         highlightProduct(item);
//     }
//     function setAddress(address) {    
//         // Adding the order to the cart
//         document.getElementById("address").innerHTML = snack.charAt(0).toUpperCase() + snack.slice(1);
//         order['address'] = address;
//         alanBtnInstance.setVisualState({order});
//         // Highlighting tiles
//         let item = snack.replace(/\s+/g, '-').toLowerCase();
//         highlightProduct(item);
//     }
//     function setComment(comment) {    
//         // Adding the order to the cart
//         document.getElementById("comment").innerHTML = snack.charAt(0).toUpperCase() + snack.slice(1);
//         order['comment'] = comment;
//         alanBtnInstance.setVisualState({order});
//         // Highlighting tiles
//         let item = snack.replace(/\s+/g, '-').toLowerCase();
//         highlightProduct(item);
//     }
    
//     function highlightProduct(item) {
//        const el = document.getElementById(item);
//        if (el) {
//           [...el.parentElement.children].forEach(sib => sib.classList.remove('highlighted'));
//           el.classList.add('highlighted');               
//        }
//     };
//     function sendData(){
//        alanBtnInstance.activate();
//        alanBtnInstance.callProjectApi('getOrder', {
//              beer: order.beer,
//              snack:order.snack,
//              name:document.getElementById('name').value,
//              address:document.getElementById('address').value,
//              comment:document.getElementById('comment').value
//        }, (err,result)=> console.log(err))
//     }