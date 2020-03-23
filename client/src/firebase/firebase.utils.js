import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDgu4lg4mHgLOc2YvLU60JAIZcafD-kgaw",
    authDomain: "getstarted-cb016.firebaseapp.com",
    databaseURL: "https://getstarted-cb016.firebaseio.com",
    projectId: "getstarted-cb016",
    storageBucket: "getstarted-cb016.appspot.com",
    messagingSenderId: "252160486284",
    appId: "1:252160486284:web:014471f347378ed2a2c4a9",
    measurementId: "G-NY1NGPKQXH"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error);
        }
    }

    return userRef;
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject)=>{
        const unsubcribe = auth.onAuthStateChanged(userAuth => {
            unsubcribe();
            resolve(userAuth);
        }, reject);
    });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;