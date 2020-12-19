const search = document.getElementById("search");
const matchList = document.getElementById("match-list");



search.addEventListener('input',function(){
    searchStates(search.value);
})

async function searchStates(searchText){
    const res = await fetch('states.json');
    const states = await res.json();
    console.log(states);


    // Regex!
    let matches = states.filter(function(state){
        const regEx = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regEx) || state.abbr.match(regEx);
    });

    if(searchText.length === 0){
        matches = [];
        matchList.innerHTML = '';
    }

    outputHtml(matches);
}

function outputHtml(matches){
    if(matches.length > 0){
        const html = matches.map(function(match){
            return `<div class="card card-body mb-4">
                <h4>${match.name} (${match.abbr}) <span class='text-primary'>${match.capital}</span></h4>
                <small>LAT: ${match.lat} / LONG: ${match.long}</small>
            </div>`
        }).join('');
        matchList.innerHTML = html;
        
    }
}