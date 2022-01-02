// import firebase from 'firebase'
// import * as firebase from "firebase/app";
import firebase from "firebase"




console.log(firebase);
const firebaseConfig = {
    apiKey: "AIzaSyBv9rJ1mZOAzTZpCq9JNFOdnJMX07EvKgw",
    authDomain: "expense-tracker-2443d.firebaseapp.com",
    projectId: "expense-tracker-2443d",
    storageBucket: "expense-tracker-2443d.appspot.com",
    messagingSenderId: "865017734659",
    appId: "1:865017734659:web:c97759fb7a3d3057885036"
};

firebase.initializeApp(firebaseConfig);


export default firebase