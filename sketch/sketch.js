// Wordnik API key:
// let api_key = '/?api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7'

function setup() {
    console.log("Load stuff")

    noCanvas();



    let bgpage = chrome.extension.getBackgroundPage();
    let word = bgpage.word.trim();

    gotData(word)

    function gotData(data) {
        createP(data[0].text).style('font-size', '48pt');
    }

    //createP(word);
}