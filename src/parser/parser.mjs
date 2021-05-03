import {Title, Heading, Week, Text} from './Classes.js';


export function ImportJournal(json){
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

export function ExportToWiki(Journal){
    let output=""
    Journal.forEach(element => {
        output+=element.value+" ";
    });
    return output
}

function FormatDate(date){
    //Date format YYYY-MM-DD
    //replace '-' ex: 2019-12-11 to 2019.12.11
    let newDate = date.replace( /-/gi, ".")
    //get rid of YYYY ex: 2019.12.11 to .12.11 
    newDate = newDate.substring(4,newDate.length)
    //change order of '.'MM'.'DD  ex: .12.11 to 11.12.
    newDate = newDate.replace(/(\.)(\d{2})(\.)(\d{2})/,"$4$3$2$1")
    return newDate
}

function FormatText(text){
    let linkReg = /\[(.*?)\]/g
    let newText = text.replace(/\*/gi,"'''")
    newText = newText.replace( /\_/gi,"''")
    let links = newText.match(linkReg)
    if(links != null){
        links.forEach(link =>{
            let newlink = link.substr(0,link.length-1)
            newlink += " "+newlink.substr(link.indexOf(".")+1,newlink.lastIndexOf(".")-link.indexOf(".")-1)+"]"
            newText = newText.substr(0,newText.indexOf(link)) + newlink + newText.substr(newText.indexOf(link)+link.length, newText.length) 
        })
    }
    return newText;
}
 module.exports = functions