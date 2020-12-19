// Get Input Element
let filterInput = document.getElementById("filterInput");
// Adding EventListener
filterInput.addEventListener("keyup",filterNames);
// EventListener Function
function filterNames(){
    //Get Value Of Input
    let filterValue =  document.getElementById("filterInput").value.toUpperCase();

    // Get Names
    let ul = document.getElementById("names");

    // Get ITems
    let li = ul.querySelectorAll('li.collection-item');

    // Loop Through Collection Items

    for(let i = 0; i < li.length;i++){
        let a = li[i].getElementsByTagName('a')[0];
        // If Matches
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = "";
        }else{
            li[i].style.display = 'none';
        }
    }
}