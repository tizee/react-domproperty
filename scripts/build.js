const fs = require('fs');
const path = require('path');
const { attributes } = require('../index');

/**
 * | HTML | React |
 * | ---- | ---- |
 * |      |      |
 */

const genTD = (A, B) => `|${A}|${B}|\n`;
const genMDTable = lines => {
  const th = genTD('HTML', 'React');
  const hr = genTD('----', '----');
  const tbody = lines
    .map(([html, rc]) => {
      return genTD(html, rc);
    })
    .join('');
  return th + hr + tbody;
};

const genFile = () => {
  const fileHead = `# HTML - React Attributes Table\n`;
  const lines = Object.entries(attributes)
    .map(([key, val]) => {
      return [key, val];
    })
    .sort((a, b) => a[0].localeCompare(b[0]));
  console.log(lines.length);
  const code = fileHead + genMDTable(lines);
  const dir = path.join(__dirname, '..', 'doc');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  fs.writeFileSync(path.join(dir, 'attributes.md'), code);
};

genFile();
