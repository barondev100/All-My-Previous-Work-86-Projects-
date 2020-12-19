let fact = document.querySelector("#fact");
let factText = document.querySelector("#factText");
let numberInput = document.querySelector("#numberInput");

numberInput.addEventListener('input', getFactFetch);

// Function getFactAjax

// function getFactAjax(){
//     var number = numberInput.value;

//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", "http://numbersapi.com/"+number);

//     xhr.onload = function(){
//         if(this.status == 200 && number != ''){
//             fact.style.display = "block";
//             factText.innerHTML = this.responseText;
//         }else if(number == ''){
//             fact.style.display = 'none';
//         }
        
//     }
//     xhr.send();
// }



// Fetch Api
function getFactFetch(){
    var number = numberInput.value;
    fetch("http://numbersapi.com/"+number)
    .then(response =>{
        return response.text();
    }).then(data =>{
        if(number != ''){
            fact.style.display = "block";
            factText.innerHTML = data;
        }else if(number == ''){
            fact.style.display = 'none';
        }
       
    })
    .catch(error => console.log(error));
}