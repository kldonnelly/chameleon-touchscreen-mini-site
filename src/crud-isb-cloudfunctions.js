import { Crud } from "./CrudInterface";


function ISBCloudCrud(user) {

    this.list = [];
    this.config = {};
    this.user = user;
    this.path = `/users/${this.user}`;
    this.home = "displayName";
}

ISBCloudCrud.prototype = Object.create(Crud); // inherit

ISBCloudCrud.prototype.init = function (config, callback) {

    console.log(config);
    console.log("not implemented");
    callback("not implemented");
};

ISBCloudCrud.prototype.Read = function (collection,key, callback) {

    console.log("read by key not implemented");
    this.ReadAll(collection,callback);
};

ISBCloudCrud.prototype.ReadAll = function (collection,callback) {

    let endpoint =
        "https://us-central1-chameleon-isb.cloudfunctions.net/api/business-directory";



    fetch(`${endpoint}`, {
        method: "GET",
        headers: {
            "x-secret": "chameleon-isb-mini-site",
        },
    })
        .then((res) => res.json())
        .then((result) => {
            this.list = result;
            callback("ok");
        })
        .catch((e) => {
            console.log(e);
        });
};

ISBCloudCrud.prototype.Update = function (collection,key, value, callback) {

    console.log(`${collection} ${key} ${value} update not implemented`);
    callback("update not implemented");

};


const crud_cloud = new ISBCloudCrud(
   
    "Kevin Donnelly"  //sub nodes have readonly permission if not logged on
);

export { crud_cloud };