import firebase from 'firebase';

  var firebaseConfig = {
    //paste your SDK here
apiKey: "AIzaSyA32lhTgZFQctwAgkDyMeRIOD3jrNSGVhY",
  authDomain: "project-58-2a203.firebaseapp.com",
  databaseURL: "https://project-58-2a203-default-rtdb.firebaseio.com",
  projectId: "project-58-2a203",
  storageBucket: "project-58-2a203.appspot.com",
  messagingSenderId: "137739148122",
  appId: "1:137739148122:web:c12943564009b4b2ef7163",
  measurementId: "G-8MQ783J5DE"


    
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();