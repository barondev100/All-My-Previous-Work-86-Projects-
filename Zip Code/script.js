
    // Start Script
    // Submit Document
    document.getElementById('zipForm').addEventListener('submit',getLocationInfo);
    document.querySelector('body').addEventListener('click',deleteLocation);


    // getLocationInfo
    function getLocationInfo(e){
        e.preventDefault();
        // Get Value From Input;
        const zip = document.querySelector('#zip').value;
        // Make Request
        fetch(`http://api.zippopotam.us/us/${zip}`)
            .then(response => {
                if(response.status != 200){
                    showIcon('remove');
                    document.querySelector('#output').innerHTML = 
                    `
                        <article class="message  is-danger">
                            <div class="message-body">
                            Invalid ZipCode, Please Try Again!
                            </div>
                        </article>
                    `;
                    throw Error(response.statusText);
                }else{
                    showIcon('check');
                    return response.json();
                }
            })
            .then(data=>{
                // Show Location Info
                let output = '';
                data.places.forEach(place=>{
                    output += `
                        <article class="message is-primary">
                            <div class="message-header">
                                <p>Location Info</p>
                                <button class="delete"></button>
                                <div class="message-body">
                                    <ul>
                                        <li><strong>City: ${place['place name']}</strong></li>
                                        <li><strong>State: ${place['state']}</strong></li>
                                        <li><strong>Longitude: ${place['longitude']}</strong></li>
                                        <li><strong>Latitude: ${place['latitude']}</strong></li>
                                    </ul>
                                </div>
                            </div>
                        </article>
                    `;
                })
                document.querySelector('#output').innerHTML = output;
            })
            .catch(err => {
                console.log(err);
            })
    }

// Function showIcon
function showIcon(icon){
    // Clear Icon First
    document.querySelector('.icon-remove').style.display="none";
    document.querySelector('.icon-check').style.display="none";
    document.querySelector(`.icon-${icon}`).style.display="inline-flex";
}


function deleteLocation(e){
    if(e.target.className === "delete"){
        document.querySelector('.message').remove();
        document.querySelector('#zip').value = '';
        document.querySelector('.icon-check').remove();
    }
}


