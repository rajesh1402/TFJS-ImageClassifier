const webcamElement = document.getElementById("webcam");
let net;

// async function app() {
//   console.log("Loading mobilenet..");

//   // Load the model.
//   net = await mobilenet.load();
//   console.log("Sucessfully loaded model");

//   // Make a prediction through the model on our image.
//   const imgEl = document.getElementById("img");
//   const result = await net.classify(imgEl);
//   console.log(result);
// }

async function setupWebcam() {
  return new Promise((resolve, reject) => {
    const navigatorAny = navigator;
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigatorAny.webkitGetUserMedia ||
      navigatorAny.mozGetUserMedia ||
      navigatorAny.msGetUserMedia;
    if (navigator.getUserMedia) {
      navigator.getUserMedia(
        { video: true },
        stream => {
          webcamElement.srcObject = stream;
          webcamElement.addEventListener("loadeddata", () => resolve(), false);
        },
        error => reject()
      );
    } else {
      reject();
    }
  });
}

app();
