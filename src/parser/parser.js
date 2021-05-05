import {Title, Heading, Week, Text} from './Classes.js';

function ImportJournal(json){
    let importJournal = json.map(entry =>{
        switch(entry.type){
            case "Title":
                return new Title(entry.value)
            case "Heading":
                return new Heading(entry.level, entry.value)
            case "Week":
                return new Week(entry.startDate, entry.endDate ,entry.value)
            case "Text":
                return new Text(entry.value)
            default:
                console.log(entry)
                console.log("fehler")
                break
        }
    })
    return importJournal
}
function ExportToWiki(json){
    const Journal = ImportJournal(json)
    let output=""
    Journal.forEach(element => {
        output+=element.value;
    });
    console.log(output)
    return output
}

export { ImportJournal, ExportToWiki }

