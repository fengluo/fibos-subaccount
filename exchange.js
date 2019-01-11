const FIBOS = require('fibos.js');
const config = require('./config');

const fibosClient = FIBOS(config.callClient);

let ctx = fibosClient.contractSync('eosio.token');

const r = ctx.exchangeSync(
    config.account1.name,
    '1.0000 EOS@eosio',
    '0.0000 FO@eosio',
    'exchange FO to EOS',
    {
        authorization: config.account1.name
    }
);
console.log(r)