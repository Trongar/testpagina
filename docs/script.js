let video = document.getElementById("video");
let audio = document.getElementById("audio");
let ctrlVideo = document.getElementById("ctrlvideo");
let ctrlAudio = document.getElementById("ctrlaudio");

ctrlVideo.onclick = (event => {
    (video.paused) ? video.play() : video.pause();
});

ctrlAudio.onclick = (event => {
    (audio.paused) ? audio.play() : audio.pause();
});