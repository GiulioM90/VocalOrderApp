
let alanBtnInstance = alanBtn({
    key: "f2cba9987d2a14aa7cb6e10679ab84552e956eca572e1d8b807a3e2338fdd0dc/stage",
    onCommand: function (commandData) {
       if (commandData.command === "highlight") {
       //call client code that will react on the received command
       highlightProduct(commandData.item);
       }else if(commandData.command === 'addBeer'){
            setBeer(commandData.item);
       }else if(commandData.command === 'addNumberBeer'){
        document.getElementById('numberBeer').innerHTML = commandData.item;
        }else if(commandData.command === 'addNumberSnack'){
            document.getElementById('numberSnack').innerHTML = commandData.item;
        }else if(commandData.command === 'addSnack'){
            setSnack(commandData.item);
        }else if(commandData.command === "addName"){
            document.getElementById('name').value = commandData.name;
            // setName(commandData.name)
        }else if(commandData.command === "addLocation"){
            document.getElementById('address').value = commandData.item;
            // setName(commandData.name)
        }else if(commandData.command === "addComment"){
            document.getElementById('comment').value = commandData.item;
            // setName(commandData.name)
        }else if(commandData.command === "addCheckforSendOrder"){
            // document.getElementById("checkbox").value = commandData.item;
            // document.getElementById("checkbox").setAttribute("value", true);
            // $('#checkbox').prop('checked', true);

            $('#checkbox').click()

            // document.getElementById("checkbox").checked = true;
            // setName(commandData.name)
        }


    },
    rootEl: document.getElementById("alan-btn"),
 });
     let beer = '';
//     let dessert = '';
//     let order = { };
    
    function setBeer(beer) {      
        // Adding the order to the cart
        document.getElementById("beer").innerHTML = beer.charAt(0).toUpperCase() + beer.slice(1);
        // order['beer'] = beer;
    //    alanBtnInstance.setVisualState({order});
        // Highlighting tiles
        let item = beer.replace(/\s+/g, '-').toLowerCase();
      //   let item = beer.toLowerCase();
        highlightProduct(item);
    }  
    function setSnack(snack) {      
        // Adding the order to the cart
        document.getElementById("snack").innerHTML = snack.charAt(0).toUpperCase() + snack.slice(1);
        // order['snack'] = snack;
    //    alanBtnInstance.setVisualState({order});
        // Highlighting tiles
        let item = snack.replace(/\s+/g, '-').toLowerCase();
      //   let item = snack.toLowerCase();
        highlightProduct(item);
    }  

    function highlightProduct(item) {
       const el = document.getElementById(item);
       if (el) {
          [...el.parentElement.children].forEach(sib => sib.classList.remove('highlighted'));
          el.classList.add('highlighted');               
       }
    };