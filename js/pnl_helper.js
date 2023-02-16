"use strict";
var CONTRACT_TYPE;
(function (CONTRACT_TYPE) {
    CONTRACT_TYPE[CONTRACT_TYPE["CALL"] = 0] = "CALL";
    CONTRACT_TYPE[CONTRACT_TYPE["PUT"] = 1] = "PUT";
})(CONTRACT_TYPE || (CONTRACT_TYPE = {}));
var CONTRACT_SIDE;
(function (CONTRACT_SIDE) {
    CONTRACT_SIDE[CONTRACT_SIDE["BOUGHT"] = 0] = "BOUGHT";
    CONTRACT_SIDE[CONTRACT_SIDE["SOLD"] = 1] = "SOLD";
})(CONTRACT_SIDE || (CONTRACT_SIDE = {}));
const expressions = { 0: { C_1: 0, C_0: 0 } };
function add_contract(type, side, premium, strike, count) {
    if (premium <= 0) {
        return;
    }
    ;
    if (strike < 0) {
        return;
    }
    ;
    if (count <= 0) {
        return;
    }
    ;
    if (count % 1 != 0) {
        return;
    }
    ;
    let left_C_1 = 0;
    let left_C_0 = 0;
    let Right_C_1 = 0;
    let Right_C_0 = 0;
    if (side == CONTRACT_SIDE.BOUGHT) {
        if (type == CONTRACT_TYPE.CALL) {
            left_C_1 = 0;
            left_C_0 = -premium;
            Right_C_1 = 1;
            Right_C_0 = -strike - premium;
        }
        else {
            left_C_1 = -1;
            left_C_0 = strike - premium;
            Right_C_1 = 0;
            Right_C_0 = -premium;
        }
    }
    else {
        if (type == CONTRACT_TYPE.CALL) {
            left_C_1 = 0;
            left_C_0 = premium;
            Right_C_1 = -1;
            Right_C_0 = strike + premium;
        }
        else {
            left_C_1 = 1;
            left_C_0 = -strike + premium;
            Right_C_1 = 0;
            Right_C_0 = premium;
        }
    }
    left_C_1 *= count;
    left_C_0 *= count;
    Right_C_1 *= count;
    Right_C_0 *= count;
    const keys = Object.keys(expressions);
}
