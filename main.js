img = ""
status = ""

function preload() {
    img = loadImage("dog_cat.jpg")

}

function setup() {
    canvas = createCanvas(640, 420)
    canvas.position(320,130)
    objectDetector = ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status").innerHTML = "status:Detecting Objects"
}

function draw() {
    image(img, 0, 0, 640, 420)
    if(status!=""){
        for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="status:objects Detected"

    }
    }
    fill("red")
    textSize(20)
    text("Dog", 45, 75)
    text("cat", 350, 85)
    noFill()
    stroke("red")
    rect(30, 50, 450, 350)

    rect(300, 70, 270, 320)


}
function modelLoaded(){
    console.log("model Loaded")
    status=true
    objectDetector.detect(img,got_result)
}
function got_result(error,results){
if(error){
    console.log(error)
}
else{
    console.log(results)
    objects=results
}
}