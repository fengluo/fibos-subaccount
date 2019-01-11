const FIBOS = require('fibos.js');
const config = require('./config');

const fibosClient = FIBOS(config.client);
const fs = require('fs');

// setcode
const jsCode = fs.readTextFile(`${__dirname}/contracts/subaccount.js`);
fibosClient.setcodeSync(config.contractAccount.name, 0, 0, fibosClient.compileCode(jsCode));

// getcode
const code = fibosClient.getCodeSync(config.contractAccount.name, true);
console.log('code:', code);

// setabi
const abi = JSON.parse(fs.readTextFile(`${__dirname}/contracts/subaccount.abi`));
fibosClient.setabiSync(config.contractAccount.name, abi);