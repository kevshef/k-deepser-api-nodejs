const DeepEntity = require('../class/DeepEntity');

module.exports =  class Ci extends DeepEntity{
    constructor(props) {
        super(props);
        this.entity = 'cmdb/ci/';
        this.collectionEntity = 'cmdb/cis/';
    }
}

