import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDSny54LDvKWLDIT9L3yv4-t3XuVti2SaM",
    authDomain: "ecommerce-store-react.firebaseapp.com",
    databaseURL: "https://ecommerce-store-react.firebaseio.com",
    projectId: "ecommerce-store-react",
    storageBucket: "ecommerce-store-react.appspot.com",
    messagingSenderId: "994441453980",
    appId: "1:994441453980:web:dc37f289054f5540466859",
    measurementId: "G-K0T7STDEND"
};

firebase.initializeApp(config);

// The function creates an authenticated user's profile only once when the user sign up or login
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInFirebase = () => auth.signInWithPopup(provider);

export default firebase;