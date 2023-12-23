import { useContext, createContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  getAdditionalUserInfo,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { collection, doc, setDoc} from "firebase/firestore";
import { auth,db } from "../database";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const {isNewUser} = getAdditionalUserInfo(result);
      const data = {
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
          uid: result.user.uid,
          handle: "@" + result.user.uid,
        }
      if(isNewUser){
        const collRef = collection(db, 'users');
        const docRef = doc(collRef, result.user.uid);
        await setDoc(docRef, data);
      }
    } catch (err){
      console.log(err);
    }
  };

  const logOut = () => {
    signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, user, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
