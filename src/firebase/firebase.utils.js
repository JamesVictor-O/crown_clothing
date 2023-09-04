import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDocs, getDoc,setDoc, collection } from "firebase/firestore"
import { getAuth, GoogleAuthProvider, signInWithPopup,signInWithRedirect } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD9Fhwns24Rcn7IEfsFKA2GhL21oaKHRuY",
    authDomain: "crown-db-4d5fb.firebaseapp.com",
    projectId: "crown-db-4d5fb",
    storageBucket: "crown-db-4d5fb.appspot.com",
    messagingSenderId: "51721560505",
    appId: "1:51721560505:web:f54c844bb8492e59315668"
};


const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
export const auth = getAuth(app);

export const firestore= getFirestore(app) 


export const signInWithGoogle = () => signInWithRedirect(auth, provider)

// let user = auth.currentUser
// console.log(user.uid)
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return
    let userRef = doc(firestore, "users", userAuth.uid )
    const snapShot = await getDoc(userRef)
     console.log(userRef)
    if (!snapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()
        try{
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (err) {
            console.log('error creating user', err.message)
        }
    } 

    return userRef
}