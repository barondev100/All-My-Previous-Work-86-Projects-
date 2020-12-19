var form = document.getElementById("addForm"); //Form
var itemList = document.getElementById("items"); //Ul
var filter = document.getElementById('filter');
// Form Submit Event
form.addEventListener('submit', addItem);
// addItem
function addItem(e){
    e.preventDefault();

    //Get Input Value Of The Additem Field
    var newItem = document.getElementById("item").value;

    // Create New Li Element
    var li = document.createElement("li");
    li.className = "list-group-item";
    console.log(li);

    // Add Text Node With Input Value
    li.appendChild(document.createTextNode(newItem));

    itemList.appendChild(li);
    //Add Hide Button to li
    var hideButton = document.createElement("button");
    hideButton.setAttribute("class", "btn btn-danger btn-sm float-right");
    hideButton.setAttribute("id","hideButton");
    hideButton.appendChild(document.createTextNode("X"));
    li.appendChild(hideButton);

}

itemList.addEventListener("click", removeItem);
function removeItem(e){
    if(e.target.classList.contains("btn-danger")){
        console.log("Delete Button Clicked!");
        if(confirm("Are You Sure?")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


// Filtering through the items
filter.addEventListener("keyup", function(e){
    // Convert Items To Lower Case
    var text = e.target.value.toLowerCase();
    
    var items = itemList.getElementsByTagName("li");
    // Convert The HTML collection to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    })
})
