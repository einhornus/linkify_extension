
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

window.addEventListener('mouseup', wordSelected);

native = ""
target = ""
resp = ""

ddx = 20
ddy = 10
buttonSize = 30

chrome.storage.sync.get('native', function (data) {
    native = data.native;
});

chrome.storage.sync.get('target', function (data) {
    target = data.target;
});

var child = document.createElement("p");

pth = chrome.extension.getURL("logo.png")
child.innerHTML = "<img src=\""+pth+"\" width=\""+buttonSize+"\" height=\""+buttonSize+"\">\n"
child.style.position = "fixed"

document.body.appendChild(child);
child.style.visibility = false
//document.style.pointerEvents = "none";
moveAway()

putX = -100
putY = -100


function clearSelection()
{
    if (window.getSelection) {window.getSelection().removeAllRanges();}
    else if (document.selection) {document.selection.empty();}
}

function moveAway(){
    child.style.visibility = false
    child.style.left = "-100px";
    child.style.top = "-100px";
    putX = -100
    putY = -100
}


function wordSelected() {
    let selectedText = window
        .getSelection()
        .toString()
        .trim();
    console.log(selectedText);

    if(selectedText === ""){
        //child.style.visibility = false
        moveAway()
        return;
    }

    ev = event

    var x = ev.clientX;
    var y = ev.clientY;
    dx = x - putX - buttonSize / 2;
    dy = y - putY - buttonSize / 2;
    dist = Math.sqrt(dx*dx + dy*dy)
    console.log("dist", dist)
    if(dist <= buttonSize){
        return;
    }

    child.style.visibility = true

    if (selectedText.length > 0) {
        let message1 = {
            type: "detect",
            text: selectedText,
            target: target,
            native: native
        };

        console.log("sending", message1);

        chrome.runtime.sendMessage(message1, function(response) {

            console.log("received", response);

            if(response.result !== false){
                resp = response.result
                var x = ev.clientX;     // get the horizontal coordinate
                var y = ev.clientY;   // get the vertical coordinate


                putX = x + ddx
                putY = y + ddy

                child.style.left = putX + "px";
                child.style.top = putY + "px";
                child.style.visibility = true

                //console.log("pos", putX, putY, child)

                //clearSelection()

                child.addEventListener("click", function (){
                    let message2 = {
                        type: "popup",
                        word: resp,
                        target: target,
                        native: native
                    };

                    moveAway()
                    console.log("sending", message2);
                    //child.style.visibility = false

                    chrome.runtime.sendMessage(message2);
                    //clearSelection()
                    return true
                }, { once: true })

            }
            else{
                moveAway()
            }
        })

    }
}