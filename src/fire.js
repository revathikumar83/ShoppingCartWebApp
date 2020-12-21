/*npm install -g firebase-tools
firebase login
firebase init
firebase deploy*/

import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDjd8FAAggR9attAOMfzaNQVnlwF-qvhoA",
    authDomain: "shopping-cartapp-cf5fb.firebaseapp.com",
    projectId: "shopping-cartapp-cf5fb",
    storageBucket: "shopping-cartapp-cf5fb.appspot.com",
    messagingSenderId: "966358843203",
    appId: "1:966358843203:web:ebfe08b35c0a32f95339f6"
  };
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;