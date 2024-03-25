
import fs from 'fs';
import Docxtemplater from 'docxtemplater';
import JSZip from 'jszip';

const inputFilePath = 'draft_jurnal.docx';
const outputFilePath = 'author_template.docx';

const content = fs.readFileSync(inputFilePath);

const zip = new JSZip(content);
const doc = new Docxtemplater().loadZip(zip);

const data = { title: 'Judul Jurnal', abstract: 'Abstrak Jurnal' };
doc.setData(data);
doc.render();

const buf = doc.getZip().generate({ type: 'nodebuffer' });
fs.writeFileSync(outputFilePath, buf);

console.log(`File berhasil disimpan ke ${outputFilePath}`);
