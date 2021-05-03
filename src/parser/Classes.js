

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
        this.value += "''' \n "
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

module.exports = {Title, Heading, Week, Text}