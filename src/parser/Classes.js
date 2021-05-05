class Title {
    constructor(value) {
      this.value = "{{ "
      this.value += FormatText(value)
      this.value += " }}"
      this.value += "\n"
    }
}
class Heading {
    constructor(hirarchy, value) {
        this.value = "=".repeat(hirarchy+1)+" "
        this.value += FormatText(value)+" "
        this.value += "=".repeat(hirarchy+1)
        this.value += "\n"
    }
}
class Week{
    constructor(start, end, value) {
        this.value = "'''"
        this.value += FormatDate(start)+" - "+FormatDate(end)
        this.value += "'''\n"
        this.value += FormatText(value)
        this.value += "\n"
      }
}
class Text{
    constructor(value) {
        this.value = FormatText(value)
        this.value += "\n"
      }
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

export {Title as Title, Heading as Heading, Week as Week, Text as Text, FormatDate as FormatDate, FormatText as FormatText}

// module.exports = {Title, Heading, Week, Text, FormatDate, FormatText}