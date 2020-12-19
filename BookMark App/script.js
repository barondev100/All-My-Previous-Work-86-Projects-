document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e){
    e.preventDefault();
    var siteName = document.getElementById('siteName').value;
    var siteURL = document.getElementById('siteURL').value;
    if(!validateForm(siteName,siteURL)){
        return false;
    }
    var bookmark = {
        name: siteName,
        url: siteURL
    }

    if(localStorage.getItem('bookmarks') === null){
        var bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }else{
        var bookmarks =  JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    document.getElementById('myForm').reset();
    fetchBookmarks();
}

function fetchBookmarks(){
    var bookmarks =  JSON.parse(localStorage.getItem('bookmarks'));
    var bookmarksResults = document.getElementById('bookmarksResults');
    bookmarksResults.innerHTML = '';
    for(var i = 0; i < bookmarks.length;i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResults.innerHTML +=  '<div class="well bg-dark">'+
        '<h3 class="text-primary p-3">'+name+
        ' <a class="btn btn-primary" target="_blank" href="'+url+'">Visit</a> ' +
        ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
        '</h3>'+
        '</div>';
        
    }
}


function deleteBookmark(url){
    var bookmarks =  JSON.parse(localStorage.getItem('bookmarks'));
    // Loop Through BookMarks!
    for(var i = 0; i < bookmarks.length;i++){
        if(bookmarks[i].url === url){
            bookmarks.splice(i,1);
        }
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    fetchBookmarks();

}


function validateForm(siteName, siteURL){
    if(!siteName || !siteURL){
      alert('Please fill in the form');
      return false;
    }
  
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
  
    if(!siteURL.match(regex)){
      alert('Please use a valid URL');
      return false;
    }
  
    return true;
  }
