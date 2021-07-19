Webcam.set({
    width: 300,
    height: 300,
    image_format:'png',
    png_quality: 90,
 contraints:{
facingMode: 'environment'
 }
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="result_img" src="'+ data_uri+ '"/>';

    });
}
console.log("Ml5 version: ", ml5.version);
var classifier = ml5.imageClassifier("MobileNet", modelLoaded);
function modelLoaded(){
    console.log("Model Loaded!");
}
function check(){
    img = document.getElementById("result_img");
    classifier.classify(img, gotresult);
    
}
function gotresult(error, results){
    if(error){
console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
        
    }
}