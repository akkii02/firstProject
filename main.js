// var headerTitle = document.getElementById('header-title');
// var mainTittle = document.getElementById('main-header');
// var addItems = document.getElementById('title');
// console.log(headerTitle.textContent);
// headerTitle.textContent = 'Hello';
// headerTitle.style.color = 'black';
// console.log(mainTittle)
// mainTittle.style.border = '5px solid black';
// console.log(addItems.textContent)
// addItems.style.color='green';
// addItems.fontWeight = 'Bold';



// var addNewItems = document.getElementsByClassName('list-group-item');

// addNewItems[2].style.backgroundColor = 'green';
// for(let i=0;i<addNewItems.length;i++){
//     addNewItems[i].style.fontWeight = 'bold';
// }

// Using getElementsByClassName
// var items = document.getElementsByClassName('list-group')[0];
// var newLi = document.createElement('li');
// newLi.textContent = 'Item 4';
// items.appendChild(newLi);

// var  newItem = document.getElementById('items');
// var newLi5 = document.createElement('li');
// newLi5.textContent = 'Item 6';
// newItem.appendChild(newLi5)

// document.addEventListener('DOMContentLoaded', function() {

//     var secondItem = document.querySelector('#items li:nth-child(2)');
//     secondItem.style.backgroundColor = 'green';
//       var thirdItem = document.querySelector('#items li:nth-child(3)');
//     thirdItem.style.display = 'none';
//   });

//   var items = document.querySelectorAll('#items li');
// if (items.length > 1) {
//   items[1].style.color = 'green';
// }
// var items = document.querySelectorAll('#items li');

// for (var i = 0; i < items.length; i++) {
//     items[i].style.fontWeight = 'bold';
//   if (i % 2 === 0) { 
//     items[i].style.backgroundColor = 'green';
//     items[i].style.color = 'white';
//   }
// }






// Traversing in Dom




var items = document.querySelector('#items');
//parentNode

//console.log(items.parentNode)
//items.parentNode.style.backgroundColor = '#28a745'

// parentElement
//console.log(items.parentElement.parentEl.ement.parentElement)
//items.parentNode.style.backgroundColor = '#28a745'

//childNode
//console.log(items.childNodes)

//childrenNode
//console.log(items.children)
//items.children[1].style.backgroundColor = 'red'

//firstChild
//console.log(items.firstChild)

//firstElementChild
//console.log(items.firstElementChild)
//items.firstElementChild.textContent = 'Akki';

// lastChild
// console.log(items.lastElementChild.textContent)
// items.lastElementChild.textContent = 'Akshay'
// items.lastElementChild.style.fontWeight = 'bold';
// items.lastElementChild.style.color = 'green'

//nextSibling
// console.log(items.nextSibling)
// console.log(items.nextElementSibling)
// items.nextElementSibling.textContent = 'Aks'

//previousSibling
// console.log(items.previousSibling)
// console.log(items.previousElementSibling)
// items.previousElementSibling.style.backgroundColor = 'red'
//createElement
//Create a div
  var newDiv = document.createElement('div');

  //Add class
  newDiv.className = "hello";

  //Add Id
  newDiv.id = "hello1";

  //Add att
  newDiv.setAttribute('title','hello div');

  //create text node
  var newDivText = document.createTextNode('Heelo World');

  //add text to div 
newDiv.appendChild(newDivText)

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

  console.log(newDiv.textContent)
newDiv.style.fontSize = '30px';


  container.insertBefore(newDiv,h1)