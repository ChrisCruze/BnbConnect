import React, { Fragment, useEffect, useState, useMemo } from "react";

import { BnbDashboardPage } from "./SoftElements";
function configGenerate() {
	return {
		title: "Bnb Dashboard",
		subTitle: "Provides Guests with Insights",
	};
}
const Dashboard = () => {
	const config = configGenerate();
	return <BnbDashboardPage {...config} />;
};
export default Dashboard;
