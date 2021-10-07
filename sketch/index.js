targets = [
    document.getElementById("en_t"),
    //document.getElementById("es_t"),
    document.getElementById("de_t"),
    document.getElementById("fr_t"),
    document.getElementById("ru_t"),
    //document.getElementById("pt_t"),
    //document.getElementById("it_t"),
    document.getElementById("nl_t"),
    document.getElementById("zh_t"),
]

natives = [
    document.getElementById("en_n"),
    document.getElementById("es_n"),
    document.getElementById("de_n"),
    document.getElementById("fr_n"),
    document.getElementById("ru_n"),
    document.getElementById("pt_n"),
    document.getElementById("it_n"),
    document.getElementById("nl_n"),
    document.getElementById("zh_n"),
]


fff =  document.getElementById("en_n")
console.log("ffs", fff)

lngs_target = [
    "en",
    //"es_t",
    "de",
    "fr",
    "ru",
    //"pt_t",
    //"it_t",
    "nl",
    "zh",
]

lngs_native = [
    "en",
    "es",
    "de",
    "fr",
    "ru",
    "pt",
    "it",
    "nl",
    "zh",
]

native = "fr"
target = "ru"

function saveSettings() {
    chrome.storage.sync.set({"native": native, "target": target});
    console.log("Saved", native, target)
}


function get_values() {
    //console.log(native, target)
    //init_stuff_native();
    //init_stuff_target();


    chrome.storage.sync.get('native', function (data) {
        native = data.native;
        console.log('Loaded native', native)
        init_stuff_native();
    });

    chrome.storage.sync.get('target', function (data) {
        target = data.target;
        console.log('Loaded target', target)
        init_stuff_target();
    });

}

function init_stuff_target() {
    for (var i = 0; i < targets.length; i++) {
        if (lngs_target[i] === target) {
            targets[i].checked = true
        }
    }
}

function init_stuff_native() {
    for (var i = 0; i < natives.length; i++) {
        if (lngs_native[i] === native) {
            natives[i].checked = true
        }
    }
}

/*
targets[0].addEventListener('change', function() {
    native_lang = 0;
    setCookie_("nat", "0", 1000)
    reloadStuff()
});


ats1 = document.getElementById("ats1");
ats2 = document.getElementById("ats2");
ats3 = document.getElementById("ats3");

ats1.addEventListener('change', function() {
    setCookie_("articles", "0", 1000)
    reloadStuff()
});

ats2.addEventListener('change', function() {
    setCookie_("articles", "1", 1000)
    reloadStuff()
});

ats3.addEventListener('change', function() {
    setCookie_("articles", "2", 1000)
    reloadStuff()
});
 */




natives[0].addEventListener('change', function() {
    native = lngs_native[0];
    saveSettings()
});

natives[1].addEventListener('change', function() {
    native = lngs_native[1];
    saveSettings()
});

natives[2].addEventListener('change', function() {
    native = lngs_native[2];
    saveSettings()
});

natives[3].addEventListener('change', function() {
    native = lngs_native[3];
    saveSettings()
});

natives[4].addEventListener('change', function() {
    native = lngs_native[4];
    saveSettings()
});

natives[5].addEventListener('change', function() {
    native = lngs_native[5];
    saveSettings()
});

natives[6].addEventListener('change', function() {
    native = lngs_native[6];
    saveSettings()
});

natives[7].addEventListener('change', function() {
    native = lngs_native[7];
    saveSettings()
});

natives[8].addEventListener('change', function() {
    native = lngs_native[8];
    saveSettings()
});




targets[0].addEventListener('change', function() {
    target = lngs_target[0];
    saveSettings()
});

targets[1].addEventListener('change', function() {
    target = lngs_target[1];
    saveSettings()
});


targets[2].addEventListener('change', function() {
    target = lngs_target[2];
    saveSettings()
});

targets[3].addEventListener('change', function() {
    target = lngs_target[3];
    saveSettings()
});

targets[4].addEventListener('change', function() {
    target = lngs_target[4];
    saveSettings()
});

targets[5].addEventListener('change', function() {
    target = lngs_target[5];
    saveSettings()
});


get_values();