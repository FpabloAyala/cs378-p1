let subtotal = 0;
let num_mac = 0;
let num_pasta = 0;
let num_tacos = 0;
let num_enchilada = 0;

const mac_price = 5;
const pasta_price = 8;
const tacos_price = 8;
const enchilada_price = 10;

const add_mac = document.getElementById("mac-add");
add_mac.itemName = "mac";
const add_pasta = document.getElementById("pasta-add");
add_pasta.itemName = "pasta";
const add_tacos = document.getElementById("tacos-add");
add_tacos.itemName = "tacos";
const add_enchiladas = document.getElementById("enchiladas-add");
add_enchiladas.itemName = "enchiladas";

const remove_mac = document.getElementById("mac-remove");
remove_mac.itemName = "mac";
const remove_pasta = document.getElementById("pasta-remove");
remove_pasta.itemName = "pasta";
const remove_tacos = document.getElementById("tacos-remove");
remove_tacos.itemName = "tacos";
const remove_enchiladas = document.getElementById("enchiladas-remove");
remove_enchiladas.itemName = "enchiladas";

add_mac.addEventListener('click', addItem);
add_pasta.addEventListener('click', addItem);
add_tacos.addEventListener('click', addItem);
add_enchiladas.addEventListener('click', addItem);

remove_mac.addEventListener('click', removeItem);
remove_pasta.addEventListener('click', removeItem);
remove_tacos.addEventListener('click', removeItem);
remove_enchiladas.addEventListener('click', removeItem);

const clear_button = document.getElementById("clear-button");
clear_button.addEventListener('click', clearItems);

const order_button = document.getElementById("order-button");
order_button.addEventListener('click', placeOrder);

function addItem(){
    switch (this.itemName){
        case "mac":
            num_mac++;
            subtotal += mac_price;
            document.getElementById("num-mac").innerText = "" + num_mac;
            break;

        case "pasta":
            num_pasta++;
            subtotal += pasta_price;
            document.getElementById("num-pasta").innerText = "" + num_pasta;
            break;

        case "tacos":
            num_tacos++;
            subtotal += tacos_price;
            document.getElementById("num-tacos").innerText = "" + num_tacos;
            break;

        case "enchiladas":
            num_enchilada++;
            subtotal += enchilada_price;
            document.getElementById("num_enchiladas").innerText = "" + num_enchilada;
            break;
    }

    const sub_text = document.getElementById("sub-text");
    sub_text.innerText = "Subtotal $" + subtotal;
}

function removeItem(){
    switch (this.itemName){
        case "mac":
            if(num_mac > 0){
                num_mac--;
                subtotal -= mac_price;
                document.getElementById("num-mac").innerText = "" + num_mac;
            }
            break;

        case "pasta":
            if(num_pasta > 0){
                num_pasta--;
                subtotal -= pasta_price;
                document.getElementById("num-pasta").innerText = "" + num_pasta;
            }
            break;

        case "tacos":
            if(num_tacos > 0){
                num_tacos--;
                subtotal -= tacos_price;
                document.getElementById("num-tacos").innerText = "" + num_tacos;
            }
            break;

        case "enchiladas":
            if(num_enchilada > 0){
                num_enchilada--;
                subtotal -= enchilada_price;
                document.getElementById("num_enchiladas").innerText = "" + num_enchilada;
            }
            break;
    }

    const sub_text = document.getElementById("sub-text");
    sub_text.innerText = "Subtotal $" + subtotal;
}

function clearItems(){
    subtotal = 0;
    num_mac = 0;
    document.getElementById("num-mac").innerText = "" + num_mac;
    num_pasta = 0;
    document.getElementById("num-pasta").innerText = "" + num_pasta;
    num_tacos = 0;
    document.getElementById("num-tacos").innerText = "" + num_tacos;
    num_enchilada = 0;
    document.getElementById("num_enchiladas").innerText = "" + num_enchilada;
    const sub_text = document.getElementById("sub-text");
    sub_text.innerText = "Subtotal $" + subtotal;
}

function placeOrder(){
    let orderStr = "";
    if(num_mac > 0)
        orderStr += num_mac + " mac & cheese ";
    if(num_pasta > 0)
        orderStr += num_pasta + " pasta ";
    if(num_tacos > 0)
        orderStr += num_tacos + " tacos ";
    if(num_enchilada > 0)
        orderStr += num_enchilada + " enchiladas ";
    
    if(orderStr.length === 0){
        alert("No items in cart");
    }
    else{
        alert("Order Placed!\n\n" + orderStr);
    }
}