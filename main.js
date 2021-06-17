prediction_1="";
Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
});
}
console.log("ml5 version",ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1rPJWdGcm/model.json',modelLoaded);
function modelLoaded(){
console.log("Model loaded");
}
function speak(){
var synth= window.speechSynthesis;
speak_data1="the prediction is"+prediction_1;
var utter_this=new SpeechSynthesisUtterance(speak_data1);
synth.speak(utter_this);
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
    }function gotResult(error,results){
    if(error){
    console.error(error);
    }
    else{
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML=results[0].label;
    speak();
    if(results[0].label=="high five"){
    document.getElementById("update_emoji").innerHTML="&#9995;";
    }
    if(results[0].label=="victory hand"){
        document.getElementById("update_emoji").innerHTML="&#9996;";
        }
        if(results[0].label=="thumbs up"){
            document.getElementById("update_emoji").innerHTML="&#128077;";
            }
            if(results[0].label=="thumbs down"){
                document.getElementById("update_emoji").innerHTML="&#128078;";
                }
    }
    }