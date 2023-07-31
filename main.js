Webcam.set({
    width : 350 , 
    height : 300 , 
    image_format : 'png' ,
    png_quality:90
});

camera = document.getElementById("camera")

Webcam.attach( '#camera' )


function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version: ' , ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/h0e8oTUKb/model.json' , modelLoaded)
var prediction_1 = "";

function modelLoaded() {
    console.log('Model Loaded!')
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The  prediction is " + prediction_1;
    
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
    
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(error , results){
if(error) {
    console.error(error);
} else {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
    
    prediction_1 = results[0].label;
    
    console.log(prediction_1);
    
    speak();

    if(results[0].label == "1 finger")
    {
        document.getElementById("update_emoji").innerHTML = "&#128070;";
    }
    if(results[0].label == "Victory")
    {
        document.getElementById("update_emoji").innerHTML = "&#9996;";
    }
    if(results[0].label == "Smash")
    {
        document.getElementById("update_emoji").innerHTML = "&#9994;";
    }
    if(results[0].label == "Writing")
    {
        document.getElementById("update_emoji").innerHTML = "&#9997;";
    }
    if(results[0].label == "Left arrow")
    {
        document.getElementById("update_emoji").innerHTML = "&#128072;";
    }
    if(results[0].label == "Left arrow")
    {
        document.getElementById("update_emoji").innerHTML = "&#128072;";
    }
    if(results[0].label == "Right Arrow")
    {
        document.getElementById("update_emoji").innerHTML = "&#128073;";
    }
    


   
}

}


