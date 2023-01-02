import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDKq83p8wCHSryWBbohisqhunDKvmeBhXY',
  authDomain: 'react-disney-plus-app-75175.firebaseapp.com',
  projectId: 'react-disney-plus-app-75175',
  storageBucket: 'react-disney-plus-app-75175.appspot.com',
  messagingSenderId: '271251836115',
  appId: '1:271251836115:web:30382aeb724199494dd826',
};

const app = initializeApp(firebaseConfig);

export default app;
