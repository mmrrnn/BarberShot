// var video;
// var canvas;
// var headerVideo = document.getElementById('header-video');
// var button = document.getElementById('btn-start');

// function startPlayback() {
//     if (!video) {
//         video = document.createElement('video');
//         video.src = './img/barbershot_2019.mp4';
//         video.loop = true;
//         video.addEventListener('playing', paintVideo);
//     }
//     video.play();
// }

// function paintVideo() {
//     if (!canvas) {
//         canvas = document.createElement('canvas');
//         canvas.width = video.videoWidth;
//         canvas.height = video.videoHeight;
//         headerVideo.appendChild(canvas);
//     }
//     canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
//     if (!video.paused)
//         requestAnimationFrame(paintVideo);
// }

// // window.addEventListener('DOMContentLoaded', e => {
// //     button.click();
// // });