const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'wedding photos');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpeg'));
let html = '<html><body style="display:flex;flex-wrap:wrap;">';
files.forEach(f => {
  const fp = path.join(dir, f).replace(/\\/g, '/');
  html += `<div style="margin:10px; width:200px; text-align:center;"><img src="file:///${fp}" width="200" height="200" style="object-fit:cover;"><p style="font-size:12px">${f}</p></div>`;
});
html += '</body></html>';
fs.writeFileSync('test.html', html);
