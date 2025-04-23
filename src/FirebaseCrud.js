import firebase from "firebase/app";
import 'firebase/auth';
import "firebase/database";
import { Crud } from "./CrudInterface";


function FireBaseCrud(user) {

    //  this.list = [];
    //   this.config = {};
    this.user = user;
    this.path = `/users/${this.user}`;
    this.home = "displayName";

}
FireBaseCrud.prototype = Object.create(Crud); // inherit


FireBaseCrud.prototype.init = function (config, callback) {
    firebase.initializeApp(config);
    console.log(config);
    firebase.auth().onAuthStateChanged((currentUser) => {
        if (currentUser != null) {
            callback(currentUser);
        }
    });
};

FireBaseCrud.prototype.signOut = function (callback) {
    if (firebase.auth) {
        firebase.auth().signOut().then(function () {
            callback("ok");
        }).catch(function (error) {
            callback(error);
        });

    }
};

FireBaseCrud.prototype.signIn = function (callback) {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        callback(result);
    });
};

FireBaseCrud.prototype.Create = function (collection, value, callback) {
    console.log(value);
    //  this.list = [...this.list, value];

    if (!firebase.auth().currentUser) return;

    var newToDoKey = firebase
        .database()
        .ref()
        .child(`${this.path}/${collection}`)
        .push().key;

    firebase
        .database()
        .ref(`${this.path}/${collection}/${newToDoKey}`)
        .update(value)
        .then(() => {
            value._key = newToDoKey;
            this.list.push(value);
            callback(newToDoKey);
        });


};

FireBaseCrud.prototype.Read = function (collection, key, callback) {

    console.log(collection);
    if (!firebase.auth) { return; }
    if (firebase.apps.length < 1) {

        console.log("no firebase app");
        return;
    }

    if (firebase.auth().currentUser) {
        if (this.home === "uid") {
            this.path = `/users/${firebase.auth().currentUser.uid}`;
            console.log("path = " + this.path);
        }
        else {
            this.path = `/users/${firebase.auth().currentUser.displayName}`;
            console.log("path = " + this.path);
        }
    }
    console.log(this.path);

    //   this.list.splice(0);

    firebase
        .database()
        .ref(`${this.path}/${collection}/${key}`)
        .once("value")
        .then((snapshot) => {

            const list = [];
            let config = {};
            snapshot.forEach((element) => {
                var value = element.val();

                if (element.key === "config") {
                    config = value;
                } else list.push(value);
            });

            callback(list, config);
        });


};

FireBaseCrud.prototype.ReadAll = function (collection, callback) {

    console.log(collection);
    //  if (!firebase.auth) { return; }
    if (firebase.apps.length < 1) {

        console.log("no firebase app");
        return;
    }

    if (firebase.auth().currentUser) {
        if (this.home === "uid") {
            this.path = `/users/${firebase.auth().currentUser.uid}`;
            console.log("path = " + this.path);
        }
        else {
            this.path = `/users/${firebase.auth().currentUser.displayName}`;
            console.log("path = " + this.path);
        }
    }
    console.log(window.location.search);
    console.log(window.location.hash);
    //  this.list.splice(0);

    firebase
        .database()
        .ref(`${this.path}/${collection}`)
        .once("value")
        .then((snapshot) => {
            const list = [];
            let config = {};
            snapshot.forEach((element) => {
                var value = element.val();
                if (element.key === "config") {
                    config = value;
                } else list.push(value);
            });

            callback(list,config);
        });
};

FireBaseCrud.prototype.Update = function (collection, key, value, callback) {

    console.log(firebase);

    if (!firebase.auth) { return; }
    if (firebase.apps.length < 1) {

        console.log("no firebase app");
        return;
    }

    if (firebase.auth().currentUser) {
        if (this.home === "uid") {
            this.path = `/users/${firebase.auth().currentUser.uid}`;
            console.log("path = " + this.path);
        }
        else {
            this.path = `/users/${firebase.auth().currentUser.displayName}`;
            console.log("path = " + this.path);
        }
    }

    firebase
        .database()
        .ref(`${this.path}/${collection}/${key}`)
        .update(value, (error) => {
            if (error) {
                // The write failed...
                callback(error);
            } else {
                callback("Data saved successfully!");
            }
        });

};


const crud_firebase = new FireBaseCrud(

    "Kevin Donnelly"  //sub nodes have readonly permission if not logged on
);

export { crud_firebase };
