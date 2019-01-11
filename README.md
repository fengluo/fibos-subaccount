# FIBOS-subaccount

该示例演示了如何使用智能合约实现自动分账的需求。

## 配置说明

安装依赖

```
npm install
```

然后打开 FIBOS 测试网 http://testnet.fibos.fo 注册三个账户，把账户名，公钥和私钥填入 `config.js` 对应位置。

## 命令

部署合约

```
fibos deploy.js
```

配置权限

```
fibos auth.js
```

查看账户金额

```
fibos account.js
```

使用用户账户兑换 FO 通证

```
fibos exchange.js
```

从用户账户转帐10 FO 到平台账户

```
fibos transfer.js
```