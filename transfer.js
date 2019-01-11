const FIBOS = require('fibos.js');
const config = require('./config');

const fibosClient = FIBOS(config.callClient);

let ctx = fibosClient.contractSync('eosio.token');

const r = ctx.extransferSync(
    config.account1.name, // from
    config.contractAccount.name, // to
    '10.0000 FO@eosio', // quantity
    config.account2.name, // memo
    {
        authorization: config.account1.name
    }
)

console.log(r)