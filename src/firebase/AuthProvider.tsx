"use client";
import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "./firebase.init.";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  const createUserEmailPass = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  // updateName
  const updateName = (name: string, photoURL: string) => {
    setLoading(true);
    return updateProfile(auth.currentUser!, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser!);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo: any = {
    user,
    createUserEmailPass,
    login,
    signOutUser,
    googleLogin,
    loading,
    updateName,
    setLoading,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
