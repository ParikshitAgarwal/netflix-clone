import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC65Z1WvVOhGeT4D1LXxbYmWRXsmxED1Z8",
    authDomain: "netflix-clone-23dc1.firebaseapp.com",
    projectId: "netflix-clone-23dc1",
    storageBucket: "netflix-clone-23dc1.appspot.com",
    messagingSenderId: "579494948691",
    appId: "1:579494948691:web:83b72c80fa6c69fec87ba6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  