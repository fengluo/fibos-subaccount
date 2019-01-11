const config = {
    // 平台合约账户的客户端配置
    client: {
        chainId: '68cee14f598d88d340b50940b6ddfba28c444b46cd5f33201ace82c78896793a',
        httpEndpoint: 'http://testnet.fibos.fo',
        keyProvider: 'PRIVATE_KEY_OF_helloworld33'
    },
    // 用户账户的客户端配置
    callClient:{
        chainId: '68cee14f598d88d340b50940b6ddfba28c444b46cd5f33201ace82c78896793a',
        httpEndpoint: 'http://testnet.fibos.fo',
        keyProvider: 'PRIVATE_KEY_OF_helloworld11'
    },
    // 平台合约账户信息
    contractAccount: {
        name: 'helloworld33',
        publicKey: 'PUBLIC_KEY_OF_helloworld33',
        privateKey: 'PRIVATE_KEY_OF_helloworld33'
    },
    // 用户账户信息
    account1: {
        name: 'helloworld11',
        publicKey: 'PUBLIC_KEY_OF_helloworld11',
        privateKey: 'PRIVATE_KEY_OF_helloworld11'
    },
    // 内容提供者账户信息
    account2: {
        name: 'helloworld22',
        publicKey: 'PUBLIC_KEY_OF_helloworld22',
        privateKey: 'PRIVATE_KEY_OF_helloworld22'
    }
}

module.exports = config