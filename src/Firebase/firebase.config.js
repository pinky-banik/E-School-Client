import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAWxQcIUoiUh7StVn_Whuf8vvvCcF-d9po",
  authDomain: "eschool-bd.firebaseapp.com",
  projectId: "eschool-bd",
  storageBucket: "eschool-bd.appspot.com",
  messagingSenderId: "816473128075",
  appId: "1:816473128075:web:d513a138b07c33d689688e",
  measurementId: "G-6B39NJFXV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;