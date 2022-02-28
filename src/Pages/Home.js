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
	const [userDict, setUserDict] = useState({ uid: "NULL" });
	const [reservationData, setReservationData] = useState([]);

	let history = useHistory();
	useEffect(() => {
		if (loading) {
			return;
		}
		if (user == null) {
			history.push("/Login");
		} else {
			console.log({ user });
			setUserDict(user);
		}
	}, [user, loading]);
	const userDataRef = ref(
		database,
		"reservation_data/" + String(userDict.uid) + "/"
	);
	const readArray = ({ array }) => {
		set(userDataRef, array);
	};

	useEffect(() => {
		onValue(userDataRef, (snapshot) => {
			const data = snapshot.val();
			if (data) {
				console.log({ data });
				setReservationData(data);
			}
		});
	}, [user]);

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
	const pieChartConfig = {
		title: "Pages",
		onClick: ({ field, label, value }) => {
			console.log({ field, label, value });
		},
		array: reservationData,
		options: [
			{
				field: "status",
				label: "Status",
			},
			{
				field: "number_of_nights",
				label: "Number of Nights",
			},
		],
		height: "15.125rem",
	};
	const horizontalBarChartConfig = {
		title: "Pages",
		onClick: ({ field, label, value }) => {
			console.log({ field, label, value });
		},
		array: reservationData,
		options: [
			{
				field: "listing",
				label: "Listing",
			},
			{
				field: "number_of_nights",
				label: "Number of Nights",
			},
		],
		height: "15.125rem",
	};

	const metrics = [
		{ title: "# Reservations", metric: reservationData.length },
		{
			title: "Amount",
			metric: format_cell_number(
				_.reduce(
					reservationData,
					function (memo, num) {
						var r =
							memo +
							(parseFloat(num["earnings"].replace("$", "")) || 0);
						return r;
					},
					0
				)
			),
		},
	];

	return (
		<BnbHomePage
			routes={routes}
			navTitle={userDict.displayName}
			sideTitle={"Bnb Apps"}
			readArray={readArray}
			metrics={metrics}
			pieChartConfig={pieChartConfig}
			horizontalBarChartConfig={horizontalBarChartConfig}
			horizontalStackedBarChartConfig={pieChartConfig}
			thinBarChartConfig={pieChartConfig}
		/>
	);
};
export default Home;
