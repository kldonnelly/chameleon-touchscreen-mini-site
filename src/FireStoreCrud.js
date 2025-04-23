import firebase from "firebase/app";
import "firebase/firestore";
import { Crud } from "./CrudInterface";

function FireStoreCrud(user) {

    //  this.list = [];
    //   this.config = {};
    this.user = user;
    this.path = `/users/${this.user}`;
    this.home = "displayName";

}

FireStoreCrud.prototype = Object.create(Crud); // inherit

FireStoreCrud.prototype.init = function (config, callback) {

    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((currentUser) => {
        if (currentUser != null) {
            callback(currentUser);
        }
    });
};

FireStoreCrud.prototype.signIn = function (callback) {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        callback(result);
    });
};

FireStoreCrud.prototype.signOut = function (callback) {
    if (firebase.auth) {
        firebase.auth().signOut().then(function () {
            callback("ok");
        }).catch(function (error) {
            callback(error);
        });

    }
};

FireStoreCrud.prototype.ReadAll = function (collection, callback) {

    //   this.list.splice(0);

    console.log(`${this.path}/${collection}`);

    firebase.firestore().collection(`${this.path}/${collection}`).get().then((querySnapshot) => {

        const list = [];

        querySnapshot.forEach((doc) => {
          //  console.log(doc.id, " => ", doc.data());
            list.push(doc.data());

        });

        callback(list);
    });
};


FireStoreCrud.prototype.Read = function (collection, key, callback) {

    console.log(`FireStoreCrud.prototype.Read`);

    firebase.firestore().collection(`${this.path}/${collection}`).get(key).then((querySnapshot) => {
        
        const list = [];
        querySnapshot.forEach((doc) => {
            //  console.log(doc.id, " => ", doc.data());
              list.push(doc.data());
  
          });
          
        callback(list);
    }).catch((error) => {
        console.log("Error getting documents: ", error);
        callback(error);
    });


};


FireStoreCrud.prototype.Update = function (collection, key, value, callback) {

    console.log(key);
    console.log(value);
    console.log(`${this.path}/${collection}`);
    firebase.firestore().collection(`${this.path}/${collection}`).doc(key).set(value)
        .then(() => {
            console.log("Document written");

            callback("Document written");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

};

const crud_firestore = new FireStoreCrud(
    "Kevin Donnelly"  //sub nodes have readonly permission if not logged on
);

export { crud_firestore };
