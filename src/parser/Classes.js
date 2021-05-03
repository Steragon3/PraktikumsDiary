class Title {
    constructor(value) {
      this.value = "{{"
      this.value += value
      this.value += "}}"
    }
}
class Heading {
    constructor(hirarchy, value) {
      this.value = "=".repeat(hirarchy+1);
      this.value += value;
      this.value += "=".repeat(hirarchy+1);
    }
}
class Week{
    constructor(week, value) {
        this.value = "'''"
        this.value += week
        this.value += "''' \n "
        this.value += value
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
    let newText = text.replace(/\*/gi,"'''")
    newText = newText.replace( /\_/gi,"''")
    newText = newText.replace()
    console.log(newText)
}