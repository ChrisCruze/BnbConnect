import React, { useEffect, useState } from "react";
import { Link, useNavigate, useHistory } from "react-router-dom";
import { auth, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { LoginPage, BasicSignIn } from "./SoftElements";

function Login() {
	const [user, loading, error] = useAuthState(auth);
	let history = useHistory();
	useEffect(() => {
		if (loading) {
			return;
		}
		if (user) {
			history.push("/Survey");
		}
	}, [user, loading]);
	return (
		<BasicSignIn
			signInClick={() => {
				signInWithGoogle();
				console.log("click");
			}}
		/>
	);
}
export default Login;
