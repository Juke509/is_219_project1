const addition = require('./addition');

class MathOperations {
    static sum(a = null, b = null) {
        if(Array.isArray(a)) {
            return addition.sum(a);
        }
        else {
            return addition.sum(a,b);
        }
    }
}
module.exports = MathOperations;