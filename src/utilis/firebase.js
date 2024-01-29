// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPYZs80eR_fbHRHfUCrBgyLRvA2vtf4G0",
  authDomain: "venu-553e6.firebaseapp.com",
  projectId: "venu-553e6",
  storageBucket: "venu-553e6.appspot.com",
  messagingSenderId: "201754169140",
  appId: "1:201754169140:web:b30ef9535eece98b1a9f61",
  measurementId: "G-2Q19RJP179"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);