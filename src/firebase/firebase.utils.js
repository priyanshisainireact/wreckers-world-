import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAxggw4sjnmtLZJHwFHULwadXJv4EF5nX4",
  authDomain: "wreckersworld-12.firebaseapp.com",
  databaseURL: "https://wreckersworld-12-default-rtdb.firebaseio.com",
  projectId: "wreckersworld-12",
  storageBucket: "wreckersworld-12.appspot.com",
  messagingSenderId: "639934535542",
  appId: "1:639934535542:web:141d6c9ac5ab5eae41cc57",
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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
