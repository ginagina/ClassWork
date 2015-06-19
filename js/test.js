console.log ("my video page is loaded");

var myVideo;

function setup(){
    var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
    myCanvas.parent("test");
    
    myVideo = createVideo("wheatfield.mp4");
    myVideo.loop();
    myVideo.hide();  
    
    rectMode(CENTER);
}

function draw(){
    clear();
    
    image(myVideo, 0, 0, window.innerWidth, window.innerHeight);
    
    fill("rgba(0, 0, 0, 0.2)");
    
    if(dist(mouseX, mouseY, window.innerWidth/4, window.innerHeight/2)<100){
        rect(window.innerWidth/4, window.innerHeight/2, 200, 400);
        filter(POSTERIZE, 3);
        )else if(dist(mouseX, mouseY, window.innerWidth/2, window.innerHeight/2)<100){
    rect(window.innerWidth/2, window.innerHeight/2, 200, 400);
            filter(GRAY);
        myVideo.pause();
    }else{
        myVideo.loop();
    }

}

