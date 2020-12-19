
import reddit from './redditapi';
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const searchTerm = searchInput.value;
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;
    const searchLimit = document.getElementById('limit').value;

    if(searchTerm == ''){
        // Show Message
        showMessage("Please add a search term!",'alert-danger');
    }

  searchInput.value = '';

//   SEARCH REDDIT !-------------
    reddit.search(searchTerm, searchLimit, sortBy)
    .then(results =>{
        let output = '<div class="card-columns>';
        results.forEach(post =>{
            let image = post.preview ? post.preview.images[0].source.url : 'https://wi-images.condecdn.net/image/o4EypqjWnL2/crop/405/f/aaaoriginal-1.jpg';
            output+=`
        <div class="card">
        <img class="card-img-top" src="${image}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${truncateString(post.selftext,100)}</p>
            <a href="${post.url}"  target="_blank"class="btn btn-primary">READ MORE</a>
            <span class="badge badge-secondary">Subreddit:${post.subreddit}</span>
            <span class="badge badge-dark">Score:${post.score}</span>
        </div>
        </div>
            `;
        })
        output += '</div>';
        document.getElementById('results').innerHTML = output;
    })
})


// SearchTerm Function
function showMessage(message, className){
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    // Add Textdiv
    div.append(document.createTextNode(message));

    const searchContainer = document.getElementById('search-container');
    const search = document.getElementById('search');
    searchContainer.insertBefore(div,search);
    setTimeout(()=> document.querySelector('.alert').remove(),1500);
}   


// Truncate Text
function truncateString(myString, limit) {
    const shortened = myString.indexOf(' ', limit);
    if (shortened == -1) return myString;
    return myString.substring(0, shortened);
}