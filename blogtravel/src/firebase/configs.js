import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA_t7xwIEon6BltUNXKobOABhRMh6uB9b0",
  authDomain: "bolgtravel1.firebaseapp.com",
  projectId: "bolgtravel1",
  storageBucket: "bolgtravel1.appspot.com",
  messagingSenderId: "1032282681690",
  appId: "1:1032282681690:web:d4159abe45083660ecc363"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};