const addBtn = document.getElementsByClassName('add-btn');
const itemInput = document.getElementsByClassName('item-input');
const itemsList = document.getElementById('items');
const subtotal = document.getElementById('subtotal');
const total = document.getElementById('total');
const checkoutBtn = document.getElementById('check-btn');
const itemArray = [];
const priceArray = [];
let subtotalValue = 0.0;
let totalValue = 0.0;
let slideIndex = 1;

// Add item to list function
function addItem(event) {
    const itemName = event.target.parentNode.querySelector('h3').textContent;
    if (itemArray.includes(itemName)) return;
    const itemPrice = event.target.parentNode.querySelector('a').textContent.match(/\d+/g).map(Number);;
    itemArray.push(itemName);
    priceArray.push(itemPrice);
    subtotalValue += parseInt(itemPrice);
    console.log(subtotalValue);
    subtotal.childNodes[3].innerHTML = '$' + subtotalValue;
    totalValue = calculateTotal(subtotalValue);
    total.childNodes[3].innerHTML = '$' + totalValue.toFixed(2);
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.innerHTML = `
      <span class="item-name">${itemName}</span>
      <a class="item-name">$${itemPrice}</a>
      <img  class="remove-btn" src="https://img.icons8.com/ios/24/null/delete-sign--v1.png"/>
    `;
    const removeBtn = itemEl.querySelector('.remove-btn');
    removeBtn.addEventListener('click', removeItem);
    itemsList.appendChild(itemEl);


    console.log(itemsList);
}

function calculateTotal(n) {
    return n * 1.085 + 5;
}

// Remove item from list function
function removeItem(e) {
    itemArray.splice(itemArray.indexOf(e.target.parentNode.querySelector('span').textContent));
    priceArray.splice(priceArray.indexOf(e.target.parentNode.querySelector('a').textContent.match(/\d+/g).map(Number)));
    subtotalValue -= parseInt(e.target.parentNode.querySelector('a').textContent.match(/\d+/g).map(Number));
    subtotal.childNodes[3].innerHTML = '$' + subtotalValue;
    totalValue = calculateTotal(subtotalValue);
    console.log(subtotalValue)
    console.log(totalValue)
    total.childNodes[3].innerHTML = !(subtotalValue == 0.0) ? '$' + totalValue.toFixed(2) : '$' + 0.00;
    const itemEl = e.target.parentNode;
    itemsList.removeChild(itemEl);

}
function handleClick() {
    console.log('Button clicked!');
}


function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

function checkoutCart(e) {
    if (subtotalValue == 0) {
        document.getElementById('popup').querySelector('h2').innerText = "Cart Empty";
        document.getElementById('popup').querySelector('p').innerText = "You must add items to your cart prior to checking out.";
        document.getElementById('popup').show();
        document.getElementById('popup').show();

    }
    else {

        document.getElementById('items').innerHTML = "";

        document.getElementById('popup').querySelector('h2').innerText = "Confirmed Purchase";
        document.getElementById('popup').querySelector('p').innerText = "Thank you for your order of $" + totalValue.toFixed(2) + "!";
        document.getElementById('popup').show();
        itemArray.length = 0;
        priceArray.length = 0;
        subtotalValue = 0.0;
        totalValue = 0.0;
        subtotal.childNodes[3].innerHTML = '$' + subtotalValue;
        total.childNodes[3].innerHTML = !(subtotalValue == 0.0) ? '$' + totalValue.toFixed(2) : '$' + 0.00;
    }

}
checkoutBtn.addEventListener('click', checkoutCart);
showDivs(slideIndex);
addBtn[0].addEventListener('click', addItem);
addBtn[1].addEventListener('click', addItem);
addBtn[2].addEventListener('click', addItem);
addBtn[3].addEventListener('click', addItem);
addBtn[4].addEventListener('click', addItem);

 function myFunction() {
        var element = document.body;
        element.classList.toggle("dark");
        }