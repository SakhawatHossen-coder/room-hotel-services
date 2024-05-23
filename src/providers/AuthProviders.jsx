import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateCurrentUser,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);
const AuthProviders = ({ childern }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUserProfile = (name, photo) => {
    return updateCurrentUser(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  //social login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const userInfo = {
    createUser,
    user,
    loading,
    login,
    logout,
    googleLogin,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={userInfo}>{childern}</AuthContext.Provider>
  );
};

export default AuthProviders;
