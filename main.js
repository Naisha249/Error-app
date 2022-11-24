
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );


function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
});
}

console.log("ml5 Version: ",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/LkB7lMrDn/',modelLoaded);


function modelLoaded(){
    console.log("Model Loaded Successfully!");
}

function check() { 
    img = document.getElementById("image_captured");
    classifier.classify(img, gotResults);
}
var pictures = new Array();

pictures[0] = "Naisha.jpg";
pictures[1] = "Mishika.jpg";
pictures[2] = "Selina.jpg";

var Names = new Array();

Names[0] = "Naisha";
Names[1] = "Mishka";
Names[2] = "Selina";

function gotResults(error, results) {
    if(error) {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_of_objects").innerHTML = results[0].label;
        document.getElementById("result_of_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}