import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDAC4iQiwreQXllfD_aYRSKWaszf1F-jg8",
    authDomain: "fb-clone-91dea.firebaseapp.com",
    databaseURL: "https://fb-clone-91dea.firebaseio.com",
    projectId: "fb-clone-91dea",
    storageBucket: "fb-clone-91dea.appspot.com",
    messagingSenderId: "407133554620",
    appId: "1:407133554620:web:c2d4419345bd20149ecdb9",
    measurementId: "G-DD1DYN42LY"
  };
   const firebaseApp = firebase.initializeApp(firebaseConfig);
   const db = firebaseApp.firestore();
   const auth = firebase.auth();
   const provider = new firebase.auth.GoogleAuthProvider();
   
   export{ auth,provider }
   export default db;