import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA1hmevCekPjp8RRjOVkv_rRbeRylO-ep8",
    authDomain: "catch-of-the-day-1952.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-1952.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp }

//this is a default export
export default base;