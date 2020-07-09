const DeepEntity = require('../class/DeepEntity');

module.exports =  class Activity extends DeepEntity{
    constructor(props) {
        super(props);
        this.entity = 'activity/';
        this.collectionEntity = 'activites/';
    }
}

