import {Title, Heading, Week, Text} from './classes.js';

function ImportJournal(json){
    let importJournal = json.map(entry =>{
        switch(entry.type){
            case "title":
                return new Title(entry.value)
            case "heading":
                return new Heading(entry.hirarchy, entry.value)
            case "week":
                return new Week(entry.start, entry.end ,entry.value)
            case "text":
                return new Text(entry.value)
            default:
                console.log(entry)
                console.log("fehler")
                break
        }
    })
    return importJournal
}
function ExportToWiki(Journal){
    let output=""
    Journal.forEach(element => {
        output+=element.value;
    });
    return output
}

module.exports = { ImportJournal, ExportToWiki }

