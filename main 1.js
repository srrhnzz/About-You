const lyrics = [
  { time: 1.0, text: "About You - 1975" },
  { time: 44.67, text: " I"},
  { time: 49.27, text: " know a place" },
  { time: 54.53, text: " It's somewhere I go when I need to remember your face" },
  { time: 64.00, text: " We get married"},
  { time: 69.24, text: " in our heads" },
  { time: 74.53, text: " Something to do while we try to recall how we met" },
  { time: 84.00, text: " Do you think I have forgotten?" },
  { time: 89.12, text: " Do you think I have forgotten?" },
  { time: 94.13, text: " Do you think I have forgotten" },
  { time: 99.24, text: " About you?" },
  { time: 103.94, text:  " You and I"},
  { time: 105.54, text: " (don't let go)" },
  { time: 109.24, text: " Were alive"},
  { time: 110.24, text: " (don't let go)" },
  { time: 114.25, text: " With nothing to do,"},
  { time: 115.85, text: " I could lay and just look in your eyes"},
  { time: 124.66, text: " Wait"},
  { time: 125.74, text: " (don't let go)"},
  { time: 129.24, text: " and pretend"},
  { time: 130.74, text: " (don't let go)"},
  { time: 134.69, text: " Hold on and hope"},
  { time: 136.94, text: " that we'll find our way back in the end" },
  { time: 144.26, text: " Do you think I have forgotten?" },
  { time: 149.20, text: " Do you think I have forgotten?" },
  { time: 154.17, text: " Do you think I have forgotten" },
  { time: 159.16, text: " About you?" },
  { time: 164.18, text: " Do you think I have forgotten?" },
  { time: 169.04, text: " Do you think I have forgotten?" },
  { time: 174.12, text: " Do you think I have forgotten" },
  { time: 179.12, text: " About you?" },
  { time: 184.48, text: " There was something 'bout you"},
  { time: 186.24, text: " that now I can't remember" },
  { time: 189.67, text: " It's the same damn thing"},
  { time: 192.24, text: " that made my heart surrender" },
  { time: 194.44, text: " And I miss you on a train,"},
  { time: 197.24, text: " I miss you in the morning" },
  { time: 199.56, text: " I never know what to think about" },
  { time: 203.55, text: " I think about you"},
  { time: 205.24, text: " (so don't let go)" },
  { time: 209.14, text: " About you"},
  { time: 210.84, text: " (so don't let go)" },
  { time: 214.20, text: " Do you think I have forgotten" },
  { time: 219.16, text: " About you?" },
  { time: 220.16, text: " (don't let go)" },
  { time: 224.21, text: " About you..." },
  { time: 229.17, text: " About you?" },
  { time: 234.13, text: " Do you think I have forgotten" },
  { time: 239.28, text: " About you?" },
];

const lyricsContainer = document.getElementById("lyrics");
function myFunction() {
  var x = document.getElementById("audio").autoplay;
  document.getElementById("demo").innerHTML = x;
};

let currentLyricIndex = 0;

audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;
  if (currentLyricIndex < lyrics.length) {
    const lyricTime = lyrics[currentLyricIndex].time;
    if (currentTime >= lyricTime) {
      typeLyric(lyrics[currentLyricIndex].text);
      currentLyricIndex++;
    }
  }
});

function typeLyric(text) {
  const typingSpeed = 10; // adjust the typing speed here
  let i = 0;
  const intervalId = setInterval(() => {
    if (i < text.length) {
      lyricsContainer.innerHTML += text[i];
      i++;
    }
  }, typingSpeed);
};
setTimeout(() => {
  document.getElementById('play').remove();
}, 2445);
setTimeout(() => {
  document.getElementById('credits').remove();
}, 2445);

const storedBackground = localStorage.getItem('backgroundImage');
const lyricsElements = document.getElementsByClassName('lyrics');
for (const element of lyricsElements) {
  if (storedBackground) {
    element.style.backgroundImage = `url(${storedBackground})`;
  } else {
    element.style.backgroundImage = `url(White.png)`;
  }
};