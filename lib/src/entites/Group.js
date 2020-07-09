const DeepEntity = require('../class/DeepEntity');


module.exports =  class Group extends DeepEntity{
    constructor(props) {
        super(props);
        this.entity = 'group/';
        this.collectionEntity = 'groups/';
    }
}

