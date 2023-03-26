// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCypdxjMUlNcrfMX1dEYcGPImjve4cdfu4",
  authDomain: "otp-project-fa9ac.firebaseapp.com",
  projectId: "otp-project-fa9ac",
  storageBucket: "otp-project-fa9ac.appspot.com",
  messagingSenderId: "106285524371",
  appId: "1:106285524371:web:c3030399a8207d02b8f466",
  measurementId: "G-2LDMHTBTYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);