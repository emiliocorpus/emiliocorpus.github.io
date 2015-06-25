var totalMinPrice = 0.00;
var item = document.getElementById('item');
var quantity = document.getElementById('quantity');
var price = document.getElementById('price');
var error = document.getElementById('error');
var notChecked = "&#10060;";

var addItem = function() {
  if (item.value==='') {
    document.getElementById('error').innerHTML = 'Please enter an item in the "Item:" field';
  }
  else {
    var table = document.getElementById("grocery-table");
    var newItem = table.insertRow();
    newItem.id = item.value;
    var itemCol = newItem.insertCell(0);
    var quantCol = newItem.insertCell(1);
    var priceCol = newItem.insertCell(2);
    var checkedCol = newItem.insertCell(3);

      itemCol.innerHTML = item.value;
      quantCol.innerHTML = quantity.value;
      priceCol.innerHTML = price.value;
      checkedCol.innerHTML = notChecked;

    totalMinPrice += (quantity.value * price.value);
    var summedPrice = document.getElementById("price-here");
    summedPrice.innerHTML = totalMinPrice.toFixed(2);
    document.getElementById('error').innerHTML = '';
    item.value = '';
  }
};

var removeItem = function(){

  if (!document.getElementById(item.value)) {
    document.getElementById('error').innerHTML = 'Cannot remove item, item does not exist';
  }
  else {
    var toBeDeleted = document.getElementById(item.value);
    totalMinPrice -= Number(toBeDeleted.cells[1].innerHTML) * parseFloat(toBeDeleted.cells[2].innerHTML);
    toBeDeleted.remove();
    var summedPrice = document.getElementById("price-here");
    summedPrice.innerHTML = totalMinPrice.toFixed(2);
    document.getElementById('error').innerHTML = '';
  }
};

var adjustQuantity = function() {

  if (!document.getElementById(item.value)) {
    document.getElementById('error').innerHTML = 'Cannot ajust quantity, item does not exist';
  }

  else {
    var newQuant = quantity.value;
    var itemRow = document.getElementById(item.value).cells;
    var oldQuant = parseFloat(itemRow[1].innerHTML);
    itemRow[1].innerHTML = parseFloat(newQuant);

    var summedPrice = document.getElementById("price-here");
    document.getElementById('error').innerHTML = '';
    if (oldQuant > newQuant) {
      totalMinPrice -= (oldQuant-newQuant)*parseFloat(itemRow[2].innerHTML);
      summedPrice.innerHTML = totalMinPrice.toFixed(2);
    }
    else {
      totalMinPrice += (newQuant-oldQuant)*parseFloat(itemRow[2].innerHTML);
      summedPrice.innerHTML = totalMinPrice.toFixed(2);
    }
  }
};

var adjustPrice = function() {
  if (!document.getElementById(item.value)) {
    document.getElementById('error').innerHTML = 'Cannot adjust price, item does not exist';
  }

  else {
    var newPrice = price.value;
    var itemRow = document.getElementById(item.value).cells;
    var oldPrice = parseFloat(itemRow[2].innerHTML);
    itemRow[2].innerHTML = parseFloat(newPrice);

    var summedPrice = document.getElementById("price-here");
    document.getElementById('error').innerHTML = '';
    if (oldPrice > newPrice) {
      totalMinPrice -= (oldPrice-newPrice)*Number(itemRow[1].innerHTML);
      summedPrice.innerHTML = totalMinPrice.toFixed(2);
    }
    else {
      totalMinPrice += (newPrice-oldPrice)*Number(itemRow[1].innerHTML);
      summedPrice.innerHTML = totalMinPrice.toFixed(2);
    }
  }
};

var markItem = function() {
  if (!document.getElementById(item.value)) {
    document.getElementById('error').innerHTML = 'Cannot check item, item does not exist';
  }
  else {
    var itemRow = document.getElementById(item.value).cells;
    var checked = "&#9989;";

    itemRow[3].innerHTML = checked;
    document.getElementById('error').innerHTML = '';
  }
};

var digitsOnly = /[1234567890]/g;
var integerOnly = /[0-9\.]/g;


function restrictCharacters(myfield, e, restrictionType) {
  if (!e)
    var e = window.event
    if (e.keyCode)
      code = e.keyCode;
    else if (e.which)
      code = e.which;
    var character = String.fromCharCode(code);

  if (!e.ctrlKey && code!=9 && code!=8 && code!=36 && code!=37 && code!=38 && (code!=39 || (code==39 && character=="'")) && code!=40) {
    if (character.match(restrictionType)) {
      return true;
    } else {
      return false;
    }

  }
};


document.getElementById("foot01").innerHTML =
"<p>&copy;  " + new Date().getFullYear() + " <a href=\"http://emiliocorpus.github.io/index.html\">Emilio Corpus</a>. All rights reserved.</p>";
