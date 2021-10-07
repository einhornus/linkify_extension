CSS = ""

CSS += ":root {\n" +
    "    --primary-color: #333333;\n" +
    "    --secondary-color: white;\n" +
    "}"

CSS += "body {\n" +
    "    background-color: var(--primary-color);\n" +
    "    color: var(--secondary-color);\n" +
    "    font-size: 12px;\n"+
    "}"

CSS += "table.reverso_table td {\n" +
    "    width: 50%;\n" +
    "    overflow: hidden;\n" +
    "    vertical-align: top;\n" +
    "    font-size: 12px;\n" +
    "    border: 1px dotted var(--secondary-color);\n" +
    "}"

CSS += "p, textarea, input {\n" +
    "    font-size: 12px;\n" +
    "    color: var(--secondary-color);\n" +
    "    background-color: var(--primary-color);\n" +
    "}"


CSS += "a.normal:link {color: lightgrey; text-decoration: none;}\n" +
    "a.normal:visited {color: lightgrey; text-decoration: none;}\n" +
    "a.normal:hover {color: lightgrey; text-decoration:underline}\n"


CSS += "a:link {color: cyan; text-decoration: none;}\n" +
    "a:visited {color: cyan; text-decoration: none;}\n" +
    "a:hover {color: cyan; text-decoration:underline}\n"

function add_css(stuff){
    //console.log('ps', CSS)
    //console.log('s', stuff)

    res = '<html lang="nl"><head>' +
        ' </script>\n' +
        '<title>Linkify</title> </head><style>'
    res += CSS
    res += '</style><body>'
    res += stuff;
    return res
}

function handleArticle(stuff){
    ps = stuff.split('|||||')
    res = ps[2]
    //res = "<a href = \"#a\" class = \"normal\" id=\"me\">jaartelling</a>"

    res = add_css(res)

    res += '</body></html>'
    //res = res.replaceAll('hndwrd', 'alert')
    return res;
}