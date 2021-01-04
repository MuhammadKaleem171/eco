import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBuQjDXU_yogwcpwgpxy-RoQbUVJdOV9Oc",
    authDomain: "crwn-db-2b596.firebaseapp.com",
    databaseURL: "https://crwn-db-2b596.firebaseio.com",
    projectId: "crwn-db-2b596",
    storageBucket: "crwn-db-2b596.appspot.com",
    messagingSenderId: "539395447480",
    appId: "1:539395447480:web:062e19fac76cf5acbdf24d",
    measurementId: "G-5YDLSYYW39"
};


firebase.initializeApp(config);

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
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;