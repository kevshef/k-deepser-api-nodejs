const DeepEntity = require('../class/DeepEntity');


module.exports =class Company extends DeepEntity{
    constructor(props) {
        super(props);
        this.entity = 'company/';
        this.collectionEntity = 'companies/';
    }
}

