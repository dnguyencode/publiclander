// This Javascript file contains all the main functionality of the website

let form = document.querySelector('form')
let itemList = document.querySelector('ul');
let boxes = document.querySelectorAll('.box');
let div = document.querySelector('div');

// add the submit event to addItem
form.addEventListener('submit',addItem);
// form delete event
itemList.addEventListener('click',deleteItem);
// box color event
document.querySelector('button').addEventListener('click', changeBoxColor);
// div color event
document.querySelector('div').addEventListener('mousemove', changeQuoteColor)

function addItem (e){
    e.preventDefault();
    if(document.querySelector('input[type="text"]').value != ""){
        // create new list item with text node
        li = document.createElement('li')

        // Add Text node to li item
        li.appendChild(
            document.createTextNode(
            document.querySelector('input[type="text"]').value)
            )
    
        // append input value to list item
        itemList.appendChild(li)
        // clear input field
        document.querySelector('input[type="text"]').value = "" 
    }
}

function deleteItem(e){
    itemList.removeChild(e.target) // remove the clicked item
}

function changeBoxColor(){
    boxes[0].style.backgroundColor = "#" + 
    Math.floor(Math.random()*16777215).toString(16);
    boxes[0].className = 'box-filled';
    boxes = document.querySelectorAll('.box');    
    if(boxes.length == 0 ){
        document.querySelector('button').remove();
    }  
}

function changeQuoteColor(q){
    div.style.backgroundColor = `rgb(${q.offsetX},${q.offsetY},50)`
}

