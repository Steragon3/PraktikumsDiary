import { ImportJournal, ExportToWiki } from './parser.js'
import { FormatDate, FormatText, Heading, Title, Week, Text } from './Classes.js'
const testjson = require('./test.json');


it('test date conversion',() =>{
    expect(FormatDate("2019-12-11")).toBe("11.12.");
});

it('test link bold cursive formatting',() =>{
    expect(FormatText("*bold*")).toBe("'''bold'''");
    expect(FormatText("_cursive_")).toBe("''cursive''");
    expect(FormatText("*_boldcrusive_*")).toBe("'''''boldcrusive'''''");
    expect(FormatText("[https://www.google.de]")).toBe("[https://www.google.de google]");
});

const testjournal = [
  new Heading(1,'das ist ein h2'),
  new Heading(2,'das ist ein h3'),
  new Text('text text text *bold* _cursive_ *_boldcrusive_* [https://www.google.de]'),
  new Week('2019-12-10','2019-12-14','in dieser woche habe ich nichts gemacht')
]

it('test import json',() =>{
     expect(ImportJournal(testjson)).toMatchObject(testjournal);
});

it('test export to wiki form',() =>{
    expect(ExportToWiki(testjson)).toBe("== das ist ein h2 ==\n=== das ist ein h3 ===\ntext text text '''bold''' ''cursive'' '''''boldcrusive''''' [https://www.google.de google]\n'''10.12. - 14.12.'''\nin dieser woche habe ich nichts gemacht\n");
});