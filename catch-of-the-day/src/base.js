import Rebase from 're-base';
import firebase from 'firebase';
import { firebaseKey } from "./config";
const firebaseApp = firebase.initializeApp({
    apiKey: {firebaseKey},
    authDomain: "catch-of-the-day-1952.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-1952.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp }

//this is a default export
export default base;