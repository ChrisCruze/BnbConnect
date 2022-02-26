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
		const updatedDict = {
			ip: res.IPv4,
			city: String(res.city),
			country: String(res.country_name),
			latitude: res.latitude,
			longitude: res.longitude,
			zipCode: String(res.postal),
			state: String(res.state),
			timeStamp: moment().format(),
			url: location.href,
		};
		push(visitsRef, updatedDict);
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
