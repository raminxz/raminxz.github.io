// all songs url
const allSongs = [
  {
    src: "./music/MyRingtone1.mp3",
    imageeSrc: "img/1.jpeg",
  },
  {
    src: "./music/MyRingtone2.mp3",
    imageeSrc: "img/2.jpeg",
  },
];
// select elements
const audio = document.getElementById("audio");
const img = document.getElementById("img");
const faPlay = document.querySelector(".fa-play");
const faPause = document.querySelector(".fa-pause");
let songIndex = 0;
let isPlay = "play";

// function play and pause
function playOrPause() {
  console.log(isPlay);
  srcImage = allSongs[songIndex].imageeSrc;

  if (isPlay === "play") {
    play();
  } else {
    pause();
  }
}
// function play
function play() {
  audio.src = allSongs[songIndex].src;
  srcImage = allSongs[songIndex].imageeSrc;
  img.setAttribute("src", srcImage);
  audio.play();
  console.log("play");
  isPlay = "pause";
  faPlay.classList.add("dispay-none");
  faPause.classList.remove("dispay-none");
}
// function pause
function pause() {
  audio.src = allSongs[songIndex].src;
  srcImage = allSongs[songIndex].imageeSrc;
  img.setAttribute("src", srcImage);
  audio.pause();
  console.log("pause");
  isPlay = "play";
  faPause.classList.add("dispay-none");
  faPlay.classList.remove("dispay-none");
}
// function next
function next() {
  if (songIndex == parseFloat(allSongs.length - 1)) {
    console.log("playlist finished");
  } else {
    songIndex = songIndex + 1;
    audio.src = allSongs[songIndex].src;
    srcImage = allSongs[songIndex].imageeSrc;
    audio.play();
    console.log(srcImage);
    srcImage = allSongs[songIndex].imageeSrc;
    img.setAttribute("src", srcImage);
  }
}
//  function prev
function prev() {
  if (songIndex === 0) {
    songIndex = 0;
    console.log("no prev song fond");
  } else {
    songIndex = songIndex - 1;
    audio.src = allSongs[songIndex].src;
    audio.play();
    srcImage = allSongs[songIndex].imageeSrc;
    console.log(srcImage);
    srcImage = allSongs[songIndex].imageeSrc;
    img.setAttribute("src", srcImage);
  }
}
