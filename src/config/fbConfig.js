import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDlA-uIeKO_6dZTtyDAQbwTsEtMy47QpxA',
  authDomain: 'mario-plan-294e4.firebaseapp.com',
  databaseURL: 'https://mario-plan-294e4.firebaseio.com',
  projectId: 'mario-plan-294e4',
  storageBucket: '',
  messagingSenderId: '697938630262',
  appId: '1:697938630262:web:a43f6214e9373e00'
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
