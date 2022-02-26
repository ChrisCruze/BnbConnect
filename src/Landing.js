import React, { Fragment, useEffect, useState, useMemo } from "react";
import { Link, useNavigate, useHistory } from "react-router-dom";
import { auth, signInWithGoogle, database } from "./firebase";
import { ref, set, onValue, get, push } from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";

import { BnbDashboardPage } from "./SoftElements";
import { gridRowIdsSelector } from "@mui/x-data-grid";
function configGenerate() {
	return {
		title: "Dashboard",
		subTitle: "-",
	};
}
const Landing = () => {
	//const visitsRef = ref(database, "visits/" + String(moment().unix()));
	const visitsRef = ref(database, "visits"); // + String(moment().unix()));

	//creating IP state
	const [ip, setIP] = useState("");

	//creating function to load ip address from the API
	const getData = async () => {
		const response = await axios.get("https://geolocation-db.com/json/");
		const res = response.data;
		console.log({ res });

		const updatedDict = {
			ip: res.IPv4,
			city: String(res.city),
			country: String(res.country_name),
			latitude: res.latitude,
			longitude: res.longitude,
			zip_code: String(res.postal),
			state: String(res.state),
			time_stamp: moment().format(),
			url: location.href,
		};
		console.log({ updatedDict });
		//set(visitsRef, updatedDict);
		push(visitsRef, updatedDict);
		console.log(res.data);
		setIP(res.data.IPv4);
	};

	useEffect(() => {
		//passing getData method to the lifecycle method
		getData();
	}, []);

	const config = configGenerate();
	return <BnbDashboardPage {...config} />;
};
export default Landing;
