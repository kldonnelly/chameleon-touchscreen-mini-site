import * as admin from "firebase-admin";

// Add the Firebase Admin SDK to your server
// https://firebase.google.com/docs/admin/setup#windows
const serviceAccount = require("../credentials/chameleon-isb-firebase-adminsdk-rcab0-925a198b47");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount.default),
  databaseURL: "https://chameleon-isb.firebaseio.com"
});

const db = admin.firestore();

export default db;