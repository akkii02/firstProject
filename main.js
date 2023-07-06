var headerTitle = document.getElementById('header-title');
var mainTittle = document.getElementById('main-header');
var addItems = document.getElementById('title');
console.log(headerTitle.textContent);
headerTitle.textContent = 'Hello';
headerTitle.style.color = 'black';
console.log(mainTittle)
mainTittle.style.border = '5px solid black';
console.log(addItems.textContent)
addItems.style.color='green';
addItems.fontWeight = 'Bold';



var addNewItems = document.getElementsByClassName('list-group-item');

addNewItems[2].style.backgroundColor = 'green';
for(let i=0;i<addNewItems.length;i++){
    addNewItems[i].style.fontWeight = 'bold';
}