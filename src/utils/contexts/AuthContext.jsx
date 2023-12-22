import { useContext, createContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  getAdditionalUserInfo,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../database";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isNew, setIsNew] = useState(true);

  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const {isNewUser} = getAdditionalUserInfo(result);
      setIsNew(isNewUser);
    } catch (err){
      console.log(err);
    }
  };

  const logOut = () => {
    signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, user, logOut, isNew }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
