var leftWrist, rightWrist
function preload() {

}

function draw() {
    background("white");
    text('Alford Shi', 50, 300)
}

function setup() {
    canvas = createCanvas(800, 600);
    canvas.center()
    video = createCapture(VIDEO)
    poseNet = ml5.poseNet(video, modelLoaded);
    video.position(0, 300)

    poseNet.on("pose", gotPoses)
}

function modelLoaded() {
    console.log("Model Is Loaded")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        leftWrist = results[0].pose.leftWrist.x
        rightWrist = results[0].pose.rightWrist.x
        console.log(leftWrist - rightWrist);
        textSize(floor(leftWrist - rightWrist));
    }
}