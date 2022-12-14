import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,} from "@firebase/auth";
import axios from "axios";
import { useEffect, useState } from "react";
import { firebaseInitialize } from "../firebase/firebase.init";
firebaseInitialize();
const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [getUser, setGetUser] = useState({});
  useEffect(() => {
    if (getUser?.email) {
      const isNewUser = axios.put(`http://localhost:5000/user?addUser=${getUser?.email}`, getUser)
        .then();
      return () => isNewUser;
    }
  }, [getUser]);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribe;
  }, [auth]);
  const createUserWithEmailAndPasswordHandler = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfileHandler(name);
        setGetUser({ name, email });
      })
      .catch((error) => {
        alert("Create unsuccessful. Please try again");
      });
  };
  const signInWithEmailAndPasswordHandler = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {})
      .catch((error) => {
        alert("sign in unsuccessful. Please try again");
      });
  };
  const googleSignInHandler = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            setGetUser({ name: result?.user?.displayName, email: result?.user?.email, img: result?.user?.photoURL})
        }).catch((error) => {
            alert('Google sign in unsuccessful. Please try again');
        });
};
  const updateProfileHandler = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {});
  };

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        alert("Log Out Success");
      })
      .catch((error) => {});
  };
  return {
    user,
    createUserWithEmailAndPasswordHandler,
    signInWithEmailAndPasswordHandler,
    googleSignInHandler,
    logoutHandler,
  };
};
export default useFirebase;
