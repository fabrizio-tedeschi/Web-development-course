function songsEquals(song1, song2) {
    for (let key in song1) {
        if (song1[key] !== song2[key]) {
            return false;
        }
    }

    return true;
}

let songs = [
    {title: "goosebumps", duration: "4:03"},
    {title: "Out of Time", duration: "3:34"},
    {title: "Out of Time remix", duration: "3:34"},
    {title: "goosebumps", duration: "4:03"},
]

for (let i = 0; i < songs.length; i++) {
    for (let j = i + 1; j < songs.length; j++) {
        if(songsEquals(songs[i], songs[j])){
            songs.pop(songs[j]);
        }
    }
}

console.log(songs)