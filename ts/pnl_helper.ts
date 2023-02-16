enum CONTRACT_TYPE {
    CALL,
    PUT
}

enum CONTRACT_SIDE {
    BOUGHT,
    SOLD
}

interface expression {
    C_1: number;
    C_0: number;
}
const expressions: Record<number,expression> = {0: {C_1: 0, C_0: 0}};

/**
 * Adds a contract (or contracts) to the map of expressions based on the parameters of the contract passed in.
 * @param type Type of the contract - either "Call" or "Put". Accepts {@link CONTRACT_TYPE}.
 * @param side Side of the contract the user is on - either "Bought" or "Sold". Accepts {@link CONTRACT_SIDE}.
 * @param premium The price of the contract - positive, non-zero dollar value.
 * @param strike The strike price of the contract - positive dollar value.
 * @param count The number of this contract that should be added.
 */
function add_contract(type: CONTRACT_TYPE, side: CONTRACT_SIDE, premium: number, strike: number, count: number): void {
    if (premium <= 0) {return}; // throw error
    if (strike < 0) {return}; // throw error
    if (count <= 0) {return}; // throw error
    if (count % 1 != 0) {return}; // throw error
    
    let left_C_1: number = 0;
    let left_C_0: number = 0;
    let Right_C_1: number = 0;
    let Right_C_0: number = 0;

    if (side == CONTRACT_SIDE.BOUGHT) {
        if (type == CONTRACT_TYPE.CALL) {
            left_C_1 = 0;
            left_C_0 = -premium;
            Right_C_1 = 1;
            Right_C_0 = -strike - premium;
        } else { // CONTRACT_TYPE.PUT
            left_C_1 = -1;
            left_C_0 = strike - premium;
            Right_C_1 = 0;
            Right_C_0 = -premium;
        }
    } else { // CONTRACT_SIDE.SOLD
        if (type == CONTRACT_TYPE.CALL) {
            left_C_1 = 0;
            left_C_0 = premium;
            Right_C_1 = -1;
            Right_C_0 = strike + premium;
        } else { // CONTRACT_TYPE.PUT
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

    const keys = (Object.keys(expressions) as Array<keyof number>);
}