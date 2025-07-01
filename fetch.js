const searchInput = document.getElementById("searchField");
const found = document.getElementById("found");
const searchSection = document.getElementById("searchSection");

function search(){
    const eminemSection = document.getElementById("eminem");
    const metallicaSection = document.getElementById("metallica");
    const queenSection = document.getElementById("queen");
    eminemSection.classList = "d-none";
    metallicaSection.classList = "d-none";
    queenSection.classList = "d-none";

const ricerca = searchInput.value;
fetchSongs(ricerca, true);
}


function fetchSongs(artist, search = false){
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        renderSongs(data.data, artist, search);
    })
}

fetchSongs("Queen");
fetchSongs("eminem");
fetchSongs("Metallica");


function renderSongs(songs, artist, search = false) {
    let artistSection = document.getElementById(`${artist}Section`);
    let artistContainer = document.getElementById(artist);

    if (search) {
        artistSection = searchSection;
        artistContainer = found;
    }
    // svuota contenuto vecchio
    artistSection.innerHTML = "";
    for (let song of songs) {
        const col = document.createElement("div");
        col.className= "col mb-4";

        const songCard = document.createElement("div");
        songCard.className = "card h-100 shadow-sm";
        col.appendChild(songCard);
        
        const songImg = document.createElement("img");
        songImg.src = song.album.cover_medium;
        songImg.className = "card-img-top img-fluid";
        songImg.setAttribute("alt", song.title);
        songCard.appendChild(songImg);

        const songBody = document.createElement("div");
        songBody.className = "card-body";
        songCard.appendChild(songBody);
        
        const songTitle = document.createElement("h5");
        songTitle.className = "card-title text-dark";
        songTitle.textContent = song.title;
        songBody.appendChild(songTitle);

        const songAlbum = document.createElement("p");
        songAlbum.className = "card-text text-secondary";
        songAlbum.textContent = song.album.title;
        songBody.appendChild(songAlbum);
        artistSection.appendChild(col);

        const audio = document.createElement("audio");
        audio.className = "w-100";
        audio.setAttribute("controls", "true");
        audio.setAttribute("src", song.preview);
        songBody.appendChild(audio);



    }
    // mostra sezione per l'artista
    artistContainer.classList.remove("d-none");
}
    


