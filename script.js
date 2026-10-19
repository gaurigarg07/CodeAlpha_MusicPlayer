const audio = document.getElementById("audio-player");
const playButton = document.getElementById("play-btn");
const playerTitle = document.getElementById("player-title");
const playerArtist = document.getElementById("player-artist");
const playerImage = document.getElementById("player-image");
const currentTime = document.getElementById("current-time");
const duration = document.getElementById("duration");
const progressBar = document.getElementById("progress-bar");
const progressFill = document.getElementById("progress-fill");
const heartButton = document.getElementById("heart-btn");
const volumeBar = document.getElementById("volume-bar");
const volumeFill = document.getElementById("volume-fill");
const shuffleButton = document.getElementById("shuffle-btn");
const repeatButton = document.getElementById("repeat-btn");
const recent1 = document.getElementById("recent-1");
const recent2 = document.getElementById("recent-2");
const recent3 = document.getElementById("recent-3");
const recent4 = document.getElementById("recent-4");
const queueList = document.getElementById("queue-list");
const nowPlayingImage = document.querySelector(".now-playing-card img");
const nowPlayingTitle = document.querySelector(".now-playing-card h4");
const nowPlayingArtist = document.querySelector(".now-playing-card p");
const rightPrevButton = document.querySelector(".right-prev");
const rightnextButton = document.querySelector(".right-next");
const rightShuffleButton = document.querySelector(".right-shuffle-btn");
const rightrepeatButton = document.querySelector(".right-repeat-btn");
const rightProgressFill  = document.querySelector(".right-progress div");
const rightCurrentTime = document.querySelector(".right-current-time");
const rightDuration = document.querySelector(".right-duration");
const rightProgressBar = document.getElementById("right-progress-bar");

const songs = [
    {
        title: "Golden Hour",
        artist: "JVKE",
        image: "images/golden-hour.jpg",
        audio: "songs/golden hour.mp3",
        liked: false   
    },
    {
        title: "Die For You",
        artist: "The Weeknd",
        image: "images/die-for-you.jpg",
        audio: "songs/golden hour.mp3",
        liked: false
    },
    {
        title: "Sweater Weather",
        artist: "The Neighbourhood",
        image: "images/sweater-weather.jpg",
        audio: "songs/golden hour.mp3 ",
        liked: false

    },
    {
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        image: "images/i-wanna-be-yours.jpg",
        audio: "songs/golden hour.mp3",
        liked: false

    },
    {
        title: "Until I Found You",
        artist: "Stephen Sanchez",
        image: "images/until-i-found-you.jpg",
        audio: "songs/golden hour.mp3",
        liked: false

    },
    {
        title: "Daylight",
        artist: "David Kushner",
        image: "images/daylight.jpg",
        audio: "songs/golden hour.mp3",
        liked: false

    },
    {
        title: "As It Was",
        artist: "Harry Styles",
        image: "images/as-it-was.jpg",
        audio: "songs/golden hour.mp3",
        liked: false

    },
    {
        title: "Perfect",
        artist: "Ed Sheeran",
        image: "images/perfect.jpg",
        audio: "songs/golden hour.mp3",
        liked: false

    },
    {
        title: "Dandelions",
        artist: "Ruth B.",
        image: "images/dandelions.jpg",
        audio: "songs/golden hour.mp3",
        liked: false

    },
    {
        title: "Lovely",
        artist: "Billie Eilish",
        image: "images/lovely.jpg",
        audio: "songs/golden hour.mp3",
        liked: false

    },
    {
        title: "Atlantis",
        artist: "Seafret",
        image: "images/atlantis.jpg",
        audio: "songs/golden hour.mp3",
        liked: false

    },
    {
        title: "Another Love",
        artist: "Tom Odell",
        image: "images/another-love.jpg",
        audio: "songs/golden hour.mp3",
        liked: false

    },
    {
        title: "Those Eyes",
        artist: "New West",
        image: "images/those-eyes.jpg",
        audio: "songs/golden hour.mp3",
        liked: false

    },
    {
        title: "Line Without a Hook",
        artist: "Ricky Montgomery",
        image: "images/line-without-a-hook.jpg",
        audio: "songs/golden hour.mp3",
        liked: false

    },
    {
        title: "Here With Me",
        artist: "d4vd",
        image: "images/here-with-me.jpg",
        audio: "songs/golden hour.mp3",
        liked: false

    },
    {
        title: "The Night We Met",
        artist: "Lord Huron",
        image: "images/the-night-we-met.jpg",
        audio: "songs/golden hour.mp3",
        liked: false

    },
    {
        title: "Birds of a Feather",
        artist: "Billie Eilish",
        image: "images/birds-of-a-feather2.webp",
        audio: "songs/golden hour.mp3",
        liked: false

    },
    {
        title: "Golden",
        artist: "Harry Styles",
        image: "images/golden.jpg",
        audio: "songs/golden hour.mp3",
        liked: false

    },
    {
        title: "Love Yourself",
        artist: "Justin Bieber",
        image: "images/love-yourself.jpg",
        audio: "songs/golden hour.mp3",
        liked: false

    },
    {
        title: "Photograph",
        artist: "Ed Sheeran",
        image: "images/photograph.jpg",
        audio: "songs/golden hour.mp3",
        liked: false

    },
    {
    title: "Espresso",
    artist: "Sabrina Carpenter",
    image: "images/espresso.jpg",
    audio: "songs/golden hour.mp3",
    liked: false
},
{
    title: "End Of Beginning",
    artist: "Djo",
    image: "images/end-of-beginning.jpg",
    audio: "songs/golden hour.mp3",
    liked: false
},
{
    title: "Happier",
    artist: "Olivia Rodrigo",
    image: "images/happier.jpg",
    audio: "songs/golden hour.mp3",
    liked: false
},
{
    title: "Lover",
    artist: "Taylor Swift",
    image: "images/lover.jpg",
    audio: "songs/golden hour.mp3",
    liked: false
}
];

// MADE FOR YOU PLAYLISTS


const madeForYouPlaylists = {
    romantic: [
        "Until I Found You",
        "Perfect",
        "I Wanna Be Yours",
        "Those Eyes",
        "Die For You",
        "Dandelions",
        "Photograph",
        "Love Yourself",
        "The Night We Met",
        "Golden Hour"
    ],

    city: [
        "As It Was",
        "Die For You",
        "Golden",
        "Photograph",
        "Lovely",
        "Another Love",
        "Line Without a Hook",
        "Birds of a Feather",
        "Love Yourself",
        "Daylight"
    ],

    chill: [
        "Sweater Weather",
        "Dandelions",
        "Atlantis",
        "Here With Me",
        "The Night We Met",
        "Lovely",
        "Until I Found You",
        "Those Eyes",
        "Golden Hour",
        "Another Love"
    ],

    golden: [
        "Golden Hour",
        "Daylight",
        "Lovely",
        "The Night We Met",
        "Until I Found You",
        "Photograph",
        "Perfect",
        "Dandelions",
        "Birds of a Feather",
        "Sweater Weather"
    ]
};

let activePlaylistSongs = [];
let activePlaylistIndex = 0;

function playSong(song) {
    if (!song || !audio) return;

    const songIndex = songs.findIndex(function(item) {
        return item.title === song.title;
    });

    if (songIndex === -1) {
        console.warn("Song not found:", song.title);
        return;
    }

    currentSongIndex = songIndex;

    loadSong();
    addToRecentlyPlayed();

    // Wait until the new audio source is ready to begin loading.
    audio.play().catch(function(error) {
        if (error.name !== "AbortError") {
            console.error("Song could not play:", error);
        }
    });
}

function renderRecentlyAdded() {
    const recentCards = document.querySelectorAll(".added-cards");

    recentCards.forEach(function(card) {
        const songTitle = card.dataset.song;

        const song = songs.find(function(item) {
            return item.title === songTitle;
        });

        if (!song) {
            console.warn("Song not found:", songTitle);
            return;
        }

        // Update card details
        const image = card.querySelector(".card-img");
        const title = card.querySelector(".added-content");
        const artist = card.querySelector("h4");

        if (image) {
         image.loading = "lazy";
        image.decoding = "async";
            image.src = song.image;
            image.alt = song.title + " cover";
        }

        if (title) {
            title.textContent = song.title;
        }

        if (artist) {
            artist.textContent = song.artist;
        }

        // Play song when the card is clicked
        card.onclick = function() {
            activePlaylistSongs = [];
            activePlaylistIndex = 0;
            playSong(song);
        };
    });
}

document.addEventListener("DOMContentLoaded", function() {
    renderRecentlyAdded();
});


function startPlaylist(playlistName) {
    activePlaylistSongs = (madeForYouPlaylists[playlistName] || [])
        .map(title => songs.find(song => song.title === title))
        .filter(Boolean);

    if (activePlaylistSongs.length === 0) {
        console.warn("Playlist songs not found:", playlistName);
        return;
    }

    activePlaylistIndex = 0;
    playSong(activePlaylistSongs[0]);
}


let currentPlaylistName = null;

function updatePlaylistCardUI() {
    document.querySelectorAll(".card-section").forEach(function(card) {
        const button = card.querySelector(".icon");
        if (!button) return;

        const isActive =
            button.dataset.playlist === currentPlaylistName;

        card.classList.toggle("playing-playlist", isActive);

        button.textContent =
            isActive && audio && !audio.paused ? "❚❚" : "▶";
        button.setAttribute(
            "aria-label",
            isActive && audio && !audio.paused
                ? "Pause playlist"
                : "Play playlist"
        );
    });
}

// Handle clicks on Made For You playlist buttons
document.querySelectorAll(".card-section .icon").forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.stopPropagation();

        const playlistName = button.dataset.playlist;

        // If this playlist is already playing, pause it
        if (
            currentPlaylistName === playlistName &&
            audio &&
            !audio.paused
        ) {
            audio.pause();
            return;
        }

        // Otherwise start the selected playlist
        currentPlaylistName = playlistName;
        startPlaylist(playlistName);
        updatePlaylistCardUI();
    });
});

// Keep the button icon in sync with audio playback
if (audio) {
    audio.addEventListener("play", updatePlaylistCardUI);
    audio.addEventListener("pause", updatePlaylistCardUI);
    audio.addEventListener("ended", updatePlaylistCardUI);
}

document.querySelectorAll(".added-cards").forEach(card => {
    card.style.cursor = "pointer";

    card.addEventListener("click", event => {
        if (event.target.closest("button")) return;

        const title = card.dataset.song;
        const song = songs.find(item => item.title === title);

        if (!song) {
            console.warn("Song not found:", title);
            return;
        }

        // Individual song selected, so exit playlist mode
        activePlaylistSongs = [];
        activePlaylistIndex = 0;

        playSong(song);
    });
});


let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

songs.forEach(function(song) {
    song.liked = favourites.some(
        favourite => favourite.title === song.title
    );
});

songs.forEach(function(song) {
    song.liked = favourites.some(function(favourite) {
        return favourite.title === song.title;
    });
});

function saveFavourites() {
    favourites = songs.filter(function(song) {
        return song.liked;
    });

    localStorage.setItem("favourites", JSON.stringify(favourites));

    renderFavouriteSongs();
    updateLikeButtons();
}

function toggleFavourite(song) {
    if (!song) return;

    song.liked = !song.liked;

    saveFavourites();
}

function updateLikeButtons() {
    // Update the bottom player's heart
    if (heartButton) {
        heartButton.textContent =
            songs[currentSongIndex].liked ? "❤︎" : "♡";
    }

    // Update hearts on recently played cards
    const cards = [recent1, recent2, recent3, recent4];

    cards.forEach(function(card, index) {
        if (!card) return;

        const song = recentlyPlayed[index];
        const heart = card.querySelector(".favourite-icon");

        if (song && heart) {
            const matchingSong = songs.find(function(item) {
                return item.title === song.title;
            });

            heart.textContent =
                matchingSong && matchingSong.liked ? "❤︎" : "♡";
        }
    });
}

function renderFavouriteSongs() {
    const list = document.getElementById("favourite-songs-list");
    const count = document.getElementById("song-count");

    if (!list) return;

    // Use the main songs array so the player can play these songs
    const likedSongs = songs.filter(function(song) {
        return song.liked;
    });

    if (count) {
        count.textContent =
            likedSongs.length + (likedSongs.length === 1 ? " song" : " songs");
    }

    list.innerHTML = "";

    if (likedSongs.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No liked songs yet. Like a song to see it here ♡";
        message.className = "empty-favourites";
        list.appendChild(message);
        return;
    }

    likedSongs.forEach(function(song) {
        const row = document.createElement("div");
        row.className = "track-row";

        const image = document.createElement("img");
        image.src = song.image;
        image.alt = song.title;

        const info = document.createElement("div");
        info.className = "track-info";

        const title = document.createElement("h3");
        title.textContent = song.title;

        const artist = document.createElement("p");
        artist.textContent = song.artist;

        const heart = document.createElement("button");
        heart.className = "track-heart";
        heart.type = "button";
        heart.textContent = "❤︎";
        heart.setAttribute("aria-label", "Remove " + song.title + " from favourites");

        info.appendChild(title);
        info.appendChild(artist);

        row.appendChild(image);
        row.appendChild(info);
        row.appendChild(heart);

        // Clicking the heart removes the song
        heart.addEventListener("click", function(event) {
            event.stopPropagation();
            toggleFavourite(song);
        });

        // Clicking the row plays the song
        row.addEventListener("click", function() {
            currentSongIndex = songs.findIndex(function(item) {
                return item.title === song.title;
            });

            loadSong();
            addToRecentlyPlayed();

            if (audio) {
                audio.play().catch(function(error) {
                    console.log("Playback could not start:", error);
                });
            }
        });

        list.appendChild(row);
    });
}

document.querySelectorAll(".recent-cards .favourite-icon").forEach(function(heart) {
    heart.addEventListener("click", function(event) {
        event.stopPropagation();

        const card = heart.closest(".recent-cards");
        const cards = [recent1, recent2, recent3, recent4];
        const cardIndex = cards.indexOf(card);
        const recentSong = recentlyPlayed[cardIndex];

        if (!recentSong) return;

        const song = songs.find(function(item) {
            return item.title === recentSong.title;
        });

        toggleFavourite(song);
    });
});


let currentSongIndex = 0;
let queue =[];
let recentlyPlayed = JSON.parse(localStorage.getItem("recentlyPlayed")) || [];
let isShuffle = false;
let isRepeat = false;

function loadSong() {
    const song = songs[currentSongIndex];

    if (audio) audio.src = song.audio;
    if (playerTitle) playerTitle.textContent = song.title;
    if (playerArtist) playerArtist.textContent = song.artist;
    if (playerImage) playerImage.src = song.image;

    if (nowPlayingImage) nowPlayingImage.src = song.image;
    if (nowPlayingTitle) nowPlayingTitle.textContent = song.title;
    if (nowPlayingArtist) nowPlayingArtist.textContent = song.artist;

    if (currentTime) currentTime.textContent = "0:00";
    if (rightCurrentTime) rightCurrentTime.textContent = "0:00";
    if (progressFill) progressFill.style.width = "0%";
    if (rightProgressFill) rightProgressFill.style.width = "0%";

    if (heartButton) {
        heartButton.textContent = song.liked ? "❤︎" : "♡";
    }

    if (queueList) {
        prepareQueue();
    }
}
loadSong();
updateRecentlyPlayedCards();
renderFavouriteSongs();
updateLikeButtons();

const prevButton = document.getElementById("prev-btn");
  prevButton.addEventListener("click",function(){
    currentSongIndex--;
    if(currentSongIndex < 0){
        currentSongIndex = songs.length -1;
    }
    loadSong();
    addToRecentlyPlayed();
    audio.play();
    playButton.textContent ="❚❚";

  });

  
function getCurrentPlaybackList() {
    return activePlaylistSongs.length > 0
        ? activePlaylistSongs
        : songs;
}

function playNextSong() {
const playbackList = getCurrentPlaybackList();

if (playbackList.length === 0) return;  

const currentSong = songs[currentSongIndex];  
let nextSong;  

if (isShuffle && playbackList.length > 1) {  
    const availableSongs = playbackList.filter(function(song) {  
        return song.title !== currentSong.title;  
    });  

    const randomIndex = Math.floor(  
        Math.random() * availableSongs.length  
    );  

    nextSong = availableSongs[randomIndex];  
} else {  
    const currentIndex = playbackList.findIndex(function(song) {  
        return song.title === currentSong.title;  
    });  

    const nextIndex = currentIndex === -1  
        ? 0  
        : (currentIndex + 1) % playbackList.length;  

    nextSong = playbackList[nextIndex];  
}  

if (!nextSong) return;  

const mainIndex = songs.findIndex(function(song) {  
    return song.title === nextSong.title;  
});  

if (mainIndex === -1) return;  

currentSongIndex = mainIndex;  

loadSong();  
addToRecentlyPlayed();  

audio.play().catch(function(error) {  
    if (error.name !== "AbortError") {  
        console.error("Playback failed:", error);  
    }  
});

}

const nextButton = document.getElementById("next-btn");

if (nextButton) {
    nextButton.addEventListener("click", function () {
        playNextSong();
    });
}

if (rightnextButton) {
    rightnextButton.addEventListener("click", function () {
        playNextSong();
    });
}

function updateShuffleButtons() {
    [shuffleButton, rightShuffleButton].forEach(function(button) {
        if (!button) return;

        button.classList.toggle("active", isShuffle);
        button.setAttribute("aria-pressed", String(isShuffle));
    });
}

function updateRepeatButtons() {
    [repeatButton, rightrepeatButton].forEach(function(button) {
        if (!button) return;

        button.classList.toggle("active", isRepeat);
        button.setAttribute("aria-pressed", String(isRepeat));
    });
}

// Shuffle buttons
[shuffleButton, rightShuffleButton].forEach(function(button) {
    if (!button) return;

    button.addEventListener("click", function() {
        isShuffle = !isShuffle;
        updateShuffleButtons();

        console.log("Shuffle status:", isShuffle);
    });
});

// Repeat buttons
[repeatButton, rightrepeatButton].forEach(function(button) {
    if (!button) return;

    button.addEventListener("click", function() {
        isRepeat = !isRepeat;
        updateRepeatButtons();

        console.log("Repeat status:", isRepeat);
    });
});

updateShuffleButtons();
updateRepeatButtons();

if (audio) {
    audio.addEventListener("ended", function() {
        if (isRepeat) {
            audio.currentTime = 0;

            audio.play().catch(function(error) {
                console.error("Repeat playback failed:", error);
            });
        } else {
            playNextSong();
        }
    });
}

function formatTime(seconds) {

    const minutes = Math.floor(seconds / 60);      //calculating the minutes the song is at like 102/60=1.7 but we dont want .7 so for that math.floor it will give 1

    const remainingSeconds = Math.floor(seconds % 60);   //it will find the remaining sec % is used for the remainder.

    return minutes + ":" + String(remainingSeconds).padStart(2, "0");   //putting time together like we want 1:42 so min is 1 and in string remaining one ,padStart is for suppose song 1min 5sec without padstart it give 1:5 (no) with it it show 1:05
}

audio.addEventListener("loadedmetadata", function () {
   if(duration){
    duration.textContent = formatTime(audio.duration);
   }
    if(rightDuration){
     rightDuration.textContent = formatTime(audio.duration);
    }
});

function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) {
        return "0:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return minutes + ":" +
        String(remainingSeconds).padStart(2, "0");
}

// Update BOTH players while the song is playing
audio.addEventListener("timeupdate", function () {
    const current = audio.currentTime;
    const total = audio.duration;

    if (currentTime) {
        currentTime.textContent = formatTime(current);
    }

    if (rightCurrentTime) {
        rightCurrentTime.textContent = formatTime(current);
    }

    if (Number.isFinite(total) && total > 0) {
        const percentage = (current / total) * 100;

        if (progressFill) {
            progressFill.style.width = percentage + "%";
        }

        if (rightProgressFill) {
            rightProgressFill.style.width = percentage + "%";
        }
    }
});

// Update duration when a song loads
audio.addEventListener("loadedmetadata", function () {
    if (duration) {
        duration.textContent = formatTime(audio.duration);
    }

    if (rightDuration) {
        rightDuration.textContent = formatTime(audio.duration);
    }
});

// Click-to-seek: bottom player
progressBar?.addEventListener("click", function (event) {
    if (!Number.isFinite(audio.duration) || audio.duration <= 0) {
        return;
    }

    const rect = progressBar.getBoundingClientRect();
    if (rect.width <= 0) return;

    const percentage = Math.max(
        0,
        Math.min(1, (event.clientX - rect.left) / rect.width)
    );

    audio.currentTime = percentage * audio.duration;
});

// Click-to-seek: right-side card
rightProgressBar?.addEventListener("click", function (event) {
    if (!Number.isFinite(audio.duration) || audio.duration <= 0) {
        return;
    }

    const rect = rightProgressBar.getBoundingClientRect();
    if (rect.width <= 0) return;

    const percentage = Math.max(
        0,
        Math.min(1, (event.clientX - rect.left) / rect.width)
    );

    audio.currentTime = percentage * audio.duration;
});

progressBar.addEventListener("click", function(event){

    const width = progressBar.clientWidth;       //gets total width of the progress bar
    const clickPosition = event.offsetX;         //tells where exactly the user clicked 

    const percentage = clickPosition/width;       

    audio.currentTime = percentage*audio.duration;
}
);

playButton.addEventListener("click", function(){     //playbutton ke click hone pr if audio like pause hai ▶ like this then by clicking at it will start the audio and if it is already playing then it will pause.
    if(audio.paused) {

        addToRecentlyPlayed();

        audio.play();
        //playButton.textContent = "❚❚";//
    } else{
        audio.pause();
       // playButton.textContent = "▶";//
    }
});


const rightPlayButton = document.querySelector(".right-play-button");

if(rightPlayButton){rightPlayButton.addEventListener("click",function() {
    playButton.click();
});
}

audio.addEventListener("play", function() {
    playButton.textContent = "❚❚";
    rightPlayButton.textContent = "❚❚";
});

audio.addEventListener("pause", function() {
    playButton.textContent = "▶";
    rightPlayButton.textContent  = "▶";
});

 if(rightPrevButton && prevButton){
    rightPrevButton.addEventListener("click",function(){
        prevButton.click();
    });
 }

  if (heartButton) {
    heartButton.addEventListener("click", function() {
        const currentSong = songs[currentSongIndex];

        // Toggle like/unlike
        currentSong.liked = !currentSong.liked;

        // Get saved favourites
        let favourites =
            JSON.parse(localStorage.getItem("favourites")) || [];

        if (currentSong.liked) {
            // Add song only if it is not already saved
            if (!favourites.some(song => song.title === currentSong.title)) {
                favourites.push(currentSong);
            }
        } else {
            // Remove song if unliked
            favourites = favourites.filter(
                song => song.title !== currentSong.title
            );
        }

        // Save updated favourites
        localStorage.setItem("favourites", JSON.stringify(favourites));

        // Update the player heart
        heartButton.textContent = currentSong.liked ? "❤︎" : "♡";

        // Refresh the Favourite page list if available
        if (typeof renderFavouriteSongs === "function") {
            renderFavouriteSongs();
        }
    });
}


volumeBar.addEventListener("click",function(event){
    const width = volumeBar.clientWidth;
    const clickPosition = event.offsetX;
    const volume = clickPosition/width;
    audio.volume = volume;

    volumeFill.style.width = (volume * 100) + "%";
});

if (rightProgressBar && audio) {
    rightProgressBar.addEventListener("click", function(event) {
        if (!audio.duration || !isFinite(audio.duration)) {
            return;
        }

        const rect = rightProgressBar.getBoundingClientRect();

        const percentage = Math.max(
            0,
            Math.min(1, (event.clientX - rect.left) / rect.width)
        );

       audio.currentTime = percentage * audio.duration; 
    });
}
//click percentage , event.clientX-rect.left tells ki bar ke left edge se click kitni dur hua
// on dividing with the rect.width it tells percentage

 


function addToRecentlyPlayed(){
    const song = songs[currentSongIndex];

    recentlyPlayed = recentlyPlayed.filter(function(item){    //remove the song if it is already in the list
        return item.title !== song.title; 
    });
     
    // add the newest song at the begining
    recentlyPlayed.unshift(song);
// keep only 4 songs
    recentlyPlayed = recentlyPlayed.slice(0,4);
    (localStorage.setItem("recentlyPlayed",JSON.stringify(recentlyPlayed)));
    updateRecentlyPlayedCards();
}

function updateRecentlyPlayedCards(){
    const cards = [recent1, recent2, recent3, recent4];
    cards.forEach(function(card,index){
        if(!card)return;
        if(recentlyPlayed[index]){
            const song = recentlyPlayed[index];
            const img = card.querySelector("img");
            const title = card.querySelector(".recent-card-content");
            const artist = card.querySelector("h4");

            if(img)img.src = song.image;
           if(title)title.textContent = song.title;
           if(artist)artist.textContent = song.artist;

            card.style.display = "block";

        }else{
            card.style.display = "none";
        }
    });
}


function updateQueue() {
    if (!queueList) return;

    queueList.innerHTML = "";

    queue.forEach(function(song) {
        const card = document.createElement("div");
        card.className = "queue-item";
        card.dataset.song = song.title;

        card.innerHTML = `
            <img src="${song.image}" alt="${song.title}">
            <div class="queue-song-info">
                <p>${song.title}</p>
                <p>${song.artist}</p>
            </div>
        `;

        queueList.appendChild(card);
    });
}

function prepareQueue() {
    queue = [];

    for (let i = 1; i <= 8; i++) {
        const nextIndex = (currentSongIndex + i) % songs.length;
        queue.push(songs[nextIndex]);
    }

    updateQueue();
}


if (queueList) {
    queueList.addEventListener("click", function(event) {
        const card = event.target.closest(".queue-item");
        if (!card) return;

        const index = songs.findIndex(function(song) {
            return song.title === card.dataset.song;
        });

        if (index === -1) {
            console.error("Song not found:", card.dataset.song);
            return;
        }

        currentSongIndex = index;
        activePlaylistSongs = [];
        activePlaylistIndex = 0;

        loadSong();
        addToRecentlyPlayed();

        audio.play().catch(function(error) {
            console.error("Audio playback failed:", error);
        });
    });
}

const createPlaylistButtons = document.querySelectorAll(".open-create-playlist-btn");

createPlaylistButtons.forEach(function(button){
    button.addEventListener("click",function(){
        window.location.href = "Playlist.html?create=1";
    });
});

document.addEventListener("click",function(event){
    const libraryLink = event.target.closest("#your-library-link");
    if(libraryLink){
        window.location.href = "library.html";
    }
});

function setupSearch(inputId, resultsId){
const searchInput = document.getElementById(inputId);
const resultsBox = document.getElementById(resultsId);
if(!searchInput || !resultsBox) return;

searchInput.addEventListener("input",function(){
    const query = searchInput.value.trim().toLowerCase();


    resultsBox.innerHTML = "";

    if(query === ""){
        resultsBox.style.display = "none";
        return;
    }
    const matchedSongs = songs.filter(song =>
         song.title.toLowerCase().includes(query)|| 
         song.artist.toLowerCase().includes(query)
);
resultsBox.style.display = "block";

if(matchedSongs.length === 0){
    resultsBox.innerHTML = '<p class= "no-results"> No songs found. Try another search! </p>';
    return;
}

matchedSongs.forEach(song => {
    const result = document.createElement("div");
    result.className = "search-result";

    const image = document.createElement("img");
   image.loading = "lazy";
    image.decoding = "async";
    image.src = song.image;
    image.alt = song.title;

    const details = document.createElement("div");
    details.className = "search-result-details";

    const title = document.createElement("p");
    title.className = "search-result-title";
    title.textContent = song.title;

    const artist = document.createElement("p");
            artist.className = "search-result-artist";
            artist.textContent = song.artist;

            details.append(title, artist);
            result.append(image, details);

            result.addEventListener("click", function () {
                const songIndex = songs.indexOf(song);

                if (songIndex !== -1) {
                    playSong(song);
                }

                searchInput.value = song.title;
                resultsBox.style.display = "none";
            });

            resultsBox.appendChild(result);
        });
    });

    document.addEventListener("click", function (event) {
        if (!searchInput.contains(event.target) &&
            !resultsBox.contains(event.target)) {
            resultsBox.style.display = "none";
        }
    });
}

setupSearch("navbar-search", "navbar-search-results");
setupSearch("hero-search", "hero-search-results");

//  SWAY PROFILE FUNCTIONALITY

const profileIcon = document.getElementById("profile-icon");
const profileLetter = document.getElementById("profile-letter");
const profilePopup = document.getElementById("profile-popup");
const profileNameInput = document.getElementById("profile-name");
const profileSaveButton = document.getElementById("profile-save");

// Load the saved name when the page opens
const savedName = localStorage.getItem("swayUserName");

if (savedName && profileLetter && profileNameInput) {
profileLetter.textContent = savedName.charAt(0).toUpperCase();
profileNameInput.value = savedName;
}

// Open or close the profile popup
if (profileIcon && profilePopup) {
profileIcon.addEventListener("click", function () {
profilePopup.classList.toggle("show");
});
}

// Save the user's name
if (profileSaveButton && profileNameInput && profileLetter && profilePopup) {
profileSaveButton.addEventListener("click", function () {
const userName = profileNameInput.value.trim();

    if (userName === "") {
        alert("Please enter your name!");
        profileNameInput.focus();
        return;
    }

    localStorage.setItem("swayUserName", userName);

    profileLetter.textContent = userName.charAt(0).toUpperCase();

    profilePopup.classList.remove("show");
    profileNameInput.value = "";
});

// Press Enter to save
profileNameInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        profileSaveButton.click();
    }
});

}

// Close the popup when clicking outside it
document.addEventListener("click", function (event) {
if (
profileIcon &&
profilePopup &&
!profileIcon.contains(event.target) &&
!profilePopup.contains(event.target)
) {
profilePopup.classList.remove("show");
}
});
document.getElementById("profile-popup").classList.contains("show")