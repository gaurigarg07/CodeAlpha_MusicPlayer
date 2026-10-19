const playlistSongs = [
    { title: "Golden Hour", artist: "JVKE", image: "images/golden-hour.jpg", audio: "songs/golden hour.mp3" },
    { title: "Die For You", artist: "The Weeknd", image: "images/die-for-you.jpg", audio: "songs/golden hour.mp3" },
    { title: "Sweater Weather", artist: "The Neighbourhood", image: "images/sweater-weather.jpg", audio: "songs/golden hour.mp3" },
    { title: "I Wanna Be Yours", artist: "Arctic Monkeys", image: "images/i-wanna-be-yours.jpg", audio: "songs/golden hour.mp3" },
    { title: "Until I Found You", artist: "Stephen Sanchez", image: "images/until-i-found-you.jpg", audio: "songs/golden hour.mp3" },
    { title: "Daylight", artist: "David Kushner", image: "images/daylight.jpg", audio: "songs/golden hour.mp3" },
    { title: "As It Was", artist: "Harry Styles", image: "images/as-it-was.jpg", audio: "songs/golden hour.mp3" },
    { title: "Perfect", artist: "Ed Sheeran", image: "images/perfect.jpg", audio: "songs/golden hour.mp3" },
    { title: "Dandelions", artist: "Ruth B.", image: "images/dandelions.jpg", audio: "songs/golden hour.mp3" },
    { title: "Lovely", artist: "Billie Eilish", image: "images/lovely.jpg", audio: "songs/golden hour.mp3" },
    { title: "Atlantis", artist: "Seafret", image: "images/atlantis.jpg", audio: "songs/golden hour.mp3" },
    { title: "Another Love", artist: "Tom Odell", image: "images/another-love.jpg", audio: "songs/golden hour.mp3" },
    { title: "Those Eyes", artist: "New West", image: "images/those-eyes.jpg", audio: "songs/golden hour.mp3" },
    { title: "Line Without a Hook", artist: "Ricky Montgomery", image: "images/line-without-a-hook.jpg", audio: "songs/golden hour.mp3" },
    { title: "Here With Me", artist: "d4vd", image: "images/here-with-me.jpg", audio: "songs/golden hour.mp3" },
    { title: "The Night We Met", artist: "Lord Huron", image: "images/the-night-we-met.jpg", audio: "songs/golden hour.mp3" },
    { title: "Birds of a Feather", artist: "Billie Eilish", image: "images/birds-of-a-feather2.webp", audio: "songs/golden hour.mp3" },
    { title: "Golden", artist: "Harry Styles", image: "images/golden.jpg", audio: "songs/golden hour.mp3" },
    { title: "Love Yourself", artist: "Justin Bieber", image: "images/love-yourself.jpg", audio: "songs/golden hour.mp3" },
    { title: "Photograph", artist: "Ed Sheeran", image: "images/photograph.jpg", audio: "songs/golden hour.mp3" },
    { title: "Espresso", artist: "Sabrina Carpenter", image: "images/espresso.jpg", audio: "songs/golden hour.mp3" },
    { title: "End of Beginning", artist: "Djo", image: "images/end-of-beginning.jpg", audio: "songs/golden hour.mp3" },
    { title: "Happier", artist: "Olivia Rodrigo", image: "images/happier.jpg", audio: "songs/golden hour.mp3" },
    { title: "Lover", artist: "Taylor Swift", image: "images/lover.jpg", audio: "songs/golden hour.mp3" }
];

const defaultPlaylists = [
    {
        id: "chill",
        name: "Chill Vibes",
        description: "Slow down and relax",
        image: "images/chill-image.jpeg",
        songs: ["Sweater Weather", "Dandelions", "Atlantis", "Here With Me", "Lovely"]
    },
    {
        id: "focus",
        name: "Focus",
        description: "Settle into your flow",
        image: "images/focus.jpeg",
        songs: ["Daylight", "Golden Hour", "As It Was", "Golden", "Photograph"]
    },
    {
        id: "romance",
        name: "Romance",
        description: "Songs for the heart",
        image: "images/romance.jpeg",
        songs: ["Until I Found You", "Perfect", "I Wanna Be Yours", "Those Eyes", "Lover"]
    },
    {
        id: "workout",
        name: "Workout",
        description: "Find your energy",
        image: "images/workout.jpeg",
        songs: ["Espresso", "As It Was", "Die For You", "Golden", "End of Beginning"]
    },
    {
        id: "late-night",
        name: "Late Night",
        description: "For quiet hours",
        image: "images/late-night.jpeg",
        songs: ["The Night We Met", "Another Love", "Lovely", "Daylight", "Golden Hour"]
    }
];

const customStorageKey = "swayCustomPlaylists";
const playlistCards = document.getElementById("playlist-cards");
const libraryView = document.getElementById("playlist-library-view");
const detailView = document.getElementById("playlist-detail-view");
const createView = document.getElementById("create-playlist-view");
const detailTitle = document.getElementById("detail-title");
const detailCover = document.getElementById("detail-cover");
const detailCount = document.getElementById("detail-count");
const songList = document.getElementById("playlist-song-list");
const songSelectionList = document.getElementById("song-selection-list");
const createForm = document.getElementById("create-playlist-form");
const playlistNameInput = document.getElementById("new-playlist-name");
const createMessage = document.getElementById("create-playlist-message");

let selectedPlaylistId = null;
const deletePlaylistButton = document.getElementById("delete-playlist-button");
let customPlaylists = JSON.parse(
    localStorage.getItem(customStorageKey) || "[]"
);

function getAllPlaylists() {
    return defaultPlaylists.concat(customPlaylists);
}

function findSong(title) {
    return playlistSongs.find(function(song) {
        return song.title === title;
    });
}

function showView(view) {
    libraryView.hidden = view !== "library";
    detailView.hidden = view !== "detail";
    createView.hidden = view !== "create";
}

function renderPlaylistCards() {
    playlistCards.innerHTML = "";

    getAllPlaylists().forEach(function(playlist) {
        const card = document.createElement("article");
        card.className = "playlist-card";

        if (playlist.id === selectedPlaylistId) {
            card.classList.add("selected");
        }

        const image = document.createElement("img");
        image.src = playlist.image || "images/sweater-weather.jpg";
        image.alt = playlist.name + " cover";

        const title = document.createElement("h3");
        title.textContent = playlist.name;

        const description = document.createElement("p");
        description.textContent =
            playlist.songs.length + " songs • " + playlist.description;

        card.append(image, title, description);

        card.addEventListener("click", function() {
            openPlaylist(playlist.id);
        });

        playlistCards.appendChild(card);
    });
}

function openPlaylist(playlistId) {
    const playlist = getAllPlaylists().find(function(item) {
        return item.id === playlistId;
    });

    if (!playlist) return;

    selectedPlaylistId = playlistId;
    deletePlaylistButton.hidden =! playlistId.startsWith("custom-");

    detailTitle.textContent = playlist.name;
    detailCover.src = playlist.image || "images/sweater-weather.jpg";
    detailCover.alt = playlist.name + " cover";
    detailCount.textContent = playlist.songs.length + " songs";

    songList.innerHTML = "";

    playlist.songs.forEach(function(title) {
        const song = findSong(title);
        if (!song) return;

        const row = document.createElement("div");
        row.className = "playlist-song-row";
        row.tabIndex = 0;

        const image = document.createElement("img");
        image.src = song.image;
        image.alt = song.title + " cover";

        const info = document.createElement("div");
        info.className = "song-row-info";

        const songTitle = document.createElement("h3");
        songTitle.textContent = song.title;


        const artist = document.createElement("p");
        artist.textContent = song.artist;

        const playSymbol = document.createElement("span");
        playSymbol.className = "song-play-symbol";
        playSymbol.textContent = "▶";

        info.append(songTitle, artist);
        row.append(image, info, playSymbol);

        function playThisSong() {
            localStorage.setItem("swaySongToPlay", song.title);
            window.location.href = "index.html";
        }

        row.addEventListener("click", playThisSong);
        row.addEventListener("keydown", function(event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                playThisSong();
            }
        });

        songList.appendChild(row);
    });

    renderPlaylistCards();
    showView("detail");
}

function renderSongChoices() {
    songSelectionList.innerHTML = "";

    playlistSongs.forEach(function(song, index) {
        const label = document.createElement("label");
        label.className = "song-choice";

        const image = document.createElement("img");
        image.src = song.image;
        image.alt = "";

        const info = document.createElement("span");
        info.textContent = song.title + " — " + song.artist;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "playlistSong";
        checkbox.value = song.title;
        checkbox.id = "playlist-song-" + index;

        label.append(image, info, checkbox);
        songSelectionList.appendChild(label);
    });
}

const openCreateButton = document.getElementById("open-create-playlist");
if(openCreateButton)
    openCreateButton.addEventListener("click",function(){
showView("create");
});


document.querySelectorAll(".open-create-playlist-btn")
    .forEach(function(button) {
        button.addEventListener("click", function() {
            createForm.reset();
            createMessage.textContent = "";
            renderSongChoices();
            showView("create");
        });
    });

document.getElementById("back-to-playlists").addEventListener("click", function() {
    showView("library");
    renderPlaylistCards();
});

document.getElementById("cancel-create-playlist").addEventListener("click", function() {
    showView("library");
});

createForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = playlistNameInput.value.trim();
    const selectedSongs = Array.from(
        songSelectionList.querySelectorAll('input[name="playlistSong"]:checked')
    ).map(function(input) {
        return input.value;
    });

    if (!name) {
        createMessage.textContent = "Please enter a playlist name.";
        return;
    }

    if (selectedSongs.length === 0) {
        createMessage.textContent = "Please select at least one song.";
        return;
    }

    const playlist = {
        id: "custom-" + Date.now(),
        name: name,
        description: "Your custom playlist",
        image: findSong(selectedSongs[0]).image,
        songs: selectedSongs
    };

    customPlaylists.push(playlist);
    localStorage.setItem(customStorageKey, JSON.stringify(customPlaylists));

    selectedPlaylistId = playlist.id;
    renderPlaylistCards();
    openPlaylist(playlist.id);
});

renderPlaylistCards();
renderSongChoices();
showView("library");

// Open the create form automatically when coming from the home button.
if (new URLSearchParams(window.location.search).get("create") === "1") {
    showView("create");
}

document.querySelectorAll(".mood-button").forEach(function(button) {
    button.addEventListener("click", function() {
        document.querySelectorAll(".mood-button").forEach(function(item) {
            item.classList.remove("active");
        });

        button.classList.add("active");
    });
});

if (deletePlaylistButton) {
    deletePlaylistButton.addEventListener("click", function() {
        if (!selectedPlaylistId) return;

        // Prevent deleting the built-in playlists
        if (!selectedPlaylistId.startsWith("custom-")) {
            return;
        }

        const playlist = customPlaylists.find(function(item) {
            return item.id === selectedPlaylistId;
        });

        if (!playlist) return;

        const confirmDelete = confirm(
            'Are you sure you want to delete "' +
            playlist.name +
            '"?'
        );

        if (!confirmDelete) return;

        // Remove the playlist from the array
        customPlaylists = customPlaylists.filter(function(item) {
            return item.id !== selectedPlaylistId;
        });

        // Update localStorage so it stays deleted after refresh
        localStorage.setItem(
            customStorageKey,
            JSON.stringify(customPlaylists)
        );

        // Clear selection and return to the playlist library
        selectedPlaylistId = null;

        renderPlaylistCards();
        showView("library");
    });
}
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


/* ===== PLAYLIST NAVBAR SEARCH ===== */

const playlistSearchInput = document.getElementById("navbar-search");
const playlistSearchResults = document.getElementById("navbar-search-results");

if (playlistSearchInput && playlistSearchResults) {
    playlistSearchInput.addEventListener("input", function () {
        const query = this.value.trim().toLowerCase();

        playlistSearchResults.innerHTML = "";

        if (!query) {
            playlistSearchResults.style.display = "none";
            return;
        }

        const matchedSongs = playlistSongs.filter(song =>
            song.title.toLowerCase().includes(query) ||
            song.artist.toLowerCase().includes(query)
        );

        playlistSearchResults.style.display = "block";

        if (matchedSongs.length === 0) {
            playlistSearchResults.innerHTML =
                '<p class="no-results">No songs found. Try another search!</p>';
            return;
        }

        matchedSongs.forEach(song => {
            const result = document.createElement("div");
            result.className = "search-result";
            result.style.cursor = "pointer";

            const image = document.createElement("img");
            image.src = song.image;
            image.alt = song.title;
            image.loading = "lazy";

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
                // Save the selected song for the Home page player
                localStorage.setItem("swaySongToPlay", song.title);

                // Open Home page, where your existing player lives
                window.location.href = "index.html";
            });

            playlistSearchResults.appendChild(result);
        });
    });

    // Close results when clicking outside the search
    document.addEventListener("click", function (event) {
        if (
            !playlistSearchInput.contains(event.target) &&
            !playlistSearchResults.contains(event.target)
        ) {
            playlistSearchResults.style.display = "none";
        }
    });
}