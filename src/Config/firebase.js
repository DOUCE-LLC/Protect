import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBQfLPGmYs4Cg1g6dtGQazlK_CtnsW1xWo",
    authDomain: "proyecto-bogota.firebaseapp.com",
    projectId: "proyecto-bogota",
    storageBucket: "proyecto-bogota.appspot.com",
    messagingSenderId: "590032123199",
    appId: "1:590032123199:web:be17bcea9fa3efbeb38f8a"
};

firebase.initializeApp(firebaseConfig);
firebase.auth=firebase.auth()
firebase.db=firebase.firestore()
export default firebase; 