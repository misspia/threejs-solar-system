const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const audioElement = document.getElementById('audio');
const audioSource = audioContext.createMediaElementSource(audioElement);
const analyser = audioContext.createAnalyser();

audioSource.connect(analyser);
audioSource.connect(audioContext.destination);

let frequecyData = new Uint8Array(200);
