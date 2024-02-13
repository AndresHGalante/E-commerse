import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAPwimH1orZBfPEXQWCaANZjcAeL3VIoFM",
  authDomain: "ecommerce-9e06b.firebaseapp.com",
  projectId: "ecommerce-9e06b",
  storageBucket: "ecommerce-9e06b.appspot.com",
  messagingSenderId: "623114427629",
  appId: "1:623114427629:web:7438afa9a34e9c1c8f80e4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
