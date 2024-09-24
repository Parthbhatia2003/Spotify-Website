// console.log('lets start javascript');

// let currentSong = new Audio();
// let songs;
// let currFolder;



// function secondsToMinutesSeconds(seconds) {
//     if (isNaN(seconds) || seconds < 0) {
//         return "00:00";
//     }

//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60);

//     const formattedMinutes = String(minutes).padStart(2, '0');
//     const formattedSeconds = String(remainingSeconds).padStart(2, '0');

//     return `${formattedMinutes}:${formattedSeconds}`;
// }


// async function getSongs(folder) {


//     currFolder = folder;
//     let a = await fetch(`http://127.0.0.1:3000/${currFolder}/`)
//     let response = await a.text();
//     let div = document.createElement("div")
//     div.innerHTML = response;
//     let as = div.getElementsByTagName("a")
//     songs = []

//     for (let index = 0; index < as.length; index++) {
//         const element = as[index];
//         if (element.href.endsWith(".mp3")) {
//             songs.push(element.href.split(`/${folder}/`)[1])
//         }

//     }

//     // show all the songs in songList
//     let songul = document.querySelector(".songList").getElementsByTagName("ul")[0]
//     songul.innerHTML = ""
//     for (const song of songs) {
//         songul.innerHTML = songul.innerHTML + `<li>
//         <img class="invert"src="images/music.svg" alt="">
//         <div class="info">
//             <div>${song.replaceAll("%20", " ")}</div>
//             <div>Parth</div>
//         </div>
//         <div class="playnow">
//             <span>Play Now</span>
//             <img class="invert"src="images/play.svg" alt="">
//         </div>
//         </li>`;
//     }

//     // attach an event listener to each song

//     Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
//         e.addEventListener("click", element => {
//             console.log(e.querySelector(".info").firstElementChild.innerHTML);
//             playmusic(e.querySelector(".info").firstElementChild.innerHTML.trim())

//         })
//     })

//     return songs
// }

// const playmusic = (track, pause) => {
//     // let audio=new Audio("/songs/"+track)
//     currentSong.src = `/${currFolder}/` + track
//     if (!pause) {
//         currentSong.play()
//         play.src = "images/pause.svg"
//     }

//     document.querySelector(".songinfo").innerHTML = decodeURI(track)
//     document.querySelector(".songtime").innerHTML = "00:00/00:00"
// }



// async function displayAlbums() {

//     let a = await fetch(`http://127.0.0.1:3000/songs/`)
//     let response = await a.text();
//     let div = document.createElement("div")
//     div.innerHTML = response
//     let anchors = div.getElementsByTagName("a")
//     let cardcontainer = document.querySelector(".cardContainer")
//     let array = Array.from(anchors)
//     for (let index = 0; index < array.length; index++) {
//         const e = array[index];


//         if (e.href.includes("/songs")) {
//             let folder = e.href.split('/').slice(-2)[0];

//             let a = await fetch(`http://127.0.0.1:3000/songs/${folder}/info.json`)
//             let response = await a.json();
           
//             cardcontainer.innerHTML = cardcontainer.innerHTML + ` <div data-folder="${folder}" class="card">
//             <div class="play">
//                 <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
//                     <!-- Circular background -->
//                     <circle cx="30" cy="30" r="25" fill="#1fdf64" />

//                     <!-- Inner SVG with increased size -->
//                     <svg x="15" y="15" width="30" height="30" viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg">
//                         <!-- Path -->
//                         <path d="M6 12V4l12 7-12 7z" fill="#000000" />
//                     </svg>
//                 </svg>
//             </div>
//             <img src="/songs/${folder}/cover.jpg" alt="">
//             <h2>${response.title}</h2>
//             <p>${response.description}</p>
//         </div>`


//         }
//     }


// }
// async function main() {



//     // get all the songs 
//     await getSongs("songs/punjabi")
//     playmusic(songs[0], true);



//     //display all the albums on the page
//     await displayAlbums();


//     play.addEventListener("click", () => {
//         if (currentSong.paused) {
//             currentSong.play()
//             play.src = "images/pause.svg"
//         }
//         else {
//             currentSong.pause()
//             play.src = "images/play.svg"
//         }
//     })

//     currentSong.addEventListener("timeupdate", () => {
//         document.querySelector(".songtime").innerHTML = `
//         ${secondsToMinutesSeconds(currentSong.currentTime)}/${secondsToMinutesSeconds(currentSong.duration)}`
//         document.querySelector(".circle").style.left = (currentSong.currentTime) / (currentSong.duration) * 100 + "%";
//     })


//     document.querySelector(".seekbar").addEventListener("click", (e) => {
//         let parcent = (e.offsetX / e.target.getBoundingClientRect().width);
//         document.querySelector(".circle").style.left = (e.offsetX / e.target.getBoundingClientRect().width) * 100 + "%";
//         currentSong.currentTime = currentSong.duration * parcent;
//     })


//     // add an eventlistner for hamburger

//     document.querySelector(".hamburger").addEventListener("click", () => {
//         document.querySelector(".left").style.left = "0";
//     })
//     document.querySelector(".close").addEventListener("click", () => {
//         document.querySelector(".left").style.left = "-120%";
//     })

//     previous.addEventListener("click", () => {

//         let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])

//         if ((index - 1) >= 0) {
//             playmusic(songs[index - 1])
//         }
//     })

//     next.addEventListener("click", () => {

//         let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])

//         if ((index + 1) < songs.length) {
//             playmusic(songs[index + 1])
//         }

//     })


//     document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {

//         currentSong.volume = parseInt(e.target.value) / 100;

//     })

//     Array.from(document.getElementsByClassName("card")).forEach(e => {
//         e.addEventListener("click", async item => {
//             songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`)
//             playmusic(songs[0])
//         })
//     })

//     document.querySelector(".volume>img").addEventListener("click",e=>{
      
//       if(e.target.src.includes("images/volume.svg")){
//         e.target.src=e.target.src.replace("images/volume.svg","images/mute.svg");
//         document.querySelector(".range").getElementsByTagName("input")[0].value=0;
//        currentSong.volume=0;
//       }
//       else{
//         e.target.src=e.target.src.replace("images/mute.svg","images/volume.svg");
//         document.querySelector(".range").getElementsByTagName("input")[0].value=10;
//         currentSong.volume=0.1;
//       }
//     })

// }

// main()
console.log('let\'s start javascript');

let currentSong = new Audio();
let songs;
let currFolder;

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSongs(folder) {
    currFolder = folder;
    let response = await fetch(`${currFolder}/`); // Use relative
    let html = await response.text();
           if (!response || response.trim() === "") {
    console.error("No valid response received.");
    return [];
}
    let div = document.createElement("div");
    div.innerHTML = html;
    let as = div.getElementsByTagName("a");
           if (!as || as.length === 0) {
        console.error("No songs found in the folder.");
        return [];
    }
    songs = [];

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1]);
        }
    }

    // show all the songs in songList
    let songul = document.querySelector(".songList ul");
    songul.innerHTML = "";
    for (const song of songs) {
        songul.innerHTML += `
        <li>
            <img class="invert" src="images/music.svg" alt="">
            <div class="info">
                <div>${song.replaceAll("%20", " ")}</div>
                <div>Parth</div>
            </div>
            <div class="playnow">
                <span>Play Now</span>
                <img class="invert" src="images/play.svg" alt="">
            </div>
        </li>`;
    }

    // Attach event listener to each song
    Array.from(document.querySelector(".songList li")).forEach(e => {
        e.addEventListener("click", () => {
            let songName = e.querySelector(".info div:first-child").innerHTML.trim();
            playmusic(songName);
        });
    });

    return songs;
}

const playmusic = (track, pause = false) => {
    currentSong.src = `${currFolder}/` + track; // Use relative path
    if (!pause) {
        currentSong.play();
        play.src = "images/pause.svg"; // Relative path
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track);
    document.querySelector(".songtime").innerHTML = "00:00/00:00";
}

async function displayAlbums() {
    let response = await fetch(`songs/`); // Use relative path
    let html = await response.text();
    let div = document.createElement("div");
    div.innerHTML = html;
    let anchors = div.getElementsByTagName("a");
    let cardcontainer = document.querySelector(".cardContainer");
    let array = Array.from(anchors);

    for (const e of array) {
        if (e.href.includes("/songs")) {
            let folder = e.href.split('/').slice(-2)[0];
            let res = await fetch(`songs/${folder}/info.json`); // Use relative path
            let albumInfo = await res.json();
           
            cardcontainer.innerHTML += `
            <div data-folder="${folder}" class="card">
                <div class="play">
                    <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30" cy="30" r="25" fill="#1fdf64" />
                        <svg x="15" y="15" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12V4l12 7-12 7z" fill="#000000" />
                        </svg>
                    </svg>
                </div>
                <img src="songs/${folder}/cover.jpg" alt="">
                <h2>${albumInfo.title}</h2>
                <p>${albumInfo.description}</p>
            </div>`;
        }
    }
}

async function main() {
    // Get all songs and display albums
    await getSongs("songs/punjabi");
    playmusic(songs[0], true);
    await displayAlbums();

    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "images/pause.svg";
        } else {
            currentSong.pause();
            play.src = "images/play.svg";
        }
    });

    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `
        ${secondsToMinutesSeconds(currentSong.currentTime)}/${secondsToMinutesSeconds(currentSong.duration)}`;
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    });

    document.querySelector(".seekbar").addEventListener("click", (e) => {
        let percent = e.offsetX / e.target.getBoundingClientRect().width;
        currentSong.currentTime = currentSong.duration * percent;
    });

    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    });
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%";
    });

    previous.addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        if (index - 1 >= 0) {
            playmusic(songs[index - 1]);
        }
    });

    next.addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        if (index + 1 < songs.length) {
            playmusic(songs[index + 1]);
        }
    });

    document.querySelector(".range input").addEventListener("change", (e) => {
        currentSong.volume = parseInt(e.target.value) / 100;
    });

    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async item => {
            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`);
            playmusic(songs[0]);
        });
    });

    document.querySelector(".volume > img").addEventListener("click", (e) => {
        if (e.target.src.includes("images/volume.svg")) {
            e.target.src = "images/mute.svg";
            currentSong.volume = 0;
        } else {
            e.target.src = "images/volume.svg";
            currentSong.volume = 0.1;
        }
    });
}

main();
