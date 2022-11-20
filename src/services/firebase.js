import { FirebaseApp, getApps } from "firebase/app";
import 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyCw1wuRa8LiNPe_wDVQMIRHdJnq1LttL8E",
  authDomain: "signin-f67d1.firebaseapp.com",
  projectId: "signin-f67d1",
  storageBucket: "signin-f67d1.appspot.com",
  messagingSenderId: "298737365414",
  appId: "1:298737365414:web:6790e78b1ca9800d109f67"
};

 !FirebaseApp.getApps.length ? FirebaseApp.initializeApp(firebaseConfig) : FirebaseApp.app();

const auth = initializeApp.auth();

export {FirebaseApp, auth}