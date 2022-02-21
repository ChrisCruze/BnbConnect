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
	var userDict = user || { uid: "NULL" };
	const questionsArray = [
		{
			title: `Welcome`,
			text: "Please take this survey and set of questions. We'd like to know a bit more about you to make your stay better.",
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
			title: `Weather Alerts`,
			text: `Would you like weather alerts?`,
			type: "select",
			id: "weather_alerts",
		},
	];
	const [questionsState, setQuestionsState] = useState({});
	const userRef = ref(database, "users/" + String(userDict.uid) + "/");
	useEffect(() => {
		onValue(userRef, (snapshot) => {
			const data = snapshot.val();
			console.log({ data });
			setQuestionsState(data);
		});

		// get(userRef)
		// 	.then((snapshot) => {
		// 		if (snapshot.exists()) {
		// 			const data = snapshot.val();
		// 			setQuestionsState(data);
		// 		} else {
		// 			console.log("No data available");
		// 		}
		// 	})
		// 	.catch((error) => {
		// 		console.error(error);
		// 	});
	}, [user]);
	const questionsArrayWithUpdate = _.map(questionsArray, (questionDict) => {
		const questionID = questionDict["id"] || "";
		const value = questionsState[questionID] || "";
		const setValue = (val) => {
			var D = {};
			D[questionID] = val;
			const updatedQuestionDict = { ...questionsState, ...D };
			console.log({ updatedQuestionDict });
			//setQuestionsState(updatedQuestionDict);
			set(userRef, updatedQuestionDict);
		};
		return { ...questionDict, setValue, value };
	});

	return <BnbSurveyPage questionsArray={questionsArrayWithUpdate} />;
	return null;
	if (user != null) {
		const userRef = ref(database, "users/" + String(user.uid) + "/");
		// onValue(userRef, (snapshot) => {
		// 	const data = snapshot.val();
		// 	console.log({ data });
		// 	setQuestionsState(data);
		// });
		useEffect(() => {
			// Update the document title using the browser API
			get(userRef)
				.then((snapshot) => {
					if (snapshot.exists()) {
						const data = snapshot.val();
						console.log({ data });
						setQuestionsState(data);
					} else {
						console.log("No data available");
					}
				})
				.catch((error) => {
					console.error(error);
				});
		}, []);

		return null;
		// const questionsArrayWithUpdate = _.map(
		// 	questionsArray,
		// 	(questionDict) => {
		// 		const questionID = questionDict["id"] || "";
		// 		const value = questionsState[questionID] || "";
		// 		const setValue = (val) => {
		// 			var D = {};
		// 			D[questionID] = val;
		// 			const updatedQuestionDict = { ...questionsState, ...D };
		// 			console.log({ updatedQuestionDict });
		// 			//setQuestionsState(updatedQuestionDict);
		// 			set(userRef, updatedQuestionDict);
		// 		};
		// 		return { ...questionDict, setValue, value };
		// 	}
		// );

		// return <BnbSurveyPage questionsArray={questionsArrayWithUpdate} />;
	} else {
		return null;
	}
};
export default Survey;
