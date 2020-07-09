const DeepEntity = require('../class/DeepEntity');


module.exports =  class User extends DeepEntity{
    constructor(props) {
        super(props);
        this.entity = 'user/';
        this.collectionEntity = 'users/';
    }
}