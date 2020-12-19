// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector('.clear-btn');
// edit option
let editElement;
let editFlag = false;
let editID = '';

// Submit Form
form.addEventListener('submit',addItem)
// Clear Items
clearBtn.addEventListener('click',clearItems)

window.addEventListener('DOMContentLoaded',setupItems)
// Delete Button
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    
    const id = new Date().getTime().toString();
    if(value && !editFlag ){

        createListItem(id,value)
   
        //Display Alert
        displayAlert('Item Added To The List', 'success');

        //Show Container
        container.classList.add('show-container')
        
        //Local Storare
        addToLocalStorage(id,value)
        //Set back To Default
        setBackToDefault()
    }else if(value  && editFlag){
        editElement.innerHTML = value;
        displayAlert('value change', 'success');
        // Edit Local Storage
        editLocalStorage(editID,value)
        setBackToDefault();
    }else{
        displayAlert('Please Enter An Actual Value', 'danger')
    }
}

// Display Alert

function displayAlert(text,action){
    alert.textContent = text
    alert.classList.add(`alert-${action}`)
    // Remove Alert
    setTimeout(()=>{
        alert.textContent = ''
        alert.classList.remove(`alert-${action}`)
    },2000)
}



function setBackToDefault(){
    grocery.value = ''
    editFlag = false;
    editID = '';
    submitBtn.textContent = 'submit';
}


function addToLocalStorage(id, value){
    const grocery = {id:id,value:value};
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem('list', JSON.stringify(items))
    console.log(items)
}       


//Clear Items Function
function clearItems(){
    const items = document.querySelectorAll('.grocery-item');

    if(items.length > 0){
        items.forEach((item)=>{
            list.removeChild(item);
        })
    }

    container.classList.remove('show-container');
    displayAlert('Empty List', 'danger')
    setBackToDefault();
    localStorage.removeItem('list');
}



function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length === 0){
        container.classList.remove('show-container')
    }
    displayAlert('Item Removed', 'danger')
    setBackToDefault();
    //Remove From Local Storage
    removeFromLocalStorage(id)
}

function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    // Set Edit Item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // Set Form Value
    grocery.value = editElement.innerHTML
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit";

}


function removeFromLocalStorage(id){
    let items = getLocalStorage();

    items = items.filter((item)=>{
        if(item.id !== id){
            return item
        }
    })
    localStorage.setItem('list', JSON.stringify(items))
} 



function editLocalStorage(id, value){
    // localStorage.setItems('orange', JSON.stringify(['item','item2']))
    let items = getLocalStorage();
    items = items.map(function(item){
        if(item.id === id){
            item.value = value;
        }
        return item;
    })
    localStorage.setItem('list', JSON.stringify(items))
}

// let oranges = JSON.parse(localStorage.getItem('orange'));
// console.log(oranges)

// localStorage.removeItem('bookmarks')

function getLocalStorage(){
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')): [];
}


function setupItems(){
    let items = getLocalStorage();
    if(items.length > 0){
        items.forEach((item)=>{
            createListItem(item.id, item.value)
        })
        container.classList.add('show-container')
    }
}

function createListItem(id, value){
    const element = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("grocery-item");
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
                <!-- edit btn -->
                <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
                </button>
                <!-- delete btn -->
                <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
                </button>
            </div>
            `;
        const deleteBtn = element.querySelector(".delete-btn");
deleteBtn.addEventListener("click", deleteItem);
const editBtn = element.querySelector(".edit-btn");
editBtn.addEventListener("click", editItem);


        

    // Append Child 
        list.appendChild(element);
}