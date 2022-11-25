const audioContainer = document.getElementById("audioContainer");
const startBtn = document.getElementById("startBtn");

let stream;
let recorder;
let audio;
let audioUrl;
let downloadBtn;
let timeoutId;
const init = async () => {
  stream = await navigator.mediaDevices.getUserMedia({
    video: false,
    audio: true,
  });
};

const handleDownload = () => {
  const a = document.createElement("a");
  a.href = audioUrl;
  a.download = "My Audio.webm";
  document.body.appendChild(a);
  a.click();
};

const handleStopClick = () => {
  // StopBtn > RestartBtn으로 교체 (기능은 StartBtn과 동일)
  startBtn.innerText = "Restart";
  startBtn.removeEventListener("click", handleStopClick);
  startBtn.addEventListener("click", handleStartClick);

  // 5초전 stopBtn 눌렀을 때 초기화
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
  // audio 생성
  recorder.stop();
  recorder.ondataavailable = (event) => {
    audio = document.createElement("audio");
    const audioFile = event.data; // Blob
    audioUrl = URL.createObjectURL(audioFile);
    audio.controls = true;
    audio.srcObject = null;
    audio.src = audioUrl;
    audio.setAttribute("id", "audio");
    audioContainer.appendChild(audio);
  };
  // downloadBtn 생성
  downloadBtn = document.createElement("button");
  downloadBtn.innerText = "Download Recording";
  downloadBtn.addEventListener("click", handleDownload);
  document.body.appendChild(downloadBtn);
};

const handleStartClick = () => {
  // restart 할 때 오디오가 존재한다면 제거
  const existsAudio = document.getElementById("audio");
  if (existsAudio) {
    existsAudio.remove();
  }
  // restart 할 때 다운로드 버튼이 이미 있다면 제거
  if (downloadBtn) {
    downloadBtn.remove();
  }
  startBtn.innerText = "Stop Recording";
  startBtn.removeEventListener("click", handleStartClick);
  startBtn.addEventListener("click", handleStopClick);
  recorder = new MediaRecorder(stream, {
    mimeType: "audio/webm",
  });
  recorder.start();
  timeoutId = setTimeout(() => {
    handleStopClick();
  }, 5000);
};

init();

startBtn.addEventListener("click", handleStartClick);
