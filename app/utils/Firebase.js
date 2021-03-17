import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDNOHqA69SYEdAhR_aFwydT8Ul48Jthndk",
    authDomain: "tenedores-26fa2.firebaseapp.com",
    projectId: "tenedores-26fa2",
    storageBucket: "tenedores-26fa2.appspot.com",
    messagingSenderId: "803910154366",
    appId: "1:803910154366:web:46afa9372e29871e0f402f"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);