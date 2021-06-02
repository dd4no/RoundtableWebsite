//Main app JS code



//*****Challenge Page code*****//

// dynamically load script tag into head tag based on option selected from dropdown
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
    // clear the output of the coding challenge from the UI
    document.getElementById('result-box').innerHTML = '';
    document.getElementById('options').value = "-- Select Date --";
    let newScriptTag = document.getElementById('challenge-script').remove();
}

function openTab(tabContainer, tabName){
    // open tab content when tab is clicked.
    let tabContainers = document.getElementsByClassName("tab-content");
    for (let i=0; i<tabContainers.length; i++){
        tabContainers[i].style.display = "none";
    }
    document.getElementById(tabContainer).style.display = "block";
    let tabNames = document.getElementsByClassName("tab");
    for (let j=0; j<tabNames.length; j++){
        tabNames[j].style.backgroundColor = "var(--secondarycolor)";
    }
    document.getElementById(tabName).style.backgroundColor = "var(--highlightcolor)"
    document.getElementById(tabContainer).style.backgroundColor = "var(--highlightcolor)"

}