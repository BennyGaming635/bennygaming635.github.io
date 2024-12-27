const musicFolder = 'https://raw.githubusercontent.com/BennyGaming635/bennygaming635.github.io/main/music/';
let tracks = [];

async function fetchTracks() {
    try {
        const response = await fetch('tracks.json'); // Replace with your JSON file URL
        tracks = await response.json();

        if (tracks.length > 0) {
            shuffleTracks();
        } else {
            console.error('No tracks found.');
        }
    } catch (error) {
        console.error('Error fetching track list:', error);
    }
}

function shuffleTracks() {
    const shuffled = tracks.sort(() => Math.random() - 0.5);
    playTrack(shuffled[0]);
}

function playTrack(track) {
    const player = document.getElementById('audioPlayer');
    player.src = musicFolder + track;
    player.play();
}

document.getElementById('audioPlayer').addEventListener('ended', shuffleTracks);

fetchTracks();
