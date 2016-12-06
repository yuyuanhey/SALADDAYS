// Filter
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDIV");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

//menu onmouseover event
function changeBorder(id){
    document.getElementById(id).style="background-color:#AAAAAA";
}
//menu onmouseout event
function changeBack(id){
    document.getElementById(id).style="background-color:none";
}

function changeOpacity(id){
    document.getElementById(id).style.animationName = "changeOpacity";
    document.getElementById(id).style.animationDuration = "1s";
    console.log("change "+id);
}

function zoomIn(id){
    target1 = document.getElementById('target1').style.display == "none";
    target2 = document.getElementById('target2').style.display == "none";
    target3 = document.getElementById('target3').style.display == "none";
    vedio1  = document.getElementById('vedio1').style.display  == "none";
    vedio2  = document.getElementById('vedio2').style.display  == "none";
    map     = document.getElementById('map').style.display     == "none";

    if(id == "target1"){
        if(!target1){
            changeOpacity(id);
        }
        else if(!target2){
            document.getElementById('target2').style.display = "none";
            document.getElementById(id).style.display = "block";
            changeOpacity(id);
        }
        else if(!target3){
            document.getElementById('target3').style.display = "none";
            document.getElementById(id).style.display = "block";
            changeOpacity(id);
        }
        else if(!vedio1){
            document.getElementById('vedio1').style.display = "none";
            document.getElementById(id).style.display = "block";
            changeOpacity(id);
        }
        else if(!vedio2){
            document.getElementById('vedio2').style.display = "none";
            document.getElementById(id).style.display = "block";
            changeOpacity(id);
        }
        else{
            document.getElementById('map').style.display = "none";
            document.getElementById(id).style.display = "block";
            changeOpacity(id);
        }
        console.log(id + " " + document.getElementById(id).style.display);
    }
    else if(id == "target2"){
        if(!target2){
            changeOpacity(id);
        }
        else if(!target1){
            document.getElementById('target1').style.display = "none";
            document.getElementById(id).style.display = "inline-block";
            changeOpacity(id);
        }
        else if(!target3){
            document.getElementById('target3').style.display = "none";
            document.getElementById(id).style.display = "inline-block";
            changeOpacity(id);
        }
        else if(!vedio1){
            document.getElementById('vedio1').style.display = "none";
            document.getElementById(id).style.display = "block";
            changeOpacity(id);
        }
        else if(!vedio2){
            document.getElementById('vedio2').style.display = "none";
            document.getElementById(id).style.display = "block";
            changeOpacity(id);
        }
        else{
            document.getElementById('map').style.display = "none";
            document.getElementById(id).style.display = "block";
            changeOpacity(id);
        }
        console.log(id +  " " + document.getElementById(id).style.display);
    }
    else if(id == "target3"){
        if(!target3){
            changeOpacity(id);
        }
        else if(!target1){
            document.getElementById('target1').style.display = "none";
            document.getElementById(id).style.display = "inline-block";
            changeOpacity(id);
        }
        else if(!target2){
            document.getElementById('target2').style.display = "none";
            document.getElementById(id).style.display = "inline-block";
            changeOpacity(id);
        }
        else if(!vedio1){
            document.getElementById('vedio1').style.display = "none";
            document.getElementById(id).style.display = "block";
            changeOpacity(id);
        }
        else if(!vedio2){
            document.getElementById('vedio2').style.display = "none";
            document.getElementById(id).style.display = "block";
            changeOpacity(id);
        }
        else{
            document.getElementById('map').style.display = "none";
            document.getElementById(id).style.display = "block";
            changeOpacity(id);
        }
        console.log(id +  " " + document.getElementById(id).style.display);
    }
    else if(id == "vedio1"){
        if(!vedio1){
            changeOpacity(id);
        }
        else if(!target1){
            document.getElementById('target1').style.display = "none";
            document.getElementById(id).style.display = "inline-block";
            changeOpacity(id);
        }
        else if(!target2){
            document.getElementById('target2').style.display = "none";
            document.getElementById(id).style.display = "inline-block";
            changeOpacity(id);
        }
        else if(!target3){
            document.getElementById('target3').style.display = "none";
            document.getElementById(id).style.display = "inline-block";
            changeOpacity(id);
        }
        else if(!vedio2){
            document.getElementById('vedio2').style.display = "none";
            document.getElementById(id).style.display = "block";
            changeOpacity(id);
        }
        else{
            document.getElementById('map').style.display = "none";
            document.getElementById(id).style.display = "block";
            changeOpacity(id);
        }
        console.log(id +  " " + document.getElementById(id).style.display);
    }
    else if(id == "vedio2"){
        if(!vedio2){
            changeOpacity(id);
        }
        else if(!target1){
            document.getElementById('target1').style.display = "none";
            document.getElementById(id).style.display = "inline-block";
            changeOpacity(id);
        }
        else if(!target2){
            document.getElementById('target2').style.display = "none";
            document.getElementById(id).style.display = "inline-block";
            changeOpacity(id);
        }
        else if(!target3){
            document.getElementById('target3').style.display = "none";
            document.getElementById(id).style.display = "inline-block";
            changeOpacity(id);
        }
        else if(!vedio1){
            document.getElementById('vedio1').style.display = "none";
            document.getElementById(id).style.display = "block";
            changeOpacity(id);
        }
        else{
            document.getElementById('map').style.display = "none";
            document.getElementById(id).style.display = "block";
            changeOpacity(id);
        }
        console.log(id +  " " + document.getElementById(id).style.display);
    }
    else if(id == "map"){
         if(!map){
             changeOpacity(id);
        }
        else if(!target1){
            document.getElementById('target1').style.display = "none";
            document.getElementById(id).style.display = "block";
            changeOpacity(id);
        }
        else if(!target2){
            document.getElementById('target2').style.display = "none";
            document.getElementById(id).style.display = "block";
            changeOpacity(id);
        }
        else if(!target3){
            document.getElementById('target3').style.display = "none";
            document.getElementById(id).style.display = "block";
            changeOpacity(id);
        }
        else if(!vedio1){
            document.getElementById('vedio1').style.display = "none";
            document.getElementById(id).style.display = "block";
            changeOpacity(id);
        }
        else{
            document.getElementById('vedio2').style.display = "none";
            document.getElementById(id).style.display = "block";
            changeOpacity(id);
        }
        console.log(id +  " " + document.getElementById(id).style.display);
    }
}