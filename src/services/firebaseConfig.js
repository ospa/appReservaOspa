// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4EJIAUxZdjnPcIFgEf9yDsQrPuN7JHQg",
  authDomain: "app-react-ospa.firebaseapp.com",
  projectId: "app-react-ospa",
  storageBucket: "app-react-ospa.appspot.com",
  messagingSenderId: "46288145022",
  appId: "1:46288145022:web:1cbbe7cb51c8b92ff3a62f",
  measurementId: "G-HK0Y3E00TG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);