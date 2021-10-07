console.log('background running');

chrome.runtime.onMessage.addListener(receiver);

window.word = 'coding train';

//popup = null
//txt = null
popups = []
cnt = 0
lang = "ru"
nat = 'en'
ip = "174.138.15.163"

//ip = "localhost"

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function httpPost(theUrl, stuff)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", theUrl, false );
    xmlHttp.send( stuff );
    return xmlHttp.responseText;
}


function createPopup(content){
    var nnn = open("http://link-ify.com/mini_linkify.html?lang="+lang+"&word="+content+"&native="+nat, "Popup"+cnt, "width=700,height=500");
    //var nnn = open("http://localhost:63343/mini_linkify.html?lang="+lang+"&word="+content+"&native="+nat, "Popup"+cnt, "width=700,height=500");
    return nnn;
}


function detect(request){
    word = request.text;
    lang = request.target
    nat = request.native
    cnt++;

    url1 = 'http://'+ip+':8085/api/linkify?lang='+lang+'&align=0'
    linkify = httpPost(url1, word)
    //onsole.log('c1', linkify)

    linkify_members = linkify.split("hndwrd(")
    if (linkify_members.length == 2) {
        parts = linkify_members[1].substr(1, linkify_members[1].indexOf(")") - 2).split('=')
        word_itself = parts[2]

        if(word_itself.indexOf("|") != -1){
            return false
        }

        return word_itself
    }
    else{
        return false
    }
}

function makePopup(request){
    word = request.word;
    lang = request.target
    nat = request.native
    obj = createPopup(word)
}

function receiver(request, sender, sendResponse) {
    console.log('I received', request);

    if(request.type === "detect"){
        res = detect(request)
        console.log('I answer', {result: word_itself});
        sendResponse({result: res});
        return;
    }

    if(request.type === "popup"){
        makePopup(request)
        console.log('I answer', {result: 'ok'});

        sendResponse({result: 'ok'});
        return;
    }

}