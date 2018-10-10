
const dolarToTL = 4.5;

function roundTo(amount){
    return Math.round(amount);
}

exports.convertDolarToTL = usd => roundTo(usd*dolarToTL);
exports.convertTLtoDolar = tl => roundTo(tl/dolarToTL);