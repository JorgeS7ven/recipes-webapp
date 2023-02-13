import firebase from "firebase";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;


"AIzaSyBcU3lVjqyzv6-cDAdwU9jYb7oufaOEgkI"
"fir-recipes-cc997.firebaseapp.com"
"fir-recipes-cc997"
"fir-recipes-cc997.appspot.com"
"538845590040"
"1:538845590040:web:2c0f584dcc18842e57496d"
"G-0GJT3QFWYF"
