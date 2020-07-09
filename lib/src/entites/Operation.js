const DeepEntity = require('../class/DeepEntity')

/**
 *
 * @type {Operation}
 */
module.exports = class Operation extends DeepEntity{
    constructor(props) {
        super(props);
        this.entity = 'service/operation/';
        this.collectionEntity = 'service/operations/';
    }
}
