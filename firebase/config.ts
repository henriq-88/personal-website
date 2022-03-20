import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// const config = process.env.NODE_ENV === `development`
//   ? {
const config = {
  apiKey: "AIzaSyCRVnGwzpOe8H0Cd1wr_qgeoBrUvslUdqc",
  authDomain: "personal-website-8af4a.firebaseapp.com",
  databaseURL: "https://personal-website-8af4a.firebaseio.com",
  projectId: "personal-website-8af4a",
  storageBucket: "personal-website-8af4a.appspot.com",
  messagingSenderId: "386526278864",
  appId: "1:386526278864:web:8560de4c9bd6fb7a26dad5",
  measurementId: "G-KV60RZRV91"
}
// : await fetch('/__/firebase/init.json').then(async response => response.json());

const app = initializeApp(config);

if (typeof window !== "undefined") {
  const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(process.env.NEXT_PUBLIC_FIREBASE_RECAPTCHA_SITE_KEY),
    isTokenAutoRefreshEnabled: true,
  });
  const perf = getPerformance(app);
  const analytics = getAnalytics(app);
}


