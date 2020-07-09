module.exports = class DeepEntity {

    constructor(attributes = null)
    {
        this.attributes = attributes ? attributes : {};
        this.entity = null;
        this.collectionEntity = null;
    }

    getEntity()
    {
        return this.entity;
    }

    getCollectionEntity()
    {
        return this.collectionEntity;
    }

    getData(name = null)
    {
        if (name == null)
            return this.attributes;

        if (this.attributes.hasOwnProperty(name))
            return this.attributes[name];

        return null;
    }


    async load(id)
    {
        DeepAPI.getInstance().setEntity(this.getEntity());
        let data = await DeepAPI.getInstance().GET(id);
        this.setData(data);
    }



    async delete ()
    {
        DeepAPI.getInstance().setEntity(this.getEntity());
        let data =  await DeepAPI.getInstance().DELETE();
    }


    async save()
    {

        if (this.getData("entity_id")) {
            DeepAPI.getInstance().setEntity(this.getEntity());
            DeepAPI.getInstance().setId(this.getData("entity_id"));
            await DeepAPI.getInstance().PUT(this.getData());
        } else {
            DeepAPI.getInstance().setEntity(this.getCollectionEntity());
            DeepAPI.getInstance().setId(null);
            await DeepAPI.getInstance().POST(this.getData());
        }

        return this;
    }

    getCollection()
    {
        return new DeepCollection(this.constructor.name);
    }

    setData(name = null, value = null)
    {
        if (name != null && value != null)
            this.attributes[name] = value;
        if (value == null)
            this.attributes = name;

        return this;
    }
    ;
}

const DeepAPI = require('./DeepAPI');
const DeepCollection = require('./DeepCollection');

const Company = require('../entites/Company');
const Operation =require ('../entites/Operation');
const User = require('../entites/User');
const Activity = require('../entites/Activity');
const Ci =require ('../entites/Ci');
const Group = require('../entites/Group');

