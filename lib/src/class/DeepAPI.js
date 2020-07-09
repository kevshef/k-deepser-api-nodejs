/**
 * allows you to do all CRUD operations(POST,GET,PUT,DELETE);
 */
module.exports=  class DeepAPI{

    static INSTANCE = null;

    /**
     * Set the token for Authentication.
     * It is used in "Authentication" header
     * @param token
     * @returns {DeepAPI}
     */
    setToken(token) {
        this.token = token;
        return this;
    }

    /**
     *
     * @param host
     * @returns {DeepAPI}
     */
    setHost(host) {
        this.host = host;
        return this;
    }


    /**
     *
     * @param entity
     * @returns {DeepAPI}
     */
    setEntity(entity) {
        this.entity = entity;
        return this;
    }

    /**
     *
     * @param id
     * @returns {DeepAPI}
     */
    setId(id){
        this.id = id;
        return this;
    }


    /**
     * singleton
     * @returns {null|DeepAPI}
     */
    static  getInstance(){
        if(DeepAPI.INSTANCE == null)
            DeepAPI.INSTANCE = new DeepAPI();

        return DeepAPI.INSTANCE;
    }

    /**
     * Retrives the url for HTTP methods
     * @returns {string}
     * @constructor
     */
    URL() {
        return this.host + 'api/rest/'+ this.entity  + (this.id ? this.id : "");
    }

    /**
     * Does the Get request
     * @param id
     * @param filter
     * @returns {Promise<any>}
     * @constructor
     */
    async GET(id = "",filter = null) {
        this.id = id;
        return fetch(this.URL() + (filter ? '?' + filter : '') , {
            method: 'GET',
            withCredentials: true,
            headers: {
                Authorization: "Bearer " + this.token,
                "Access-Control-Allow-Origin": "*"
            },
        })
            .then( (response) =>{ return response.json();})
            .catch(error => { console.log(error); });
    }

    /**
     * Does the PUT request
     * @param value
     * @returns {Promise<any>}
     * @constructor
     */
    async PUT(value) {
        return fetch(this.URL(), {
            method: 'PUT',
            withCredentials: true,
            headers: {
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body : JSON.stringify(value),

        })
            .then(response => response.json())
            .catch(error => { console.log(error); });
    }

    /**
     * Does the DELETE request
     * @returns {Promise<Response>}
     * @constructor
     */
    async DELETE(){
        return fetch(this.URL(), {
            method: 'DELETE',
            withCredentials: true,
            headers: {
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
        })
            .then(res => {
                return res;
            })
            .catch(error => { console.log(error); });
    }

    /**
     * Does the POST request
     * @param data
     * @returns {Promise<Response>}
     * @constructor
     */
    async POST(data){
        return fetch(this.URL(), {
            method: 'POST',
            withCredentials: true,
            headers: {
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(data)
        })
            .catch(error => { console.log(error); });

    }
}