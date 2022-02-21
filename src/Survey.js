import React, { Fragment, useEffect, useState, useMemo } from "react";
import { Link, useNavigate, useHistory } from "react-router-dom";
import { auth, signInWithGoogle, database } from "./firebase";
import { ref, set, onValue, get } from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { BnbDashboardPage, BnbSurveyPage } from "./SoftElements";

const Survey = () => {
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
	console.log({ user });
	var userDict = user || { uid: "NULL" };
	const questionsArray = [
		{
			title: `Welcome`,
			text: "Please answer these few questions so we can make your trip better. ",
			type: "text",
		},

		{
			title: `Favorite Beverage`,
			text: `Whats your favorite beverage?`,
			type: "input",
			id: "favorite_beverage",
		},
		{
			title: `Trip Purpose`,
			text: `Whats the purpose of your trip?`,
			type: "input",
			id: "trip_purpose",
		},
		{
			title: `Interest in Helping`,
			text: `Would you be interested in helping us make the listing even better?`,
			type: "select",
			id: "interested_in_helping",
			options: [
				{ label: "Yes", value: "yes" },
				{ label: "No", value: "no" },
			],
		},
		{
			title: `Thanks`,
			text: "Thats all for now!",
			type: "text",
		},
		// {
		// 	title: `Weather Alerts`,
		// 	text: `Would you be interested in becoming an Airbnb Host?`,
		// 	type: "select",
		// 	id: "airbnb_host",
		// },
	];
	const [questionsState, setQuestionsState] = useState({});
	const userRef = ref(database, "users/" + String(userDict.uid) + "/");
	useEffect(() => {
		onValue(userRef, (snapshot) => {
			const data = snapshot.val();
			if (data) {
				setQuestionsState(data);
			}
		});
	}, [user]);
	const questionsArrayWithUpdate = useMemo(() => {
		return _.map(questionsArray, (questionDict) => {
			const questionID = questionDict["id"] || "";
			const value = questionsState[questionID] || "";
			const setValue = (val) => {
				var D = {};
				D[questionID] = val;
				D["time_stamp"] = moment().format();
				D["url"] = window.location.href;
				D["user_name"] = userDict.displayName;
				D["user_email"] = userDict.email;
				const updatedQuestionDict = { ...questionsState, ...D };
				set(userRef, updatedQuestionDict);
			};
			return { ...questionDict, setValue, value };
		});
	}, [questionsState]);

	return <BnbSurveyPage questionsArray={questionsArrayWithUpdate} />;
};
export default Survey;
