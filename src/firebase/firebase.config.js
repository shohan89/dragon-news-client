// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtMcqD1SlEl4P_Dl_d5pnqeCCTX1O0OM0",
  authDomain: "dragon-news-c90b7.firebaseapp.com",
  projectId: "dragon-news-c90b7",
  storageBucket: "dragon-news-c90b7.appspot.com",
  messagingSenderId: "846840778960",
  appId: "1:846840778960:web:23f7565ab9c6474b7d0ed5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app