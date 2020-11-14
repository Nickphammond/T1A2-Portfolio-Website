


// console.log(document.getElementById("resume-circle-top").getAttribute("r"));

// console.log(document.getElementById("resume-svg").getAttribute("width"));



// document.getElementById("resume-circle-top").setAttribute("r" ,10);

if(document.getElementsByTagName("body")[0].id == "about") {
    document.getElementById("resume-svg").addEventListener("mouseover", function(){
        document.getElementById("resume-circle-top").setAttribute("r" ,48);
        document.getElementById("resume-svg").setAttribute("width" ,500);
        document.getElementById("resume-svg").setAttribute("height" ,500);
        document.getElementById("resume-button").setAttribute("style" ,"height:100%");
    });
    
    document.getElementById("resume-svg").addEventListener("mouseleave", function(){
        document.getElementById("resume-circle-top").setAttribute("r" ,0);
        document.getElementById("resume-svg").setAttribute("width" ,100);
        document.getElementById("resume-svg").setAttribute("height" ,100);
        document.getElementById("resume-button").setAttribute("style" ,"height:100px");
    });
} else {
    document.getElementById("background-path1").setAttribute("d", "M-50 50 -50 100 100 100  C 50 100, 40 80, -50 50Z");
};






// document.getElementById("background-path1").setAttribute("d", "M0 50 0 100 100 100Z");

