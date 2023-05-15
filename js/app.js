const webCamElement = document.getElementById("webCam");
const canvasElement = document.getElementById("canvas");
const webcam = new Webcam(webCamElement, "user", canvasElement);

alert(`Desclaimer!
Project ini tidak akan merekam aktivitas device Anda, termasuk indentitas Anda.`)

webcam.start();

function takeAPicture() {
  let picture = webcam.snap();
  document.querySelector("a").href = picture;
}
