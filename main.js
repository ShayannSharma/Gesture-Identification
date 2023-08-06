noseX = 0
noseY = 0
leftWrist = 0
rightWrist = 0
diff = 0
function setup(){
    video = createCapture(VIDEO)
    video.size(550, 500)
    canvas = createCanvas(550, 500)
    canvas.position(560, 150)
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log("Model has loaded.")
}
function gotPoses(results){
    if (results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log("noseX = " + noseX + "  noseY = " + noseY )
        leftWrist = results[0].pose.leftWrist.x
        rightWrist = results[0].pose.rightWrist.x
        diff = floor(leftWrist - rightWrist)
    }
}
function draw(){
    background('#969A97')
    fill('red')
    stroke('black')
    square(noseX, noseY, diff)
    document.getElementById('length').innerHTML = "Square Side = " + diff
}
