/*
    Convert HTML Entities
    Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

*/
function convertHTML(str) {
    // create a data structure containing symbols and they equivalents
    const entities = [
        {
            searchSymbole: /<>/mg,
            replacerSymbole: "&lt;&gt;"
        },
        {
            searchSymbole: /&/mg,
            replacerSymbole: "&amp;"
        },
        {
            searchSymbole: /</mg,
            replacerSymbole: "&lt;"
        },
        {
            searchSymbole: />/mg,
            replacerSymbole: "&gt;"
        },
        {
            searchSymbole: /"/mg,
            replacerSymbole: "&quot;"
        },
        {
            searchSymbole: /'/mg,
            replacerSymbole: "&apos;"
        }

    ]

    for (let i = 0; i < entities.length; i++) {
        //console.log(entities[i].searchSymbole)
        if (str.match(entities[i].searchSymbole)) {
            return str.replace(entities[i].searchSymbole, entities[i].replacerSymbole);
        }
    }
    return str;
}

console.log(convertHTML("abc"))
