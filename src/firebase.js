import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyAHX3xrELYb6Na0qtl6BTW2uSf-FGNjPwg',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'attendancepw.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'attendancepw',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'attendancepw.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '280289339975',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:280289339975:web:8317be95a74fd0853d5f62',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export default app;
