// import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDYHbo65qOe1witLKeG7UgCr0Ctro1tUJs",
    authDomain: "orders-store-22da3.firebaseapp.com",
    databaseURL: "https://orders-store-22da3-default-rtdb.firebaseio.com",
    projectId: "orders-store-22da3",
    storageBucket: "orders-store-22da3.appspot.com",
    messagingSenderId: "282141583036",
    appId: "1:282141583036:web:7e7555b1aa2dc365d652b9"
  };

initializeApp(firebaseConfig);
// export const db = getDatabase(app);

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
//   };
