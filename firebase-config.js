const firebaseConfig = {
   apiKey: "AIzaSyC1t2miO5EWCDpr1QOAFjaJxLdMUGxYTT4",
   authDomain: "ceri-eee85.firebaseapp.com",
   databaseURL: "https://ceri-eee85-default-rtdb.firebaseio.com",
   projectId: "ceri-eee85",
   storageBucket: "ceri-eee85.firebasestorage.app",
   messagingSenderId: "805549834912",
   appId: "1:805549834912:web:baacef6e54ea91f42affc5"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();