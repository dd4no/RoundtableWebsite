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

