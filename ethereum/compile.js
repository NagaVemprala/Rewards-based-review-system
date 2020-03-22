// path module handles both the windows and Mac systems 
const path = require('path');

// file system - to read the file 
const fs = require('fs-extra');

// required compiler 
const solc = require('solc');

const buildPath = path.resolve(__dirname, 'build');
const eCommerceFinalPath = path.resolve(__dirname, 'contracts', 'eCommerceFinal.sol');
const source = fs.readFileSync(eCommerceFinalPath, 'utf8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  );
}