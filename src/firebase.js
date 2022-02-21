import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

//Define Firebase Config
const firebaseConfig = {
	apiKey: "AIzaSyB0FkrpI63ziZvPK4ceRkjhgBej6g-sFHs",
	authDomain: "bnbdashboard.firebaseapp.com",
	projectId: "bnbdashboard",
	storageBucket: "bnbdashboard.appspot.com",
	messagingSenderId: "947457461897",
	appId: "1:947457461897:web:07869750a6a1f11eb8c058",
	measurementId: "G-0FK47PLNNB",
};

//Initialize App
const app = initializeApp(firebaseConfig);
//Initialize Database
export const database = getDatabase(app);
//Initialize Auth
export const auth = getAuth();
//Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleProvider);
		const user = res.user;
		console.log({ res, user });
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

// set(ref(database, "users/"), {
// 	username: "test",
// });

//https://firebase.google.com/docs/database/web/read-and-write
