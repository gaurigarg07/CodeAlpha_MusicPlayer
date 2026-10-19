
const librarySongs = [
    { title: "Golden Hour", artist: "JVKE", image: "images/golden-hour.jpg" },
    { title: "Die For You", artist: "The Weeknd", image: "images/die-for-you.jpg" },
    { title: "Sweater Weather", artist: "The Neighbourhood", image: "images/sweater-weather.jpg" },
    { title: "I Wanna Be Yours", artist: "Arctic Monkeys", image: "images/i-wanna-be-yours.jpg" },
    { title: "Until I Found You", artist: "Stephen Sanchez", image: "images/until-i-found-you.jpg" },
    { title: "Daylight", artist: "David Kushner", image: "images/daylight.jpg" },
    { title: "As It Was", artist: "Harry Styles", image: "images/as-it-was.jpg" },
    { title: "Perfect", artist: "Ed Sheeran", image: "images/perfect.jpg" },
    { title: "Dandelions", artist: "Ruth B.", image: "images/dandelions.jpg" },
    { title: "Lovely", artist: "Billie Eilish", image: "images/lovely.jpg" },
    { title: "Atlantis", artist: "Seafret", image: "images/atlantis.jpg" },
    { title: "Another Love", artist: "Tom Odell", image: "images/another-love.jpg" },
    { title: "Those Eyes", artist: "New West", image: "images/those-eyes.jpg" },
    { title: "Line Without a Hook", artist: "Ricky Montgomery", image: "images/line-without-a-hook.jpg" },
    { title: "Here With Me", artist: "d4vd", image: "images/here-with-me.jpg" },
    { title: "The Night We Met", artist: "Lord Huron", image: "images/the-night-we-met.jpg" },
    { title: "Birds of a Feather", artist: "Billie Eilish", image: "images/birds-of-a-feather.jpg" },
    { title: "Golden", artist: "Harry Styles", image: "images/golden.jpg" },
    { title: "Love Yourself", artist: "Justin Bieber", image: "images/love-yourself.jpg" },
    { title: "Photograph", artist: "Ed Sheeran", image: "images/photograph.jpg" },
    { title: "Espresso", artist: "Sabrina Carpenter", image: "images/espresso.jpg" },
    { title: "End Of Beginning", artist: "Djo", image: "images/end-of-beginning.jpg" },
    { title: "Happier", artist: "Olivia Rodrigo", image: "images/happier.jpg" },
    { title: "Lover", artist: "Taylor Swift", image: "images/lover.jpg" }
];


// MADE FOR YOU PLAYLISTS

const libraryMadeForYou = {
    romantic: {
        name: "Romantic Hours",
        songs: [
            "Until I Found You", "Perfect", "I Wanna Be Yours",
            "Those Eyes", "Die For You", "Dandelions",
            "Photograph", "Love Yourself", "The Night We Met", "Golden Hour"
        ]
    },

    city: {
        name: "City Lights",
        songs: [
            "As It Was", "Die For You", "Golden", "Photograph",
            "Lovely", "Another Love", "Line Without a Hook",
            "Birds of a Feather", "Love Yourself", "Daylight"
        ]
    },

    chill: {
        name: "Chill Vibes",
        songs: [
            "Sweater Weather", "Dandelions", "Atlantis", "Here With Me",
            "The Night We Met", "Lovely", "Until I Found You",
            "Those Eyes", "Golden Hour", "Another Love"
        ]
    },

    golden: {
        name: "Golden Memories",
        songs: [
            "Golden Hour", "Daylight", "Lovely", "The Night We Met",
            "Until I Found You", "Photograph", "Perfect", "Dandelions",
            "Birds of a Feather", "Sweater Weather"
        ]
    }
};


// GET DATA FROM LOCAL STORAGE

function getStoredArray(key) {
    try {
        const data = JSON.parse(localStorage.getItem(key) || "[]");
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error("Could not read " + key, error);
        return [];
    }
}


// CREATE A SONG CARD

function createSongCard(song) {
    const card = document.createElement("div");
    card.className = "library-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", "Play " + song.title);

    const image = document.createElement("img");
    image.src = song.image || "images/default-cover.jpg";
    image.alt = song.title;
    image.loading = "lazy";

    const title = document.createElement("h3");
    title.textContent = song.title;

    const artist = document.createElement("p");
    artist.textContent = song.artist || "Unknown Artist";

    const playButton = document.createElement("button");
    playButton.className = "library-play-button";
    playButton.type = "button";
    playButton.textContent = "▶";
    playButton.setAttribute("aria-label", "Play " + song.title);

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(artist);
    card.appendChild(playButton);

    function playThisSong() {
        localStorage.setItem("swaySongToPlay", song.title);
        window.location.href = "index.html";
    }

    card.addEventListener("click", playThisSong);

    card.addEventListener("keydown", function(event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            playThisSong();
        }
    });

    return card;
}


// SHOW EMPTY MESSAGE

function showEmptyMessage(container, message) {
    container.innerHTML = "";

    const paragraph = document.createElement("p");
    paragraph.className = "library-empty";
    paragraph.textContent = message;

    container.appendChild(paragraph);
}


// RENDER SONG CARDS

function renderSongCards(containerId, songList, emptyMessage) {
    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    if (!songList.length) {
        showEmptyMessage(container, emptyMessage);
        return;
    }

    songList.forEach(function(song) {
        container.appendChild(createSongCard(song));
    });
}


// MADE FOR YOU

function renderMadeForYou() {
    const container = document.getElementById("made-for-you-list");

    if (!container) return;

    container.innerHTML = "";

    Object.keys(libraryMadeForYou).forEach(function(key) {
        const playlist = libraryMadeForYou[key];

        const firstSong = librarySongs.find(function(song) {
            return playlist.songs.includes(song.title);
        });

        const card = document.createElement("div");
        card.className = "library-card playlist-card";
        card.tabIndex = 0;
        card.setAttribute("role", "button");

        const image = document.createElement("img");
        image.src = firstSong ? firstSong.image : "images/default-cover.jpg";
        image.alt = playlist.name;
        image.loading = "lazy";

        const title = document.createElement("h3");
        title.textContent = playlist.name;

        const description = document.createElement("p");
        description.textContent = playlist.songs.length + " songs";

        const button = document.createElement("button");
        button.type = "button";
        button.className = "library-play-button";
        button.textContent = "▶";

        function openMix() {
            localStorage.setItem(
                "swayLibraryMix",
                JSON.stringify(playlist.songs)
            );

            localStorage.setItem("swaySongToPlay", playlist.songs[0]);
            window.location.href = "index.html";
        }

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(button);

        card.addEventListener("click", openMix);

        card.addEventListener("keydown", function(event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openMix();
            }
        });

        container.appendChild(card);
    });
}


// LIKED SONGS

function renderLikedSongs() {
    const likedSongs = getStoredArray("favourites");

    renderSongCards(
        "liked-songs-list",
        likedSongs,
        "No liked songs yet. Tap the heart on a song to save it ♡"
    );
}


// RECENTLY PLAYED

function renderRecentlyPlayed() {
    const recentSongs = getStoredArray("recentlyPlayed");

    renderSongCards(
        "recently-played-list",
        recentSongs,
        "Your recently played songs will appear here 🎧"
    );
}


// YOUR PLAYLISTS

function renderYourPlaylists() {
    const container = document.getElementById("your-playlists-list");

    if (!container) return;

    container.innerHTML = "";

    const defaultPlaylists = [
        { name: "Chill Vibes", image: "images/sweater-weather.jpg" },
        { name: "Focus", image: "images/golden-hour.jpg" },
        { name: "Romance", image: "images/until-i-found-you.jpg" },
        { name: "Workout", image: "images/as-it-was.jpg" },
        { name: "Late Night", image: "images/the-night-we-met.jpg" }
    ];

    const customPlaylists = getStoredArray("swayCustomPlaylists");

    const allPlaylists = defaultPlaylists.concat(customPlaylists);

    if (!allPlaylists.length) {
        showEmptyMessage(container, "Your playlists will appear here.");
        return;
    }

    allPlaylists.forEach(function(playlist) {
        const card = document.createElement("div");
        card.className = "library-card";

        const image = document.createElement("img");
        image.src = playlist.image || "images/default-cover.jpg";
        image.alt = playlist.name || "Playlist";
        image.loading = "lazy";

        const title = document.createElement("h3");
        title.textContent = playlist.name || "My Playlist";

        const description = document.createElement("p");

        const playlistSongList = Array.isArray(playlist.songs)
            ? playlist.songs
            : Array.isArray(playlist.tracks)
                ? playlist.tracks
                : [];

        description.textContent = playlistSongList.length
            ? playlistSongList.length + " songs"
            : "Your personal playlist";

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(description);

        if (playlistSongList.length) {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "library-play-button";
            button.textContent = "▶";

            button.addEventListener("click", function(event) {
                event.stopPropagation();

                const firstSong = playlistSongList[0];
                const songTitle = typeof firstSong === "string"
                    ? firstSong
                    : firstSong.title;

                if (songTitle) {
                    localStorage.setItem("swaySongToPlay", songTitle);
                    window.location.href = "index.html";
                }
            });

            card.appendChild(button);
        }

        container.appendChild(card);
    });
}


// LOAD ALL LIBRARY SECTIONS

document.addEventListener("DOMContentLoaded", function() {
    renderMadeForYou();
    renderLikedSongs();
    renderRecentlyPlayed();
    renderYourPlaylists();
});