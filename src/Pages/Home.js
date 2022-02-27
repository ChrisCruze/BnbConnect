import React, { Fragment, useEffect, useState, useMemo } from "react";
import { Link, useNavigate, useHistory } from "react-router-dom";
import { auth, signInWithGoogle, database } from "../firebase";
import { ref, set, onValue, get } from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import {
	BnbDashboardPage,
	BnbSurveyPage,
	BnbHomePage,
	IconFromName,
} from "../SoftElements";

const Home = () => {
	const [user, loading, error] = useAuthState(auth);
	let history = useHistory();
	useEffect(() => {
		if (loading) {
			return;
		}
		if (user == null) {
			history.push("/Login");
		}
	}, [user, loading]);
	var userDict = user || { uid: "NULL" };
	console.log({ userDict });
	const routes = [
		{
			type: "collapse",
			name: "Survey",
			key: "survey",
			href: "/#/Survey",
			icon: <IconFromName name={"creditcard"} />,
			noCollapse: true,
		},
		{
			type: "collapse",
			name: "Dashboard",
			key: "dashboard",
			href: "/#/Dashboard",
			icon: <IconFromName name={"customersupport"} />,
			noCollapse: true,
		},
		{
			type: "collapse",
			name: "Landing",
			key: "landing",
			href: "/#/Landing",
			icon: <IconFromName name={"spaceship"} />,
			noCollapse: true,
		},
		{
			type: "collapse",
			name: "Login",
			key: "login",
			href: "/#/Login",
			icon: <IconFromName name={"storage"} />,
			noCollapse: true,
		},
	];
	return (
		<BnbHomePage
			routes={routes}
			navTitle={userDict.displayName}
			sideTitle={"Bnb Apps"}
		/>
	);
};
export default Home;
