const FIBOS = require('fibos.js');
const config = require('./config');

const fibosClient = FIBOS(config.callClient);

const account1 = fibosClient.getTableRowsSync(true, 'eosio.token', config.account1.name, 'accounts');
console.log(config.account1.name);
console.log(account1);

const account2 = fibosClient.getTableRowsSync(true, 'eosio.token', config.account2.name, 'accounts');
console.log(config.account2.name);
console.log(account2);

const contractAccount = fibosClient.getTableRowsSync(true, 'eosio.token', config.contractAccount.name, 'accounts');
console.log(config.contractAccount.name);
console.log(contractAccount);