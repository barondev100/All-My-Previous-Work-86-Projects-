const messageInput = document.querySelector('#message-input');
const messageDelivered = document.querySelector('#message_delivered');
const form = document.querySelector('#main-form');


form.addEventListener('submit', messageFunction)

function messageFunction(e){
    e.preventDefault();
    let messageValue = messageInput.value;
    messageDelivered.innerHTML = messageValue;

    if(messageInput.value === ''){
        alert('Please Put In Something!');
    }
}


