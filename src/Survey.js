import React, { Fragment, useEffect, useState, useMemo } from "react";

import { BnbDashboardPage, BnbSurveyPage } from "./SoftElements";

const Survey = () => {
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
	const questionsArrayWithUpdate = _.map(questionsArray, (questionDict) => {
		const questionID = questionDict["id"] || "";
		const value = questionsState[questionID] || "";
		console.log({ questionID, value });

		const setValue = (val) => {
			var D = {};
			D[questionID] = val;
			setQuestionsState({ ...questionsState, ...D });
		};
		return { ...questionDict, setValue, value };
	});

	return <BnbSurveyPage questionsArray={questionsArrayWithUpdate} />;
};
export default Survey;
