import { async } from '@firebase/util';
import {initializeApp} from 'firebase/app'
import {getAuth, signInWithRedirect, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, createUserWithEmailAndPassword, signOut} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCXt1x6tGGTE-bWyXcaAYo5IXNj3CuESr8",
    authDomain: "crwn-clothing-29b29.firebaseapp.com",
    projectId: "crwn-clothing-29b29",
    storageBucket: "crwn-clothing-29b29.appspot.com",
    messagingSenderId: "583439544745",
    appId: "1:583439544745:web:92922321573b9c509a14b8"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: 'select_account'
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                createAt,
                email,
                ...additionalInformation
            })
        }
        catch(err){
            console.log(err);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email,password) =>{
    if (!email || !password) return;
    return createUserWithEmailAndPassword(auth,email,password)
}

export const signInWithUserEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return signInWithEmailAndPassword(auth,email,password);
}

export const signOutUser = async () => {
    return signOut(auth);
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db,collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    })

    await batch.commit();
    console.log('success');
}

export const getCategoriesAndDocument = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapShot) => {
        const {title, items} = docSnapShot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})

    return categoryMap;
}