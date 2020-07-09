const fetch = require('node-fetch');
const DeepAPI = require("./src/class/DeepAPI");
const DeepEntity = require("./src/class/DeepEntity");
const DeepCollection = require("./src/class/DeepCollection");
const Operation = require("./src/entites/Operation");
const Company = require("./src/entites/Company");
const User = require('./src/entites/User');
const Activity = require('./src/entites/Activity');
const Ci =require ('./src/entites/Ci');
const Group = require('./src/entites/Group');


/**
 * Sets node-fetch method as global fetch method
 */
if (!globalThis.fetch) {
    globalThis.fetch = fetch;
};



DeepAPI.getInstance()
    .setHost('https://deepdeskhost')
    .setToken('token');


(async function apiCallAsync(){
    /**
     * Write you code here
     */
    let user = (new User()).getCollection();
    await user.load();
    console.log(user);
})();






