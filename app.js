const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
const homeIcon = document.getElementById('homeicon');
const userIcon = document.getElementById('usericon');

arrows.forEach((arrow,i)=>{
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click",()=>{
        const ratio = Math.floor(window.innerWidth/270);
        clickCounter ++;
        if(itemNumber-(4 + clickCounter) + (4-ratio) >= 0){
     movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value-300}px)`;}
      else{
        movieLists[i].style.transform  = `translateX(0)`;
        clickCounter=0;

      }
        });


});
function handleSidebarClick(iconId) {
    [homeIcon,userIcon].forEach(icon => {
        icon.classList.remove('active');
    });

    document.getElementById(iconId).classList.add('active');

  
    if (iconId === 'homeicon') {
        window.location.href = 'index.html';
    } else if (iconId === 'usericon') {
      
        window.location.href = 'user.html'; 
    }
}

homeIcon.addEventListener('click', () => handleSidebarClick('homeicon'));
userIcon.addEventListener('click', () => handleSidebarClick('usericon'));


function searchMovies() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();

    
    const searchResultsContainer = document.querySelector('.search-results');
    searchResultsContainer.innerHTML = '';

    movieLists.forEach((movieList, index) => {
        const movieListItems = movieList.querySelectorAll('.movie-list-item');

        movieListItems.forEach((item) => {
            const title = item.querySelector('.movie-list-item-title').innerText.toLowerCase();
            const description = item.querySelector('.movie-list-item-desc').innerText.toLowerCase();

           
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
               
                const clone = item.cloneNode(true);
                searchResultsContainer.insertBefore(clone, searchResultsContainer.firstChild);
            }
        });
    });

  
    if (searchResultsContainer.children.length === 0) {
        searchResultsContainer.innerHTML = '<p>No results found.</p>';
    }
}

document.getElementById('searchInput').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        searchMovies();
    }
});
function toggleProfileOptions() {
    var profileBox = document.getElementById("profileBox");
    profileBox.classList.toggle("hidden");
}

function logout() {
    alert("Logging out...");
    window.location.href = "login.html"; 
}

document.getElementById("input").innerHTML=localStorage.getItem("user-name");
