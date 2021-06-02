//Main app JS code goes here


//*****Challenge Page code*****//

//dynamically load script tag into head tag based on option selected from dropdown
function selectChallenge() {
    var file = document.getElementById('options').value;
    if (document.head.lastChild.id == 'challenge-script'){
        document.head.lastChild.remove();
    }
    var newScriptTag = document.createElement('script');
    newScriptTag.id = 'challenge-script'
    newScriptTag.src = `scripts/${file}.js`;
    document.head.appendChild(newScriptTag);
}

function clearResult() {
    //clear the output of the coding challenge from the UI
    document.getElementById('result-box').innerHTML = '';
    document.getElementById('options').value = "-- Select Date --";
    let newScriptTag = document.getElementById('challenge-script').remove();
}

function openTab(evt, tabName){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-links");
    for (i=0; i<tablinks.length; i++){
        tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}