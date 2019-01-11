exports.on_extransfer = (from, to, quantity, memo) => {
    if (to === action.receiver && action.is_account(memo)) {
        const num = parseInt(quantity.quantity.split(' ')[0])
        const subnum = (num * 0.8).toFixed(4);
        trans.send_inline('eosio.token', 'extransfer', {
            from: to,
            to: memo,
            quantity: {
                quantity: `${subnum} ${quantity.quantity.split(' ')[1]}`,
                contract: quantity.contract
            },
            memo: 'sub account'
        },
        [
            {
                actor: action.receiver,
                permission: 'active'
            }
        ]);
    }
}