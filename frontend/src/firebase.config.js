// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: 'AIzaSyDisDsNJoqXUIHMFC_ePt13UJvl40HweGM',
 authDomain: 'arieli-shai-a7707.firebaseapp.com',
 projectId: 'arieli-shai-a7707',
 storageBucket: 'arieli-shai-a7707.appspot.com',
 messagingSenderId: '371116865273',
 appId: '1:371116865273:web:ddb9dc0b369596a008d428',
 measurementId: 'G-X8PTVJ50NF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
