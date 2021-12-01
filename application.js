document.getElementById("form2").style.display="none";
document.getElementById("form3").style.display="none";
document.getElementById("wiz").style.display="none";

function wizerd(){
    document.getElementById("info").style.display="none";
    document.getElementById("wiz").style.display="block";
}
function gotoform1(){
    document.getElementById("form2").style.display="none";
    document.getElementById("form3").style.display="none";
    document.getElementById("form1").style.display="inline";
}

function gotoform2(){
    document.getElementById("form1").style.display="none";
    document.getElementById("form3").style.display="none";
    document.getElementById("form2").style.display="inline";
}

function gotoform3(){
    document.getElementById("form1").style.display="none";
    document.getElementById("form2").style.display="none";
    document.getElementById("form3").style.display="inline";
}