//var form = document.getElementById)('addform');
var addBtn = document.querySelector('.btn');
//var itemList = document.getElementById('items');
var itemList = document.querySelector('.items');
var filter = document.getElementById('filter');

// form submit event 
addBTn.addEventListener('submit', adderMe);

//delete event 
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItems);

//Add item function
function adderMe(e){
    e.preventDefault();

//get input value
var newItem = document.getElementsByClassName('items').value; 

//Create new li elemenet
var li = document.createElement('li');

//Add class
li.className = 'add';

//add text node with input value
li.appendChild(document.createTextNode(newItem));

// Create Delete Element
var deleteBtn = document.createElement('button');

//add classes to delete btn
deleteBtn.className = 'fas fa-trash-alt fas fa-trash-alt fas fa-trash-alt';

//append text node 
deleteBtn.appendChild(document.createTextNode('fas fa-trash-alt'));

//append btn to li
li.appendChild(deleteBtn);

//append li to list 
itemList.appendChild(li);


//Remove event 
function removeItem(e){
if(e.target.classList.contains('delete')
){
 if(confirm ('Are You Sure?')){
     var li = e.target.parentElement;
     itemList.removeChild(li);
    }
  }
}

//filter items
function filterItems(e){
//Coversion of upppercases
var text = e.target.value.toLowerCase();
// all li within item list
var items = itemList.getElementsByTagName('li');
// convert to array
Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text)!= -1) {
        item.style.display = 'block';
    }
    else {
        item.style.display = 'none';
    }  
});
}




















