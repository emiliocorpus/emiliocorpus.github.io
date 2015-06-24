var totalMinPrice = 0.00;

var addItem = function() {

  var item = prompt("What item do you want to add?");
  var rightQuant = 0;
  var rightPrice = 0;


  while (rightQuant !== 1) {
    var quantity = prompt("How many of this item?");
    if (isNaN(quantity) !== false ) {
      alert("Enter a valid number please:");
    }
    else {
      rightQuant=1;
    }
  }

  while (rightPrice !== 1) {
    var price = prompt("Please enter price per item, or enter a value of 0 if you do not know");
    if (isNaN(price) !== false) {
      alert("Enter a valid price please:")
    }
    else {
      rightPrice=1;
    }
  }

  var table = document.getElementById("grocery-table");
  var newItem = table.insertRow();
  newItem.id = item;
  var itemCol = newItem.insertCell(0);
  var quantCol = newItem.insertCell(1);
  var priceCol = newItem.insertCell(2);
  var checkedCol = newItem.insertCell(3);

  itemCol.innerHTML = item.toString();
  quantCol.innerHTML = quantity.toString();
  priceCol.innerHTML = price.toString();
  checkedCol.innerHTML = '';

  totalMinPrice += (quantity * price);

  var summedPrice = document.getElementById("price-here");
  summedPrice.innerHTML = totalMinPrice.toFixed(2);
};

var removeItem = function(){
  var itemName = prompt('Please supply the name of the item as it is written in the list');
  var itemsToBeDeleted = document.getElementById(itemName);
  itemsToBeDeleted.remove();
};

var adjustQuantity = function() {
  var itemName = prompt('Please supply the name of the item as it is written in the list');
  var newQuant = prompt('Please enter the new quantity');
  var itemRow = document.getElementById(itemName).cells;
  var oldQuant = parseFloat(itemRow[1].innerHTML);
  itemRow[1].innerHTML = parseFloat(newQuant);

  var summedPrice = document.getElementById("price-here");

  if (oldQuant > newQuant) {
    totalMinPrice -= (oldQuant-newQuant)*parseFloat(itemRow[2].innerHTML);
    summedPrice.innerHTML = totalMinPrice.toFixed(2);
  }
  else {
    totalMinPrice += (newQuant-oldQuant)*parseFloat(itemRow[2].innerHTML);
    summedPrice.innerHTML = totalMinPrice.toFixed(2);
  }
};

var adjustPrice = function() {
  var itemName = prompt('Please supply the name of the item as it is written in the list');
  var newPrice = prompt('Please enter the new price per item');
  var itemRow = document.getElementById(itemName).cells;
  var oldPrice = parseFloat(itemRow[2].innerHTML);
  itemRow[2].innerHTML = parseFloat(newPrice);

  var summedPrice = document.getElementById("price-here");

  if (oldPrice > newPrice) {
    totalMinPrice -= (oldPrice-newPrice)*Number(itemRow[1].innerHTML);
    summedPrice.innerHTML = totalMinPrice.toFixed(2);
  }
  else {
    totalMinPrice += (newPrice-oldPrice)*Number(itemRow[1].innerHTML);
    summedPrice.innerHTML = totalMinPrice.toFixed(2);
  }
};

var markItem = function() {
  var itemName = prompt('Please supply the name of the item as it is written in the list');
  var itemRow = document.getElementById(itemName).cells;
  var checked = "&#9989;";

  itemRow[3].innerHTML = checked;
};

document.getElementById("foot01").innerHTML =
"<p>&copy;  " + new Date().getFullYear() + " <a href=\"http://emiliocorpus.github.io/index.html\">Emilio Corpus</a>. All rights reserved.</p>";
