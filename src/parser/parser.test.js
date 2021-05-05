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
  new Title ('Mein nices Praktikum'),
  new Heading(1,'das ist ein h2'),
  new Heading(2,'das ist ein h3'),
  new Week('2019-12-10','2019-12-14','in dieser woche habe ich nichts gemacht'),
  new Text('text text text *bold* _cursive_ *_boldcrusive_* [www.google.de]')
]

// it('test import json',() =>{
//     expect(ImportJournal(testjson)).toBe(testjournal);
// });

it('test export to wiki form',() =>{
    expect(ExportToWiki(testjournal)).toBe("{{ Mein nices Praktikum }}\n== das ist ein h2 ==\n=== das ist ein h3 ===\n'''10.12. - 14.12.'''\nin dieser woche habe ich nichts gemacht\ntext text text '''bold''' ''cursive'' '''''boldcrusive''''' [www.google.de google]\n");
});