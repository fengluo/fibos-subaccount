const FIBOS = require('fibos.js');
const config = require('./config');

const fibosClient = FIBOS(config.client);

let ctx = fibosClient.contractSync('eosio');

var r = ctx.updateauthSync({
  account: config.contractAccount.name,
  permission: 'active',
  parent: 'owner',
  auth: {
    threshold: 1,
    keys: [{
      key: config.contractAccount.publicKey,
      weight: 1
    }],
    accounts: [{
        permission: {
            actor: config.contractAccount.name,
            permission: 'eosio.code'
        },
        weight: 1
    }]
  }
},{
    authorization: `${config.contractAccount.name}@owner`
});
console.log(r);