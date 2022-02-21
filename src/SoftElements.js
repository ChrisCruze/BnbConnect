import React, { Fragment, useEffect, useState, useMemo, useRef } from "react";
import { forwardRef, createContext, useContext } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip"; //required for info card
import Avatar from "@mui/material/Avatar"; //required for events card
import Link from "@mui/material/Link";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import InputBase from "@mui/material/InputBase";
import Select from "react-select";
import CardContent from "@mui/material/CardContent";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Snackbar from "@mui/material/Snackbar";
import Badge from "@mui/material/Badge";

//icons

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

// Images
import mercedesEQC from "assets/images/mercedes-eqc.png";
import wavesWhite from "assets/images/shapes/waves-white.svg";
//import backgroundImage from "assets/images/curved-images/white-curved.jpeg";
import backgroundImage from "assets/images/mercedes-eqc.png";

//Suibox
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

import CloseIcon from "@mui/icons-material/Close";
// react-table components
import {
	useTable,
	usePagination,
	useGlobalFilter,
	useAsyncDebounce,
	useSortBy,
} from "react-table";
import ReactMarkdown from "react-markdown";

//required for profile info card
// import { Link } from "react-router-dom";
// import { Route, Redirect, useLocation } from "react-router-dom";
import { useLocation, NavLink } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";

import typography from "./assets/theme/base/typography";
import breakpoints from "./assets/theme/base/breakpoints";

//used for teams card
import logoSlack from "assets/images/small-logos/logo-slack.svg";

// Soft UI Dashboard PRO React base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";

// Soft UI Dashboard PRO React helper functions
import pxToRem from "assets/theme/functions/pxToRem";
import boxShadow from "assets/theme/functions/boxShadow";

// @emotion/react components
import { keyframes } from "@emotion/react";

import curved9 from "assets/images/curved-images/curved9.jpg";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// react-quill components
import ReactQuill from "react-quill";

// react-quill styles
import "react-quill/dist/quill.snow.css";

import coinbase from "assets/images/logos/gray-logos/logo-coinbase.svg";
import nasa from "assets/images/logos/gray-logos/logo-nasa.svg";
import netflix from "assets/images/logos/gray-logos/logo-netflix.svg";
import pinterest from "assets/images/logos/gray-logos/logo-pinterest.svg";
import spotify from "assets/images/logos/gray-logos/logo-spotify.svg";
import vodafone from "assets/images/logos/gray-logos/logo-vodafone.svg";

import LinearProgress from "@mui/material/LinearProgress";

import Modal from "@mui/material/Modal";

import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

import { Col, Container, Jumbotron, Row } from "reactstrap";
// import CountUp from "react-countup";
// import MaterialTable from "material-table";

//icons
import ListItemIcon from "@mui/material/ListItemIcon";
import Add from "@material-ui/icons/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoneIcon from "@mui/icons-material/Done";
import MenuIcon from "@mui/icons-material/Menu";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

import StorageIcon from "@mui/icons-material/Storage";
import DnsIcon from "@mui/icons-material/Dns";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import RefreshIcon from "@mui/icons-material/Refresh";
import { DataGrid } from "@mui/x-data-grid";

// import CircularSlider from "react-circular-slider-svg";
import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";

function Document({ color, size }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 42 42"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<title>document</title>
			<g
				id="Basic-Elements"
				stroke="none"
				strokeWidth="1"
				fill="none"
				fillRule="evenodd"
			>
				<g
					id="Rounded-Icons"
					transform="translate(-1870.000000, -591.000000)"
					fill={colors[color] ? colors[color].main : colors.dark.main}
					fillRule="nonzero"
				>
					<g
						id="Icons-with-opacity"
						transform="translate(1716.000000, 291.000000)"
					>
						<g
							id="document"
							transform="translate(154.000000, 300.000000)"
						>
							<path
								d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
								id="Path"
								opacity="0.603585379"
							/>
							<path
								d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
								id="Shape"
							/>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
}

// Setting default values for the props of Document
Document.defaultProps = {
	color: "dark",
	size: "16px",
};

function Settings({ color, size }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 42 42"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<title>settings</title>
			<g
				id="Basic-Elements"
				stroke="none"
				strokeWidth="1"
				fill="none"
				fillRule="evenodd"
			>
				<g
					id="Rounded-Icons"
					transform="translate(-2020.000000, -442.000000)"
					fill={colors[color] ? colors[color].main : colors.dark.main}
					fillRule="nonzero"
				>
					<g
						id="Icons-with-opacity"
						transform="translate(1716.000000, 291.000000)"
					>
						<g
							id="settings"
							transform="translate(304.000000, 151.000000)"
						>
							<polygon
								id="Path"
								opacity="0.596981957"
								points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
							/>
							<path
								d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
								id="Path"
								opacity="0.596981957"
							/>
							<path
								d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
								id="Path"
							/>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
}

// Setting default values for the props of Settings
Settings.defaultProps = {
	color: "dark",
	size: "16px",
};

function Cube({ color, size }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 42 42"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<g
				id="Basic-Elements"
				stroke="none"
				strokeWidth="1"
				fill="none"
				fillRule="evenodd"
			>
				<g
					id="Rounded-Icons"
					transform="translate(-2319.000000, -291.000000)"
					fill={colors[color] ? colors[color].main : colors.dark.main}
					fillRule="nonzero"
				>
					<g
						id="Icons-with-opacity"
						transform="translate(1716.000000, 291.000000)"
					>
						<g
							id="box-3d-50"
							transform="translate(603.000000, 0.000000)"
						>
							<path
								d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z"
								id="Path"
							/>
							<path
								d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z"
								id="Path"
								opacity="0.7"
							/>
							<path
								d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z"
								id="Path"
								opacity="0.7"
							/>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
}

// Setting default values for the props of Cube
Cube.defaultProps = {
	color: "dark",
	size: "16px",
};
const IconFromName = ({ name }) => {
	switch (name) {
		case "storage":
			return <StorageIcon />;
		case "done":
			return <DoneIcon />;
		case "menu":
			return <MenuIcon />;
		case "dns":
			return <DnsIcon />;
		case "cube":
			return <Cube />;
		case "settings":
			return <Settings />;
		case "message":
			return <Message />;
		case "refresh":
			return <RefreshIcon />;

		case "keyboardcommandkey":
			return <KeyboardCommandKeyIcon />;
		default:
			return <StorageIcon />;
	}
};
export const PropsContext = React.createContext({});
function SpaceShip({ color, size }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 42 42"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<title>spaceship</title>
			<g
				id="Basic-Elements"
				stroke="none"
				strokeWidth="1"
				fill="none"
				fillRule="evenodd"
			>
				<g
					id="Rounded-Icons"
					transform="translate(-1720.000000, -592.000000)"
					fill={colors[color] ? colors[color].main : colors.dark.main}
					fillRule="nonzero"
				>
					<g
						id="Icons-with-opacity"
						transform="translate(1716.000000, 291.000000)"
					>
						<g
							id="spaceship"
							transform="translate(4.000000, 301.000000)"
						>
							<path d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z" />
							<path
								d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"
								id="Path"
							/>
							<path
								d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z"
								id="color-2"
								opacity="0.598539807"
							/>
							<path
								d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z"
								id="color-3"
								opacity="0.598539807"
							/>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
}

// Setting default values for the props of SpaceShip
SpaceShip.defaultProps = {
	color: "dark",
	size: "16px",
};

function CustomerSupport({ color, size }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 42 42"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<title>customer-support</title>
			<g
				id="Basic-Elements"
				stroke="none"
				strokeWidth="1"
				fill="none"
				fillRule="evenodd"
			>
				<g
					id="Rounded-Icons"
					transform="translate(-1717.000000, -291.000000)"
					fill={colors[color] ? colors[color].main : colors.dark.main}
					fillRule="nonzero"
				>
					<g
						id="Icons-with-opacity"
						transform="translate(1716.000000, 291.000000)"
					>
						<g
							id="customer-support"
							transform="translate(1.000000, 0.000000)"
						>
							<path
								className="color-background"
								d="M45,0 L26,0 C25.447,0 25,0.447 25,1 L25,20 C25,20.379 25.214,20.725 25.553,20.895 C25.694,20.965 25.848,21 26,21 C26.212,21 26.424,20.933 26.6,20.8 L34.333,15 L45,15 C45.553,15 46,14.553 46,14 L46,1 C46,0.447 45.553,0 45,0 Z"
								id="Path"
								opacity="0.59858631"
							/>
							<path
								d="M22.883,32.86 C20.761,32.012 17.324,31 13,31 C8.676,31 5.239,32.012 3.116,32.86 C1.224,33.619 0,35.438 0,37.494 L0,41 C0,41.553 0.447,42 1,42 L25,42 C25.553,42 26,41.553 26,41 L26,37.494 C26,35.438 24.776,33.619 22.883,32.86 Z"
								id="Path"
							/>
							<path
								d="M13,28 C17.432,28 21,22.529 21,18 C21,13.589 17.411,10 13,10 C8.589,10 5,13.589 5,18 C5,22.529 8.568,28 13,28 Z"
								id="Path"
							/>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
}

// Setting default values for the props of CustomerSupport
CustomerSupport.defaultProps = {
	color: "dark",
	size: "16px",
};

function CreditCard({ color, size }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 42 42"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<title>credit-card</title>
			<g
				id="Basic-Elements"
				stroke="none"
				strokeWidth="1"
				fill="none"
				fillRule="evenodd"
			>
				<g
					id="Rounded-Icons"
					transform="translate(-2169.000000, -745.000000)"
					fill={colors[color] ? colors[color].main : colors.dark.main}
					fillRule="nonzero"
				>
					<g
						id="Icons-with-opacity"
						transform="translate(1716.000000, 291.000000)"
					>
						<g
							id="credit-card"
							transform="translate(453.000000, 454.000000)"
						>
							<path
								d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
								id="Path"
								opacity="0.593633743"
							/>
							<path d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z" />
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
}

// Setting default values for the props of CreditCard
CreditCard.defaultProps = {
	color: "dark",
	size: "16px",
};

export const routes = [
	{ type: "divider", key: "divider-1" },
	{ type: "title", title: "Docs", key: "title-docs" },
	{
		type: "collapse",
		name: "Basic",
		key: "basic",
		icon: <SpaceShip size="12px" />,
		collapse: [
			{
				name: "Getting Started",
				key: "getting-started",
				collapse: [
					{
						name: "Overview",
						key: "overview",
						href: "https://www.creative-tim.com/learning-lab/react/overview/soft-ui-dashboard/",
					},
					{
						name: "License",
						key: "license",
						href: "https://www.creative-tim.com/learning-lab/react/license/soft-ui-dashboard/",
					},
					{
						name: "Quick Start",
						key: "quick-start",
						href: "https://www.creative-tim.com/learning-lab/react/quick-start/soft-ui-dashboard/",
					},
					{
						name: "Build Tools",
						key: "build-tools",
						href: "https://www.creative-tim.com/learning-lab/react/build-tools/soft-ui-dashboard/",
					},
				],
			},
			{
				name: "Foundation",
				key: "foundation",
				collapse: [
					{
						name: "Colors",
						key: "colors",
						href: "https://www.creative-tim.com/learning-lab/react/colors/soft-ui-dashboard/",
					},
					{
						name: "Grid",
						key: "grid",
						href: "https://www.creative-tim.com/learning-lab/react/grid/soft-ui-dashboard/",
					},
					{
						name: "Typography",
						key: "base-typography",
						href: "https://www.creative-tim.com/learning-lab/react/base-typography/soft-ui-dashboard/",
					},
					{
						name: "Borders",
						key: "borders",
						href: "https://www.creative-tim.com/learning-lab/react/borders/soft-ui-dashboard/",
					},
					{
						name: "Box Shadows",
						key: "box-shadows",
						href: "https://www.creative-tim.com/learning-lab/react/box-shadows/soft-ui-dashboard/",
					},
					{
						name: "Functions",
						key: "functions",
						href: "https://www.creative-tim.com/learning-lab/react/functions/soft-ui-dashboard/",
					},
					{
						name: "Routing System",
						key: "routing-system",
						href: "https://www.creative-tim.com/learning-lab/react/routing-system/soft-ui-dashboard/",
					},
				],
			},
		],
	},
	{
		type: "collapse",
		name: "Components",
		key: "components",
		icon: <CustomerSupport size="12px" />,
		collapse: [
			{
				name: "Alerts",
				key: "alerts",
				href: "https://www.creative-tim.com/learning-lab/react/alerts/soft-ui-dashboard/",
			},
			{
				name: "Avatar",
				key: "avatar",
				href: "https://www.creative-tim.com/learning-lab/react/avatar/soft-ui-dashboard/",
			},
			{
				name: "Badge",
				key: "badge",
				href: "https://www.creative-tim.com/learning-lab/react/badge/soft-ui-dashboard/",
			},
			{
				name: "Badge Dot",
				key: "badge-dot",
				href: "https://www.creative-tim.com/learning-lab/react/badge-dot/soft-ui-dashboard/",
			},
			{
				name: "Box",
				key: "box",
				href: "https://www.creative-tim.com/learning-lab/react/box/soft-ui-dashboard/",
			},
			{
				name: "Buttons",
				key: "buttons",
				href: "https://www.creative-tim.com/learning-lab/react/buttons/soft-ui-dashboard/",
			},
			{
				name: "Date Picker",
				key: "date-picker",
				href: "https://www.creative-tim.com/learning-lab/react/datepicker/soft-ui-dashboard/",
			},
			{
				name: "Dropzone",
				key: "dropzone",
				href: "https://www.creative-tim.com/learning-lab/react/dropzone/soft-ui-dashboard/",
			},
			{
				name: "Editor",
				key: "editor",
				href: "https://www.creative-tim.com/learning-lab/react/quill/soft-ui-dashboard/",
			},
			{
				name: "Input",
				key: "input",
				href: "https://www.creative-tim.com/learning-lab/react/input/soft-ui-dashboard/",
			},
			{
				name: "Pagination",
				key: "pagination",
				href: "https://www.creative-tim.com/learning-lab/react/pagination/soft-ui-dashboard/",
			},
			{
				name: "Progress",
				key: "progress",
				href: "https://www.creative-tim.com/learning-lab/react/progress/soft-ui-dashboard/",
			},
			{
				name: "Select",
				key: "select",
				href: "https://www.creative-tim.com/learning-lab/react/select/soft-ui-dashboard/",
			},
			{
				name: "Snackbar",
				key: "snackbar",
				href: "https://www.creative-tim.com/learning-lab/react/snackbar/soft-ui-dashboard/",
			},
			{
				name: "Social Button",
				key: "social-button",
				href: "https://www.creative-tim.com/learning-lab/react/social-buttons/soft-ui-dashboard/",
			},
			{
				name: "Tag Input",
				key: "tag-input",
				href: "https://www.creative-tim.com/learning-lab/react/tag-input/soft-ui-dashboard/",
			},
			{
				name: "Typography",
				key: "typography",
				href: "https://www.creative-tim.com/learning-lab/react/typography/soft-ui-dashboard/",
			},
		],
	},
	{
		type: "collapse",
		name: "Change Log",
		key: "changelog",
		href: "https://github.com/creativetimofficial/ct-soft-ui-dashboard-pro-material-ui/blob/main/CHANGELOG.md",
		icon: <CreditCard size="12px" />,
		noCollapse: true,
	},
];

const item = {
	width: "100%",
	padding: 0,
	cursor: "pointer",
};

function itemContent(theme, ownerState) {
	const { palette, typography, transitions, functions } = theme;
	const { active, miniSidenav, name, nested } = ownerState;

	const { dark, gradients } = palette;
	const { size, fontWeightMedium, fontWeightRegular } = typography;
	const { pxToRem, rgba } = functions;

	return {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		padding: `${pxToRem(7.2)} ${pxToRem(16)}`,
		margin: `0 ${pxToRem(16)} 0 ${pxToRem(21.6)}`,
		userSelect: "none",
		position: "relative",

		"& span": {
			color: active ? dark.main : rgba(gradients.dark.state, 0.7),
			fontWeight: active ? fontWeightMedium : fontWeightRegular,
			fontSize: size.sm,
			opacity: miniSidenav ? 0 : 1,
			transition: transitions.create(["opacity", "color"], {
				easing: transitions.easing.easeInOut,
				duration: transitions.duration.standard,
			}),
		},

		"&::before": {
			content: () => {
				if (nested) {
					return nested && miniSidenav && `"${name[0]}"`;
				}

				return miniSidenav ? `"${name[0]}"` : '""';
			},
			width: () => {
				if (!miniSidenav) {
					return active ? pxToRem(8) : pxToRem(5);
				}

				return 0;
			},
			height: () => {
				if (!miniSidenav) {
					return active ? pxToRem(8) : pxToRem(5);
				}

				return 0;
			},
			backgroundColor: active
				? dark.main
				: rgba(gradients.dark.state, 0.5),
			color: active ? dark.main : rgba(gradients.dark.state, 0.5),
			fontWeight: active ? fontWeightMedium : fontWeightRegular,
			display: "flex",
			alignItems: "center",
			position: "absolute",
			top: "50%",
			transform: "translateY(-50%)",
			left: pxToRem(-18),
			opacity: 1,
			borderRadius: "50%",
			fontSize: size.sm,
		},
	};
}

function itemArrow(theme, ownerState) {
	const { typography, transitions, functions, palette } = theme;
	const { open, miniSidenav } = ownerState;

	const { dark, gradients } = palette;
	const { size } = typography;
	const { pxToRem, rgba } = functions;

	return {
		fontSize: `${size.md} !important`,
		fontWeight: 700,
		marginRight: pxToRem(-2.5),
		transform: () => {
			if (open) {
				return miniSidenav
					? `translateX(${pxToRem(-24)}) rotate(0)`
					: "rotate(0)";
			}

			return miniSidenav
				? `translateX(${pxToRem(-24)}) rotate(-180deg)`
				: "rotate(-180deg)";
		},
		color: open ? dark.main : rgba(gradients.dark.state, 0.4),
		transition: transitions.create(["color", "transform"], {
			easing: transitions.easing.easeInOut,
			duration: transitions.duration.shorter,
		}),
	};
}

function sidenavLogoLabel(theme, ownerState) {
	const { functions, transitions, typography, breakpoints } = theme;
	const { miniSidenav } = ownerState;

	const { pxToRem } = functions;
	const { fontWeightMedium } = typography;

	return {
		ml: 0.5,
		fontWeight: fontWeightMedium,
		wordSpacing: pxToRem(-1),
		transition: transitions.create("opacity", {
			easing: transitions.easing.easeInOut,
			duration: transitions.duration.standard,
		}),

		[breakpoints.up("xl")]: {
			opacity: miniSidenav ? 0 : 1,
		},
	};
}
function collapseItem(theme, ownerState) {
	const {
		palette,
		transitions,
		breakpoints,
		boxShadows,
		borders,
		functions,
	} = theme;
	const { active, transparentSidenav } = ownerState;

	const { dark, white, text, transparent } = palette;
	const { xxl } = boxShadows;
	const { borderRadius } = borders;
	const { pxToRem } = functions;

	return {
		background:
			active && transparentSidenav ? white.main : transparent.main,
		color: active ? dark.main : text.main,
		display: "flex",
		alignItems: "center",
		width: "100%",
		padding: `${pxToRem(10.8)} ${pxToRem(12.8)} ${pxToRem(10.8)} ${pxToRem(
			16
		)}`,
		margin: `0 ${pxToRem(16)}`,
		borderRadius: borderRadius.md,
		cursor: "pointer",
		userSelect: "none",
		whiteSpace: "nowrap",
		boxShadow: active && transparentSidenav ? xxl : "none",
		[breakpoints.up("xl")]: {
			boxShadow: () => {
				if (active) {
					return transparentSidenav ? xxl : "none";
				}

				return "none";
			},
			transition: transitions.create("box-shadow", {
				easing: transitions.easing.easeInOut,
				duration: transitions.duration.shorter,
			}),
		},
	};
}

function collapseIconBox(theme, ownerState) {
	const {
		palette,
		transitions,
		breakpoints,
		boxShadows,
		borders,
		functions,
	} = theme;
	const { active, transparentSidenav, color } = ownerState;

	const { white, info, light, gradients } = palette;
	const { md } = boxShadows;
	const { borderRadius } = borders;
	const { pxToRem } = functions;

	return {
		background: () => {
			if (active) {
				return color === "default" ? info.main : palette[color].main;
			}

			return light.main;
		},
		minWidth: pxToRem(32),
		minHeight: pxToRem(32),
		borderRadius: borderRadius.md,
		display: "grid",
		placeItems: "center",
		boxShadow: md,
		transition: transitions.create("margin", {
			easing: transitions.easing.easeInOut,
			duration: transitions.duration.standard,
		}),

		[breakpoints.up("xl")]: {
			background: () => {
				let background;

				if (!active) {
					background = transparentSidenav ? white.main : light.main;
				} else if (color === "default") {
					background = info.main;
				} else if (color === "warning") {
					background = gradients.warning.main;
				} else {
					background = palette[color].main;
				}

				return background;
			},
		},

		"& svg, svg g": {
			fill: active ? white.main : gradients.dark.state,
		},
	};
}

const collapseIcon = ({ palette: { white, gradients } }, { active }) => ({
	color: active ? white.main : gradients.dark.state,
});

function collapseText(theme, ownerState) {
	const { typography, transitions, breakpoints, functions } = theme;
	const { miniSidenav, transparentSidenav, active } = ownerState;

	const { size, fontWeightMedium, fontWeightRegular } = typography;
	const { pxToRem } = functions;

	return {
		marginLeft: pxToRem(12.8),

		[breakpoints.up("xl")]: {
			opacity: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : 1,
			maxWidth:
				miniSidenav || (miniSidenav && transparentSidenav) ? 0 : "100%",
			marginLeft:
				miniSidenav || (miniSidenav && transparentSidenav)
					? 0
					: pxToRem(12.8),
			transition: transitions.create(["opacity", "margin"], {
				easing: transitions.easing.easeInOut,
				duration: transitions.duration.standard,
			}),
		},

		"& span": {
			fontWeight: active ? fontWeightMedium : fontWeightRegular,
			fontSize: size.sm,
			lineHeight: 0,
		},
	};
}

function collapseArrow(theme, ownerState) {
	const { palette, typography, transitions, breakpoints, functions } = theme;
	const { noCollapse, transparentSidenav, miniSidenav, open } = ownerState;

	const { dark, gradients } = palette;
	const { size } = typography;
	const { pxToRem, rgba } = functions;

	return {
		fontSize: `${size.md} !important`,
		fontWeight: 700,
		marginBottom: pxToRem(-1),
		transform: open ? "rotate(0)" : "rotate(-180deg)",
		color: open ? dark.main : rgba(gradients.dark.state, 0.4),
		transition: transitions.create(["color", "transform", "opacity"], {
			easing: transitions.easing.easeInOut,
			duration: transitions.duration.shorter,
		}),

		[breakpoints.up("xl")]: {
			display:
				noCollapse || (transparentSidenav && miniSidenav) || miniSidenav
					? "none !important"
					: "block !important",
		},
	};
}

function card(theme, ownerState) {
	const { borders, functions, transitions, breakpoints } = theme;
	const { miniSidenav } = ownerState;

	const { borderRadius } = borders;
	const { pxToRem } = functions;

	return {
		minWidth: "auto",
		backgroundImage: `url(${backgroundImage})`,
		backgroundPosition: "50%",
		backgroundSize: "cover",
		borderRadius: borderRadius.xl,
		boxShadow: "none",

		[breakpoints.up("xl")]: {
			maxHeight: miniSidenav ? pxToRem(64) : pxToRem(192),
			transition: transitions.create("max-height", {
				easing: transitions.easing.easeInOut,
				duration: transitions.duration.standard,
			}),
		},
	};
}

function cardContent(theme, ownerState) {
	const { palette, functions, borders } = theme;
	const { sidenavColor } = ownerState;

	const { white, dark, gradients } = palette;
	const { linearGradient } = functions;
	const { borderRadius } = borders;

	return {
		color: white.main,
		position: "relative",
		zIndex: 2,
		width: "100%",
		height: "100%",
		p: 2,

		"&::after": {
			content: '""',
			backgroundImage:
				sidenavColor === "default"
					? linearGradient(
							gradients.secondary.main,
							gradients.secondary.state
					  )
					: linearGradient(
							gradients[sidenavColor].main,
							gradients[sidenavColor].state
					  ),
			display: "block",
			height: "100%",
			width: "100%",
			borderRadius: borderRadius.xl,
			position: "absolute",
			top: 0,
			left: 0,
			opacity: 0.65,
			zIndex: -1,
		},

		"& .MuiButton-root": {
			color: dark.main,
		},

		"&:last-child": {
			pb: 2,
		},
	};
}

const cardIconBox = {
	display: "grid",
	placeItems: "center",
	transition: ({ transitions }) =>
		transitions.create("margin", {
			easing: transitions.easing.easeInOut,
			duration: transitions.duration.standard,
		}),
};

function cardIcon(theme, ownerState) {
	const { functions, palette } = theme;
	const { sidenavColor } = ownerState;

	const { linearGradient } = functions;
	const { gradients, transparent } = palette;

	return {
		backgroundImage:
			sidenavColor === "default"
				? linearGradient(gradients.dark, gradients.dark.state)
				: linearGradient(
						gradients[sidenavColor].main,
						gradients[sidenavColor].state
				  ),
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: transparent.main,
	};
}

function SidenavCard({ controller }) {
	// const [controller] = useSoftUIController();
	const { miniSidenav, sidenavColor } = controller;

	return (
		<Card sx={(theme) => card(theme, { miniSidenav })}>
			<CardContent sx={(theme) => cardContent(theme, { sidenavColor })}>
				<SuiBox
					bgColor="white"
					width="2rem"
					height="2rem"
					borderRadius="md"
					shadow="md"
					mb={2}
					sx={cardIconBox}
				>
					<Icon
						fontSize="medium"
						sx={(theme) => cardIcon(theme, { sidenavColor })}
					>
						star
					</Icon>
				</SuiBox>
				<SuiBox lineHeight={1}>
					<SuiTypography variant="h6" color="white">
						Need help?
					</SuiTypography>
					<SuiBox mb={1.825} mt={-1}>
						<SuiTypography
							variant="caption"
							color="white"
							fontWeight="medium"
						>
							Please check our docs
						</SuiTypography>
					</SuiBox>
					<SuiButton
						component={Link}
						href="https://www.creative-tim.com/learning-lab/react/quick-start/soft-ui-dashboard/"
						target="_blank"
						rel="noreferrer"
						size="small"
						color="white"
						fullWidth
					>
						documentation
					</SuiButton>
				</SuiBox>
			</CardContent>
		</Card>
	);
}

function SidenavCollapse({
	controller,
	color,
	icon,
	name,
	children,
	active,
	noCollapse,
	open,
	...rest
}) {
	//const [controller] = useSoftUIController();
	const { miniSidenav, transparentSidenav } = controller;

	return (
		<>
			<ListItem component="li">
				<SuiBox
					{...rest}
					sx={(theme) =>
						collapseItem(theme, { active, transparentSidenav })
					}
				>
					<ListItemIcon
						sx={(theme) =>
							collapseIconBox(theme, {
								active,
								transparentSidenav,
								color,
							})
						}
					>
						{typeof icon === "string" ? (
							<SuiBox
								component="img"
								src={icon}
								alt="-"
								width="1.8rem"
							/>
						) : (
							icon
						)}
					</ListItemIcon>

					<ListItemText
						primary={name}
						sx={(theme) =>
							collapseText(theme, {
								miniSidenav,
								transparentSidenav,
								active,
							})
						}
					/>

					<ArrowDropUpIcon
						sx={(theme) =>
							collapseArrow(theme, {
								noCollapse,
								transparentSidenav,
								miniSidenav,
								open,
							})
						}
					></ArrowDropUpIcon>
				</SuiBox>
			</ListItem>
			{children && (
				<Collapse in={open} unmountOnExit>
					{children}
				</Collapse>
			)}
		</>
	);
}

// Setting default values for the props of SidenavCollapse
SidenavCollapse.defaultProps = {
	color: "info",
	active: false,
	noCollapse: false,
	children: false,
	open: false,
};

function SidenavItem({
	controller,
	name,
	active,
	nested,
	children,
	open,
	...rest
}) {
	//const [controller] = useSoftUIController();
	const { miniSidenav } = controller;

	return (
		<>
			<ListItem {...rest} component="li" sx={item}>
				<SuiBox
					sx={(theme) =>
						itemContent(theme, {
							active,
							miniSidenav,
							name,
							nested,
						})
					}
				>
					<ListItemText primary={name} />
					{children && (
						<ArrowDropUpIcon
							component="i"
							sx={(theme) =>
								itemArrow(theme, { open, miniSidenav })
							}
						></ArrowDropUpIcon>
					)}
				</SuiBox>
			</ListItem>
			{children && (
				<Collapse in={open} timeout="auto" unmountOnExit>
					{children}
				</Collapse>
			)}
		</>
	);
}

// Setting default values for the props of SidenavItem
SidenavItem.defaultProps = {
	active: false,
	nested: false,
	children: false,
	open: false,
};

function SidenavList({ children }) {
	return (
		<List
			sx={{
				pl: 2,
				ml: 3,
			}}
		>
			{children}
		</List>
	);
}

const SidenavRoot = styled(Drawer)(({ theme, ownerState }) => {
	const { palette, boxShadows, transitions, breakpoints, functions } = theme;
	const { transparentSidenav, miniSidenav } = ownerState;

	const sidebarWidth = 250;
	const { white, transparent } = palette;
	const { xxl } = boxShadows;
	const { pxToRem } = functions;

	// styles for the sidenav when miniSidenav={false}
	const drawerOpenStyles = () => ({
		transform: "translateX(0)",
		transition: transitions.create("transform", {
			easing: transitions.easing.sharp,
			duration: transitions.duration.shorter,
		}),

		[breakpoints.up("xl")]: {
			backgroundColor: transparentSidenav ? transparent.main : white.main,
			boxShadow: transparentSidenav ? "none" : xxl,
			marginBottom: transparentSidenav ? 0 : "inherit",
			left: "0",
			width: sidebarWidth,
			transform: "translateX(0)",
			transition: transitions.create(["width", "background-color"], {
				easing: transitions.easing.sharp,
				duration: transitions.duration.enteringScreen,
			}),
		},
	});

	// styles for the sidenav when miniSidenav={true}
	const drawerCloseStyles = () => ({
		transform: `translateX(${pxToRem(-320)})`,
		transition: transitions.create("transform", {
			easing: transitions.easing.sharp,
			duration: transitions.duration.shorter,
		}),

		[breakpoints.up("xl")]: {
			backgroundColor: transparentSidenav ? transparent.main : white.main,
			boxShadow: transparentSidenav ? "none" : xxl,
			marginBottom: transparentSidenav ? 0 : "inherit",
			left: "0",
			width: pxToRem(96),
			overflowX: "hidden",
			transform: "translateX(0)",
			transition: transitions.create(["width", "background-color"], {
				easing: transitions.easing.sharp,
				duration: transitions.duration.shorter,
			}),
		},
	});

	return {
		"& .MuiDrawer-paper": {
			boxShadow: xxl,
			border: "none",

			...(miniSidenav ? drawerCloseStyles() : drawerOpenStyles()),
		},
	};
});

export function Sidenav({
	controller,
	setController,
	color,
	brand,
	brandName,
	routes,
	...rest
}) {
	const [openCollapse, setOpenCollapse] = useState(false);
	const [openNestedCollapse, setOpenNestedCollapse] = useState(false);
	//const [controller, dispatch] = useSoftUIController();
	const { miniSidenav, transparentSidenav } = controller;
	const location = useLocation();
	const { pathname } = location;
	const collapseName = pathname.split("/").slice(1)[0];
	const itemName = pathname.split("/").slice(1)[1];

	const closeSidenav = () =>
		setController({ ...controller, miniSidenav: true }); //setMiniSidenav(dispatch, true);

	useEffect(() => {
		// A function that sets the mini state of the sidenav.
		function handleMiniSidenav() {
			setController({
				...controller,
				miniSidenav: window.innerWidth < 1200, //2600
			});
			// setMiniSidenav(dispatch, window.innerWidth < 1200);
		}

		/** 
       The event listener that's calling the handleMiniSidenav function when resizing the window.
      */
		window.addEventListener("resize", handleMiniSidenav);

		// Call the handleMiniSidenav function to set the state with the initial value.
		handleMiniSidenav();

		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleMiniSidenav);
	}, [location]);
	// Render all the nested collapse items from the routes.js
	const renderNestedCollapse = (collapse) => {
		const template = collapse.map(({ name, route, key, href }) =>
			href ? (
				<Link
					key={key}
					href={href}
					target="_blank"
					rel="noreferrer"
					sx={{ textDecoration: "none" }}
				>
					<SidenavItem controller={controller} name={name} nested />
				</Link>
			) : (
				<NavLink to={route} key={key} sx={{ textDecoration: "none" }}>
					<SidenavItem
						controller={controller}
						name={name}
						active={route === pathname}
						nested
					/>
				</NavLink>
			)
		);

		return template;
	};

	// Render the all the collpases from the routes.js
	const renderCollapse = (collapses) =>
		collapses.map(({ name, collapse, route, href, key }) => {
			let returnValue;

			if (collapse) {
				returnValue = (
					<SidenavItem
						controller={controller}
						key={key}
						name={name}
						active={key === itemName}
						open={openNestedCollapse === name}
						onClick={() =>
							openNestedCollapse === name
								? setOpenNestedCollapse(false)
								: setOpenNestedCollapse(name)
						}
					>
						{renderNestedCollapse(collapse)}
					</SidenavItem>
				);
			} else {
				returnValue = href ? (
					<Link
						href={href}
						key={key}
						target="_blank"
						rel="noreferrer"
						sx={{ textDecoration: "none" }}
					>
						<SidenavItem
							controller={controller}
							name={name}
							active={key === itemName}
						/>
					</Link>
				) : (
					<NavLink
						to={route}
						key={key}
						sx={{ textDecoration: "none" }}
					>
						<SidenavItem
							controller={controller}
							name={name}
							active={key === itemName}
						/>
					</NavLink>
				);
			}
			return <SidenavList key={key}>{returnValue}</SidenavList>;
		});

	// Render all the routes from the routes.js (All the visible items on the Sidenav)
	const renderRoutes = routes.map(
		({ type, name, icon, title, collapse, noCollapse, key, href }) => {
			let returnValue;

			if (type === "collapse") {
				returnValue = href ? (
					<Link
						href={href}
						key={key}
						target="_blank"
						rel="noreferrer"
						sx={{ textDecoration: "none" }}
					>
						<SidenavCollapse
							controller={controller}
							color={color}
							name={name}
							icon={icon}
							active={key === collapseName}
							noCollapse={noCollapse}
						/>
					</Link>
				) : (
					<SidenavCollapse
						controller={controller}
						color={color}
						key={key}
						name={name}
						icon={icon}
						active={key === collapseName}
						open={openCollapse === name}
						onClick={() =>
							openCollapse === name
								? setOpenCollapse(false)
								: setOpenCollapse(name)
						}
					>
						{collapse ? renderCollapse(collapse) : null}
					</SidenavCollapse>
				);
			} else if (type === "title") {
				returnValue = (
					<SuiTypography
						key={key}
						display="block"
						variant="caption"
						fontWeight="bold"
						textTransform="uppercase"
						opacity={0.6}
						pl={3}
						mt={2}
						mb={1}
						ml={1}
					>
						{title}
					</SuiTypography>
				);
			} else if (type === "divider") {
				returnValue = <Divider key={key} />;
			}

			return returnValue;
		}
	);

	return (
		<SidenavRoot
			{...rest}
			variant="permanent"
			ownerState={{ transparentSidenav, miniSidenav }}
		>
			<SuiBox pt={3} pb={1} px={4} textAlign="center">
				<SuiBox
					display={{ xs: "block", xl: "none" }}
					position="absolute"
					top={0}
					right={0}
					p={1.625}
					onClick={closeSidenav}
					sx={{ cursor: "pointer" }}
				>
					<SuiTypography variant="h6" color="secondary">
						<Icon sx={{ fontWeight: "bold" }}>close</Icon>
					</SuiTypography>
				</SuiBox>
				<SuiBox
					component={NavLink}
					to="/"
					display="flex"
					alignItems="center"
				>
					{brand && (
						<SuiBox
							component="img"
							src={brand}
							alt="Soft UI Logo"
							width="2rem"
						/>
					)}
					<SuiBox
						width={!brandName && "100%"}
						sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
					>
						<SuiTypography
							component="h6"
							variant="button"
							fontWeight="medium"
						>
							{brandName}
						</SuiTypography>
					</SuiBox>
				</SuiBox>
			</SuiBox>
			<Divider />
			<List>{renderRoutes}</List>

			{/* <SuiBox pt={2} my={2} mx={2}>
        <SidenavCard controller={controller} />
      </SuiBox> */}
		</SidenavRoot>
	);
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
	color: "info",
	brand: "",
};
const SuiTypographyRoot = styled(Typography)(({ theme, ownerState }) => {
	const { palette, typography, functions } = theme;
	const {
		color,
		textTransform,
		verticalAlign,
		fontWeight,
		opacity,
		textGradient,
	} = ownerState;

	const { gradients, transparent } = palette;
	const {
		fontWeightLight,
		fontWeightRegular,
		fontWeightMedium,
		fontWeightBold,
	} = typography;
	const { linearGradient } = functions;

	// fontWeight styles
	const fontWeights = {
		light: fontWeightLight,
		regular: fontWeightRegular,
		medium: fontWeightMedium,
		bold: fontWeightBold,
	};

	// styles for the typography with textGradient={true}
	const gradientStyles = () => ({
		backgroundImage:
			color !== "inherit" &&
			color !== "text" &&
			color !== "white" &&
			gradients[color]
				? linearGradient(gradients[color].main, gradients[color].state)
				: linearGradient(gradients.dark.main, gradients.dark.state),
		display: "inline-block",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: transparent.main,
		position: "relative",
		zIndex: 1,
	});

	return {
		opacity,
		textTransform,
		verticalAlign,
		textDecoration: "none",
		color:
			color === "inherit" || !palette[color]
				? "inherit"
				: palette[color].main,
		fontWeight: fontWeights[fontWeight] && fontWeights[fontWeight],
		...(textGradient && gradientStyles()),
	};
});

export const SuiTypography = forwardRef(
	(
		{
			color,
			fontWeight,
			textTransform,
			verticalAlign,
			textGradient,
			opacity,
			children,
			...rest
		},
		ref
	) => (
		<SuiTypographyRoot
			{...rest}
			ref={ref}
			ownerState={{
				color,
				textTransform,
				verticalAlign,
				fontWeight,
				opacity,
				textGradient,
			}}
		>
			{children}
		</SuiTypographyRoot>
	)
);

// Setting default values for the props of SuiTypography
SuiTypography.defaultProps = {
	color: "dark",
	fontWeight: false,
	textTransform: "none",
	verticalAlign: "unset",
	textGradient: false,
	opacity: 1,
};

const SuiBoxRoot = styled(Box)(({ theme, ownerState }) => {
	const { palette, functions, borders, boxShadows } = theme;
	const { variant, bgColor, color, opacity, borderRadius, shadow } =
		ownerState;

	const { gradients, grey, white } = palette;
	const { linearGradient } = functions;
	const { borderRadius: radius } = borders;

	const greyColors = {
		"grey-100": grey[100],
		"grey-200": grey[200],
		"grey-300": grey[300],
		"grey-400": grey[400],
		"grey-500": grey[500],
		"grey-600": grey[600],
		"grey-700": grey[700],
		"grey-800": grey[800],
		"grey-900": grey[900],
	};

	const validGradients = [
		"primary",
		"secondary",
		"info",
		"success",
		"warning",
		"error",
		"dark",
		"light",
	];

	const validColors = [
		"transparent",
		"white",
		"black",
		"primary",
		"secondary",
		"info",
		"success",
		"warning",
		"error",
		"light",
		"dark",
		"text",
		"grey-100",
		"grey-200",
		"grey-300",
		"grey-400",
		"grey-500",
		"grey-600",
		"grey-700",
		"grey-800",
		"grey-900",
	];

	const validBorderRadius = ["xs", "sm", "md", "lg", "xl", "xxl", "section"];
	const validBoxShadows = ["xs", "sm", "md", "lg", "xl", "xxl", "inset"];

	// background value
	let backgroundValue = bgColor;

	if (variant === "gradient") {
		backgroundValue = validGradients.find((el) => el === bgColor)
			? linearGradient(gradients[bgColor].main, gradients[bgColor].state)
			: white.main;
	} else if (validColors.find((el) => el === bgColor)) {
		backgroundValue = palette[bgColor]
			? palette[bgColor].main
			: greyColors[bgColor];
	} else {
		backgroundValue = bgColor;
	}

	// color value
	let colorValue = color;

	if (validColors.find((el) => el === color)) {
		colorValue = palette[color] ? palette[color].main : greyColors[color];
	}

	// borderRadius value
	let borderRadiusValue = borderRadius;

	if (validBorderRadius.find((el) => el === borderRadius)) {
		borderRadiusValue = radius[borderRadius];
	}

	// boxShadow value
	let boxShadowValue = boxShadows;

	if (validBoxShadows.find((el) => el === shadow)) {
		boxShadowValue = boxShadows[shadow];
	}

	return {
		opacity,
		background: backgroundValue,
		color: colorValue,
		borderRadius: borderRadiusValue,
		boxShadow: boxShadowValue,
	};
});

export const SuiBox = forwardRef(
	(
		{ variant, bgColor, color, opacity, borderRadius, shadow, ...rest },
		ref
	) => (
		<SuiBoxRoot
			{...rest}
			ref={ref}
			ownerState={{
				variant,
				bgColor,
				color,
				opacity,
				borderRadius,
				shadow,
			}}
		/>
	)
);

// Setting default values for the props of SuiBox
SuiBox.defaultProps = {
	variant: "contained",
	bgColor: "transparent",
	color: "dark",
	opacity: 1,
	borderRadius: "none",
	shadow: "none",
};

const SuiButtonRoot = styled(Button)(({ theme, ownerState }) => {
	const { palette, functions, borders } = theme;
	const { color, variant, size, circular, iconOnly } = ownerState;

	const { white, dark, text, transparent, gradients } = palette;
	const { boxShadow, linearGradient, pxToRem, rgba } = functions;
	const { borderRadius } = borders;

	// styles for the button with variant="contained"
	const containedStyles = () => {
		// background color value
		const backgroundValue = palette[color]
			? palette[color].main
			: white.main;

		// backgroundColor value when button is focused
		const focusedBackgroundValue = palette[color]
			? palette[color].focus
			: white.focus;

		// boxShadow value
		const boxShadowValue = palette[color]
			? boxShadow([0, 0], [0, 3.2], palette[color].main, 0.5)
			: boxShadow([0, 0], [0, 3.2], dark.main, 0.5);

		// color value
		let colorValue = white.main;

		if (color === "white" || !palette[color]) {
			colorValue = text.main;
		} else if (color === "light") {
			colorValue = gradients.dark.state;
		}

		// color value when button is focused
		let focusedColorValue = white.main;

		if (color === "white") {
			focusedColorValue = text.main;
		} else if (
			color === "primary" ||
			color === "error" ||
			color === "dark"
		) {
			focusedColorValue = white.main;
		}

		return {
			background: backgroundValue,
			color: colorValue,

			"&:hover": {
				backgroundColor: backgroundValue,
			},

			"&:focus:not(:hover)": {
				backgroundColor: focusedBackgroundValue,
				boxShadow: boxShadowValue,
			},

			"&:disabled": {
				backgroundColor: backgroundValue,
				color: focusedColorValue,
			},
		};
	};

	// styles for the button with variant="outlined"
	const outliedStyles = () => {
		// background color value
		const backgroundValue =
			color === "white" ? rgba(white.main, 0.1) : transparent.main;

		// color value
		const colorValue = palette[color] ? palette[color].main : white.main;

		// boxShadow value
		const boxShadowValue = palette[color]
			? boxShadow([0, 0], [0, 3.2], palette[color].main, 0.5)
			: boxShadow([0, 0], [0, 3.2], white.main, 0.5);

		// border color value
		let borderColorValue = palette[color]
			? palette[color].main
			: rgba(white.main, 0.75);

		if (color === "white") {
			borderColorValue = rgba(white.main, 0.75);
		}

		return {
			background: backgroundValue,
			color: colorValue,
			borderColor: borderColorValue,

			"&:hover": {
				background: transparent.main,
				borderColor: colorValue,
			},

			"&:focus:not(:hover)": {
				background: transparent.main,
				boxShadow: boxShadowValue,
			},

			"&:active:not(:hover)": {
				backgroundColor: colorValue,
				color: white.main,
				opacity: 0.85,
			},

			"&:disabled": {
				color: colorValue,
				borderColor: colorValue,
			},
		};
	};

	// styles for the button with variant="gradient"
	const gradientStyles = () => {
		// background value
		const backgroundValue =
			color === "white" || !gradients[color]
				? white.main
				: linearGradient(gradients[color].main, gradients[color].state);

		// color value
		let colorValue = white.main;

		if (color === "white") {
			colorValue = text.main;
		} else if (color === "light") {
			colorValue = gradients.dark.state;
		}

		return {
			background: backgroundValue,
			color: colorValue,

			"&:focus:not(:hover)": {
				boxShadow: "none",
			},

			"&:disabled": {
				background: backgroundValue,
				color: colorValue,
			},
		};
	};

	// styles for the button with variant="text"
	const textStyles = () => {
		// color value
		const colorValue = palette[color] ? palette[color].main : white.main;

		// color value when button is focused
		const focusedColorValue = palette[color]
			? palette[color].focus
			: white.focus;

		return {
			color: colorValue,

			"&:hover": {
				color: focusedColorValue,
			},

			"&:focus:not(:hover)": {
				color: focusedColorValue,
			},
		};
	};

	// styles for the button with circular={true}
	const circularStyles = () => ({
		borderRadius: borderRadius.section,
	});

	// styles for the button with iconOnly={true}
	const iconOnlyStyles = () => {
		// width, height, minWidth and minHeight values
		let sizeValue = pxToRem(38);

		if (size === "small") {
			sizeValue = pxToRem(25.4);
		} else if (size === "large") {
			sizeValue = pxToRem(52);
		}

		// padding value
		let paddingValue = `${pxToRem(11)} ${pxToRem(11)} ${pxToRem(10)}`;

		if (size === "small") {
			paddingValue = pxToRem(4.5);
		} else if (size === "large") {
			paddingValue = pxToRem(16);
		}

		return {
			width: sizeValue,
			minWidth: sizeValue,
			height: sizeValue,
			minHeight: sizeValue,
			padding: paddingValue,

			"& .material-icons": {
				marginTop: 0,
			},

			"&:hover, &:focus, &:active": {
				transform: "none",
			},
		};
	};

	return {
		...(variant === "contained" && containedStyles()),
		...(variant === "outlined" && outliedStyles()),
		...(variant === "gradient" && gradientStyles()),
		...(variant === "text" && textStyles()),
		...(circular && circularStyles()),
		...(iconOnly && iconOnlyStyles()),
	};
});

export const SuiButton = forwardRef(
	({ color, variant, size, circular, iconOnly, children, ...rest }, ref) => (
		<SuiButtonRoot
			{...rest}
			ref={ref}
			color="primary"
			variant={variant === "gradient" ? "contained" : variant}
			size={size}
			ownerState={{ color, variant, size, circular, iconOnly }}
		>
			{children}
		</SuiButtonRoot>
	)
);
// Setting default values for the props of SuiButton
SuiButton.defaultProps = {
	size: "medium",
	variant: "contained",
	color: "white",
	circular: false,
	iconOnly: false,
};

const SuiAvatarRoot = styled(Avatar)(({ theme, ownerState }) => {
	const { palette, functions, typography, boxShadows } = theme;
	const { shadow, bgColor, size } = ownerState;

	const { gradients, transparent } = palette;
	const { pxToRem, linearGradient } = functions;
	const { size: fontSize, fontWeightBold } = typography;
	// backgroundImage value
	const backgroundValue =
		bgColor === "transparent"
			? transparent.main
			: linearGradient(gradients[bgColor].main, gradients[bgColor].state);

	// size value
	let sizeValue;

	switch (size) {
		case "xs":
			sizeValue = {
				width: pxToRem(24),
				height: pxToRem(24),
				fontSize: fontSize.xs,
			};
			break;
		case "sm":
			sizeValue = {
				width: pxToRem(36),
				height: pxToRem(36),
				fontSize: fontSize.sm,
			};
			break;
		case "lg":
			sizeValue = {
				width: pxToRem(58),
				height: pxToRem(58),
				fontSize: fontSize.sm,
			};
			break;
		case "xl":
			sizeValue = {
				width: pxToRem(74),
				height: pxToRem(74),
				fontSize: fontSize.md,
			};
			break;
		case "xxl":
			sizeValue = {
				width: pxToRem(110),
				height: pxToRem(110),
				fontSize: fontSize.md,
			};
			break;
		default: {
			sizeValue = {
				width: pxToRem(48),
				height: pxToRem(48),
				fontSize: fontSize.md,
			};
		}
	}

	return {
		background: backgroundValue,
		fontWeight: fontWeightBold,
		boxShadow: boxShadows[shadow],
		...sizeValue,
	};
});

export const SuiAvatar = forwardRef(
	({ bgColor, size, shadow, ...rest }, ref) => (
		<SuiAvatarRoot
			ref={ref}
			ownerState={{ shadow, bgColor, size }}
			{...rest}
		/>
	)
);
// Setting default values for the props of SuiAvatar
SuiAvatar.defaultProps = {
	bgColor: "transparent",
	size: "md",
	shadow: "none",
};

const SuiInputWithIconRoot = styled("div")(({ theme, ownerState }) => {
	const { palette, functions, borders } = theme;
	const { error, success, disabled } = ownerState;

	const { inputColors, grey, white } = palette;
	const { pxToRem } = functions;
	const { borderRadius, borderWidth } = borders;

	// border color value
	let borderColorValue = inputColors.borderColor.main;

	if (error) {
		borderColorValue = inputColors.error;
	} else if (success) {
		borderColorValue = inputColors.success;
	}

	return {
		display: "flex",
		alignItems: "center",
		backgroundColor: disabled ? grey[200] : white.main,
		border: `${borderWidth[1]} solid`,
		borderRadius: borderRadius.md,
		borderColor: borderColorValue,

		"& .MuiInputBase-input": {
			height: pxToRem(20),
		},
	};
});

const SuiInputRoot = styled(InputBase)(({ theme, ownerState }) => {
	const { palette, boxShadows, functions, typography, borders } = theme;
	const { size, error, success, iconDirection, direction, disabled } =
		ownerState;

	const { inputColors, grey, white, transparent } = palette;
	const { inputBoxShadow } = boxShadows;
	const { pxToRem, boxShadow } = functions;
	const { size: fontSize } = typography;
	const { borderRadius } = borders;

	// styles for the input with size="small"
	const smallStyles = () => ({
		fontSize: fontSize.xs,
		padding: `${pxToRem(4)} ${pxToRem(12)}`,
	});

	// styles for the input with size="large"
	const largeStyles = () => ({
		padding: pxToRem(12),
	});

	// styles for the focused state of the input
	let focusedBorderColorValue = inputColors.borderColor.focus;

	if (error) {
		focusedBorderColorValue = inputColors.error;
	} else if (success) {
		focusedBorderColorValue = inputColors.success;
	}

	let focusedPaddingLeftValue;

	if (direction === "rtl" && iconDirection === "left") {
		focusedPaddingLeftValue = pxToRem(12);
	} else if (direction === "rtl" && iconDirection === "right") {
		focusedPaddingLeftValue = pxToRem(12);
	} else if (direction === "ltr" && iconDirection === "right") {
		focusedPaddingLeftValue = pxToRem(12);
	} else if (direction === "ltr" && iconDirection === "left") {
		focusedPaddingLeftValue = pxToRem(12);
	}

	let focusedPaddingRightValue;

	if (direction === "rtl" && iconDirection === "left") {
		focusedPaddingRightValue = pxToRem(12);
	} else if (direction === "rtl" && iconDirection === "right") {
		focusedPaddingRightValue = pxToRem(12);
	} else if (direction === "ltr" && iconDirection === "right") {
		focusedPaddingRightValue = pxToRem(12);
	} else if (direction === "ltr" && iconDirection === "left") {
		focusedPaddingRightValue = pxToRem(12);
	}

	let focusedBoxShadowValue = boxShadow(
		[0, 0],
		[0, 2],
		inputColors.boxShadow,
		1
	);

	if (error) {
		focusedBoxShadowValue = inputBoxShadow.error;
	} else if (success) {
		focusedBoxShadowValue = inputBoxShadow.success;
	}

	// styles for the input with error={true}
	const errorStyles = () => ({
		backgroundImage:
			"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23fd5c70' viewBox='0 0 12 12'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23fd5c70' stroke='none'/%3E%3C/svg%3E\")",
		backgroundRepeat: "no-repeat",
		backgroundPosition: `right ${pxToRem(12)} center`,
		backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,
		borderColor: inputColors.error,
	});

	// styles for the input with success={true}
	const successStyles = () => ({
		backgroundImage:
			"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8'%3E%3Cpath fill='%2366d432' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\")",
		backgroundRepeat: "no-repeat",
		backgroundPosition: `right ${pxToRem(12)} center`,
		backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,
		borderColor: inputColors.success,
	});

	// styles for the input containing an icon
	const withIconStyles = () => {
		let withIconBorderRadiusValue = `0 ${borderRadius.md} ${borderRadius.md} 0`;

		if (direction === "rtl" && iconDirection === "left") {
			withIconBorderRadiusValue = `0 ${borderRadius.md} ${borderRadius.md} 0`;
		} else if (direction === "rtl" && iconDirection === "right") {
			withIconBorderRadiusValue = `${borderRadius.md} 0 0 ${borderRadius.md}`;
		} else if (direction === "ltr" && iconDirection === "right") {
			withIconBorderRadiusValue = `${borderRadius.md} 0 0 ${borderRadius.md}`;
		}

		let withIconPaddingLeftValue;
		if (direction === "rtl" && iconDirection === "left") {
			withIconPaddingLeftValue = 0;
		} else if (direction === "rtl" && iconDirection === "right") {
			withIconPaddingLeftValue = pxToRem(12);
		} else if (direction === "ltr" && iconDirection === "right") {
			withIconPaddingLeftValue = pxToRem(12);
		} else if (direction === "ltr" && iconDirection === "left") {
			withIconPaddingLeftValue = 0;
		}

		let withIconPaddingRightValue;

		if (direction === "rtl" && iconDirection === "left") {
			withIconPaddingRightValue = pxToRem(12);
		} else if (direction === "rtl" && iconDirection === "right") {
			withIconPaddingRightValue = 0;
		} else if (direction === "ltr" && iconDirection === "right") {
			withIconPaddingRightValue = 0;
		} else if (direction === "ltr" && iconDirection === "left") {
			withIconPaddingRightValue = pxToRem(12);
		}

		return {
			borderColor: transparent.main,
			borderRadius: withIconBorderRadiusValue,
			paddingLeft: withIconPaddingLeftValue,
			paddingRight: withIconPaddingRightValue,
		};
	};

	return {
		backgroundColor: disabled ? `${grey[200]} !important` : white.main,
		pointerEvents: disabled ? "none" : "auto",
		...(size === "small" && smallStyles()),
		...(size === "large" && largeStyles()),
		...(error && errorStyles()),
		...(success && successStyles()),
		...((iconDirection === "left" || iconDirection === "right") &&
			withIconStyles()),

		"&.Mui-focused": {
			borderColor: focusedBorderColorValue,
			paddingLeft: focusedPaddingLeftValue,
			paddingRight: focusedPaddingRightValue,
			boxShadow: focusedBoxShadowValue,
			outline: 0,
		},

		"&.MuiInputBase-multiline": {
			padding: `${pxToRem(10)} ${pxToRem(12)}`,
		},
	};
});

const SuiInputIconRoot = styled(Icon)(({ theme, ownerState }) => {
	const { typography } = theme;
	const { size } = ownerState;

	const { fontWeightBold, size: fontSize } = typography;

	return {
		fontWeight: fontWeightBold,
		fontSize: size === "small" && `${fontSize.md} !important`,
	};
});

const SuiInputIconBoxRoot = styled("div")(({ theme, ownerState }) => {
	const { palette, functions } = theme;
	const { size } = ownerState;

	const { dark } = palette;
	const { pxToRem } = functions;

	return {
		lineHeight: 0,
		padding:
			size === "small"
				? `${pxToRem(4)} ${pxToRem(10)}`
				: `${pxToRem(8)} ${pxToRem(10)}`,
		width: pxToRem(39),
		height: "100%",
		color: dark.main,
	};
});
export const SuiInputOriginal = forwardRef(
	({ controller, size, icon, error, success, disabled, ...rest }, ref) => {
		let template;
		//const [controller] = useSoftUIController();
		const { direction } = "ltr"; //controller;
		const iconDirection = icon.direction;

		if (icon.component && icon.direction === "left") {
			template = (
				<SuiInputWithIconRoot
					ref={ref}
					ownerState={{ error, success, disabled }}
				>
					<SuiInputIconBoxRoot ownerState={{ size }}>
						<SuiInputIconRoot
							fontSize="small"
							ownerState={{ size }}
						>
							{icon.component}
						</SuiInputIconRoot>
					</SuiInputIconBoxRoot>
					<SuiInputRoot
						{...rest}
						ownerState={{
							size,
							error,
							success,
							iconDirection,
							direction,
							disabled,
						}}
					/>
				</SuiInputWithIconRoot>
			);
		} else if (icon.component && icon.direction === "right") {
			template = (
				<SuiInputWithIconRoot
					ref={ref}
					ownerState={{ error, success, disabled }}
				>
					<SuiInputRoot
						{...rest}
						ownerState={{
							size,
							error,
							success,
							iconDirection,
							direction,
							disabled,
						}}
					/>
					<SuiInputIconBoxRoot ownerState={{ size }}>
						<SuiInputIconRoot
							fontSize="small"
							ownerState={{ size }}
						>
							{icon.component}
						</SuiInputIconRoot>
					</SuiInputIconBoxRoot>
				</SuiInputWithIconRoot>
			);
		} else {
			template = (
				<SuiInputRoot
					{...rest}
					ref={ref}
					ownerState={{ size, error, success, disabled }}
				/>
			);
		}

		return template;
	}
);

// Setting default values for the props of SuiInput
SuiInputOriginal.defaultProps = {
	size: "medium",
	icon: {
		component: false,
		direction: "none",
	},
	error: false,
	success: false,
	disabled: false,
};
export const SuiInput = forwardRef(
	({ inputRef, size, icon, error, success, disabled, ...rest }, ref) => {
		let template;
		//const [controller] = useSoftUIController();
		template = (
			<SuiInputRoot
				{...rest}
				ref={ref}
				ownerState={{ size, error, success, disabled }}
			/>
		);
		return template;
	}
);
export const SuiInputCore = forwardRef(
	({ inputRef, size, icon, error, success, disabled, ...rest }, ref) => {
		console.log({ rest });
		let template;
		//const [controller] = useSoftUIController();
		template = (
			<SuiInputRoot
				{...rest}
				ref={inputRef}
				ownerState={{ size, error, success, disabled }}
			/>
		);
		return template;
	}
);

// Setting default values for the props of SuiInput
SuiInput.defaultProps = {
	size: "medium",
	icon: {
		component: false,
		direction: "none",
	},
	error: false,
	success: false,
	disabled: false,
};

const SuiEditorRoot = styled("div")(({ theme }) => {
	const { palette, borders, typography } = theme;

	const { borderRadius } = borders;
	const { size } = typography;
	const { text } = palette;

	return {
		"& .ql-toolbar": {
			borderRadius: `${borderRadius.md} ${borderRadius.md} 0 0`,
		},

		"& .ql-container": {
			borderRadius: `0 0 ${borderRadius.md} ${borderRadius.md}`,
		},

		"& .ql-editor": {
			"& p": {
				fontSize: size.md,
				color: text.main,
			},

			"& ul li": {
				color: text.main,
			},
		},
	};
});

function SuiEditor(props) {
	const modules = {
		toolbar: false, //[[], [], [], [], []],
	};
	return (
		<SuiEditorRoot>
			<ReactQuill modules={modules} theme="snow" {...props} />
		</SuiEditorRoot>
	);
}

const styles = (selectSize, selectError, selectSuccess) => {
	const { dark, white, text, light, inputColors, gradients, transparent } =
		colors;
	const { size, fontWeightRegular } = typography;
	const { borderWidth, borderRadius } = borders;
	const { inputBoxShadow, lg } = boxShadows;

	let borderColorValue;
	let borderColorFocused;
	let boxShadowValue;
	let selectSizeValue;

	if (selectError) {
		borderColorValue = inputColors.error;
		borderColorFocused = inputColors.error;
	} else if (selectSuccess) {
		borderColorValue = inputColors.success;
		borderColorFocused = inputColors.success;
	} else {
		borderColorValue = inputColors.borderColor.main;
		borderColorFocused = inputColors.borderColor.focus;
	}

	if (selectError) {
		boxShadowValue = inputBoxShadow.error;
	} else if (selectSuccess) {
		boxShadowValue = inputBoxShadow.success;
	} else {
		boxShadowValue = boxShadow([0, 0], [0, 2], inputColors.boxShadow, 1);
	}

	if (selectSize === "small") {
		selectSizeValue = pxToRem(32);
	} else if (selectSize === "large") {
		selectSizeValue = pxToRem(48);
	} else {
		selectSizeValue = pxToRem(40);
	}

	// animations
	const prespective = keyframes`
	  from {
		opacity: 0;
		transform: perspective(999px) rotateX(-10deg) translateZ(0) translate3d(0, 0, 0);
	  }
	  to {
		opacity: 1;
		transform: perspective(999px) rotateX(0deg) translateZ(0) translate3d(0, 0, 5px);
	  }
	`;

	return {
		control: (provided, state) => ({
			display: "flex",
			alignItems: "center",
			width: "100%",
			height: selectSizeValue,
			padding: 0,
			fontSize: selectSize === "small" ? size.xs : size.sm,
			fontWeight: fontWeightRegular,
			backgroundColor: transparent.main,
			backgroundClip: "padding-box",
			border: `${borderWidth[1]} solid ${inputColors.borderColor.main}`,
			appearance: "none",
			borderRadius: borderRadius.md,
			transition: "box-shadow 150ms ease, border-color 150ms ease",
			cursor: "pointer",
			borderColor: state.isFocused
				? borderColorFocused
				: borderColorValue,
			boxShadow: state.isFocused ? boxShadowValue : "none",
		}),

		valueContainer: () => ({
			display: "flex",
			alignItems: "center",
			width: "100%",
			height: "max-content",
			padding: `0 ${pxToRem(12)}`,
			color: dark.main,
		}),

		placeholder: () => ({
			position: "absolute",
			top: selectSize === "small" ? "52%" : "51%",
			transform: "translateY(-50%)",
			marginLeft: 0,
			marginRight: 0,
			color: dark.main,
			opacity: 0.5,
		}),

		singleValue: () => ({
			position: "absolute",
			top: selectSize === "small" ? "52%" : "51%",
			transform: "translateY(-50%)",
			color: text.main,
		}),

		input: () => ({
			color: dark.main,
			position: "relative",
			margin: 0,
		}),

		indicatorSeparator: () => ({
			display: "none",
		}),

		dropdownIndicator: (provided, state) => ({
			display: "flex",
			padding: pxToRem(12),

			"& svg": {
				fill: text.main,
				width: pxToRem(14),
				height: pxToRem(14),
				strokeWidth: 1,
				stroke: text.main,
				transform: state.selectProps.menuIsOpen
					? "rotate(180deg)"
					: "rotate(0)",
				transition: "transform 250ms ease",
			},
		}),

		menu: (provided) => ({
			...provided,
			minWidth: pxToRem(160),
			boxShadow: lg,
			padding: `${pxToRem(16)} ${pxToRem(8)}`,
			fontSize: size.sm,
			color: text.main,
			textAlign: "left",
			backgroundColor: white.main,
			borderRadius: borderRadius.md,
			transformOrigin: "50% 0",
			animation: `${prespective} 250ms ease forwards !important`,
		}),

		menuList: (provided) => ({
			...provided,
			padding: 0,
		}),

		option: (provided, state) => ({
			...provided,
			position: "relative",
			minWidth: pxToRem(160),
			minHeight: "unset",
			padding: `${pxToRem(4.8)} ${pxToRem(100)} ${pxToRem(4.8)} ${pxToRem(
				16
			)}`,
			borderRadius: borderRadius.md,
			fontSize: size.sm,
			color: text.main,
			cursor: state.isDisabled ? "not-allowed" : "pointer",
			opacity: state.isDisabled ? 0.5 : 1,
			userSelect: state.isDisabled ? "none" : "auto",
			transition: "background-color 300ms ease, color 300ms ease",

			"&:after": {
				content: "'Press to select'",
				display: "block",
				fontSize: size.xs,
				position: "absolute",
				right: pxToRem(10),
				top: "52%",
				color: text.main,
				opacity: 0,
				transform: "translateY(-50%)",
				transition: "opacity 300ms ease",
			},

			"&:hover, &:focus": {
				backgroundColor: state.isDisabled
					? transparent.main
					: light.main,
				color: state.isDisabled ? "currentColor" : dark.main,

				"&:after": {
					content: state.isDisabled && "''",
					opacity: 0.5,
				},
			},
		}),

		multiValue: (provided) => ({
			...provided,
			margin: 0,
			marginRight: pxToRem(4),
			borderRadius: borderRadius.section,
			display: "flex",
			alignItems: "center",
			backgroundColor: gradients.dark.state,
			color: white.main,
			padding: `${pxToRem(2)} 0 ${pxToRem(2)} ${pxToRem(4)}`,

			"& div:first-of-type": {
				color: white.main,
				paddingTop: pxToRem(4),
				paddingBottom: pxToRem(2),
			},

			"& div:last-of-type": {
				paddingTop: pxToRem(1.5),
				opacity: 0.8,

				"&:hover": {
					backgroundColor: transparent.main,
					color: white.main,
				},
			},
		}),
	};
};

export const SuiSelect = forwardRef(
	({ size, error, success, ...rest }, ref) => {
		const { light } = colors;

		return (
			<Select
				{...rest}
				ref={ref}
				styles={styles(size, error, success)}
				theme={(theme) => ({
					...theme,
					colors: {
						...theme.colors,
						primary25: light.main,
						primary: light.main,
					},
				})}
			/>
		);
	}
);

// Setting default values for the props of SuiSelect
SuiSelect.defaultProps = {
	size: "medium",
	error: false,
	success: false,
};

function EventCard({ id, image, title, dateTime, description, action }) {
	return (
		<Card>
			<SuiBox p={2}>
				<SuiBox display="flex" alignItems="center">
					<SuiAvatar
						theme={theme}
						bgColor={"light"}
						src={image}
						alt={title}
						size="lg"
						variant="rounded"
					/>
					<SuiBox ml={1} lineHeight={0}>
						<SuiTypography
							variant="h6"
							fontWeight="medium"
							textTransform="capitalize"
						>
							{title}
						</SuiTypography>
						{dateTime ? (
							<SuiTypography
								variant="caption"
								fontWeight="regular"
								color="text"
								textTransform="capitalize"
							>
								{dateTime}
							</SuiTypography>
						) : null}
					</SuiBox>
				</SuiBox>
				<SuiBox my={2}>
					<SuiTypography variant="body2" color="text">
						{description}
					</SuiTypography>
				</SuiBox>
				{id ? (
					<SuiBox>
						<SuiTypography
							component="span"
							variant="body2"
							fontWeight="bold"
							color="text"
						>
							Meeting ID:&nbsp;
						</SuiTypography>
						<SuiTypography
							component="span"
							variant="body2"
							color="text"
						>
							{id}
						</SuiTypography>
					</SuiBox>
				) : null}
				<Divider />
				<SuiBox
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					{action.type === "internal" ? (
						<SuiButton
							component={Link}
							to={action.route}
							variant="gradient"
							color={action.color}
							size="small"
						>
							{action.label}
						</SuiButton>
					) : (
						<SuiButton
							component="a"
							href={action.route}
							variant="gradient"
							color={action.color}
							size="small"
						>
							{action.label}
						</SuiButton>
					)}
				</SuiBox>
			</SuiBox>
		</Card>
	);
}

// The Pagination main context
const Context = createContext();

const SuiPaginationItemRoot = styled(SuiButton)(({ theme, ownerState }) => {
	const { borders, functions, typography, palette } = theme;
	const { variant, paginationSize, active } = ownerState;

	const { borderColor } = borders;
	const { pxToRem } = functions;
	const { fontWeightRegular, size: fontSize } = typography;
	const { light } = palette;

	// width, height, minWidth and minHeight values
	let sizeValue = pxToRem(36);

	if (paginationSize === "small") {
		sizeValue = pxToRem(30);
	} else if (paginationSize === "large") {
		sizeValue = pxToRem(46);
	}

	return {
		borderColor,
		margin: `0 ${pxToRem(2)}`,
		pointerEvents: active ? "none" : "auto",
		fontWeight: fontWeightRegular,
		fontSize: fontSize.sm,
		width: sizeValue,
		minWidth: sizeValue,
		height: sizeValue,
		minHeight: sizeValue,

		"&:hover, &:focus, &:active": {
			transform: "none",
			boxShadow:
				(variant !== "gradient" || variant !== "contained") &&
				"none !important",
			opacity: "1 !important",
		},

		"&:hover": {
			backgroundColor: light.main,
			borderColor,
		},
	};
});

const SuiPagination = forwardRef(
	({ item, variant, color, size, active, children, ...rest }, ref) => {
		const context = item ? useContext(Context) : null;
		const paginationSize = context ? context.size : null;

		return (
			<Context.Provider value={{ variant, color, size }}>
				{item ? (
					<SuiPaginationItemRoot
						{...rest}
						ref={ref}
						variant={active ? context.variant : "outlined"}
						color={active ? context.color : "secondary"}
						iconOnly
						circular
						ownerState={{ variant, active, paginationSize }}
					>
						{children}
					</SuiPaginationItemRoot>
				) : (
					<SuiBox
						display="flex"
						justifyContent="flex-end"
						alignItems="center"
						sx={{ listStyle: "none" }}
					>
						{children}
					</SuiBox>
				)}
			</Context.Provider>
		);
	}
);

// Soft UI Dashboard PRO React base styles
export function ProfileInfoCard({ title, description, info, action }) {
	const labels = [];
	const values = [];

	// Convert this form `objectKey` of the object key in to this `object key`
	Object.keys(info).forEach((el) => {
		if (el.match(/[A-Z\s]+/)) {
			const uppercaseLetter = Array.from(el).find((i) =>
				i.match(/[A-Z]+/)
			);
			const newElement = el.replace(
				uppercaseLetter,
				` ${uppercaseLetter.toLowerCase()}`
			);

			labels.push(newElement);
		} else {
			labels.push(el);
		}
	});

	// Push the object values into the values array
	Object.values(info).forEach((el) => values.push(el));

	// Render the card info items
	const renderItems = labels.map((label, key) => (
		<SuiBox key={label} display="flex" py={1} pr={2}>
			<SuiTypography
				variant="button"
				fontWeight="bold"
				textTransform="capitalize"
			>
				{label}: &nbsp;
			</SuiTypography>
			<SuiTypography variant="button" fontWeight="regular" color="text">
				&nbsp;{values[key]}
			</SuiTypography>
		</SuiBox>
	));

	// Render the card social media icons

	return (
		<Card sx={{ height: "100%" }}>
			<SuiBox
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				pt={2}
				px={2}
			>
				<SuiTypography
					variant="h6"
					fontWeight="medium"
					textTransform="capitalize"
				>
					{title}
				</SuiTypography>
			</SuiBox>
			<SuiBox p={2}>
				<SuiBox>{renderItems}</SuiBox>
			</SuiBox>
		</Card>
	);
}

// Soft UI Dashboard PRO React base styles
export function ProfileInfoCardOriginal({ title, description, info, action }) {
	const labels = [];
	const values = [];

	// Convert this form `objectKey` of the object key in to this `object key`
	Object.keys(info).forEach((el) => {
		if (el.match(/[A-Z\s]+/)) {
			const uppercaseLetter = Array.from(el).find((i) =>
				i.match(/[A-Z]+/)
			);
			const newElement = el.replace(
				uppercaseLetter,
				` ${uppercaseLetter.toLowerCase()}`
			);

			labels.push(newElement);
		} else {
			labels.push(el);
		}
	});

	// Push the object values into the values array
	Object.values(info).forEach((el) => values.push(el));

	// Render the card info items
	const renderItems = labels.map((label, key) => (
		<SuiBox key={label} display="flex" py={1} pr={2}>
			<SuiTypography
				variant="button"
				fontWeight="bold"
				textTransform="capitalize"
			>
				{label}: &nbsp;
			</SuiTypography>
			<SuiTypography variant="button" fontWeight="regular" color="text">
				&nbsp;{values[key]}
			</SuiTypography>
		</SuiBox>
	));

	// Render the card social media icons

	return (
		<Card sx={{ height: "100%" }}>
			<SuiBox
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				pt={2}
				px={2}
			>
				<SuiTypography
					variant="h6"
					fontWeight="medium"
					textTransform="capitalize"
				>
					{title}
				</SuiTypography>
				<SuiTypography
					component={Link}
					to={action.route}
					variant="body2"
					color="secondary"
				>
					<Tooltip title={action.tooltip} placement="top">
						<Icon>edit</Icon>
					</Tooltip>
				</SuiTypography>
			</SuiBox>
			<SuiBox p={2}>
				<SuiBox mb={2} lineHeight={1}>
					<SuiTypography
						variant="button"
						color="text"
						fontWeight="regular"
					>
						{description}
					</SuiTypography>
				</SuiBox>
				<SuiBox opacity={0.3}>
					<Divider />
				</SuiBox>
				<SuiBox>
					{renderItems}
					<SuiBox display="flex" py={1} pr={2}>
						<SuiTypography
							variant="button"
							fontWeight="bold"
							textTransform="capitalize"
						>
							social: &nbsp;
						</SuiTypography>
					</SuiBox>
				</SuiBox>
			</SuiBox>
		</Card>
	);
}

export function PlaceholderCard({ icon, title, hasBorder, outlined }) {
	return (
		<Card
			raised
			sx={({ borders: { borderWidth, borderColor } }) => ({
				height: "100%",
				backgroundColor: outlined && "transparent",
				boxShadow: outlined && "none",
				border:
					hasBorder || outlined
						? `${borderWidth[1]} solid ${borderColor}`
						: "none",
			})}
		>
			<SuiBox
				display="flex"
				flexDirection="column"
				justifyContent="center"
				textAlign="center"
				height="100%"
				p={3}
			>
				<SuiBox color="secondary" mb={0.5}>
					<Icon fontSize="default" sx={{ fontWeight: "bold" }}>
						{icon}
					</Icon>
				</SuiBox>
				<SuiTypography variant={title.variant} color="secondary">
					{title.text}
				</SuiTypography>
			</SuiBox>
		</Card>
	);
}
// Setting default values for the props of PlaceholderCard
PlaceholderCard.defaultProps = {
	icon: "add",
	hasBorder: false,
	outlined: false,
};

// Custom styles for ComplexProjectCard
export function ComplexProjectCardOriginal({
	color,
	image,
	title,
	dateTime,
	description,
	members,
	dropdown,
}) {
	const renderMembers = members.map((member, key) => {
		const memberKey = `member-${key}`;

		return (
			<SuiAvatar
				key={memberKey}
				src={member}
				alt="member profile"
				size="xs"
				sx={({ borders: { borderWidth }, palette: { white } }) => ({
					border: `${borderWidth[2]} solid ${white.main}`,
					cursor: "pointer",
					position: "relative",

					"&:not(:first-of-type)": {
						ml: -1.25,
					},

					"&:hover, &:focus": {
						zIndex: "10",
					},
				})}
			/>
		);
	});

	return (
		<Card>
			<SuiBox p={2}>
				<SuiBox display="flex" alignItems="center">
					<SuiAvatar
						src={image}
						alt={title}
						size="xl"
						variant="rounded"
						bgColor={color}
						sx={{ p: 1 }}
					/>
					<SuiBox ml={2} lineHeight={0}>
						<SuiBox mb={1} lineHeight={0}>
							<SuiTypography
								variant="h6"
								textTransform="capitalize"
								fontWeight="medium"
							>
								{title}
							</SuiTypography>
						</SuiBox>
						{members.length > -1 ? (
							<SuiBox display="flex">{renderMembers}</SuiBox>
						) : null}
					</SuiBox>
					{dropdown && (
						<SuiTypography
							color="secondary"
							onClick={dropdown.action}
							sx={{
								ml: "auto",
								alignSelf: "flex-start",
								py: 1.25,
							}}
						>
							<Icon fontSize="default" sx={{ cursor: "pointer" }}>
								more_vert
							</Icon>
						</SuiTypography>
					)}
					{dropdown.menu}
				</SuiBox>
				<SuiBox my={2} lineHeight={1}>
					<SuiTypography
						variant="button"
						fontWeight="regular"
						color="text"
					>
						{description}
					</SuiTypography>
				</SuiBox>
				<Divider />
				<SuiBox
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					{members.length > -1 ? (
						<SuiBox
							display="flex"
							flexDirection="column"
							lineHeight={0}
						>
							<SuiTypography variant="button" fontWeight="medium">
								{members.length}
							</SuiTypography>
							<SuiTypography
								variant="button"
								fontWeight="medium"
								color="secondary"
							>
								Participants
							</SuiTypography>
						</SuiBox>
					) : null}
					{dateTime ? (
						<SuiBox
							display="flex"
							flexDirection="column"
							lineHeight={0}
						>
							<SuiTypography variant="button" fontWeight="medium">
								{dateTime}
							</SuiTypography>
							<SuiTypography
								variant="button"
								fontWeight="medium"
								color="secondary"
							>
								Due date
							</SuiTypography>
						</SuiBox>
					) : null}
				</SuiBox>
			</SuiBox>
		</Card>
	);
}
export function SimpleProjectLinkCard({
	color,
	image,
	title,
	dateTime,
	description,
	members,
	dropdown,
	onClick,
}) {
	return (
		<Card>
			<SuiBox p={2}>
				<SuiBox
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<SuiBox ml={2} lineHeight={0}>
						<SuiBox mb={2} lineHeight={0}>
							<SuiTypography
								justifyContent="center"
								alignItems="center"
								variant="h6"
								textTransform="capitalize"
								fontWeight="medium"
								onClick={onClick}
							>
								{title}
							</SuiTypography>
						</SuiBox>
					</SuiBox>
				</SuiBox>
			</SuiBox>
		</Card>
	);
}
// Custom styles for ComplexProjectCard
export function ComplexProjectCard({
	color,
	image,
	title,
	dateTime,
	description,
	members,
	dropdown,
}) {
	return (
		<Card>
			<SuiBox p={2}>
				<SuiBox display="flex" alignItems="center">
					<SuiBox ml={2} lineHeight={0}>
						<SuiBox mb={1} lineHeight={0}>
							<SuiTypography
								variant="h6"
								textTransform="capitalize"
								fontWeight="medium"
							>
								{title}
							</SuiTypography>
						</SuiBox>
					</SuiBox>
					{dropdown && (
						<SuiTypography
							color="secondary"
							onClick={dropdown.action}
							sx={{
								ml: "auto",
								alignSelf: "flex-start",
								py: 1.25,
							}}
						>
							<Icon
								fontSize="default"
								sx={{ cursor: "pointer" }}
							></Icon>
						</SuiTypography>
					)}
					{dropdown.menu}
				</SuiBox>

				<SuiBox my={2} lineHeight={1}>
					<SuiTypography
						variant="button"
						fontWeight="regular"
						color="text"
					>
						{description}
					</SuiTypography>
				</SuiBox>
				{/* <Divider />
        <SuiBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          {dateTime ? (
            <SuiBox display="flex" flexDirection="column" lineHeight={0}>
              <SuiTypography variant="button" fontWeight="medium">
                {dateTime}
              </SuiTypography>
              <SuiTypography
                variant="button"
                fontWeight="medium"
                color="secondary"
              >
                Due date
              </SuiTypography>
            </SuiBox>
          ) : null}
          {dateTime ? (
            <SuiBox display="flex" flexDirection="column" lineHeight={0}>
              <SuiTypography variant="button" fontWeight="medium">
                {dateTime}
              </SuiTypography>
              <SuiTypography
                variant="button"
                fontWeight="medium"
                color="secondary"
              >
                Due date
              </SuiTypography>
            </SuiBox>
          ) : null}
        </SuiBox> */}
			</SuiBox>
		</Card>
	);
}
export function AutomotiveDetails() {
	return (
		<SuiBox
			position="relative"
			bgColor="secondary"
			py={3}
			px={{ xs: 3, sm: 6 }}
			mt={3}
			borderRadius="xl"
			variant="gradient"
		>
			<SuiBox
				component="img"
				src={wavesWhite}
				alt="pattern-line"
				width="100%"
				position="absolute"
				left="0"
				top="0"
				opacity={0.4}
			/>
			<Grid container alignItems="center" position="relative">
				<Grid item xs={12} lg={3}>
					<SuiBox px={{ xs: 0, md: 1.5 }}>
						<SuiTypography
							variant="h4"
							color="white"
							textTransform="capitalize"
							opacity={0.9}
						>
							since last charge
						</SuiTypography>
						<Divider light />
						<SuiBox display="flex">
							<SuiBox>
								<SuiTypography
									variant="h6"
									color="white"
									textTransform="capitalize"
									opacity={0.7}
								>
									distance
								</SuiTypography>
								<SuiTypography
									variant="h3"
									fontWeight="bold"
									color="white"
								>
									145{" "}
									<SuiTypography
										variant="button"
										color="white"
										verticalAlign="top"
									>
										Km
									</SuiTypography>
								</SuiTypography>
							</SuiBox>
							<SuiBox ml={{ xs: 3, md: 8 }} mb={{ xs: 1, md: 0 }}>
								<SuiTypography
									variant="h6"
									color="white"
									textTransform="capitalize"
									opacity={0.7}
								>
									average energy
								</SuiTypography>
								<SuiTypography
									variant="h3"
									fontWeight="bold"
									color="white"
								>
									300{" "}
									<SuiTypography
										variant="button"
										color="white"
										verticalAlign="top"
									>
										Kw
									</SuiTypography>
								</SuiTypography>
							</SuiBox>
						</SuiBox>
					</SuiBox>
				</Grid>
				<Grid item xs={12} lg={6}>
					<SuiBox textAlign="center">
						<SuiBox
							component="img"
							src={mercedesEQC}
							alt="car image"
							display={{ xs: "none", md: "block" }}
							width="auto"
							mt={{ xs: 0, lg: -16 }}
						/>
						<SuiBox
							display="flex"
							justifyContent={{ xs: "flex-start", md: "center" }}
							alignItems="center"
							mb={1}
						>
							<SuiTypography
								variant="h4"
								color="white"
								textTransform="capitalize"
								opacity={0.7}
							>
								available range
							</SuiTypography>
							<SuiBox ml={1}>
								<SuiTypography
									variant="h2"
									fontWeight="bold"
									color="white"
								>
									70
									<SuiTypography
										variant="button"
										fontWeight="bold"
										color="white"
										verticalAlign="top"
									>
										%
									</SuiTypography>
								</SuiTypography>
							</SuiBox>
						</SuiBox>
					</SuiBox>
				</Grid>
				<Grid item xs={12} lg={3}>
					<SuiBox px={{ xs: 0, md: 1.5 }}>
						<SuiTypography
							variant="h4"
							color="white"
							textTransform="capitalize"
							opacity={0.9}
						>
							nearest charger
						</SuiTypography>
						<Divider light />
						<SuiBox display="flex">
							<SuiBox>
								<SuiTypography variant="h6" color="white">
									Miclan, DW
								</SuiTypography>
								<SuiTypography variant="h6" color="white">
									891 Limarenda road
								</SuiTypography>
							</SuiBox>
							<SuiBox ml={8}>
								<SuiButton variant="outlined" circular iconOnly>
									<Icon>map</Icon>
								</SuiButton>
							</SuiBox>
						</SuiBox>
					</SuiBox>
				</Grid>
			</Grid>
		</SuiBox>
	);
}
export function PageLayout({ background, children }) {
	// const [, dispatch] = useSoftUIController();
	// const { pathname } = useLocation();

	// useEffect(() => {
	//   setLayout(dispatch, "page");
	// }, [pathname]);

	return (
		<SuiBox
			width="100vw"
			height="100%"
			minHeight="100vh"
			bgColor={background}
			sx={{ overflowX: "hidden" }}
		>
			{children}
		</SuiBox>
	);
}

// Setting default values for the props for PageLayout
PageLayout.defaultProps = {
	background: "default",
};

export function BasicLayout({ title, description, image, children }) {
	return (
		<PayLayoutBase>
			{/* <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "https://creative-tim.com/product/soft-ui-dashboard-pro-react",
          label: "buy now",
        }}
        transparent
        light
      /> */}

			<SuiBox
				mt={{ xs: 10, lg: 20 }}
				px={1}
				width="calc(100% - 2rem)"
				mx="auto"
			>
				<Grid container spacing={1} justifyContent="center">
					<Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
						{children}
					</Grid>
				</Grid>
			</SuiBox>
			{/* <Footer /> */}
		</PayLayoutBase>
	);
}

// Setting default values for the props of BasicLayout
BasicLayout.defaultProps = {
	title: "",
	description: "",
};

export function Basic({ children }) {
	const [rememberMe, setRememberMe] = useState(false);

	const handleSetRememberMe = () => setRememberMe(!rememberMe);

	return (
		<BasicLayout
			title="Welcome!"
			description="Use these awesome forms to login or create new account in your project for free."
			image={curved9}
		>
			{children}
			{/* <Card> */}
			{/* <SuiBox p={3} mb={1} textAlign="center">
          <SuiTypography variant="h5" fontWeight="medium">
            Sign in
          </SuiTypography>
        </SuiBox>
        <SuiBox mb={2}><Socials /></SuiBox> */}
			{/* <SuiBox p={3}>
          <SuiBox component="form" role="form">
            <SuiBox mb={2}>
              <SuiInput type="email" placeholder="Email" />
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput type="password" placeholder="Password" />
            </SuiBox>
            <SuiBox display="flex" alignItems="center">
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <SuiTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp;Remember me
              </SuiTypography>
            </SuiBox>
            <SuiBox mt={4} mb={1}>
              <SuiButton variant="gradient" color="info" fullWidth>
                sign in
              </SuiButton>
            </SuiBox>
            <Separator />
            <SuiBox mt={1} mb={3}>
              <SuiButton
                component={Link}
                to="/authentication/sign-up/basic"
                variant="gradient"
                color="dark"
                fullWidth
              >
                sign up
              </SuiButton>
            </SuiBox>
          </SuiBox>
        </SuiBox> */}
			{/* </Card> */}
		</BasicLayout>
	);
}

export const DashboardLayout = ({ children, controller }) => {
	const { miniSidenav } = controller;
	return (
		<SuiBox
			sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
				p: 3,
				position: "relative",
				[breakpoints.up("xl")]: {
					marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
					transition: transitions.create(
						["margin-left", "margin-right"],
						{
							easing: transitions.easing.easeInOut,
							duration: transitions.duration.standard,
						}
					),
				},
			})}
		>
			{children}
		</SuiBox>
	);
};

export const TabsTopOriginal = () => {
	const [tabsOrientation, setTabsOrientation] = useState("horizontal");
	const [tabValue, setTabValue] = useState(0);
	useEffect(() => {
		// A function that sets the orientation state of the tabs.
		function handleTabsOrientation() {
			return window.innerWidth < breakpoints.values.sm
				? setTabsOrientation("vertical")
				: setTabsOrientation("horizontal");
		}

		/** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
		window.addEventListener("resize", handleTabsOrientation);

		// Call the handleTabsOrientation function to set the state with the initial value.
		handleTabsOrientation();

		// Remove event listener on cleanup
		return () =>
			window.removeEventListener("resize", handleTabsOrientation);
	}, [tabsOrientation]);

	const handleSetTabValue = (event, newValue) => setTabValue(newValue);

	return (
		<Grid container>
			<Grid item xs={12} sm={8} lg={4}>
				<AppBar position="static">
					<Tabs
						orientation={tabsOrientation}
						value={tabValue}
						onChange={handleSetTabValue}
					>
						<Tab label="Summary" />
						<Tab label="Form" />
					</Tabs>
				</AppBar>
			</Grid>
		</Grid>
	);
};
export const TabsTop = ({ pageData, setPageData }) => {
	const [tabsOrientation, setTabsOrientation] = useState("horizontal");
	//const [tabValue, setTabValue] = useState(0);
	useEffect(() => {
		// A function that sets the orientation state of the tabs.
		function handleTabsOrientation() {
			return window.innerWidth < breakpoints.values.sm
				? setTabsOrientation("vertical")
				: setTabsOrientation("horizontal");
		}

		/** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
		window.addEventListener("resize", handleTabsOrientation);

		// Call the handleTabsOrientation function to set the state with the initial value.
		handleTabsOrientation();

		// Remove event listener on cleanup
		return () =>
			window.removeEventListener("resize", handleTabsOrientation);
	}, [tabsOrientation]);

	const handleSetTabValue = (event, newValue) =>
		setPageData({ ...pageData, tabValue: newValue });

	return (
		<Grid container>
			<Grid item xs={12} sm={8} lg={4}>
				<AppBar position="static">
					<Tabs
						orientation={tabsOrientation}
						value={pageData.tabValue || 0}
						onChange={handleSetTabValue}
					>
						<Tab label="Summary" />
						<Tab label="Form" />
					</Tabs>
				</AppBar>
			</Grid>
		</Grid>
	);
};
export function BaseLayout({ stickyNavbar, children }) {
	const [tabsOrientation, setTabsOrientation] = useState("horizontal");
	const [tabValue, setTabValue] = useState(0);

	useEffect(() => {
		// A function that sets the orientation state of the tabs.
		function handleTabsOrientation() {
			return window.innerWidth < breakpoints.values.sm
				? setTabsOrientation("vertical")
				: setTabsOrientation("horizontal");
		}

		/** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
		window.addEventListener("resize", handleTabsOrientation);

		// Call the handleTabsOrientation function to set the state with the initial value.
		handleTabsOrientation();

		// Remove event listener on cleanup
		return () =>
			window.removeEventListener("resize", handleTabsOrientation);
	}, [tabsOrientation]);

	const handleSetTabValue = (event, newValue) => setTabValue(newValue);

	return (
		<DashboardLayout>
			{/* <DashboardNavbar absolute={!stickyNavbar} isMini /> */}
			<SuiBox mt={stickyNavbar ? 3 : 10}>
				<Grid container>
					<Grid item xs={12} sm={8} lg={4}>
						<AppBar position="static">
							<Tabs
								orientation={tabsOrientation}
								value={tabValue}
								onChange={handleSetTabValue}
							>
								<Tab label="Messages" />
								<Tab label="Social" />
								<Tab label="Notifications" />
								<Tab label="Backup" />
							</Tabs>
						</AppBar>
					</Grid>
				</Grid>
				{children}
			</SuiBox>
			<Footer />
		</DashboardLayout>
	);
}

// Setting default values for the props of BaseLayout
BaseLayout.defaultProps = {
	stickyNavbar: false,
};

export function MiniStatisticsCard({
	bgColor,
	title,
	count,
	percentage,
	icon,
	direction,
}) {
	return (
		<Card>
			<SuiBox bgColor={bgColor} variant="gradient">
				<SuiBox p={2}>
					<Grid container alignItems="center">
						{direction === "left" ? (
							<Grid item>
								<SuiBox
									variant="gradient"
									bgColor={
										bgColor === "white"
											? icon.color
											: "white"
									}
									color={
										bgColor === "white" ? "white" : "dark"
									}
									width="3rem"
									height="3rem"
									borderRadius="md"
									display="flex"
									justifyContent="center"
									alignItems="center"
									shadow="md"
								>
									{icon}
								</SuiBox>
							</Grid>
						) : null}
						<Grid item xs={8}>
							<SuiBox
								ml={direction === "left" ? 2 : 0}
								lineHeight={1}
							>
								<SuiTypography
									variant="button"
									color={
										bgColor === "white" ? "text" : "white"
									}
									opacity={bgColor === "white" ? 1 : 0.7}
									textTransform="capitalize"
									fontWeight={title.fontWeight}
								>
									{title.text}
								</SuiTypography>
								<SuiTypography
									variant="h5"
									fontWeight="bold"
									color={
										bgColor === "white" ? "dark" : "white"
									}
								>
									{count}{" "}
									<SuiTypography
										variant="button"
										color={percentage.color}
										fontWeight="bold"
									>
										{percentage.text}
									</SuiTypography>
								</SuiTypography>
							</SuiBox>
						</Grid>
						{direction === "right" ? (
							<Grid item xs={4}>
								<SuiBox
									variant="gradient"
									bgColor={
										bgColor === "white"
											? icon.color
											: "white"
									}
									// color={bgColor === "white" ? "white" : "dark"}
									width="3rem"
									height="3rem"
									marginLeft="auto"
									borderRadius="md"
									display="flex"
									justifyContent="center"
									alignItems="center"
									shadow="md"
								>
									{icon}
								</SuiBox>
							</Grid>
						) : null}
					</Grid>
				</SuiBox>
			</SuiBox>
		</Card>
	);
}

MiniStatisticsCard.defaultProps = {
	bgColor: "white",
	title: {
		fontWeight: "medium",
		text: "",
	},
	percentage: {
		color: "success",
		text: "",
	},
	direction: "right",
};
{
	/* <Grid item xs={4} sm={3} md={2} lg={1} sx={{ flex: "0 0 100%" }}>
<SuiBox
  bgColor="info"
  borderRadius="50%"
  width="3.625rem"
  height="3.625rem"
  display="flex"
  justifyContent="center"
  alignItems="center"
  color="white"
  mx="auto"
  variant="gradient"
  sx={{ cursor: "pointer" }}
>
  <Add />
  <Icon fontSize="small">add</Icon>
</SuiBox>
<SuiBox mt={0.75} textAlign="center" lineHeight={1}>
  <SuiTypography variant="button" color="text" fontWeight="regular">
    Add Person
  </SuiTypography>
</SuiBox>
</Grid> */
}

export function Stories({ storiesData }) {
	const { borderWidth } = borders;
	// const storiesData = [
	// 	{
	// 		image: team1,
	// 		name: "Abbie W",
	// 		color: "info",
	// 	},
	// ];

	const renderStories = storiesData.map(({ image, name, color }) => (
		<Grid
			key={name}
			item
			xs={4}
			sm={3}
			md={2}
			lg={1}
			sx={{ flex: "0 0 100%" }}
		>
			<SuiBox
				borderRadius="50%"
				width="3.625rem"
				height="3.625rem"
				display="flex"
				justifyContent="center"
				alignItems="center"
				color="white"
				mx="auto"
				border={`${borderWidth[1]} solid ${colors[color].main}`}
				sx={{ cursor: "pointer" }}
			>
				<SuiAvatar src={image} alt={name} />
			</SuiBox>
			<SuiBox mt={0.75} textAlign="center" lineHeight={1}>
				<SuiTypography
					variant="button"
					color="text"
					fontWeight="regular"
				>
					{name}
				</SuiTypography>
			</SuiBox>
		</Grid>
	));
	// sx={{ overflow: "scroll" }}
	return (
		<Card>
			<SuiBox width="100%" pt={3} pb={2.5} px={3}>
				<Grid container justifyContent="space-between" wrap="nowrap">
					{renderStories}
				</Grid>
			</SuiBox>
		</Card>
	);
}
export function FooterOriginal({ company, links }) {
	const { href, name } = company;
	const { size } = typography;

	const renderLinks = () =>
		links.map((link) => (
			<SuiBox key={link.name} component="li" px={2} lineHeight={1}>
				<Link href={link.href} target="_blank">
					<SuiTypography
						variant="button"
						fontWeight="regular"
						color="text"
					>
						{link.name}
					</SuiTypography>
				</Link>
			</SuiBox>
		));

	return (
		<SuiBox
			width="100%"
			display="flex"
			flexDirection={{ xs: "column", lg: "row" }}
			justifyContent="space-between"
			alignItems="center"
			px={1.5}
		>
			<SuiBox
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexWrap="wrap"
				color="text"
				fontSize={size.sm}
				px={1.5}
			>
				&copy; {new Date().getFullYear()}, made with
				<SuiBox fontSize={size.md} color="text" mb={-0.5} mx={0.25}>
					<Icon color="inherit" fontSize="inherit">
						favorite
					</Icon>
				</SuiBox>
				by
				<Link href={href} target="_blank">
					<SuiTypography variant="button" fontWeight="medium">
						&nbsp;{name}&nbsp;
					</SuiTypography>
				</Link>
				for a better web.
			</SuiBox>
			<SuiBox
				component="ul"
				sx={({ breakpoints }) => ({
					display: "flex",
					flexWrap: "wrap",
					alignItems: "center",
					justifyContent: "center",
					listStyle: "none",
					mt: 3,
					mb: 0,
					p: 0,

					[breakpoints.up("lg")]: {
						mt: 0,
					},
				})}
			>
				{renderLinks()}
			</SuiBox>
		</SuiBox>
	);
}

export function Footer({ links }) {
	// const { href, name } = company;
	// const { size } = typography;

	const renderLinks = () =>
		links.map((link) => (
			<SuiBox key={link.name} component="li" px={2} lineHeight={1}>
				<Link href={link.href} target="_blank">
					<SuiTypography
						variant="button"
						fontWeight="regular"
						color="text"
					>
						{link.name}
					</SuiTypography>
				</Link>
			</SuiBox>
		));

	return (
		<SuiBox
			width="100%"
			display="flex"
			flexDirection={{ xs: "column", lg: "row" }}
			justifyContent="space-between"
			alignItems="center"
			px={1.5}
		>
			<SuiBox
				component="ul"
				sx={({ breakpoints }) => ({
					display: "flex",
					flexWrap: "wrap",
					alignItems: "center",
					justifyContent: "center",
					listStyle: "none",
					mt: 3,
					mb: 0,
					p: 0,

					[breakpoints.up("lg")]: {
						mt: 0,
					},
				})}
			>
				{renderLinks()}
			</SuiBox>
		</SuiBox>
	);
}

// Setting default values for the props of Footer
Footer.defaultProps = {
	company: { href: "https://www.creative-tim.com/", name: "Creative Tim" },
	links: [
		{ href: "https://www.creative-tim.com/", name: "Creative Tim" },
		{ href: "https://www.creative-tim.com/presentation", name: "About Us" },
		{ href: "https://www.creative-tim.com/blog", name: "Blog" },
		{ href: "https://www.creative-tim.com/license", name: "License" },
	],
};

function PagesHeaderCell({ children }) {
	const { light } = colors;
	const { size, fontWeightBold } = typography;
	const { borderWidth } = borders;

	return (
		<SuiBox
			component="th"
			width="100%"
			textAlign="left"
			borderBottom={`${borderWidth[1]} solid ${light.main}`}
			py={1.5}
			pl={1}
			pr={3}
		>
			<SuiBox
				width="max-content"
				textAlign="left"
				fontSize={size.xxs}
				fontWeight={fontWeightBold}
				color="secondary"
				opacity={0.7}
				sx={{ textTransform: "uppercase" }}
			>
				{children}
			</SuiBox>
		</SuiBox>
	);
}

function PagesBodyCell({ rows, noBorder }) {
	const { light } = colors;
	const { borderWidth } = borders;
	const renderRows = rows.map((row) => (
		<SuiBox
			key={row}
			component="td"
			width="100%"
			textAlign="left"
			borderBottom={
				noBorder ? "none" : `${borderWidth[1]} solid ${light.main}`
			}
			p={1}
		>
			<SuiTypography
				display="block"
				variant="button"
				fontWeight="medium"
				color="text"
				sx={{ width: "max-content" }}
			>
				{row}
			</SuiTypography>
		</SuiBox>
	));

	return <TableRow>{renderRows}</TableRow>;
}

// Setting default values for the props for PagesBodyCell
PagesBodyCell.defaultProps = {
	noBorder: false,
};
function PagesBodyCellAdd({ noBorder, onClick }) {
	const { light } = colors;
	const { borderWidth } = borders;

	return (
		<TableRow>
			<SuiBox
				component="td"
				width="100%"
				textAlign="left"
				borderBottom={
					noBorder ? "none" : `${borderWidth[1]} solid ${light.main}`
				}
				p={1}
				onClick={onClick}
			>
				<SuiTypography
					display="block"
					variant="button"
					fontWeight="medium"
					color="text"
					sx={{ width: "max-content" }}
				>
					<Add />
				</SuiTypography>
			</SuiBox>
		</TableRow>
	);
}
// Setting default values for the props for PagesBodyCell
PagesBodyCellAdd.defaultProps = {
	noBorder: false,
};

function PagesBodyCellInput({ noBorder, onClick, onChange, ref }) {
	const { light } = colors;
	const { borderWidth } = borders;

	return (
		<TableRow>
			<SuiBox
				component="td"
				width="100%"
				textAlign="left"
				borderBottom={
					noBorder ? "none" : `${borderWidth[1]} solid ${light.main}`
				}
				p={1}
			>
				<SuiTypography
					display="block"
					variant="button"
					fontWeight="medium"
					color="text"
					sx={{ width: "max-content" }}
				>
					<SuiInput onChange={onChange} />
					<Add onClick={onClick} />
				</SuiTypography>
			</SuiBox>
		</TableRow>
	);
}

// Setting default values for the props for PagesBodyCell
PagesBodyCellInput.defaultProps = {
	noBorder: false,
};
function PagesBodyCellInputForm({ noBorder, onChange, ref }) {
	const { light } = colors;
	const { borderWidth } = borders;

	return (
		<TableRow>
			<SuiBox
				component="td"
				width="100%"
				textAlign="left"
				borderBottom={
					noBorder ? "none" : `${borderWidth[1]} solid ${light.main}`
				}
				p={1}
			>
				<SuiTypography
					display="block"
					variant="button"
					fontWeight="medium"
					color="text"
					sx={{ width: "max-content" }}
				>
					<SuiInput onChange={onChange} />
				</SuiTypography>
			</SuiBox>
		</TableRow>
	);
}
PagesBodyCellInputForm.defaultProps = {
	noBorder: false,
};
function PagesBodyCellAddInput({ onSubmit }) {
	const [inputData, setInputData] = useState({
		showInput: false,
		textValue: "",
	});
	const textInput = useRef(null); // undefined; //React.createRef(); //
	const onClickShowHide = (e) => {
		e.preventDefault();
		setInputData({ ...inputData, showInput: !inputData.showInput });
	};

	const onSave = (e) => {
		const textValue = inputData.textValue; //e.target.value;
		onSubmit(textValue);
		onClickShowHide(e);
		//onSubmit()
		//e.preventDefault();
		//setInputData({ ...inputData, showInput: !inputData.showInput });
	};
	const onTextChange = (e) => {
		const textValue = e.target.value;
		setInputData({ ...inputData, textValue });
	};

	return (
		<Fragment>
			{inputData.showInput ? (
				<PagesBodyCellInput
					onChange={onTextChange}
					onClick={onSave}
					ref={textInput}
				/>
			) : (
				<PagesBodyCellAdd onClick={onClickShowHide} />
			)}
		</Fragment>
	);
}
function PagesBodyCellAddInputForm({ onSubmit, headers, noBorder }) {
	const { borderWidth } = borders;

	const [inputData, setInputData] = useState({
		showInput: false,
		textValue: _.map(headers, (header) => {
			return "";
		}),
	});
	const onClickShowHide = (e) => {
		e.preventDefault();
		setInputData({ ...inputData, showInput: !inputData.showInput });
	};

	//get all the textValues
	const onSave = (e) => {
		const textValue = inputData.textValue; //e.target.value;
		onSubmit(textValue);
		onClickShowHide(e);
	};

	const renderRows = (
		<TableRow>
			{headers.map((header, index) => {
				const onTextChange = (e) => {
					const textValue = e.target.value;
					const currentTextValues = [...inputData["textValue"]];
					currentTextValues[index] = textValue;
					setInputData({
						...inputData,
						textValue: currentTextValues,
					});
				};
				return (
					<SuiBox
						key={index}
						component="td"
						width="100%"
						textAlign="left"
						// borderBottom={
						// 	noBorder
						// 		? "none"
						// 		: `${borderWidth[1]} solid ${light.main}`
						// }
						p={1}
					>
						<SuiTypography
							display="block"
							variant="button"
							fontWeight="medium"
							color="text"
							sx={{ width: "max-content" }}
						>
							<PagesBodyCellInputForm
								onChange={onTextChange}
								// ref={textInput}
							/>
						</SuiTypography>
					</SuiBox>
				);
			})}
		</TableRow>
	);

	return (
		<Fragment>
			{inputData.showInput ? (
				<Fragment>
					{renderRows}

					<Add onClick={onSave} />
				</Fragment>
			) : (
				<PagesBodyCellAdd onClick={onClickShowHide} />
			)}
		</Fragment>
	);
}

export function SuiTableAdd({ headers, rows, title, onSubmit }) {
	const PageHeaders = (
		<Fragment>
			{headers.map((header, index) => {
				return <PagesHeaderCell key={index}>{header}</PagesHeaderCell>;
			})}
		</Fragment>
	);

	const PageRows = (
		<Fragment>
			{rows.map((row, index) => {
				return <PagesBodyCell key={index} rows={row} />;
			})}
		</Fragment>
	);
	return (
		<Card>
			<SuiBox
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				pt={2}
				px={2}
			>
				<SuiTypography variant="h6">{title}</SuiTypography>
				<Tooltip
					title="Data is based from sessions and is 100% accurate"
					placement="left"
				>
					<SuiButton
						variant="outlined"
						color="white"
						size="small"
						circular
						iconOnly
					>
						<Icon sx={{ fontWeight: "bold" }}>done</Icon>
					</SuiButton>
				</Tooltip>
			</SuiBox>
			<SuiBox py={1} px={2}>
				<TableContainer
					sx={{ boxShadow: "none" }}
					style={{ maxHeight: 300 }}
				>
					<Table stickyHeader>
						<SuiBox component="thead">
							<TableRow>{PageHeaders}</TableRow>
						</SuiBox>
						<TableBody>
							{PageRows}
							<PagesBodyCellAddInput onSubmit={onSubmit} />
						</TableBody>
					</Table>
				</TableContainer>
			</SuiBox>
		</Card>
	);
}
export function SuiTableAddForm({ headers, rows, title, onSubmit }) {
	const PageHeaders = (
		<Fragment>
			{headers.map((header, index) => {
				return <PagesHeaderCell key={index}>{header}</PagesHeaderCell>;
			})}
		</Fragment>
	);

	const PageRows = (
		<Fragment>
			{rows.map((row, index) => {
				return <PagesBodyCell key={index} rows={row} />;
			})}
		</Fragment>
	);
	return (
		<Fragment>
			<SuiBox
				display="flex"
				justifyContent="space-between"
				alignItems="center"
			>
				<SuiTypographyFormTitle text={title} />
				<Tooltip
					title="Data is based from sessions and is 100% accurate"
					placement="left"
				>
					<SuiButton
						variant="outlined"
						color="white"
						size="small"
						circular
						iconOnly
					>
						<Icon sx={{ fontWeight: "bold" }}>done</Icon>
					</SuiButton>
				</Tooltip>
			</SuiBox>
			<SuiBox py={1}>
				<TableContainer sx={{ boxShadow: "none" }}>
					<Table>
						<SuiBox component="thead">
							<TableRow>{PageHeaders}</TableRow>
						</SuiBox>
						<TableBody>
							{PageRows}
							<PagesBodyCellAddInputForm
								onSubmit={onSubmit}
								headers={headers}
							/>
						</TableBody>
					</Table>
				</TableContainer>
			</SuiBox>
		</Fragment>
	);
}

export function SuiTableBase({ headers, rows }) {
	const PageHeaders = (
		<Fragment>
			{headers.map((header, index) => {
				return <PagesHeaderCell key={index}>{header}</PagesHeaderCell>;
			})}
		</Fragment>
	);

	const PageRows = (
		<Fragment>
			{rows.map((row, index) => {
				return <PagesBodyCell key={index} rows={row} />;
			})}
		</Fragment>
	);
	return (
		<TableContainer sx={{ boxShadow: "none" }}>
			<Table>
				<SuiBox component="thead">
					<TableRow>{PageHeaders}</TableRow>
				</SuiBox>
				<TableBody>{PageRows}</TableBody>
			</Table>
		</TableContainer>
	);
}

export function SuiTableNoCard({ headers, rows, title }) {
	const PageHeaders = (
		<Fragment>
			{headers.map((header, index) => {
				return <PagesHeaderCell key={index}>{header}</PagesHeaderCell>;
			})}
		</Fragment>
	);

	const PageRows = (
		<Fragment>
			{rows.map((row, index) => {
				return <PagesBodyCell key={index} rows={row} />;
			})}
		</Fragment>
	);
	return (
		<Fragment>
			<SuiBox
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				pt={2}
				px={2}
			>
				<SuiTypography variant="h6">{title}</SuiTypography>
				<Tooltip
					title="Data is based from sessions and is 100% accurate"
					placement="left"
				>
					<SuiButton
						variant="outlined"
						color="white"
						size="small"
						circular
						iconOnly
					>
						<Icon sx={{ fontWeight: "bold" }}>done</Icon>
					</SuiButton>
				</Tooltip>
			</SuiBox>
			<SuiBox py={1} px={2}>
				<TableContainer sx={{ boxShadow: "none" }}>
					<Table>
						{/* <SuiBox component="thead">
              <TableRow>{PageHeaders}</TableRow>
            </SuiBox> */}
						<TableBody>{PageRows}</TableBody>
					</Table>
				</TableContainer>
			</SuiBox>
		</Fragment>
	);
}
export function SuiTable({ headers, rows, title, icon }) {
	const PageHeaders = (
		<Fragment>
			{headers.map((header, index) => {
				return <PagesHeaderCell key={index}>{header}</PagesHeaderCell>;
			})}
		</Fragment>
	);

	const PageRows = (
		<Fragment>
			{rows.map((row, index) => {
				return <PagesBodyCell key={index} rows={row} />;
			})}
		</Fragment>
	);
	return (
		<Card>
			<SuiBox
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				pt={2}
				px={2}
			>
				<SuiTypography variant="h6">{title}</SuiTypography>
				<Tooltip
					title="Data is based from sessions and is 100% accurate"
					placement="left"
				>
					<SuiButton
						variant="outlined"
						color="white"
						size="small"
						circular
						iconOnly
					>
						<IconFromName name={icon || ""} />
						{/* <Icon sx={{ fontWeight: "bold" }}>done</Icon> */}
					</SuiButton>
				</Tooltip>
			</SuiBox>
			<SuiBox py={1} px={2}>
				<TableContainer sx={{ boxShadow: "none" }}>
					<Table>
						<SuiBox component="thead">
							<TableRow>{PageHeaders}</TableRow>
						</SuiBox>
						<TableBody>{PageRows}</TableBody>
					</Table>
				</TableContainer>
			</SuiBox>
		</Card>
	);
}
export function SuiTableClick({ headers, rows, title, icon, iconClick }) {
	const PageHeaders = (
		<Fragment>
			{headers.map((header, index) => {
				return <PagesHeaderCell key={index}>{header}</PagesHeaderCell>;
			})}
		</Fragment>
	);

	const PageRows = (
		<Fragment>
			{rows.map((row, index) => {
				return <PagesBodyCell key={index} rows={row} />;
			})}
		</Fragment>
	);
	return (
		<Card>
			<SuiBox
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				pt={2}
				px={2}
			>
				<SuiTypography variant="h6">{title}</SuiTypography>
				<Tooltip
					title="Data is based from sessions and is 100% accurate"
					placement="left"
				>
					<SuiButton
						variant="outlined"
						color="black"
						size="small"
						circular
						iconOnly
						onClick={iconClick}
					>
						<IconFromName name={icon || ""} />
						{/* <Icon sx={{ fontWeight: "bold" }}>done</Icon> */}
					</SuiButton>
				</Tooltip>
			</SuiBox>
			<SuiBox py={1} px={2}>
				<TableContainer sx={{ boxShadow: "none", maxHeight: 300 }}>
					<Table>
						<SuiBox component="thead">
							<TableRow>{PageHeaders}</TableRow>
						</SuiBox>
						<TableBody>{PageRows}</TableBody>
					</Table>
				</TableContainer>
			</SuiBox>
		</Card>
	);
}

export function Pages() {
	return (
		<Card>
			<SuiBox
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				pt={2}
				px={2}
			>
				<SuiTypography variant="h6">Pages</SuiTypography>
				<Tooltip
					title="Data is based from sessions and is 100% accurate"
					placement="left"
				>
					<SuiButton
						variant="outlined"
						color="success"
						size="small"
						circular
						iconOnly
					>
						<Icon sx={{ fontWeight: "bold" }}>done</Icon>
					</SuiButton>
				</Tooltip>
			</SuiBox>
			<SuiBox py={1} px={2}>
				<TableContainer sx={{ boxShadow: "none" }}>
					<Table>
						<SuiBox component="thead">
							<TableRow>
								<PagesHeaderCell>page</PagesHeaderCell>
								<PagesHeaderCell>pages view</PagesHeaderCell>
								<PagesHeaderCell>avg. time</PagesHeaderCell>
								<PagesHeaderCell>bounce rate</PagesHeaderCell>
							</TableRow>
						</SuiBox>
						<TableBody>
							<PagesBodyCell
								rows={["1. /bits", 345, "00:17:07", "40.91%"]}
							/>
							<PagesBodyCell
								rows={[
									"2. /pages/argon-dashboard",
									520,
									"00:23:13",
									"31.14%",
								]}
							/>
							<PagesBodyCell
								rows={[
									"3. /pages/soft-ui-dashboard",
									122,
									"00:3:10",
									"54.10%",
								]}
							/>
							<PagesBodyCell
								rows={[
									"4. /bootstrap-themes",
									"1,900",
									"00:30:42",
									"20.93%",
								]}
							/>
							<PagesBodyCell
								rows={[
									"5. /react-themes",
									"1,442",
									"00:31:50",
									"34.98%",
								]}
							/>
							<PagesBodyCell
								rows={[
									"6. /product/argon-dashboard-angular",
									"201",
									"00:12:42",
									"21.4%",
								]}
							/>
							<PagesBodyCell
								rows={[
									"7. /product/material-dashboard-pro",
									"2,115",
									"00:50:11",
									"34.98%",
								]}
								noBorder
							/>
						</TableBody>
					</Table>
				</TableContainer>
			</SuiBox>
		</Card>
	);
}

function DataTableHeadCell({ width, children, sorted, align, ...rest }) {
	const { light } = colors;
	const { size, fontWeightBold } = typography;
	const { borderWidth } = borders;

	return (
		<SuiBox
			component="th"
			width={width}
			borderBottom={`${borderWidth[1]} solid ${light.main}`}
			py={1.5}
			px={3}
		>
			<SuiBox
				{...rest}
				position="relative"
				textAlign={align}
				fontSize={size.xxs}
				fontWeight={fontWeightBold}
				color="secondary"
				opacity={0.7}
				className={`text-uppercase ${
					sorted && "cursor-pointer user-select-none"
				}`}
			>
				{children}
				{sorted && (
					<SuiBox
						fontSize={size.lg}
						position="absolute"
						top={0}
						right={align !== "right" ? "16px" : 0}
						left={align === "right" ? "-5px" : "unset"}
					>
						<SuiBox
							position="absolute"
							top={-6}
							color={sorted === "asce" ? "text" : "secondary"}
							opacity={sorted === "asce" ? 1 : 0.5}
						>
							<ArrowDropUpIcon></ArrowDropUpIcon>
						</SuiBox>
						<SuiBox
							position="absolute"
							top={0}
							color={sorted === "desc" ? "text" : "secondary"}
							opacity={sorted === "desc" ? 1 : 0.5}
						>
							<ArrowDropDownIcon></ArrowDropDownIcon>
						</SuiBox>
					</SuiBox>
				)}
			</SuiBox>
		</SuiBox>
	);
}

function DataTableBodyCell({ noBorder, align, children }) {
	const { light } = colors;
	const { size } = typography;
	const { borderWidth } = borders;

	return (
		<SuiBox
			component="td"
			textAlign={align}
			fontSize={size.sm}
			borderBottom={
				noBorder ? "none" : `${borderWidth[1]} solid ${light.main}`
			}
			py={1.5}
			px={3}
		>
			<SuiBox
				display="inline-block"
				width="max-content"
				color="text"
				sx={{ verticalAlign: "middle" }}
			>
				{children}
			</SuiBox>
		</SuiBox>
	);
}

function DataTable({
	entriesPerPage,
	canSearch,
	showTotalEntries,
	table,
	pagination,
	isSorted,
	noEndBorder,
}) {
	console.log({ table });
	const defaultValue = entriesPerPage.defaultValue
		? entriesPerPage.defaultValue
		: 10;
	const entries = entriesPerPage.entries
		? entriesPerPage.entries
		: [5, 10, 15, 20, 25];
	console.log({ entries, defaultValue });
	const columns = useMemo(() => table.columns, [table]);
	const data = useMemo(() => table.rows, [table]);
	console.log({ data, columns, entries, defaultValue });
	const tableInstance = useTable(
		{ columns, data, initialState: { pageIndex: 0 } },
		useGlobalFilter,
		useSortBy,
		usePagination
	);
	console.log({ tableInstance });

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		rows,
		page,
		pageOptions,
		canPreviousPage,
		canNextPage,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		setGlobalFilter,
		state: { pageIndex, pageSize, globalFilter },
	} = tableInstance;

	// Set the default value for the entries per page when component mounts
	useEffect(() => setPageSize(defaultValue || 10), [defaultValue]);

	// Set the entries per page value based on the select value
	const setEntriesPerPage = ({ value }) => setPageSize(value);

	// Render the paginations
	// const renderPagination = pageOptions.map((option) => (
	//   <SuiPagination
	//     item
	//     key={option}
	//     onClick={() => gotoPage(Number(option))}
	//     active={pageIndex === option}
	//   >
	//     {option + 1}
	//   </SuiPagination>
	// ));

	// Handler for the input to set the pagination index
	const handleInputPagination = ({ target: { value } }) =>
		value > pageOptions.length || value < 0
			? gotoPage(0)
			: gotoPage(Number(value));

	// Customized page options starting from 1
	// const customizedPageOptions = pageOptions.map((option) => option + 1);

	// Setting value for the pagination input
	// const handleInputPaginationValue = ({ target: value }) => gotoPage(Number(value.value - 1));

	// Search input value state
	const [search, setSearch] = useState(globalFilter);

	// Search input state handle
	const onSearchChange = useAsyncDebounce((value) => {
		setGlobalFilter(value || undefined);
	}, 100);

	// A function that sets the sorted value for the table
	const setSortedValue = (column) => {
		let sortedValue;

		if (isSorted && column.isSorted) {
			sortedValue = column.isSortedDesc ? "desc" : "asce";
		} else if (isSorted) {
			sortedValue = "none";
		} else {
			sortedValue = false;
		}

		return sortedValue;
	};

	// Setting the entries starting point
	const entriesStart =
		pageIndex === 0 ? pageIndex + 1 : pageIndex * pageSize + 1;

	// Setting the entries ending point
	let entriesEnd;

	if (pageIndex === 0) {
		entriesEnd = pageSize;
	} else if (pageIndex === pageOptions.length - 1) {
		entriesEnd = rows.length;
	} else {
		entriesEnd = pageSize * (pageIndex + 1);
	}

	return (
		<TableContainer sx={{ boxShadow: "none" }}>
			{entriesPerPage || canSearch ? (
				<SuiBox
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					p={3}
				>
					{entriesPerPage && (
						<SuiBox display="flex" alignItems="center">
							<SuiSelect
								defaultValue={{
									value: defaultValue,
									label: defaultValue,
								}}
								options={entries.map((entry) => ({
									value: entry,
									label: entry,
								}))}
								onChange={setEntriesPerPage}
								size="small"
							/>
							<SuiTypography variant="caption" color="secondary">
								&nbsp;&nbsp;entries per page
							</SuiTypography>
						</SuiBox>
					)}
					{canSearch && (
						<SuiBox width="12rem" ml="auto">
							<SuiInput
								controller={controller}
								placeholder="Search..."
								value={search}
								onChange={({ currentTarget }) => {
									setSearch(search);
									onSearchChange(currentTarget.value);
								}}
							/>
						</SuiBox>
					)}
				</SuiBox>
			) : null}
			<Table {...getTableProps()}>
				<SuiBox component="thead">
					{headerGroups.map((headerGroup) => (
						<TableRow {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<DataTableHeadCell
									{...column.getHeaderProps(
										isSorted &&
											column.getSortByToggleProps()
									)}
									width={column.width ? column.width : "auto"}
									align={column.align ? column.align : "left"}
									sorted={setSortedValue(column)}
								>
									{column.render("Header")}
								</DataTableHeadCell>
							))}
						</TableRow>
					))}
				</SuiBox>
				<TableBody {...getTableBodyProps()}>
					{page.map((row, key) => {
						prepareRow(row);
						return (
							<TableRow {...row.getRowProps()}>
								{row.cells.map((cell) => (
									<DataTableBodyCell
										noBorder={
											noEndBorder &&
											rows.length - 1 === key
										}
										align={
											cell.column.align
												? cell.column.align
												: "left"
										}
										{...cell.getCellProps()}
									>
										{cell.render("Cell")}
									</DataTableBodyCell>
								))}
							</TableRow>
						);
					})}
				</TableBody>
			</Table>

			<SuiBox
				display="flex"
				flexDirection={{ xs: "column", sm: "row" }}
				justifyContent="space-between"
				alignItems={{ xs: "flex-start", sm: "center" }}
				p={!showTotalEntries && pageOptions.length === 1 ? 0 : 3}
			>
				{showTotalEntries && (
					<SuiBox mb={{ xs: 3, sm: 0 }}>
						<SuiTypography
							variant="button"
							color="secondary"
							fontWeight="regular"
						>
							Showing {entriesStart} to {entriesEnd} of{" "}
							{rows.length} entries
						</SuiTypography>
					</SuiBox>
				)}
				{/* {pageOptions.length > 1 && (
          <SuiPagination
            variant={pagination.variant ? pagination.variant : "gradient"}
            color={pagination.color ? pagination.color : "info"}
          >
            {canPreviousPage && (
              <SuiPagination item onClick={() => previousPage()}>
                <Icon sx={{ fontWeight: "bold" }}>chevron_left</Icon>
              </SuiPagination>
            )}
            {renderPagination.length > 6 ? (
              <SuiBox width="5rem" mx={1}>
                <SuiInput
                  inputProps={{ type: "number", min: 1, max: customizedPageOptions.length }}
                  value={customizedPageOptions[pageIndex]}
                  onChange={(handleInputPagination, handleInputPaginationValue)}
                />
              </SuiBox>
            ) : (
              renderPagination
            )}
            {canNextPage && (
              <SuiPagination item onClick={() => nextPage()}>
                <Icon sx={{ fontWeight: "bold" }}>chevron_right</Icon>
              </SuiPagination>
            )}
          </SuiPagination>
        )} */}
			</SuiBox>
		</TableContainer>
	);
}
const dataTableData = {
	columns: [
		{ Header: "name", accessor: "name", width: "20%" },
		{ Header: "position", accessor: "position", width: "25%" },
		{ Header: "office", accessor: "office" },
		{ Header: "age", accessor: "age", width: "7%" },
		{ Header: "start date", accessor: "startDate" },
		{ Header: "salary", accessor: "salary" },
	],

	rows: [
		{
			name: "Hanny Baniard",
			position: "Data Coordiator",
			office: "Baorixile",
			age: 42,
			startDate: "4/11/2021",
			salary: "$474,978",
		},
	],
};
const Dashboard = () => {
	const { values } = breakpoints;
	const { size } = typography;
	return (
		<Fragment>
			<DashboardLayout>
				<SuiBox pt={3}>
					<SuiBox mb={3}>
						<AutomotiveDetails />
					</SuiBox>
				</SuiBox>

				<SuiBox mb={3}>
					<Grid container spacing={3}>
						<Grid item xs={12} lg={4}>
							<Grid item xs={12}>
								<SuiBox mb={3}>
									<EventCard
										id="902-128-281"
										image={logoSlack}
										title="slack meet"
										dateTime="11:00 AM"
										description="You have an upcoming meet for Marketing Planning"
										action={{
											type: "internal",
											route: "/",
											color: "success",
											label: "join",
										}}
									/>
								</SuiBox>
							</Grid>
						</Grid>
					</Grid>
				</SuiBox>

				<SuiBox mt={5} mb={3}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={6} xl={4}>
							<ProfileInfoCard
								title="profile information"
								description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
								info={{
									fullName: "Alec M. Thompson",
									mobile: "(44) 123 1234 123",
									email: "alecthompson@mail.com",
									location: "USA",
								}}
								action={{ route: "", tooltip: "Edit Profile" }}
							/>
						</Grid>
					</Grid>
				</SuiBox>

				<SuiBox pt={6} pb={3}>
					<SuiBox mb={3}>
						{/* <Card>
            <SuiBox p={3} lineHeight={1}>
              <SuiTypography variant="h5" fontWeight="medium">
                Datatable Simple
              </SuiTypography>
              <SuiTypography variant="button" fontWeight="regular" color="text">
                A lightweight, extendable, dependency-free javascript HTML table plugin.
              </SuiTypography>
            </SuiBox>
            <DataTable table={dataTableData} />
          </Card> */}
					</SuiBox>
					<Card>
						<SuiBox p={3} lineHeight={1}>
							<SuiTypography variant="h5" fontWeight="medium">
								Datatable Search
							</SuiTypography>
							<SuiTypography
								variant="button"
								fontWeight="regular"
								color="text"
							>
								A lightweight, extendable, dependency-free
								javascript HTML table plugin.
							</SuiTypography>
						</SuiBox>
						{/* <DataTable table={dataTableData} entriesPerPage={{defaultValue:10}} canSearch /> */}
					</Card>
				</SuiBox>

				<SuiBox py={3}>
					<Grid container>
						<Grid item xs={12} lg={7}>
							<SuiBox mb={3} p={1}>
								<SuiTypography
									variant={
										window.innerWidth < values.sm
											? "h3"
											: "h2"
									}
									textTransform="capitalize"
									fontWeight="bold"
								>
									general statistics
								</SuiTypography>
							</SuiBox>
							<Grid container>
								<Grid item xs={12}>
									{/*<Globe*/}
									{/*    display={{ xs: "none", md: "block" }}*/}
									{/*    position="absolute"*/}
									{/*    top="10%"*/}
									{/*    right={0}*/}
									{/*    mt={{ xs: -12, lg: 1 }}*/}
									{/*    mr={{ xs: 0, lg: 10 }}*/}
									{/*    canvasStyle={{ marginTop: "3rem" }}*/}
									{/*/>*/}
								</Grid>
							</Grid>
							<Grid container spacing={3}>
								<Grid item xs={12} sm={5}>
									<SuiBox mb={3}>
										<MiniStatisticsCard
											bgColor="white"
											title={{
												text: "today's money",
												fontWeight: "bold",
											}}
											count="$53,000"
											percentage={{
												color: "success",
												text: "+55%",
											}}
											icon={{
												color: "info",
												component: "paid",
											}}
										/>
									</SuiBox>
									<MiniStatisticsCard
										bgColor="white"
										title={{
											text: "today's users",
											fontWeight: "bold",
										}}
										count="2,300"
										percentage={{
											color: "success",
											text: "+3%",
										}}
										icon={{
											color: "info",
											component: "public",
										}}
									/>
								</Grid>
								<Grid item xs={12} sm={5}>
									<SuiBox mb={3}>
										<MiniStatisticsCard
											bgColor="white"
											title={{
												text: "new clients",
												fontWeight: "bold",
											}}
											count="+3,462"
											percentage={{
												color: "error",
												text: "-2%",
											}}
											icon={{
												color: "info",
												component: "emoji_events",
											}}
										/>
									</SuiBox>
									<SuiBox mb={3}>
										<MiniStatisticsCard
											bgColor="white"
											title={{
												text: "sales",
												fontWeight: "bold",
											}}
											count="$103,430"
											percentage={{
												color: "success",
												text: "+5%",
											}}
											icon={{
												color: "info",
												component: "shopping_cart",
											}}
										/>
									</SuiBox>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</SuiBox>
			</DashboardLayout>
		</Fragment>
	);
};
const ConfiguratorRoot = styled(Drawer)(({ theme, ownerState }) => {
	const { boxShadows, functions, transitions } = theme;
	const { openConfigurator } = ownerState;

	const configuratorWidth = 360;
	const { lg } = boxShadows;
	const { pxToRem } = functions;

	// drawer styles when openConfigurator={true}
	const drawerOpenStyles = () => ({
		width: configuratorWidth,
		left: "initial",
		right: 0,
		transition: transitions.create("right", {
			easing: transitions.easing.sharp,
			duration: transitions.duration.short,
		}),
	});

	// drawer styles when openConfigurator={false}
	const drawerCloseStyles = () => ({
		left: "initial",
		right: pxToRem(-350),
		transition: transitions.create("all", {
			easing: transitions.easing.sharp,
			duration: transitions.duration.short,
		}),
	});

	return {
		"& .MuiDrawer-paper": {
			height: "100vh",
			margin: 0,
			padding: `0 ${pxToRem(10)}`,
			borderRadius: 0,
			boxShadow: lg,
			overflowY: "auto",
			...(openConfigurator ? drawerOpenStyles() : drawerCloseStyles()),
		},
	};
});

export function Configurator({ controller, setController, children }) {
	// const [controller, dispatch] = useSoftUIController();
	const {
		openConfigurator,
		transparentSidenav,
		miniSidenav,
		fixedNavbar,
		sidenavColor,
	} = controller;
	const [disabled, setDisabled] = useState(false);
	const sidenavColors = [
		"primary",
		"dark",
		"info",
		"success",
		"warning",
		"error",
	];

	// Use the useEffect hook to change the button state for the sidenav type based on window size.
	useEffect(() => {
		// A function that sets the disabled state of the buttons for the sidenav type.
		function handleDisabled() {
			return window.innerWidth > 1200
				? setDisabled(false)
				: setDisabled(true);
		}

		// The event listener that's calling the handleDisabled function when resizing the window.
		window.addEventListener("resize", handleDisabled);

		// Call the handleDisabled function to set the state with the initial value.
		handleDisabled();

		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleDisabled);
	}, []);

	const handleCloseConfigurator = () =>
		setController({ ...controller, openConfigurator: false }); //setOpenConfigurator(dispatch, false);
	const handleTransparentSidenav = () =>
		setController({ ...controller, transparentSidenav: false }); //setTransparentSidenav(dispatch, true);
	const handleWhiteSidenav = () =>
		setController({ ...controller, transparentSidenav: false }); //setTransparentSidenav(dispatch, false);
	const handleMiniSidenav = () =>
		setController({ ...controller, transparentSidenav: false }); //setMiniSidenav(dispatch, !miniSidenav);
	const handleFixedNavbar = () =>
		setController({ ...controller, transparentSidenav: false }); //setFixedNavbar(dispatch, !fixedNavbar);

	// sidenav type buttons styles
	const sidenavTypeButtonsStyles = ({
		functions: { pxToRem },
		boxShadows: { buttonBoxShadow },
	}) => ({
		height: pxToRem(42),
		boxShadow: buttonBoxShadow.main,

		"&:hover, &:focus": {
			opacity: 1,
		},
	});

	return (
		<ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
			<SuiBox
				display="flex"
				justifyContent="space-between"
				alignItems="baseline"
				pt={3}
				pb={0.8}
				px={3}
			>
				<SuiBox>
					<SuiTypography variant="h5">Configurator</SuiTypography>
					<SuiTypography variant="body2" color="text">
						Set options.
					</SuiTypography>
				</SuiBox>

				<CloseIcon
					sx={({
						typography: { size, fontWeightBold },
						palette: { dark },
					}) => ({
						fontSize: `${size.md} !important`,
						fontWeight: `${fontWeightBold} !important`,
						stroke: dark.main,
						strokeWidth: "2px",
						cursor: "pointer",
						mt: 2,
					})}
					onClick={handleCloseConfigurator}
				>
					close
				</CloseIcon>
			</SuiBox>

			<Divider />
			{children}
			{/* <SuiBox pt={1.25} pb={3} px={3}>
				<SuiBox>
					<SuiTypography variant="h6">Sidenav Colors</SuiTypography>

					<SuiBox mb={0.5}>
						{sidenavColors.map((color) => (
							<IconButton
								key={color}
								sx={({
									borders: { borderWidth },
									palette: { white, dark },
									transitions,
								}) => ({
									width: "24px",
									height: "24px",
									padding: 0,
									border: `${borderWidth[1]} solid ${white.main}`,
									borderColor:
										sidenavColor === color && dark.main,
									transition: transitions.create(
										"border-color",
										{
											easing: transitions.easing.sharp,
											duration:
												transitions.duration.shorter,
										}
									),
									backgroundImage: ({
										functions: { linearGradient },
										palette: { gradients },
									}) =>
										linearGradient(
											gradients[color].main,
											gradients[color].state
										),

									"&:not(:last-child)": {
										mr: 1,
									},

									"&:hover, &:focus, &:active": {
										borderColor: dark.main,
									},
								})}
								onClick={() => setSidenavColor(dispatch, color)}
							/>
						))}
					</SuiBox>
				</SuiBox>

				<SuiBox mt={3} lineHeight={1}>
					<SuiTypography variant="h6">Sidenav Type</SuiTypography>
					<SuiTypography
						variant="button"
						color="text"
						fontWeight="regular"
					>
						Choose between 2 different sidenav types.
					</SuiTypography>

					<SuiBox
						sx={{
							display: "flex",
							mt: 2,
						}}
					>
						<SuiButton
							color="info"
							variant={
								transparentSidenav ? "gradient" : "outlined"
							}
							onClick={handleTransparentSidenav}
							disabled={disabled}
							fullWidth
							sx={{
								mr: 1,
								...sidenavTypeButtonsStyles,
							}}
						>
							Transparent
						</SuiButton>
						<SuiButton
							color="info"
							variant={
								transparentSidenav ? "outlined" : "gradient"
							}
							onClick={handleWhiteSidenav}
							disabled={disabled}
							fullWidth
							sx={sidenavTypeButtonsStyles}
						>
							White
						</SuiButton>
					</SuiBox>
				</SuiBox>
				<SuiBox mt={3} mb={2} lineHeight={1}>
					<SuiTypography variant="h6">Navbar Fixed</SuiTypography>

					<Switch
						checked={fixedNavbar}
						onChange={handleFixedNavbar}
					/>
				</SuiBox>

				<Divider />

				<SuiBox mt={2} mb={3} lineHeight={1}>
					<SuiTypography variant="h6">Sidenav Mini</SuiTypography>

					<Switch
						checked={miniSidenav}
						onChange={handleMiniSidenav}
					/>
				</SuiBox>

				<Divider />

				<SuiBox mt={3} mb={2}>
					<SuiBox mb={2}>
						<SuiButton
							component={Link}
							href="https://www.creative-tim.com/product/soft-ui-dashboard-pro-react"
							target="_blank"
							rel="noreferrer"
							color="info"
							variant="gradient"
							fullWidth
						>
							buy now
						</SuiButton>
					</SuiBox>
					<SuiBox mb={2}>
						<SuiButton
							component={Link}
							href="https://www.creative-tim.com/product/soft-ui-dashboard-react"
							target="_blank"
							rel="noreferrer"
							color="dark"
							variant="gradient"
							fullWidth
						>
							free download
						</SuiButton>
					</SuiBox>
					<SuiButton
						component={Link}
						href="https://www.creative-tim.com/learning-lab/react/quick-start/soft-ui-dashboard/"
						target="_blank"
						rel="noreferrer"
						color="dark"
						variant="outlined"
						fullWidth
					>
						view documentation
					</SuiButton>
				</SuiBox>
				<SuiBox display="flex" justifyContent="center">
					<GitHubButton
						href="https://github.com/creativetimofficial/ct-soft-ui-dashboard-pro-react"
						data-icon="octicon-star"
						data-size="large"
						data-show-count="true"
						aria-label="Star creativetimofficial/ct-soft-ui-dashboard-pro-react on GitHub"
					>
						Star
					</GitHubButton>
				</SuiBox>
				<SuiBox mt={3} textAlign="center">
					<SuiBox mb={0.5}>
						<SuiTypography variant="h6">
							Thank you for sharing!
						</SuiTypography>
					</SuiBox>

					<SuiBox display="flex" justifyContent="center">
						<SuiBox mr={1.5}>
							<SuiButton
								component={Link}
								href="//twitter.com/intent/tweet?text=Check%20Soft%20UI%20Dashboard%20PRO%20React%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23react%20%mui&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard-pro-react"
								target="_blank"
								rel="noreferrer"
								color="dark"
							>
								<TwitterIcon />
								&nbsp; Tweet
							</SuiButton>
						</SuiBox>
						<SuiButton
							component={Link}
							href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/soft-ui-dashboard-pro-react"
							target="_blank"
							rel="noreferrer"
							color="dark"
						>
							<FacebookIcon />
							&nbsp; Share
						</SuiButton>
					</SuiBox>
				</SuiBox>
			</SuiBox> */}
		</ConfiguratorRoot>
	);
}

export const ConfigurationButton = ({ onClick, icon }) => {
	const configsButton = (
		<SuiBox
			display="flex"
			justifyContent="center"
			alignItems="center"
			width="3.5rem"
			height="3.5rem"
			bgColor="white"
			shadow="sm"
			borderRadius="50%"
			position="fixed"
			right="2rem"
			bottom="2rem"
			zIndex={99}
			color="dark"
			sx={{ cursor: "pointer" }}
			onClick={onClick}
		>
			<IconFromName name={icon || "settings"} />
			{/* <Icon fontSize="default" color="inherit">
				settings
			</Icon> */}
		</SuiBox>
	);
	return <Fragment>{configsButton}</Fragment>;
};

export const NewProjectLayOut = ({ children }) => {
	return (
		<SuiBox mt={3} mb={4}>
			<Grid container spacing={3} justifyContent="center">
				<Grid item xs={12} lg={9}>
					<Card sx={{ overflow: "visible" }}>
						<SuiBox p={2} lineHeight={1}>
							{children}
						</SuiBox>
					</Card>
				</Grid>
			</Grid>
		</SuiBox>
	);
};

const SuiTypographyFormTitle = ({ text }) => {
	return (
		<SuiTypography component="label" variant="caption" fontWeight="bold">
			{text || ""}
		</SuiTypography>
	);
};

const SuiTypographyFormDescription = ({ text }) => {
	return (
		<SuiTypography
			component="label"
			variant="caption"
			fontWeight="regular"
			color="text"
		>
			{text || ""}
		</SuiTypography>
	);
};
export const TextAreaInput = ({
	title,
	description,
	setEditorValue,
	editorValue,
}) => {
	return (
		<SuiBox
			display="flex"
			flexDirection="column"
			justifyContent="flex-end"
			height="100%"
		>
			<SuiBox
				mb={1}
				ml={0.5}
				mt={3}
				lineHeight={0}
				display="inline-block"
			>
				<SuiTypographyFormTitle text={title} />
			</SuiBox>
			{description != null ? (
				<SuiBox
					mb={1.5}
					ml={0.5}
					mt={0.5}
					lineHeight={0}
					display="inline-block"
				>
					<SuiTypographyFormDescription text={description} />
				</SuiBox>
			) : null}

			<SuiEditor value={editorValue} onChange={setEditorValue} />
		</SuiBox>
	);
};
export function NewProject({ controller }) {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [editorValue, setEditorValue] = useState(
		"<p>Hello World!</p><p>Some initial <strong>bold</strong> text</p><br><br>"
	);

	const handleSetStartDate = (newDate) => setStartDate(newDate);
	const handleSetEndDate = (newDate) => setEndDate(newDate);

	return (
		<SuiBox mt={3} mb={4}>
			<Grid container spacing={3} justifyContent="center">
				<Grid item xs={12} lg={9}>
					<Card sx={{ overflow: "visible" }}>
						<SuiBox p={2} lineHeight={1}>
							<SuiTypography variant="h6" fontWeight="medium">
								New Project
							</SuiTypography>
							<SuiTypography
								variant="button"
								fontWeight="regular"
								color="text"
							>
								Create new project
							</SuiTypography>
							<Divider />
							<SuiBox
								display="flex"
								flexDirection="column"
								justifyContent="flex-end"
								height="100%"
							>
								<SuiBox
									mb={1}
									ml={0.5}
									lineHeight={0}
									display="inline-block"
								>
									<SuiTypography
										component="label"
										variant="caption"
										fontWeight="bold"
									>
										Project Name
									</SuiTypography>
								</SuiBox>
								<SuiInput
									controller={controller}
									placeholder="Soft UI Dashboard PRO Material"
								/>
							</SuiBox>
							<SuiBox mt={3} mb={2}>
								<Grid container spacing={3}>
									<Grid item xs={12} md={6}>
										<SuiBox
											mb={1}
											ml={0.5}
											lineHeight={0}
											display="inline-block"
										>
											<SuiTypography
												component="label"
												variant="caption"
												fontWeight="bold"
											>
												Private Project
											</SuiTypography>
										</SuiBox>
										<SuiBox pl={0.5} pb={1.5}>
											<SuiTypography
												component="label"
												variant="caption"
												fontWeight="regular"
												color="text"
											>
												If you are available for hire
												outside of the current
												situation, you can encourage
												others to hire you.
											</SuiTypography>
										</SuiBox>
										<SuiBox ml={0.5} mb={0.25}>
											<Switch />
										</SuiBox>
									</Grid>
								</Grid>
							</SuiBox>
							<SuiBox
								display="flex"
								flexDirection="column"
								justifyContent="flex-end"
								height="100%"
							>
								<SuiBox
									mb={1}
									ml={0.5}
									mt={3}
									lineHeight={0}
									display="inline-block"
								>
									<SuiTypography
										component="label"
										variant="caption"
										fontWeight="bold"
									>
										Project Description
									</SuiTypography>
								</SuiBox>
								<SuiBox
									mb={1.5}
									ml={0.5}
									mt={0.5}
									lineHeight={0}
									display="inline-block"
								>
									<SuiTypography
										component="label"
										variant="caption"
										fontWeight="regular"
										color="text"
									>
										This is how others will learn about the
										project, so make it good!
									</SuiTypography>
								</SuiBox>
								<SuiEditor
									value={editorValue}
									onChange={setEditorValue}
								/>
							</SuiBox>
							<SuiBox
								display="flex"
								flexDirection="column"
								justifyContent="flex-end"
								height="100%"
							>
								<SuiBox
									mb={1}
									ml={0.5}
									mt={3}
									lineHeight={0}
									display="inline-block"
								>
									<SuiTypography
										component="label"
										variant="caption"
										fontWeight="bold"
									>
										Project Tags
									</SuiTypography>
								</SuiBox>
								<SuiSelect
									defaultValue={[
										{
											value: "choice 1",
											label: "Choice 1",
										},
										{
											value: "label two",
											label: "label two",
										},
									]}
									options={[
										{
											value: "choice 1",
											label: "Choice 1",
										},
										{
											value: "choice 2",
											label: "Choice 2",
										},
										{
											value: "choice 3",
											label: "Choice 3",
										},
										{
											value: "choice 4",
											label: "Choice 4",
										},
										{
											value: "label one",
											label: "Label One",
											isDisabled: true,
										},
										{
											value: "label two",
											label: "Tabel Two",
										},
										{
											value: "label three",
											label: "Label Three",
										},
									]}
									isMulti
								/>
							</SuiBox>
							{/* 
							



								<Grid container spacing={3}>
									<Grid item xs={6}>
										<SuiBox
											display="flex"
											flexDirection="column"
											justifyContent="flex-end"
											height="100%"
										>
											<SuiBox
												mb={1}
												ml={0.5}
												mt={3}
												lineHeight={0}
												display="inline-block"
											>
												<SuiTypography
													component="label"
													variant="caption"
													fontWeight="bold"
												>
													Start Date
												</SuiTypography>
											</SuiBox>
											<SuiDatePicker
												value={startDate}
												onChange={handleSetStartDate}
											/>
										</SuiBox>
									</Grid>
									<Grid item xs={6}>
										<SuiBox
											display="flex"
											flexDirection="column"
											justifyContent="flex-end"
											height="100%"
										>
											<SuiBox
												mb={1}
												ml={0.5}
												mt={3}
												lineHeight={0}
												display="inline-block"
											>
												<SuiTypography
													component="label"
													variant="caption"
													fontWeight="bold"
												>
													End Date
												</SuiTypography>
											</SuiBox>
											<SuiDatePicker
												value={endDate}
												onChange={handleSetEndDate}
											/>
										</SuiBox>
									</Grid>
								</Grid>
								<SuiBox>
									<SuiBox
										display="flex"
										flexDirection="column"
										justifyContent="flex-end"
										height="100%"
									>
										<SuiBox
											mb={1}
											ml={0.5}
											mt={3}
											lineHeight={0}
											display="inline-block"
										>
											<SuiTypography
												component="label"
												variant="caption"
												fontWeight="bold"
											>
												Starting Files
											</SuiTypography>
										</SuiBox>
										<SuiDropzone
											options={{ addRemoveLinks: true }}
										/>
									</SuiBox>
								</SuiBox>
								<SuiBox
									display="flex"
									justifyContent="flex-end"
									mt={3}
								>
									<SuiBox mr={1}>
										<SuiButton color="light">
											cancel
										</SuiButton>
									</SuiBox>
									<SuiButton variant="gradient" color="info">
										create project
									</SuiButton>
								</SuiBox> */}
						</SuiBox>
					</Card>
				</Grid>
			</Grid>
		</SuiBox>
	);
}
function menuItem(theme) {
	const { palette, borders, transitions } = theme;

	const { secondary, light } = palette;
	const { borderRadius } = borders;

	return {
		display: "flex",
		alignItems: "center",
		width: "100%",
		color: secondary.main,
		py: 1,
		px: 2,
		borderRadius: borderRadius.md,
		transition: transitions.create("background-color", {
			easing: transitions.easing.easeInOut,
			duration: transitions.duration.standard,
		}),

		"&:not(:last-child)": {
			mb: 1.25,
		},

		"&:hover": {
			backgroundColor: light.main,
		},
	};
}

function menuImage(theme, ownerState) {
	const { functions, palette, borders } = theme;
	const { color } = ownerState;

	const { linearGradient } = functions;
	const { gradients } = palette;
	const { borderRadius } = borders;

	return {
		display: "grid",
		placeItems: "center",
		backgroundImage: gradients[color]
			? linearGradient(gradients[color].main, gradients[color].state)
			: linearGradient(gradients.dark.main, gradients.dark.state),

		"& img": {
			width: "100%",
			borderRadius: borderRadius.lg,
		},
	};
}

const NotificationItem = forwardRef(
	({ color, image, title, date, ...rest }, ref) => (
		<MenuItem {...rest} ref={ref} sx={(theme) => menuItem(theme)}>
			<SuiBox
				width="2.25rem"
				height="2.25rem"
				mt={0.25}
				mr={2}
				mb={0.25}
				borderRadius="lg"
				sx={(theme) => menuImage(theme, { color })}
			>
				{image}
			</SuiBox>
			<SuiBox>
				<SuiTypography
					variant="button"
					textTransform="capitalize"
					fontWeight="regular"
				>
					<strong>{title[0]}</strong> {title[1]}
				</SuiTypography>
				<SuiTypography
					variant="caption"
					color="secondary"
					sx={{
						display: "flex",
						alignItems: "center",
						mt: 0.5,
					}}
				>
					<SuiTypography variant="button" color="secondary">
						<Icon
							sx={{
								lineHeight: 1.2,
								mr: 0.5,
							}}
						>
							watch_later
						</Icon>
					</SuiTypography>
					{date}
				</SuiTypography>
			</SuiBox>
		</MenuItem>
	)
);

// Setting default values for the props of NotificationItem
NotificationItem.defaultProps = {
	color: "dark",
};

function navbar(theme, ownerState) {
	const {
		palette,
		boxShadows,
		functions,
		transitions,
		breakpoints,
		borders,
	} = theme;
	const { transparentNavbar, absolute, light } = ownerState;

	const { dark, white, text, transparent } = palette;
	const { navbarBoxShadow } = boxShadows;
	const { rgba, pxToRem } = functions;
	const { borderRadius } = borders;

	return {
		boxShadow: transparentNavbar || absolute ? "none" : navbarBoxShadow,
		backdropFilter:
			transparentNavbar || absolute
				? "none"
				: `saturate(200%) blur(${pxToRem(30)})`,
		backgroundColor:
			transparentNavbar || absolute
				? `${transparent.main} !important`
				: rgba(white.main, 0.8),

		color: () => {
			let color;

			if (light) {
				color = white.main;
			} else if (transparentNavbar) {
				color = text.main;
			} else {
				color = dark.main;
			}

			return color;
		},
		top: absolute ? 0 : pxToRem(12),
		minHeight: pxToRem(75),
		display: "grid",
		alignItems: "center",
		borderRadius: borderRadius.xl,
		paddingTop: pxToRem(8),
		paddingBottom: pxToRem(8),
		paddingRight: absolute ? pxToRem(8) : 0,
		paddingLeft: absolute ? pxToRem(16) : 0,

		"& > *": {
			transition: transitions.create("all", {
				easing: transitions.easing.easeInOut,
				duration: transitions.duration.standard,
			}),
		},

		"& .MuiToolbar-root": {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",

			[breakpoints.up("sm")]: {
				minHeight: "auto",
				padding: `${pxToRem(4)} ${pxToRem(16)}`,
			},
		},
	};
}

const navbarContainer = ({ breakpoints }) => ({
	flexDirection: "column",
	alignItems: "flex-start",
	justifyContent: "space-between",
	pt: 0.5,
	pb: 0.5,

	[breakpoints.up("md")]: {
		flexDirection: "row",
		alignItems: "center",
		paddingTop: "0",
		paddingBottom: "0",
	},
});

const navbarRow = ({ breakpoints }, { isMini }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	width: "100%",

	[breakpoints.up("md")]: {
		justifyContent: isMini ? "space-between" : "stretch",
		width: isMini ? "100%" : "max-content",
	},

	[breakpoints.up("xl")]: {
		justifyContent: "stretch !important",
		width: "max-content !important",
	},
});

const navbarIconButton = ({ typography: { size }, breakpoints }) => ({
	px: 0.75,

	"& .material-icons, .material-icons-round": {
		fontSize: `${size.md} !important`,
	},

	"& .MuiTypography-root": {
		display: "none",

		[breakpoints.up("sm")]: {
			display: "inline-block",
			lineHeight: 1.2,
			ml: 0.5,
		},
	},
});

const navbarDesktopMenu = ({ breakpoints }) => ({
	display: "none !important",
	cursor: "pointer",

	[breakpoints.up("xl")]: {
		display: "inline-block !important",
	},
});

const navbarMobileMenu = ({ breakpoints }) => ({
	display: "inline-block",
	lineHeight: 0,

	[breakpoints.up("xl")]: {
		display: "none",
	},
});
export function DashboardNavbarOriginal({
	controller,
	absolute,
	light,
	isMini,
}) {
	const [navbarType, setNavbarType] = useState();
	//const [controller, dispatch] = useSoftUIController();
	const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator } =
		controller;
	const [openMenu, setOpenMenu] = useState(false);
	const route = useLocation().pathname.split("/").slice(1);

	useEffect(() => {
		// Setting the navbar type
		if (fixedNavbar) {
			setNavbarType("sticky");
		} else {
			setNavbarType("static");
		}

		// A function that sets the transparent state of the navbar.
		function handleTransparentNavbar() {
			//setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
		}

		/** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
		window.addEventListener("scroll", handleTransparentNavbar);

		// Call the handleTransparentNavbar function to set the state with the initial value.
		handleTransparentNavbar();

		// Remove event listener on cleanup
		return () =>
			window.removeEventListener("scroll", handleTransparentNavbar);
	}, [fixedNavbar]);

	const handleMiniSidenav = () => console.log("Nav"); //setMiniSidenav(dispatch, !miniSidenav);
	const handleConfiguratorOpen = () => console.log("Nav"); //setOpenConfigurator(dispatch, !openConfigurator);
	const handleOpenMenu = (event) => console.log("Nav"); //setOpenMenu(event.currentTarget);
	const handleCloseMenu = () => console.log("Nav"); //setOpenMenu(false);

	// Render the notifications menu
	const renderMenu = () => (
		<Menu
			anchorEl={openMenu}
			anchorReference={null}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "left",
			}}
			open={Boolean(openMenu)}
			onClose={handleCloseMenu}
			sx={{ mt: 2 }}
		>
			<NotificationItem
				image={<img src={"team2"} alt="person" />}
				title={["New message", "from Laur"]}
				date="13 minutes ago"
				onClick={handleCloseMenu}
			/>
		</Menu>
	);

	return (
		<AppBar
			position={absolute ? "absolute" : navbarType}
			color="inherit"
			sx={(theme) =>
				navbar(theme, { transparentNavbar, absolute, light })
			}
		>
			<Toolbar sx={(theme) => navbarContainer(theme)}>
				<SuiBox
					color="inherit"
					mb={{ xs: 1, md: 0 }}
					sx={(theme) => navbarRow(theme, { isMini })}
				>
					{/* <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} light={light} /> */}
					<Icon
						fontSize="medium"
						sx={navbarDesktopMenu}
						onClick={handleMiniSidenav}
					>
						{miniSidenav ? "menu_open" : "menu"}
					</Icon>
				</SuiBox>
				{isMini ? null : (
					<SuiBox sx={(theme) => navbarRow(theme, { isMini })}>
						<SuiBox pr={1}>
							<SuiInput
								placeholder="Type here..."
								icon={{
									component: "search",
									direction: "left",
								}}
							/>
						</SuiBox>
						<SuiBox color={light ? "white" : "inherit"}>
							<Link to="/authentication/sign-in/basic">
								<IconButton sx={navbarIconButton} size="small">
									<Icon
										sx={({ palette: { dark, white } }) => ({
											color: light
												? white.main
												: dark.main,
										})}
									>
										account_circle
									</Icon>
									<SuiTypography
										variant="button"
										fontWeight="medium"
										color={light ? "white" : "dark"}
									>
										Sign in
									</SuiTypography>
								</IconButton>
							</Link>
							<IconButton
								size="small"
								color="inherit"
								sx={navbarMobileMenu}
								onClick={handleMiniSidenav}
							>
								<Icon
									className={
										light ? "text-white" : "text-dark"
									}
								>
									{miniSidenav ? "menu_open" : "menu"}
								</Icon>
							</IconButton>
							<IconButton
								size="small"
								color="inherit"
								sx={navbarIconButton}
								onClick={handleConfiguratorOpen}
							>
								<Icon>settings</Icon>
							</IconButton>
							<IconButton
								size="small"
								color="inherit"
								sx={navbarIconButton}
								aria-controls="notification-menu"
								aria-haspopup="true"
								variant="contained"
								onClick={handleOpenMenu}
							>
								<Icon
									className={
										light ? "text-white" : "text-dark"
									}
								>
									notifications
								</Icon>
							</IconButton>
							{renderMenu()}
						</SuiBox>
					</SuiBox>
				)}
			</Toolbar>
		</AppBar>
	);
}

export function DashboardNavbar({
	controller,
	absolute,
	light,
	isMini,
	onAccountClick,
	setController,
}) {
	const [navbarType, setNavbarType] = useState();
	//const [controller, dispatch] = useSoftUIController();
	const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator } =
		controller;
	const [openMenu, setOpenMenu] = useState(false);
	const route = useLocation().pathname.split("/").slice(1);

	useEffect(() => {
		// Setting the navbar type
		if (fixedNavbar) {
			setNavbarType("sticky");
		} else {
			setNavbarType("static");
		}
		// A function that sets the transparent state of the navbar.
		function handleTransparentNavbar() {
			//setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
		}

		/** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
		window.addEventListener("scroll", handleTransparentNavbar);

		// Call the handleTransparentNavbar function to set the state with the initial value.
		handleTransparentNavbar();

		// Remove event listener on cleanup
		return () =>
			window.removeEventListener("scroll", handleTransparentNavbar);
	}, [fixedNavbar]);

	const handleMiniSidenav = () =>
		setController({ ...controller, miniSidenav: !miniSidenav }); //console.log("Nav"); //setMiniSidenav(dispatch, !miniSidenav);
	const handleConfiguratorOpen = () => console.log("Nav"); //setOpenConfigurator(dispatch, !openConfigurator);
	const handleOpenMenu = (event) => console.log("Nav"); //setOpenMenu(event.currentTarget);
	const handleCloseMenu = () => console.log("Nav"); //setOpenMenu(false);

	// Render the notifications menu
	const renderMenu = () => (
		<Menu
			anchorEl={openMenu}
			anchorReference={null}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "left",
			}}
			open={Boolean(openMenu)}
			onClose={handleCloseMenu}
			sx={{ mt: 2 }}
		>
			<NotificationItem
				image={<img src={"team2"} alt="person" />}
				title={["New message", "from Laur"]}
				date="13 minutes ago"
				onClick={handleCloseMenu}
			/>
		</Menu>
	);

	return (
		<AppBar
			position={absolute ? "absolute" : navbarType}
			color="inherit"
			sx={(theme) =>
				navbar(theme, { transparentNavbar, absolute, light })
			}
		>
			<Toolbar sx={(theme) => navbarContainer(theme)}>
				<SuiBox
					color="inherit"
					mb={{ xs: 1, md: 0 }}
					sx={(theme) => navbarRow(theme, { isMini })}
				>
					{/* <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} light={light} /> */}
					<MenuIcon
						fontSize="medium"
						sx={navbarDesktopMenu}
						onClick={handleMiniSidenav}
					>
						{miniSidenav ? "menu_open" : "menu"}
					</MenuIcon>
				</SuiBox>
				{isMini ? null : (
					<SuiBox sx={(theme) => navbarRow(theme, { isMini })}>
						<SuiBox pr={1}>
							{/* <SuiInput
                placeholder="Type here..."
                icon={{ component: "search", direction: "left" }}
              /> */}
						</SuiBox>
						<SuiBox color={light ? "white" : "inherit"}>
							<Link to="/authentication/sign-in/basic">
								<IconButton
									sx={navbarIconButton}
									size="small"
									onClick={onAccountClick}
								>
									<AccountBoxIcon
										sx={({ palette: { dark, white } }) => ({
											color: light
												? white.main
												: dark.main,
										})}
									>
										account_circle
									</AccountBoxIcon>
									<SuiTypography
										variant="button"
										fontWeight="medium"
										color={light ? "white" : "dark"}
									></SuiTypography>
								</IconButton>
							</Link>
							<IconButton
								size="small"
								color="inherit"
								sx={navbarMobileMenu}
								onClick={handleMiniSidenav}
							>
								<NotificationsIcon
									className={
										light ? "text-white" : "text-dark"
									}
								>
									{miniSidenav ? "menu_open" : "menu"}
								</NotificationsIcon>
							</IconButton>
							<IconButton
								size="small"
								color="inherit"
								sx={navbarIconButton}
								onClick={handleConfiguratorOpen}
							>
								{/* <SettingsIcon>settings</SettingsIcon> */}
							</IconButton>
							<IconButton
								size="small"
								color="inherit"
								sx={navbarIconButton}
								aria-controls="notification-menu"
								aria-haspopup="true"
								variant="contained"
								onClick={handleOpenMenu}
							>
								{/* <NotificationsIcon
                  className={light ? "text-white" : "text-dark"}
                >
                  notifications
                </NotificationsIcon> */}
							</IconButton>
							{renderMenu()}
						</SuiBox>
					</SuiBox>
				)}
			</Toolbar>
		</AppBar>
	);
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
	absolute: false,
	light: false,
	isMini: false,
};

function Breadcrumbs({ icon, title, route, light }) {
	const routes = route.slice(0, -1);

	return (
		<SuiBox mr={{ xs: 0, xl: 8 }}>
			<MuiBreadcrumbs
				sx={{
					"& .MuiBreadcrumbs-separator": {
						color: ({ palette: { white, grey } }) =>
							light ? white.main : grey[600],
					},
				}}
			>
				<Link to="/">
					<SuiTypography
						component="span"
						variant="body2"
						color={light ? "white" : "dark"}
						opacity={light ? 0.8 : 0.5}
						sx={{ lineHeight: 0 }}
					>
						<Icon>{icon}</Icon>
					</SuiTypography>
				</Link>
				{routes.map((el) => (
					<Link to={`/${el}`} key={el}>
						<SuiTypography
							component="span"
							variant="button"
							fontWeight="regular"
							textTransform="capitalize"
							color={light ? "white" : "dark"}
							opacity={light ? 0.8 : 0.5}
							sx={{ lineHeight: 0 }}
						>
							{el}
						</SuiTypography>
					</Link>
				))}
				<SuiTypography
					variant="button"
					fontWeight="regular"
					textTransform="capitalize"
					color={light ? "white" : "dark"}
					sx={{ lineHeight: 0 }}
				>
					{title.replace("-", " ")}
				</SuiTypography>
			</MuiBreadcrumbs>
			<SuiTypography
				fontWeight="bold"
				textTransform="capitalize"
				variant="h6"
				color={light ? "white" : "dark"}
				noWrap
			>
				{title.replace("-", " ")}
			</SuiTypography>
		</SuiBox>
	);
}

// Setting default values for the props of Breadcrumbs
Breadcrumbs.defaultProps = {
	light: false,
};

export function DashboardNavbarAlteryx({
	controller,
	absolute,
	light,
	isMini,
	onAccountClick,
	setController,
	title,
}) {
	const [navbarType, setNavbarType] = useState();
	//const [controller, dispatch] = useSoftUIController();
	const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator } =
		controller;
	const [openMenu, setOpenMenu] = useState(false);
	const route = useLocation().pathname.split("/").slice(1);

	useEffect(() => {
		// Setting the navbar type
		if (fixedNavbar) {
			setNavbarType("sticky");
		} else {
			setNavbarType("static");
		}
		// A function that sets the transparent state of the navbar.
		function handleTransparentNavbar() {
			//setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
		}

		/** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
		window.addEventListener("scroll", handleTransparentNavbar);

		// Call the handleTransparentNavbar function to set the state with the initial value.
		handleTransparentNavbar();

		// Remove event listener on cleanup
		return () =>
			window.removeEventListener("scroll", handleTransparentNavbar);
	}, [fixedNavbar]);

	const handleMiniSidenav = () =>
		setController({ ...controller, miniSidenav: !miniSidenav }); //console.log("Nav"); //setMiniSidenav(dispatch, !miniSidenav);
	const handleConfiguratorOpen = () => console.log("Nav"); //setOpenConfigurator(dispatch, !openConfigurator);
	const handleOpenMenu = (event) => console.log("Nav"); //setOpenMenu(event.currentTarget);
	const handleCloseMenu = () => console.log("Nav"); //setOpenMenu(false);

	// Render the notifications menu
	const renderMenu = () => (
		<Menu
			anchorEl={openMenu}
			anchorReference={null}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "left",
			}}
			open={Boolean(openMenu)}
			onClose={handleCloseMenu}
			sx={{ mt: 2 }}
		>
			<NotificationItem
				image={<img src={"team2"} alt="person" />}
				title={["New message", "from Laur"]}
				date="13 minutes ago"
				onClick={handleCloseMenu}
			/>
		</Menu>
	);

	return (
		<AppBar
			position={absolute ? "absolute" : navbarType}
			color="inherit"
			sx={(theme) =>
				navbar(theme, { transparentNavbar, absolute, light })
			}
		>
			<Toolbar sx={(theme) => navbarContainer(theme)}>
				<SuiBox
					color="inherit"
					mb={{ xs: 1, md: 0 }}
					sx={(theme) => navbarRow(theme, { isMini })}
				>
					{/* <Breadcrumbs
            icon="home"
            title={route[route.length - 1]}
            route={route}
            light={light}
          /> */}
					<MenuIcon
						fontSize="medium"
						sx={navbarDesktopMenu}
						onClick={handleMiniSidenav}
					>
						{miniSidenav ? "menu_open" : "menu"}
					</MenuIcon>
					<SuiBox mr={{ xs: 0, xl: 8 }} pl={2}>
						<SuiTypography
							fontWeight="bold"
							textTransform="capitalize"
							variant="h6"
							color={"dark"}
							noWrap
						>
							{title || ""}
						</SuiTypography>
					</SuiBox>
				</SuiBox>
				{isMini ? null : (
					<SuiBox sx={(theme) => navbarRow(theme, { isMini })}>
						<SuiBox pr={1}>
							<SuiInput
								placeholder="Type here..."
								icon={{
									component: "search",
									direction: "left",
								}}
							/>
						</SuiBox>
						<SuiBox color={light ? "white" : "inherit"}>
							<Link to="/authentication/sign-in/basic">
								<IconButton
									sx={navbarIconButton}
									size="small"
									onClick={onAccountClick}
								>
									<AccountBoxIcon
										sx={({ palette: { dark, white } }) => ({
											color: light
												? white.main
												: dark.main,
										})}
									>
										account_circle
									</AccountBoxIcon>
									<SuiTypography
										variant="button"
										fontWeight="medium"
										color={light ? "white" : "dark"}
									></SuiTypography>
								</IconButton>
							</Link>
							<IconButton
								size="small"
								color="inherit"
								sx={navbarMobileMenu}
								onClick={handleMiniSidenav}
							>
								<NotificationsIcon
									className={
										light ? "text-white" : "text-dark"
									}
								>
									{miniSidenav ? "menu_open" : "menu"}
								</NotificationsIcon>
							</IconButton>
							<IconButton
								size="small"
								color="inherit"
								sx={navbarIconButton}
								onClick={handleConfiguratorOpen}
							>
								<SettingsIcon>settings</SettingsIcon>
							</IconButton>
							<IconButton
								size="small"
								color="inherit"
								sx={navbarIconButton}
								aria-controls="notification-menu"
								aria-haspopup="true"
								variant="contained"
								onClick={handleOpenMenu}
							>
								<NotificationsIcon
									className={
										light ? "text-white" : "text-dark"
									}
								>
									notifications
								</NotificationsIcon>
							</IconButton>
							{renderMenu()}
						</SuiBox>
					</SuiBox>
				)}
			</Toolbar>
		</AppBar>
	);
}

// Setting default values for the props of DashboardNavbar
DashboardNavbarAlteryx.defaultProps = {
	absolute: false,
	light: false,
	isMini: false,
};

export function FormField({ label, ...rest }) {
	return (
		<>
			<SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
				<SuiTypography
					component="label"
					variant="caption"
					fontWeight="bold"
					textTransform="capitalize"
				>
					{label}
				</SuiTypography>
			</SuiBox>
			<SuiInput {...rest} />
		</>
	);
}

function About() {
	return (
		<SuiBox>
			<SuiBox width="80%" textAlign="center" mx="auto" mb={4}>
				<SuiBox mb={1}>
					<SuiTypography variant="h5" fontWeight="regular">
						Let&apos;s start with the basic information
					</SuiTypography>
				</SuiBox>
				<SuiTypography
					variant="body2"
					fontWeight="regular"
					color="text"
				>
					Let us know your name and email address. Use an address you
					don&apos;t mind other users contacting you at
				</SuiTypography>
			</SuiBox>
			<SuiBox mt={2}>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={4} container justifyContent="center">
						<SuiBox
							position="relative"
							height="max-content"
							mx="auto"
						>
							<SuiAvatar
								src={"team2"}
								alt="profile picture"
								size="xxl"
								variant="rounded"
							/>
							<SuiBox
								alt="spotify logo"
								position="absolute"
								right={0}
								bottom={0}
								mr={-1}
								mb={-1}
							>
								<SuiButton
									variant="gradient"
									color="light"
									size="small"
									iconOnly
								>
									<Icon>edit</Icon>
								</SuiButton>
							</SuiBox>
						</SuiBox>
					</Grid>
					<Grid item xs={12} sm={8}>
						<SuiBox mb={2}>
							<FormField
								type="text"
								label="first name"
								placeholder="Eg. Michael"
							/>
						</SuiBox>
						<SuiBox mb={2}>
							<FormField
								type="text"
								label="last name"
								placeholder="Eg. Tomson"
							/>
						</SuiBox>
						<SuiBox>
							<FormField
								type="text"
								label="email address"
								placeholder="Eg. soft@dashboard.com"
							/>
						</SuiBox>
					</Grid>
				</Grid>
			</SuiBox>
		</SuiBox>
	);
}

function Account() {
	const [design, setDesign] = useState(false);
	const [code, setCode] = useState(false);
	const [develop, setDevelop] = useState(false);

	const handleSetDesign = () => setDesign(!design);
	const handleSetCode = () => setCode(!code);
	const handleSetDevelop = () => setDevelop(!develop);

	const customButtonStyles = ({
		functions: { pxToRem, rgba },
		borders: { borderWidth },
		palette: { transparent, dark, secondary },
	}) => ({
		width: pxToRem(150),
		height: pxToRem(120),
		borderWidth: borderWidth[2],
		mb: 1,
		ml: 0.5,

		"&.MuiButton-contained, &.MuiButton-contained:hover": {
			boxShadow: "none",
			border: `${borderWidth[2]} solid ${transparent.main}`,
		},

		"&:hover": {
			backgroundColor: `${transparent.main} !important`,
			border: `${borderWidth[2]} solid ${secondary.main} !important`,

			"& svg g": {
				fill: rgba(dark.main, 0.75),
			},
		},
	});

	return (
		<SuiBox>
			<SuiBox width="80%" textAlign="center" mx="auto" mb={4}>
				<SuiBox mb={1}>
					<SuiTypography variant="h5" fontWeight="regular">
						What are you doing? (checkboxes)
					</SuiTypography>
				</SuiBox>
				<SuiTypography
					variant="body2"
					fontWeight="regular"
					color="text"
				>
					Give us more details about you. What do you enjoy doing in
					your spare time?
				</SuiTypography>
			</SuiBox>
			<SuiBox mt={2}>
				<Grid container spacing={3} justifyContent="center">
					<Grid item xs={12} sm={3}>
						<SuiBox textAlign="center">
							<SuiButton
								color="secondary"
								variant={design ? "contained" : "outlined"}
								onClick={handleSetDesign}
								sx={customButtonStyles}
							>
								<SpaceShip
									size="24px"
									color={design ? "white" : "dark"}
								/>
							</SuiButton>
							<SuiTypography variant="h6">Design</SuiTypography>
						</SuiBox>
					</Grid>
					<Grid item xs={12} sm={3}>
						<SuiBox textAlign="center">
							<SuiButton
								color="secondary"
								variant={code ? "contained" : "outlined"}
								onClick={handleSetCode}
								sx={customButtonStyles}
							>
								<SpaceShip
									size="24px"
									color={code ? "white" : "dark"}
								/>
							</SuiButton>
							<SuiTypography variant="h6">Code</SuiTypography>
						</SuiBox>
					</Grid>
					<Grid item xs={12} sm={3}>
						<SuiBox textAlign="center">
							<SuiButton
								color="secondary"
								variant={develop ? "contained" : "outlined"}
								onClick={handleSetDevelop}
								sx={customButtonStyles}
							>
								<SpaceShip
									size="24px"
									color={develop ? "white" : "dark"}
								/>
							</SuiButton>
							<SuiTypography variant="h6">Develop</SuiTypography>
						</SuiBox>
					</Grid>
				</Grid>
			</SuiBox>
		</SuiBox>
	);
}

export function Address() {
	return (
		<SuiBox>
			<SuiBox width="80%" textAlign="center" mx="auto" mb={4}>
				<SuiBox mb={1}>
					<SuiTypography variant="h5" fontWeight="regular">
						Are you living in a nice area?
					</SuiTypography>
				</SuiBox>
				<SuiTypography
					variant="body2"
					fontWeight="regular"
					color="text"
				>
					One thing I love about the later sunsets is the chance to go
					for a walk through the neighborhood woods before dinner
				</SuiTypography>
			</SuiBox>
			<SuiBox mt={2}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={8}>
						<FormField
							type="text"
							label="street name"
							placeholder="Eg. Soft"
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<FormField
							type="number"
							label="street number"
							placeholder="Eg. 221"
						/>
					</Grid>
					<Grid item xs={12} md={7}>
						<FormField
							type="text"
							label="city"
							placeholder="Eg. Tokyo"
						/>
					</Grid>
					<Grid item xs={12} md={5}>
						<FormField
							type="text"
							label="country"
							placeholder="Eg. Argentina"
						/>
					</Grid>
				</Grid>
			</SuiBox>
		</SuiBox>
	);
}

export function WizardOld() {
	const [activeStep, setActiveStep] = useState(0);
	const steps = getSteps();
	const isLastStep = activeStep === steps.length - 1;

	const handleNext = () => setActiveStep(activeStep + 1);
	const handleBack = () => setActiveStep(activeStep - 1);

	return (
		<SuiBox pt={3} pb={8}>
			<Grid container justifyContent="center">
				<Grid item xs={12} lg={8}>
					<SuiBox mt={6} mb={1} textAlign="center">
						<SuiBox mb={1}>
							<SuiTypography variant="h3" fontWeight="bold">
								Build Your Profile
							</SuiTypography>
						</SuiBox>
						<SuiTypography
							variant="h5"
							fontWeight="regular"
							color="secondary"
						>
							This information will let us know more about you.
						</SuiTypography>
					</SuiBox>

					<Stepper activeStep={activeStep} alternativeLabel>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					<Card>
						<SuiBox p={2}>
							<SuiBox>
								{getStepContent(activeStep)}
								<SuiBox
									mt={3}
									width="100%"
									display="flex"
									justifyContent="space-between"
								>
									{activeStep === 0 ? (
										<SuiBox />
									) : (
										<SuiButton
											variant="gradient"
											color="light"
											onClick={handleBack}
										>
											back
										</SuiButton>
									)}
									<SuiButton
										variant="gradient"
										color="dark"
										onClick={
											!isLastStep ? handleNext : undefined
										}
									>
										{isLastStep ? "send" : "next"}
									</SuiButton>
								</SuiBox>
							</SuiBox>
						</SuiBox>
					</Card>
				</Grid>
			</Grid>
		</SuiBox>
	);
}
function getSteps() {
	return ["About", "Account", "Address"];
}

function getStepContent(stepIndex) {
	switch (stepIndex) {
		case 0:
			return <About />;
		case 1:
			return <Account />;
		case 2:
			return <Address />;
		default:
			return null;
	}
}

export function Wizard({ steps, getStepContent, title, description }) {
	const [activeStep, setActiveStep] = useState(0);
	//const steps = getSteps();
	const isLastStep = activeStep === steps.length - 1;

	const handleNext = () => setActiveStep(activeStep + 1);
	const handleBack = () => setActiveStep(activeStep - 1);

	return (
		<Grid container justifyContent="center">
			<Grid item xs={12} lg={8}>
				<SuiBox mt={6} mb={1} textAlign="center">
					<SuiBox mb={1}>
						<SuiTypography variant="h3" fontWeight="bold">
							{title}
						</SuiTypography>
					</SuiBox>
					<SuiTypography
						variant="h5"
						fontWeight="regular"
						color="secondary"
					>
						{description}
					</SuiTypography>
				</SuiBox>

				<Card>
					<SuiBox p={2}>
						<SuiBox>
							{getStepContent(activeStep)}
							<SuiBox
								mt={3}
								width="100%"
								display="flex"
								justifyContent="space-between"
							>
								{activeStep === 0 ? (
									<SuiBox />
								) : (
									<SuiButton
										variant="gradient"
										color="light"
										onClick={handleBack}
									>
										back
									</SuiButton>
								)}
								<SuiButton
									variant="gradient"
									color="dark"
									onClick={
										!isLastStep ? handleNext : undefined
									}
								>
									{isLastStep ? "send" : "next"}
								</SuiButton>
							</SuiBox>
						</SuiBox>
					</SuiBox>
				</Card>
				<Stepper activeStep={activeStep} alternativeLabel>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
			</Grid>
		</Grid>
	);
}
const SuiAlertRoot = styled(Box)(({ theme, ownerState }) => {
	const { palette, typography, borders, functions } = theme;
	const { color } = ownerState;

	const { white, alertColors } = palette;
	const { fontSizeRegular, fontWeightMedium } = typography;
	const { borderWidth, borderRadius } = borders;
	const { pxToRem, linearGradient } = functions;

	// backgroundImage value
	const backgroundImageValue = alertColors[color]
		? linearGradient(alertColors[color].main, alertColors[color].state)
		: linearGradient(alertColors.info.main, alertColors.info.state);

	// border value
	const borderValue = alertColors[color]
		? `${borderWidth[1]} solid ${alertColors[color].border}`
		: `${borderWidth[1]} solid ${alertColors.info.border}`;

	return {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		minHeight: pxToRem(60),
		backgroundImage: backgroundImageValue,
		color: white.main,
		position: "relative",
		padding: pxToRem(16),
		marginBottom: pxToRem(16),
		border: borderValue,
		borderRadius: borderRadius.md,
		fontSize: fontSizeRegular,
		fontWeight: fontWeightMedium,
	};
});

const SuiAlertCloseIcon = styled("span")(({ theme }) => {
	const { palette, typography, functions, transitions } = theme;

	const { white } = palette;
	const { size, fontWeightMedium } = typography;
	const { pxToRem } = functions;

	return {
		color: white.main,
		fontSize: size.xl,
		padding: `${pxToRem(9)} ${pxToRem(6)} ${pxToRem(8)}`,
		marginLeft: pxToRem(40),
		fontWeight: fontWeightMedium,
		opacity: 0.5,
		cursor: "pointer",
		lineHeight: 0,
		transition: transitions.create("opacity", {
			easing: transitions.easing.easeInOut,
			duration: transitions.duration.shorter,
		}),

		"&:hover": {
			opacity: 1,
		},
	};
});
export function SuiAlert({ color, dismissible, children, ...rest }) {
	const [alertStatus, setAlertStatus] = useState("mount");

	const handleAlertStatus = () => setAlertStatus("fadeOut");

	// The base template for the alert
	const alertTemplate = (mount = true) => (
		<Fade in={mount} timeout={300}>
			<SuiAlertRoot ownerState={{ color }} {...rest}>
				<SuiBox display="flex" alignItems="center" color="white">
					{children}
				</SuiBox>
				{dismissible ? (
					<SuiAlertCloseIcon
						onClick={mount ? handleAlertStatus : null}
					>
						&times;
					</SuiAlertCloseIcon>
				) : null}
			</SuiAlertRoot>
		</Fade>
	);

	switch (true) {
		case alertStatus === "mount":
			return alertTemplate();
		case alertStatus === "fadeOut":
			setTimeout(() => setAlertStatus("unmount"), 400);
			return alertTemplate(false);
		default:
			alertTemplate();
			break;
	}

	return null;
}

// Setting default values for the props of SuiAlert
SuiAlert.defaultProps = {
	color: "info",
	dismissible: false,
};

const SuiSnackbarIconRoot = styled(Icon)(({ theme, ownerState }) => {
	const { palette, functions, typography } = theme;
	const { color, bgWhite } = ownerState;

	const { white, transparent, gradients } = palette;
	const { pxToRem, linearGradient } = functions;
	const { size } = typography;

	// backgroundImage value
	let backgroundImageValue;

	if (bgWhite) {
		backgroundImageValue = gradients[color]
			? linearGradient(gradients[color].main, gradients[color].state)
			: linearGradient(gradients.info.main, gradients.info.state);
	} else if (color === "light") {
		backgroundImageValue = linearGradient(
			gradients.dark.main,
			gradients.dark.state
		);
	}

	return {
		backgroundImage: backgroundImageValue,
		WebkitTextFillColor:
			bgWhite || color === "light" ? transparent.main : white.main,
		WebkitBackgroundClip: "text",
		marginRight: pxToRem(8),
		fontSize: size.lg,
		transform: `translateY(${pxToRem(-2)})`,
	};
});
export function SuiSnackbar({
	color,
	icon,
	title,
	dateTime,
	content,
	close,
	bgWhite,
	...rest
}) {
	const { size } = typography;
	let titleColor;
	let dateTimeColor;
	let dividerColor;

	if (bgWhite) {
		titleColor = color;
		dateTimeColor = "dark";
		dividerColor = false;
	} else if (color === "light") {
		titleColor = "dark";
		dateTimeColor = "text";
		dividerColor = false;
	} else {
		titleColor = "white";
		dateTimeColor = "white";
		dividerColor = true;
	}

	return (
		<Snackbar
			TransitionComponent={Fade}
			autoHideDuration={5000}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			{...rest}
			action={
				<IconButton
					size="small"
					aria-label="close"
					color="inherit"
					onClick={close}
				>
					<Icon fontSize="small">close</Icon>
				</IconButton>
			}
		>
			<SuiBox
				variant={bgWhite ? "contained" : "gradient"}
				bgColor={bgWhite ? "white" : color}
				minWidth="21.875rem"
				maxWidth="100%"
				shadow="md"
				borderRadius="md"
				p={1}
			>
				<SuiBox
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					color="dark"
					p={1.5}
				>
					<SuiBox display="flex" alignItems="center" lineHeight={0}>
						<SuiSnackbarIconRoot
							fontSize="small"
							ownerState={{ color, bgWhite }}
						>
							{icon}
						</SuiSnackbarIconRoot>
						<SuiTypography
							variant="button"
							fontWeight="medium"
							color={titleColor}
							textGradient={bgWhite}
						>
							{title}
						</SuiTypography>
					</SuiBox>
					<SuiBox display="flex" alignItems="center" lineHeight={0}>
						<SuiTypography variant="caption" color={dateTimeColor}>
							{dateTime}
						</SuiTypography>
						<Icon
							sx={{
								color: ({ palette: { dark, white } }) =>
									bgWhite || color === "light"
										? dark.main
										: white.main,
								fontWeight: ({
									typography: { fontWeightBold },
								}) => fontWeightBold,
								cursor: "pointer",
								marginLeft: 2,
								transform: "translateY(-1px)",
							}}
							onClick={close}
						>
							close
						</Icon>
					</SuiBox>
				</SuiBox>
				<Divider sx={{ margin: 0 }} light={dividerColor} />
				<SuiBox
					p={1.5}
					color={bgWhite || color === "light" ? "text" : "white"}
					fontSize={size.sm}
				>
					{content}
				</SuiBox>
			</SuiBox>
		</Snackbar>
	);
}

// Setting default values for the props of SuiSnackbar
SuiSnackbar.defaultProps = {
	bgWhite: false,
	color: "info",
};
export function NotificationsOld() {
	const [successSB, setSuccessSB] = useState(false);
	const [infoSB, setInfoSB] = useState(false);
	const [warningSB, setWarningSB] = useState(false);
	const [errorSB, setErrorSB] = useState(false);

	const openSuccessSB = () => setSuccessSB(true);
	const closeSuccessSB = () => setSuccessSB(false);
	const openInfoSB = () => setInfoSB(true);
	const closeInfoSB = () => setInfoSB(false);
	const openWarningSB = () => setWarningSB(true);
	const closeWarningSB = () => setWarningSB(false);
	const openErrorSB = () => setErrorSB(true);
	const closeErrorSB = () => setErrorSB(false);

	const alertContent = (name) => (
		<SuiTypography variant="body2" color="white">
			A simple {name} alert with{" "}
			<SuiTypography
				component="a"
				href="#"
				variant="body2"
				fontWeight="medium"
				color="white"
			>
				an example link
			</SuiTypography>
			. Give it a click if you like.
		</SuiTypography>
	);

	const renderSuccessSB = (
		<SuiSnackbar
			color="success"
			icon="check"
			title="Soft UI Dashboard"
			content="Hello, world! This is a notification message"
			dateTime="11 mins ago"
			open={successSB}
			onClose={closeSuccessSB}
			close={closeSuccessSB}
			bgWhite
		/>
	);

	const renderInfoSB = (
		<SuiSnackbar
			icon="notifications"
			title="Soft UI Dashboard"
			content="Hello, world! This is a notification message"
			dateTime="11 mins ago"
			open={infoSB}
			onClose={closeInfoSB}
			close={closeInfoSB}
		/>
	);

	const renderWarningSB = (
		<SuiSnackbar
			color="warning"
			icon="star"
			title="Soft UI Dashboard"
			content="Hello, world! This is a notification message"
			dateTime="11 mins ago"
			open={warningSB}
			onClose={closeWarningSB}
			close={closeWarningSB}
			bgWhite
		/>
	);

	const renderErrorSB = (
		<SuiSnackbar
			color="error"
			icon="warning"
			title="Soft UI Dashboard"
			content="Hello, world! This is a notification message"
			dateTime="11 mins ago"
			open={errorSB}
			onClose={closeErrorSB}
			close={closeErrorSB}
			bgWhite
		/>
	);

	return (
		<SuiBox mt={6} mb={3}>
			<Grid container spacing={3} justifyContent="center">
				<Grid item xs={12} lg={8}>
					<Card>
						<SuiBox p={2}>
							<SuiTypography variant="h5">Alerts</SuiTypography>
						</SuiBox>
						<SuiBox pt={2} px={2}>
							<SuiAlert color="primary" dismissible>
								{alertContent("primary")}
							</SuiAlert>
							<SuiAlert color="secondary" dismissible>
								{alertContent("secondary")}
							</SuiAlert>
							<SuiAlert color="success" dismissible>
								{alertContent("success")}
							</SuiAlert>
							<SuiAlert color="error" dismissible>
								{alertContent("error")}
							</SuiAlert>
							<SuiAlert color="warning" dismissible>
								{alertContent("warning")}
							</SuiAlert>
							<SuiAlert color="info" dismissible>
								{alertContent("info")}
							</SuiAlert>
							<SuiAlert color="light" dismissible>
								{alertContent("light")}
							</SuiAlert>
							<SuiAlert color="dark" dismissible>
								{alertContent("dark")}
							</SuiAlert>
						</SuiBox>
					</Card>
				</Grid>

				<Grid item xs={12} lg={8}>
					<Card>
						<SuiBox p={2} lineHeight={0}>
							<SuiTypography variant="h5">
								Notifications
							</SuiTypography>
							<SuiTypography
								variant="button"
								color="text"
								fontWeight="regular"
							>
								Notifications on this page use Toasts from
								Bootstrap. Read more details here.
							</SuiTypography>
						</SuiBox>
						<SuiBox p={2}>
							<Grid container spacing={3}>
								<Grid item xs={12} sm={6} lg={3}>
									<SuiButton
										variant="gradient"
										color="success"
										onClick={openSuccessSB}
										fullWidth
									>
										success notification
									</SuiButton>
									{renderSuccessSB}
								</Grid>
								<Grid item xs={12} sm={6} lg={3}>
									<SuiButton
										variant="gradient"
										color="info"
										onClick={openInfoSB}
										fullWidth
									>
										info notification
									</SuiButton>
									{renderInfoSB}
								</Grid>
								<Grid item xs={12} sm={6} lg={3}>
									<SuiButton
										variant="gradient"
										color="warning"
										onClick={openWarningSB}
										fullWidth
									>
										warning notification
									</SuiButton>
									{renderWarningSB}
								</Grid>
								<Grid item xs={12} sm={6} lg={3}>
									<SuiButton
										variant="gradient"
										color="error"
										onClick={openErrorSB}
										fullWidth
									>
										error notification
									</SuiButton>
									{renderErrorSB}
								</Grid>
							</Grid>
						</SuiBox>
					</Card>
				</Grid>
			</Grid>
		</SuiBox>
	);
}
export function Notifications() {
	const [successSB, setSuccessSB] = useState(false);
	const [infoSB, setInfoSB] = useState(false);
	const [warningSB, setWarningSB] = useState(false);
	const [errorSB, setErrorSB] = useState(true);

	const openSuccessSB = () => setSuccessSB(true);
	const closeSuccessSB = () => setSuccessSB(false);
	const openInfoSB = () => setInfoSB(true);
	const closeInfoSB = () => setInfoSB(false);
	const openWarningSB = () => setWarningSB(true);
	const closeWarningSB = () => setWarningSB(false);
	const openErrorSB = () => setErrorSB(true);
	const closeErrorSB = () => setErrorSB(false);

	const renderErrorSB = (
		<SuiSnackbar
			color="error"
			icon="warning"
			title="Soft UI Dashboard"
			content="Hello, world! This is a notification message"
			dateTime="11 mins ago"
			position="top"
			open={errorSB}
			onClose={closeErrorSB}
			close={closeErrorSB}
			bgWhite
		/>
	);

	return <Fragment>{renderErrorSB}</Fragment>;
}

// export function WizardBoxWrap({ children, title, description }) {
//   return (
//     <SuiBox mt={3} mb={4}>
//       <Grid container spacing={3} justifyContent="center">
//         <Grid item xs={12} lg={9}>
//           <Card sx={{ overflow: "visible" }}>
//             <SuiBox p={2} lineHeight={1}>
//               {children}
//             </SuiBox>
//           </Card>
//         </Grid>
//       </Grid>
//     </SuiBox>
//   );
// }

export function WizardBoxWrap({ children, title, description }) {
	return (
		<SuiBox mt={3} mb={4}>
			<Grid container spacing={3} justifyContent="center">
				<Grid item xs={12} lg={9}>
					<Card sx={{ overflow: "visible" }}>
						<SuiBox p={2} lineHeight={1}>
							{children}
						</SuiBox>
					</Card>
				</Grid>
			</Grid>
		</SuiBox>
	);
}
export const SuiInputElement = ({ text, description, value, onChange }) => {
	return (
		<SuiBox
			display="flex"
			flexDirection="column"
			justifyContent="flex-end"
			height="100%"
		>
			<SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
				<SuiTypographyFormTitle text={text} />
			</SuiBox>
			<SuiBox pl={0.5} pb={1.5}>
				<SuiTypographyFormDescription text={description} />
			</SuiBox>
			<SuiInput onChange={onChange} placeholder={value || ""} />
		</SuiBox>
	);
};

export const SuiTextAreaElement = ({ text, description, value, onChange }) => {
	return (
		<TextAreaInput
			title={text}
			description={description}
			setEditorValue={onChange}
			editorValue={value}
		/>
	);
};
export const SuiToggleElementOld = ({
	text,
	description,
	value,
	onChange,
	checked,
}) => {
	return (
		<SuiBox mt={3} mb={2}>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<SuiBox
						mb={1}
						ml={0.5}
						lineHeight={0}
						display="inline-block"
					>
						<SuiTypography
							component="label"
							variant="caption"
							fontWeight="bold"
						>
							{text}
						</SuiTypography>
					</SuiBox>
					{description != null ? (
						<SuiBox pl={0.5} pb={1.5}>
							<SuiTypography
								component="label"
								variant="caption"
								fontWeight="regular"
								color="text"
							>
								{description}
							</SuiTypography>
						</SuiBox>
					) : null}

					<SuiBox ml={0.5} mb={0.25}>
						<Switch onChange={onChange} checked={checked} />
					</SuiBox>
				</Grid>
			</Grid>
		</SuiBox>
	);
};

export const SuiToggleElement = ({
	text,
	description,
	value,
	onChange,
	checked,
}) => {
	return (
		<SuiBox
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			mb={2}
			lineHeight={1}
		>
			<SuiTypographyFormTitle text={text} />

			<SuiBox ml={2} mr={1}>
				<Switch onChange={onChange} checked={checked} />
			</SuiBox>
		</SuiBox>
	);
};
export const SuiSelectElement = ({
	text,
	defaultValue,
	options,
	description,
	onChange,
	isMulti,
}) => {
	return (
		<SuiBox
			display="flex"
			flexDirection="column"
			justifyContent="flex-end"
			height="100%"
		>
			<SuiBox
				mb={1}
				ml={0.5}
				mt={3}
				lineHeight={0}
				display="inline-block"
			>
				<SuiTypographyFormTitle text={text} />
			</SuiBox>
			{description != null ? (
				<SuiBox
					mb={1.5}
					ml={0.5}
					mt={0.5}
					lineHeight={0}
					display="inline-block"
				>
					<SuiTypographyFormDescription text={description} />
				</SuiBox>
			) : null}
			<SuiSelect
				defaultValue={defaultValue}
				options={options}
				onChange={onChange}
				isMulti={isMulti || true}
			/>
		</SuiBox>
	);
};
export const SuiSelectElementSingle = ({
	text,
	defaultValue,
	options,
	description,
	onChange,
	isMulti,
}) => {
	return (
		<SuiBox
			display="flex"
			flexDirection="column"
			justifyContent="flex-end"
			height="100%"
		>
			<SuiBox
				mb={1}
				ml={0.5}
				mt={3}
				lineHeight={0}
				display="inline-block"
			>
				<SuiTypographyFormTitle text={text} />
			</SuiBox>
			{description != null ? (
				<SuiBox
					mb={1.5}
					ml={0.5}
					mt={0.5}
					lineHeight={0}
					display="inline-block"
				>
					<SuiTypographyFormDescription text={description} />
				</SuiBox>
			) : null}
			<SuiSelect
				defaultValue={defaultValue}
				options={options}
				onChange={onChange}
			/>
		</SuiBox>
	);
};
export const SaveButton = ({ onClick }) => {
	return (
		<IconButton sx={navbarIconButton} size="small" onClick={onClick}>
			<SuiTypography
				variant="button"
				fontWeight="medium"
				color={"dark"} //: "dark"}
			>
				Save
			</SuiTypography>
		</IconButton>
	);
};

export const SaveCancelButton = ({ onSave, onCancel }) => {
	return (
		<SuiBox display="flex" justifyContent="flex-end" mt={3}>
			<SuiBox mr={1}>
				<SuiButton onClick={onCancel} color="light">
					Cancel
				</SuiButton>
			</SuiBox>
			<SuiButton onClick={onSave} variant="gradient" color="info">
				Save
			</SuiButton>
		</SuiBox>
	);
};

export const SuiBoxCardForm = ({ children, title, description }) => {
	return (
		<Grid container justifyContent="center" spacing={3}>
			<Grid item xs={12} lg={8}>
				<SuiBox mt={6} mb={1} textAlign="center">
					<SuiBox mb={1}>
						<SuiTypography variant="h3" fontWeight="bold">
							{title}
						</SuiTypography>
					</SuiBox>
					<SuiTypography
						variant="h5"
						fontWeight="regular"
						color="secondary"
					>
						{description}
					</SuiTypography>
				</SuiBox>
			</Grid>
			<Grid item xs={12} lg={8}>
				<SuiBox mb={3}>
					<Grid container spacing={3}>
						{children}
					</Grid>
				</SuiBox>
			</Grid>
		</Grid>
	);
};
export const SuiBackSendButtonOld = ({
	activeStep,
	handleBack,
	handleNext,
	isLastStep,
}) => {
	return (
		<SuiBox
			mt={4}
			width="100%"
			display="flex"
			justifyContent="space-between"
		>
			{activeStep === 0 ? (
				<SuiBox />
			) : (
				<SuiButton
					variant="gradient"
					color="light"
					onClick={handleBack}
				>
					back
				</SuiButton>
			)}
			<SuiButton
				variant="gradient"
				color="dark"
				onClick={!isLastStep ? handleNext : undefined}
			>
				{isLastStep ? "send" : "next"}
			</SuiButton>
		</SuiBox>
	);
};
export const SuiSendNextButton = ({
	activeStep,
	handleBack,
	handleNext,
	isLastStep,
}) => {
	return (
		<SuiBox mt={4}>
			<SuiButton
				variant="gradient"
				color="dark"
				onClick={!isLastStep ? handleNext : undefined}
			>
				{isLastStep ? "send" : "next"}
			</SuiButton>
		</SuiBox>
	);
};

export const SuiBackNextButton = ({
	activeStep,
	handleBack,
	handleNext,
	isLastStep,
	handleSubmit,
}) => {
	return (
		<SuiBox
			mt={3}
			width="100%"
			display="flex"
			justifyContent="space-between"
		>
			{activeStep === 0 ? (
				<SuiBox />
			) : (
				<SuiButton
					variant="gradient"
					color="light"
					onClick={handleBack}
				>
					back
				</SuiButton>
			)}
			<SuiButton
				variant="gradient"
				color="dark"
				onClick={!isLastStep ? handleNext : handleSubmit}
			>
				{isLastStep ? "send" : "next"}
			</SuiButton>
		</SuiBox>
	);
};

export const SuiBackSendButton = ({
	activeStep,
	handleBack,
	handleNext,
	isLastStep,
	handleSubmit,
}) => {
	return (
		<Fragment>
			{activeStep === 0 ? (
				<SuiSendNextButton
					handleNext={handleNext}
					isLastStep={isLastStep}
				/>
			) : (
				<SuiBackNextButton
					handleNext={handleNext}
					isLastStep={isLastStep}
					activeStep={activeStep}
					handleBack={handleBack}
					handleSubmit={handleSubmit}
				/>
			)}
		</Fragment>
	);
};

export function CoverLayoutOriginal({
	color,
	header,
	title,
	description,
	image,
	top,
	children,
}) {
	return (
		<PageLayout background="white">
			<Grid
				container
				justifyContent="center"
				sx={{
					minHeight: "75vh",
					margin: 0,
				}}
			>
				<Grid item xs={11} sm={8} md={5} xl={3}>
					<SuiBox mt={top}>
						<SuiBox pt={3} px={3}>
							{!header ? (
								<>
									<SuiBox mb={1}>
										<SuiTypography
											variant="h3"
											fontWeight="bold"
											color={color}
											textGradient
										>
											{title}
										</SuiTypography>
									</SuiBox>
									<SuiTypography
										variant="body2"
										fontWeight="regular"
										color="text"
									>
										{description}
									</SuiTypography>
								</>
							) : (
								header
							)}
						</SuiBox>
						<SuiBox p={3}>{children}</SuiBox>
					</SuiBox>
				</Grid>
				<Grid item xs={12} md={5}>
					<SuiBox
						height="100%"
						display={{ xs: "none", md: "block" }}
						position="relative"
						right={{ md: "-12rem", xl: "-16rem" }}
						mr={-16}
						sx={{
							transform: "skewX(-10deg)",
							overflow: "hidden",
							borderBottomLeftRadius: ({
								borders: { borderRadius },
							}) => borderRadius.lg,
						}}
					>
						<SuiBox
							ml={-8}
							height="100%"
							sx={{
								backgroundImage: `url(${image})`,
								backgroundSize: "cover",
								transform: "skewX(10deg)",
							}}
						/>
					</SuiBox>
				</Grid>
			</Grid>
			<Footer />
		</PageLayout>
	);
}
export function CoverLayout({
	color,
	header,
	title,
	description,
	image,
	top,
	children,
}) {
	return (
		<Grid
			container
			justifyContent="center"
			sx={{
				minHeight: "75vh",
				margin: 0,
			}}
		>
			<Grid item xs={11} sm={8} md={5} xl={3}>
				<SuiBox mt={top}>
					<SuiBox pt={3} px={3}>
						<SuiBox mb={1}>
							<SuiTypography
								variant="h3"
								fontWeight="bold"
								color={color}
								textGradient
							>
								{title}
							</SuiTypography>
						</SuiBox>
						<SuiTypography
							variant="body2"
							fontWeight="regular"
							color="text"
						>
							{description}
						</SuiTypography>
					</SuiBox>
					<SuiBox p={3}>{children}</SuiBox>
				</SuiBox>
			</Grid>
			<Grid item xs={12} md={5}>
				<SuiBox
					height="100%"
					display={{ xs: "none", md: "block" }}
					position="relative"
					right={{ md: "-12rem", xl: "-16rem" }}
					mr={-16}
					sx={{
						transform: "skewX(-10deg)",
						overflow: "hidden",
						borderBottomLeftRadius: ({
							borders: { borderRadius },
						}) => borderRadius.lg,
					}}
				>
					<SuiBox
						ml={-8}
						height="100%"
						sx={{
							backgroundImage: `url(${image})`,
							backgroundSize: "cover",
							transform: "skewX(10deg)",
						}}
					/>
				</SuiBox>
			</Grid>
		</Grid>
	);
}

export function IllustrationLayoutOriginal({
	color,
	header,
	title,
	description,
	illustration,
	children,
	pattern,
}) {
	return (
		<PageLayout background="white">
			{/* <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "https://creative-tim.com/product/soft-ui-dashboard-pro-react",
          label: "buy now",
        }}
      /> */}
			<Grid container>
				<Grid
					item
					xs={11}
					sm={8}
					md={6}
					lg={4}
					xl={3}
					sx={{ mx: "auto" }}
				>
					<SuiBox
						display="flex"
						flexDirection="column"
						justifyContent="center"
						height="100vh"
					>
						<SuiBox pt={3} px={3}>
							{!header ? (
								<>
									<SuiBox mb={1}>
										<SuiTypography
											variant="h4"
											fontWeight="bold"
										>
											{title}
										</SuiTypography>
									</SuiBox>
									<SuiTypography
										variant="body2"
										fontWeight="regular"
										color="text"
									>
										{description}
									</SuiTypography>
								</>
							) : (
								header
							)}
						</SuiBox>
						<SuiBox p={3}>{children}</SuiBox>
					</SuiBox>
				</Grid>
				<Grid item xs={12} lg={6}>
					<SuiBox
						display={{ xs: "none", lg: "flex" }}
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						width="calc(100% - 2rem)"
						height="calc(100vh - 2rem)"
						position="relative"
						borderRadius="lg"
						textAlign="center"
						bgColor={color}
						variant="gradient"
						m={2}
						px={13}
						sx={{ overflow: "hidden" }}
					>
						<SuiBox
							component="img"
							src={pattern}
							alt="pattern-lines"
							width="120rem"
							position="absolute"
							topl={0}
							left={0}
							opacity={0.4}
						/>
						{illustration.image && (
							<SuiBox
								component="img"
								src={illustration.image}
								alt="chat-illustration"
								width="100%"
								maxWidth="31.25rem"
							/>
						)}
						{illustration.title && (
							<SuiBox mt={6} mb={1}>
								<SuiTypography
									variant="h4"
									color="white"
									fontWeight="bold"
								>
									{illustration.title}
								</SuiTypography>
							</SuiBox>
						)}
						{illustration.description && (
							<SuiBox mb={1}>
								<SuiTypography variant="body2" color="white">
									{illustration.description}
								</SuiTypography>
							</SuiBox>
						)}
					</SuiBox>
				</Grid>
			</Grid>
		</PageLayout>
	);
}

export function IllustrationLayout({
	color,
	header,
	title,
	description,
	illustration,
	children,
	pattern,
}) {
	return (
		<Grid container>
			<Grid item xs={11} sm={8} md={6} lg={4} xl={3} sx={{ mx: "auto" }}>
				<SuiBox
					display="flex"
					flexDirection="column"
					justifyContent="center"
					height="100vh"
				>
					<SuiBox pt={3} px={3}>
						{!header ? (
							<>
								<SuiBox mb={1}>
									<SuiTypography
										variant="h4"
										fontWeight="bold"
									>
										{title}
									</SuiTypography>
								</SuiBox>
								<SuiTypography
									variant="body2"
									fontWeight="regular"
									color="text"
								>
									{description}
								</SuiTypography>
							</>
						) : (
							header
						)}
					</SuiBox>
					<SuiBox p={3}>{children}</SuiBox>
				</SuiBox>
			</Grid>
			<Grid item xs={12} lg={6}>
				<SuiBox
					display={{ xs: "none", lg: "flex" }}
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					width="calc(100% - 2rem)"
					height="calc(100vh - 2rem)"
					position="relative"
					borderRadius="lg"
					textAlign="center"
					bgColor={color}
					variant="gradient"
					m={2}
					px={13}
					sx={{ overflow: "hidden" }}
				>
					<SuiBox
						component="img"
						src={pattern}
						alt="pattern-lines"
						width="120rem"
						position="absolute"
						topl={0}
						left={0}
						opacity={0.4}
					/>
					{illustration.image && (
						<SuiBox
							component="img"
							src={illustration.image}
							alt="chat-illustration"
							width="100%"
							maxWidth="31.25rem"
						/>
					)}
					{illustration.title && (
						<SuiBox mt={6} mb={1}>
							<SuiTypography
								variant="h4"
								color="white"
								fontWeight="bold"
							>
								{illustration.title}
							</SuiTypography>
						</SuiBox>
					)}
					{illustration.description && (
						<SuiBox mb={1}>
							<SuiTypography variant="body2" color="white">
								{illustration.description}
							</SuiTypography>
						</SuiBox>
					)}
				</SuiBox>
			</Grid>
		</Grid>
	);
}
IllustrationLayout.defaultProps = {
	color: "info",
	header: "",
	title: "",
	description: "",
	illustration: {},
};
export const SuiInputHook = ({ configDict, pageData, setPageData }) => {
	const onChange = (e) => {
		const textValue = e.target.value;
		const elementID = configDict["id"];
		var newDict = {};
		newDict[elementID] = textValue;
		const updatedPageData = { ...pageData, ...newDict };

		setPageData(updatedPageData);
	};
	return (
		<SuiInputElement
			text={configDict["text"]}
			description={configDict["description"]}
			value={configDict["value"]}
			onChange={onChange}
		/>
	);
};

export const SuiTextAreaHook = ({ configDict, pageData, setPageData }) => {
	const onChange = (value) => {
		const elementID = configDict["id"];
		var newDict = {};
		newDict[elementID] = value;
		const updatedPageData = { ...pageData, ...newDict };
		setPageData(updatedPageData);
	};

	const pageValue =
		pageData[configDict["id"]] == undefined
			? ""
			: pageData[configDict["id"]] || "";
	// console.log({ pageValue, configDict });
	return (
		<SuiTextAreaElement
			// {...configDict}
			text={configDict["text"] || ""}
			description={configDict["description"] || ""}
			value={pageValue}
			onChange={onChange}
		/>
	);
};

export const SuiTableHook = ({ configDict, pageData, setPageData }) => {
	const rows =
		pageData[configDict["id"]] == undefined
			? [[]]
			: pageData[configDict["id"]];
	const onSubmit = (value) => {
		const newRows = [...rows, value];
		const elementID = configDict["id"];
		var newDict = {};
		newDict[elementID] = newRows;
		const updatedPageData = { ...pageData, ...newDict };
		setPageData(updatedPageData);
	};

	const headers = configDict["value"].split(","); //["a"];
	return (
		<SuiTableAddForm
			{...configDict}
			// text={configDict["text"]}
			// value={configDict["value"]}
			headers={headers}
			rows={rows}
			title={configDict["text"]}
			// value={value}
			onSubmit={onSubmit}
		/>
	);
};

function load_datatables_with_re_render_actions({
	buttons,
	idSrc,
	editor_fields,
	data,
	columns,
	id,
	create,
	update,
	remove,
	select_func,
	link_func,
}) {
	const [editor_object, updateEditorObject] = useState(
		editor_object_create({ id, idSrc, editor_fields })
	);
	useEffect(() => {
		if (!$.fn.DataTable.isDataTable("#" + id)) {
			initiate_table({
				editor: editor_object,
				id,
				select_func,
				data,
				columns,
				link_func,
				buttons,
			});
			refresh_actions({ editor: editor_object, create, update, remove });
		} else {
			refresh_table({ id, data });
			refresh_actions({ editor: editor_object, create, update, remove });
		}
	}, [
		idSrc,
		editor_fields,
		data,
		columns,
		id,
		create,
		update,
		remove,
		select_func,
	]);
}

export const SuiFormWrapper = ({ text, description, children }) => {
	return (
		<SuiBox
			display="flex"
			flexDirection="column"
			justifyContent="flex-end"
			height="100%"
		>
			<SuiBox
				mb={1}
				ml={0.5}
				mt={3}
				lineHeight={0}
				display="inline-block"
			>
				<SuiTypographyFormTitle text={text} />
			</SuiBox>
			{description != null ? (
				<SuiBox
					mb={1.5}
					ml={0.5}
					mt={0.5}
					lineHeight={0}
					display="inline-block"
				>
					<SuiTypographyFormDescription text={description} />
				</SuiBox>
			) : null}
			{children}
		</SuiBox>
	);
};
//chart_dict {type: type, data: data, options:options}
const SuiDataTable = ({ table_dict, id }) => {
	//{table_dict,id}
	load_datatables_with_re_render_actions({ id, ...table_dict });
	return (
		<Fragment>
			<table
				// className="table table-striped table-bordered table-hover"
				className="table-react"
				style={{ width: "100%" }}
				id={id}
			></table>
		</Fragment>
	);
};
export const SuiDataTableHook = ({ configDict, pageData, setPageData }) => {
	const table_dict = suiTableDictCreate({
		configDict,
		pageData,
		setPageData,
	});
	return (
		<SuiFormWrapper
			text={configDict["text"]}
			description={configDict["description"]}
		>
			<SuiDataTable table_dict={table_dict} id={table_dict.id} />{" "}
		</SuiFormWrapper>
	);
};

export const SuiDataTableDisplay = ({ configDict, pageData, setPageData }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const data =
		pageData[configDict["id"]] == undefined
			? []
			: pageData[configDict["id"]];
	const headers = configDict["value"].split(","); //["a"];
	const rows = _.map(data, (D) => {
		return _.map(headers, (header) => {
			return D[header];
		});
	});

	const table_dict = suiTableDictCreate({
		configDict,
		pageData,
		setPageData,
	});
	return (
		<SuiFormWrapper
			text={configDict["text"]}
			description={configDict["description"]}
		>
			<SuiTableBase rows={rows} headers={headers} />
			<Modal open={modalOpen}>
				<Box>
					<SuiDataTable table_dict={table_dict} id={table_dict.id} />
				</Box>
			</Modal>
		</SuiFormWrapper>
	);
};
export const SuiDataTableHookTry = ({ configDict, pageData, setPageData }) => {
	try {
		const table_dict = suiTableDictCreate({
			configDict,
			pageData,
			setPageData,
		});
		return (
			<SuiFormWrapper
				text={configDict["text"] || ""}
				description={configDict["description"] || ""}
			>
				<SuiDataTable table_dict={table_dict} id={table_dict.id} />
			</SuiFormWrapper>
		);
	} catch (err) {
		return <Fragment></Fragment>;
	}
};

export const SuiTableHookSingle = ({ configDict, pageData, setPageData }) => {
	const rows =
		pageData[configDict["id"]] == undefined
			? [[]]
			: pageData[configDict["id"]];
	const onSubmit = (value) => {
		const newRows = [...rows, [value]];
		const elementID = configDict["id"];
		var newDict = {};
		newDict[elementID] = newRows;
		const updatedPageData = { ...pageData, ...newDict };
		setPageData(updatedPageData);
	};

	const headers = configDict["value"].split(","); //["a"];
	return (
		<SuiTableAddForm
			{...configDict}
			// text={configDict["text"]}
			// value={configDict["value"]}
			headers={headers}
			rows={rows}
			title={configDict["text"]}
			// value={value}
			onSubmit={onSubmit}
		/>
	);
};
export const SuiToggleHook = ({ configDict, pageData, setPageData }) => {
	const onChange = (e) => {
		const elementID = configDict["id"];
		const previous_state =
			pageData[elementID] == undefined
				? String(configDict["value"]).toLowerCase() == "true"
				: pageData[elementID];
		var newDict = {};
		newDict[elementID] = !previous_state;
		const updatedPageData = { ...pageData, ...newDict };
		setPageData(updatedPageData);
	};
	const checked =
		pageData[configDict["id"]] == undefined
			? String(configDict["value"]).toLowerCase() == "true"
			: pageData[configDict["id"]];
	return (
		<SuiToggleElement
			{...configDict}
			// text={configDict["text"]}
			// value={configDict["value"]}
			checked={checked}
			onChange={onChange}
		/>
	);
};

export const SuiToggleList = ({ configDict, pageData, setPageData }) => {
	const options = configDict["value"].split(",");
	const optionsArray = _.map(options, (name, index) => {
		const checked = false;
		return {
			checked,
			name,
			index,
		};
	});
	const data =
		pageData[configDict["id"]] == undefined
			? optionsArray
			: pageData[configDict["id"]];

	const onChangeIndex = (index) => {
		const dataCopy = [...data];
		const originaldict = dataCopy[index];
		const newDict = { ...originaldict, checked: !originaldict["checked"] };
		const onChange = (e) => {
			dataCopy[index] = newDict;
			var newPageDict = {};
			const elementID = configDict["id"];
			newPageDict[elementID] = dataCopy;
			const updatedPageDict = { ...pageData, ...newPageDict };
			setPageData(updatedPageDict);
		};
		return onChange;
	};
	return (
		<Fragment>
			{data.map((optionDict, index) => {
				return (
					<SuiToggleElement
						text={optionDict.name}
						checked={optionDict.checked}
						onChange={onChangeIndex(index)}
					/>
				);
			})}
		</Fragment>
	);
};
export const SuiToggleListNew = ({ configDict, pageData, setPageData }) => {
	const options = configDict["value"].split(",");
	const optionsArray = _.map(options, (name, index) => {
		const checked = false;
		return {
			checked,
			name,
			index,
		};
	});
	const data =
		pageData[configDict["id"]] == undefined
			? []
			: pageData[configDict["id"]];
	const dataDict = _.groupBy(data, "name");

	const optionsArrayUpdated = _.map(optionsArray, (D, index) => {
		const checked =
			dataDict[name] != undefined ? dataDict[name][0]["checked"] : false;
		return {
			...D,
			checked,
		};
	});
	const onChangeIndex = (D) => {
		const dataCopy = [...data];
		const dataDictCopy = _.groupBy(dataCopy, "name");
		const originaldict =
			dataDictCopy[D["name"]] != undefined
				? dataDictCopy[D["name"]][0]
				: D;

		//const originaldict = dataCopy[index];
		const newDict = { ...originaldict, checked: !originaldict["checked"] };
		const onChange = (e) => {
			dataCopy[index] = newDict;
			var newPageDict = {};
			const elementID = configDict["id"];
			newPageDict[elementID] = dataCopy;
			const updatedPageDict = { ...pageData, ...newPageDict };
			setPageData(updatedPageDict);
		};
		return onChange;
	};
	return (
		<Fragment>
			{optionsArrayUpdated.map((optionDict, index) => {
				return (
					<SuiToggleElement
						text={optionDict.name}
						checked={optionDict.checked}
						onChange={onChangeIndex(index)}
					/>
				);
			})}
		</Fragment>
	);
};
const selectOptionsCreateFromListGenerate = (l) => {
	return _.map(l.split(","), (i) => {
		return { label: i, value: i };
	});
};
export const SuiSelectHook = ({ configDict, pageData, setPageData }) => {
	const onChange = (value) => {
		const elementID = configDict["id"];
		var newDict = {};
		newDict[elementID] = value;
		const updatedPageData = { ...pageData, ...newDict };
		setPageData(updatedPageData);
	};

	const defaultValue = [];
	const options = selectOptionsCreateFromListGenerate(configDict["value"]);
	return (
		<SuiSelectElement
			text={configDict["text"] || ""}
			description={configDict["description"] || ""}
			defaultValue={defaultValue}
			options={options}
			onChange={onChange}
		/>
	);
};

export const SuiTextHeader = ({ configDict }) => {
	const { text, description } = configDict;
	return (
		<Fragment>
			<Divider />
			<SuiTypography variant="h6" fontWeight="medium">
				{text}
			</SuiTypography>
			<SuiTypography variant="button" fontWeight="regular" color="text">
				{description}
			</SuiTypography>
			<Divider />
		</Fragment>
	);
};

export const SuiDateHook = () => {
	return <Fragment>date</Fragment>;
};

const FormQuestionGenerate = ({ configDict, pageData, setPageData }) => {
	switch (configDict["type"]) {
		case "input":
			return (
				<SuiInputHook
					configDict={configDict}
					pageData={pageData}
					setPageData={setPageData}
				/>
			);
		case "table":
			return (
				<SuiTableHook
					configDict={configDict}
					pageData={pageData}
					setPageData={setPageData}
				/>
			);
		// case "data-table-display":
		//   return (
		//     <SuiDataTableDisplay
		//       configDict={configDict}
		//       pageData={pageData}
		//       setPageData={setPageData}
		//     />
		//   );
		case "data-table":
			return (
				<SuiDataTableHookTry
					configDict={configDict}
					pageData={pageData}
					setPageData={setPageData}
				/>
			);
		case "text-area":
			return (
				<SuiTextAreaHook
					configDict={configDict}
					pageData={pageData}
					setPageData={setPageData}
				/>
			);
		case "toggle":
			return (
				<SuiToggleHook
					configDict={configDict}
					pageData={pageData}
					setPageData={setPageData}
				/>
			);
		case "toggle-list":
			return (
				<SuiToggleList
					configDict={configDict}
					pageData={pageData}
					setPageData={setPageData}
				/>
			);
		case "date":
			return (
				<SuiDateHook
					configDict={configDict}
					pageData={pageData}
					setPageData={setPageData}
				/>
			);
		case "multi-select":
			return (
				<SuiSelectHook
					configDict={configDict}
					pageData={pageData}
					setPageData={setPageData}
				/>
			);
		case "text":
			return <SuiTextHeader configDict={configDict} />;
		default:
			return <Fragment>-</Fragment>;
	}
};

export const FormQuestionsGenerate = ({
	questionsData,
	pageData,
	setPageData,
}) => {
	return (
		<Fragment>
			{questionsData.map((configDict, index) => {
				return (
					<FormQuestionGenerate
						pageData={pageData}
						setPageData={setPageData}
						key={index}
						configDict={configDict}
					/>
				);
			})}
		</Fragment>
	);
};

export function FaqCollapse({ title, open, children, ...rest }) {
	const { borderWidth, borderColor } = borders;

	return (
		<SuiBox mb={2}>
			<SuiBox
				{...rest}
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				p={2}
				borderBottom={`${borderWidth[1]} solid ${borderColor}`}
				sx={{ cursor: "pointer" }}
			>
				<SuiTypography
					variant="h5"
					color={open ? "dark" : "text"}
					sx={{ userSelect: "none" }}
				>
					{title}
				</SuiTypography>
				<SuiBox color={open ? "dark" : "text"}>
					{open ? (
						<RemoveIcon
							sx={{ fontWeight: "bold" }}
							fontSize="small"
						/>
					) : (
						<Add sx={{ fontWeight: "bold" }} fontSize="small" />
					)}

					{/* <Icon sx={{ fontWeight: "bold" }} fontSize="small">
            {open ? "remove" : "add"}
            {open ? <RemoveIcon /> : <Add />}
          </Icon> */}
				</SuiBox>
			</SuiBox>
			<Collapse timeout={400} in={open}>
				{/* <SuiBox p={2} lineHeight={1}>
          {children}
        </SuiBox> */}
				<SuiBox p={2} lineHeight={1}>
					<SuiTypography
						variant="button"
						color="text"
						opacity={0.8}
						fontWeight="regular"
					>
						{children}
					</SuiTypography>
				</SuiBox>
			</Collapse>
		</SuiBox>
	);
}

export function Faq() {
	const [collapse, setCollapse] = useState(false);

	return (
		<SuiBox mt={16}>
			<Grid container justifyContent="center">
				<Grid item xs={12} md={6}>
					<SuiTypography
						variant="h2"
						align="center"
						fontWeight="bold"
						gutterBottom
					>
						Frequently Asked Questions
					</SuiTypography>
					<SuiBox mb={2}>
						<SuiTypography
							variant="body2"
							align="center"
							color="text"
						>
							A lot of people don&apos;t appreciate the moment
							until it’s passed. I&apos;m not trying my hardest,
							and I&apos;m not trying to do
						</SuiTypography>
					</SuiBox>
				</Grid>
				<Grid item xs={12} md={10}>
					<FaqCollapse
						title="How do I order?"
						open={collapse === 1}
						onClick={() =>
							collapse === 1 ? setCollapse(false) : setCollapse(1)
						}
					>
						We’re not always in the position that we want to be at.
						We’re constantly growing. We’re constantly making
						mistakes. We’re constantly trying to express ourselves
						and actualize our dreams. If you have the opportunity to
						play this game of life you need to appreciate every
						moment. A lot of people don’t appreciate the moment
						until it’s passed.
					</FaqCollapse>
					<FaqCollapse
						title="How can i make the payment?"
						open={collapse === 2}
						onClick={() =>
							collapse === 2 ? setCollapse(false) : setCollapse(2)
						}
					>
						It really matters and then like it really doesn’t
						matter. What matters is the people who are sparked by
						it. And the people who are like offended by it, it
						doesn’t matter. Because it&apos;s about motivating the
						doers. Because I’m here to follow my dreams and inspire
						other people to follow their dreams, too. We’re not
						always in the position that we want to be at. We’re
						constantly growing. We’re constantly making mistakes.
						We’re constantly trying to express ourselves and
						actualize our dreams. If you have the opportunity to
						play this game of life you need to appreciate every
						moment. A lot of people don’t appreciate the moment
						until it’s passed.
					</FaqCollapse>
					<FaqCollapse
						title="How much time does it take to receive the order?"
						open={collapse === 3}
						onClick={() =>
							collapse === 3 ? setCollapse(false) : setCollapse(3)
						}
					>
						The time is now for it to be okay to be great. People in
						this world shun people for being great. For being a
						bright color. For standing out. But the time is now to
						be okay to be the greatest you. Would you believe in
						what you believe in, if you were the only one who
						believed it? If everything I did failed - which it
						doesn&apos;t, it actually succeeds - just the fact that
						I&apos;m willing to fail is an inspiration. People are
						so scared to lose that they don&apos;t even try. Like,
						one thing people can&apos;t say is that I&apos;m not
						trying, and I&apos;m not trying my hardest, and I&apos;m
						not trying to do the best way I know how.
					</FaqCollapse>
					<FaqCollapse
						title="Can I resell the products?"
						open={collapse === 4}
						onClick={() =>
							collapse === 4 ? setCollapse(false) : setCollapse(4)
						}
					>
						I always felt like I could do anything. That’s the main
						thing people are controlled by! Thoughts- their
						perception of themselves! They&apos;re slowed down by
						their perception of themselves. If you&apos;re taught
						you can’t do anything, you won’t do anything. I was
						taught I could do everything.
						<br />
						<br />
						If everything I did failed - which it doesn&apos;t, it
						actually succeeds - just the fact that I&apos;m willing
						to fail is an inspiration. People are so scared to lose
						that they don&apos;t even try. Like, one thing people
						can&apos;t say is that I&apos;m not trying, and I&apos;m
						not trying my hardest, and I&apos;m not trying to do the
						best way I know how.
					</FaqCollapse>
					<FaqCollapse
						title="Where do I find the shipping details?"
						open={collapse === 5}
						onClick={() =>
							collapse === 5 ? setCollapse(false) : setCollapse(5)
						}
					>
						There’s nothing I really wanted to do in life that I
						wasn’t able to get good at. That’s my skill. I’m not
						really specifically talented at anything except for the
						ability to learn. That’s what I do. That’s what I’m here
						for. Don’t be afraid to be wrong because you can’t learn
						anything from a compliment. I always felt like I could
						do anything. That’s the main thing people are controlled
						by! Thoughts- their perception of themselves!
						They&apos;re slowed down by their perception of
						themselves. If you&apos;re taught you can’t do anything,
						you won’t do anything. I was taught I could do
						everything.
					</FaqCollapse>
				</Grid>
			</Grid>
		</SuiBox>
	);
}

export const CollapseSectionsFromArray = ({ array, setCollapse, collapse }) => {
	return (
		<Fragment>
			<Fragment>
				{array.map((D, index) => {
					return (
						<FaqCollapse
							key={index}
							title={D["title"]}
							open={collapse === index}
							onClick={() =>
								collapse === index
									? setCollapse(false)
									: setCollapse(index)
							}
						>
							{/* <Faq /> */}
							<ReactMarkdown source={D["text"]}></ReactMarkdown>

							{/* <ReactMarkdown>{D["text"]}</ReactMarkdown> */}
						</FaqCollapse>
					);
				})}
			</Fragment>
		</Fragment>
	);
};
export const CollapseSectionPage = ({ title, description, array }) => {
	const [collapse, setCollapse] = useState(false);

	return (
		<SuiBox mt={16}>
			<Grid container justifyContent="center">
				<Grid item xs={12} md={6}>
					<SuiTypography
						variant="h2"
						align="center"
						fontWeight="bold"
						gutterBottom
					>
						{title}
					</SuiTypography>
					<SuiBox mb={2}>
						<SuiTypography
							variant="body2"
							align="center"
							color="text"
						>
							{description}
						</SuiTypography>
					</SuiBox>
				</Grid>
				<Grid item xs={12} md={10}>
					<CollapseSectionsFromArray
						array={array}
						collapse={collapse}
						setCollapse={setCollapse}
					/>
				</Grid>
			</Grid>
		</SuiBox>
	);
};
export const CollapseSectionsFromArrayLayered = ({ array, lookUpDict }) => {
	const [collapse, setCollapse] = useState(false);
	const newArray = array || [];
	return (
		<Fragment>
			<Fragment>
				{newArray.map((D, index) => {
					const lookUpArray = lookUpDict[D["title"]];
					const title = D["title"];
					const url = D["url"];
					const url_is_null = url == null;
					const title_hyperlink = url_is_null ? (
						title
					) : (
						<a href={D["url"]} target="_blank">
							{title}
						</a>
					);
					return (
						<FaqCollapse
							key={index}
							title={title_hyperlink}
							// title={D["title"]}
							// title={<ReactMarkdown source={title_hyperlink}></ReactMarkdown>}
							open={collapse === index}
							onClick={() =>
								collapse === index
									? setCollapse(false)
									: setCollapse(index)
							}
						>
							<ReactMarkdown source={D["text"]}></ReactMarkdown>
							{lookUpArray != undefined ? (
								<CollapseSectionsFromArrayLayered
									array={lookUpArray}
									lookUpDict={lookUpDict}
								/>
							) : null}
						</FaqCollapse>
					);
				})}
			</Fragment>
		</Fragment>
	);
};
export const CollapseSectionPageLayered = ({ title, description, array }) => {
	const lookUpDict = _.groupBy(array, "parent");
	const parentsArray = lookUpDict[null];
	return (
		<SuiBox mt={16}>
			<Grid container justifyContent="center">
				<Grid item xs={12} md={6}>
					<SuiTypography
						variant="h2"
						align="center"
						fontWeight="bold"
						gutterBottom
					>
						{title}
					</SuiTypography>
					<SuiBox mb={2}>
						<SuiTypography
							variant="body2"
							align="center"
							color="text"
						>
							{description}
						</SuiTypography>
					</SuiBox>
				</Grid>
				<Grid item xs={12} md={10}>
					<CollapseSectionsFromArrayLayered
						array={parentsArray}
						lookUpDict={lookUpDict}
					/>
				</Grid>
			</Grid>
		</SuiBox>
	);
};

export function HorizontalLogos({ array }) {
	return (
		<Fragment>
			<Grid container justifyContent="space-between" wrap="nowrap">
				{/* <Grid container spacing={3}> */}
				{array.map((D, index) => {
					return (
						<Grid key={index} item xs={6} md={4} lg={2}>
							<SuiBox
								component="img"
								src={D["src"]}
								alt={D["alt"]}
								width={D["width"]}
								opacity={0.9}
								mb={3}
							/>
						</Grid>
					);
				})}
			</Grid>
		</Fragment>
	);
}
export function TrustedBrands() {
	return (
		<SuiBox mt={8}>
			<SuiBox textAlign="center">
				<SuiTypography variant="h6" opacity={0.5}>
					More than 50+ brands trust Soft
				</SuiTypography>
			</SuiBox>
			<SuiBox mt={5}>
				<Grid container spacing={3}>
					<Grid item xs={6} md={4} lg={2}>
						<SuiBox
							component="img"
							src={"dependencies/code/png/mtd_icon.png"}
							alt="coinbase"
							width="90%"
							opacity={0.9}
							mb={3}
						/>
					</Grid>
					<Grid item xs={6} md={4} lg={2}>
						<SuiBox
							component="img"
							src={"dependencies/code/png/mtd_icon.png"}
							alt="nasa"
							width="90%"
							opacity={0.9}
							mb={3}
						/>
					</Grid>
					<Grid item xs={6} md={4} lg={2}>
						<SuiBox
							component="img"
							src={"dependencies/code/png/mtd_icon.png"}
							alt="netflix"
							width="90%"
							opacity={0.9}
							mb={3}
						/>
					</Grid>
					<Grid item xs={6} md={4} lg={2}>
						<SuiBox
							component="img"
							src={"dependencies/code/png/mtd_icon.png"}
							alt="pinterest"
							width="90%"
							opacity={0.9}
							mb={3}
						/>
					</Grid>
					<Grid item xs={6} md={4} lg={2}>
						<SuiBox
							component="img"
							src={"dependencies/code/png/mtd_icon.png"}
							alt="spotify"
							width="90%"
							opacity={0.9}
							mb={3}
						/>
					</Grid>
					<Grid item xs={6} md={4} lg={2}>
						<SuiBox
							component="img"
							src={"dependencies/code/png/mtd_icon.png"}
							alt="vodafone"
							width="90%"
							opacity={0.9}
							mb={3}
						/>
					</Grid>
				</Grid>
			</SuiBox>
		</SuiBox>
	);
}

export function BackgroundBlogCard({
	color,
	image,
	title,
	description,
	action,
}) {
	return (
		<Card raised sx={{ p: 2 }}>
			<SuiBox
				sx={({
					functions: { linearGradient, rgba },
					palette: { gradients },
					borders: { borderRadius },
				}) => ({
					backgroundImage: gradients[color]
						? `${linearGradient(
								rgba(gradients[color].main, 0.8),
								rgba(gradients[color].state, 0.8)
						  )}, url(${image})`
						: `${linearGradient(
								rgba(gradients.dark.main, 0.8),
								rgba(gradients.dark.state, 0.8)
						  )}, url(${image})`,
					backgroundSize: "cover",
					borderRadius: borderRadius.lg,
					p: 2,
				})}
			>
				<SuiBox mb={2}>
					<SuiTypography
						variant="h6"
						color="white"
						fontWeight="bold"
						textTransform="capitalize"
					>
						{title}
					</SuiTypography>
				</SuiBox>
				<SuiBox mb={2}>
					<SuiTypography variant="body2" color="white">
						{description}
					</SuiTypography>
				</SuiBox>
				{action.type === "internal" ? (
					<SuiButton
						component={Link}
						to={action.route}
						variant="outlined"
						color="white"
						circular
					>
						{action.label} &nbsp; <ArrowForwardIcon />
					</SuiButton>
				) : (
					<SuiButton
						component="a"
						href={action.route}
						target="_blank"
						rel="noreferrer"
						variant="outlined"
						color="white"
						circular
					>
						{action.label} &nbsp; <Icon>arrow_forward</Icon>
					</SuiButton>
				)}
			</SuiBox>
		</Card>
	);
}

// Setting default values for the props of BackgroundBlogCard
BackgroundBlogCard.defaultProps = {
	color: "dark",
};

export function BackgroundBlogCardNoButton({
	color,
	image,
	title,
	description,
	action,
}) {
	return (
		<Card raised sx={{ p: 2 }}>
			<SuiBox
				sx={({
					functions: { linearGradient, rgba },
					palette: { gradients },
					borders: { borderRadius },
				}) => ({
					backgroundImage: gradients[color]
						? `${linearGradient(
								rgba(gradients[color].main, 0.8),
								rgba(gradients[color].state, 0.8)
						  )}, url(${image})`
						: `${linearGradient(
								rgba(gradients.dark.main, 0.8),
								rgba(gradients.dark.state, 0.8)
						  )}, url(${image})`,
					backgroundSize: "cover",
					borderRadius: borderRadius.lg,
					p: 2,
				})}
			>
				<SuiBox mb={2}>
					<SuiTypography
						variant="h6"
						color="white"
						fontWeight="bold"
						textTransform="capitalize"
					>
						{title}
					</SuiTypography>
				</SuiBox>
				<SuiBox mb={2}>
					<SuiTypography variant="body2" color="white">
						{description}
					</SuiTypography>
				</SuiBox>
			</SuiBox>
		</Card>
	);
}

// Setting default values for the props of BackgroundBlogCard
BackgroundBlogCardNoButton.defaultProps = {
	color: "dark",
};
const SuiBadgeRoot = styled(Badge)(({ theme, ownerState }) => {
	const { palette, typography, borders, functions } = theme;
	const {
		color,
		circular,
		border,
		size,
		indicator,
		variant,
		container,
		children,
	} = ownerState;

	const { white, dark, gradients, badgeColors } = palette;
	const { size: fontSize, fontWeightBold } = typography;
	const { borderRadius, borderWidth } = borders;
	const { pxToRem, linearGradient } = functions;

	// padding values
	const paddings = {
		xs: "0.575em 0.775em 0.4em",
		sm: "0.55em 0.9em",
		md: "0.75em 1em 0.65em",
		lg: "0.925em 1.375em 0.85em",
	};

	// fontSize value
	const fontSizeValue = size === "xs" ? fontSize.xxs : fontSize.xs;

	// border value
	const borderValue = border
		? `${borderWidth[3]} solid ${white.main}`
		: "none";

	// borderRadius value
	let borderRadiusValue = size === "xs" ? borderRadius.sm : borderRadius.md;

	if (circular) {
		borderRadiusValue = borderRadius.section;
	}

	// styles for the badge with indicator={true}
	const indicatorStyles = (sizeProp) => {
		let widthValue = pxToRem(20);
		let heightValue = pxToRem(20);

		if (sizeProp === "medium") {
			widthValue = pxToRem(24);
			heightValue = pxToRem(24);
		} else if (sizeProp === "large") {
			widthValue = pxToRem(32);
			heightValue = pxToRem(32);
		}

		return {
			width: widthValue,
			height: heightValue,
			display: "grid",
			placeItems: "center",
			textAlign: "center",
			borderRadius: "50%",
			padding: 0,
			border: borderValue,
		};
	};

	// styles for the badge with variant="gradient"
	const gradientStyles = (colorProp) => {
		const backgroundValue = gradients[colorProp]
			? linearGradient(
					gradients[colorProp].main,
					gradients[colorProp].state
			  )
			: linearGradient(gradients.info.main, gradients.info.state);
		const colorValue = colorProp === "light" ? dark.main : white.main;

		return {
			background: backgroundValue,
			color: colorValue,
		};
	};

	// styles for the badge with variant="contained"
	const containedStyles = (colorProp) => {
		const backgroundValue = badgeColors[colorProp]
			? badgeColors[colorProp].background
			: badgeColors.info.background;
		let colorValue = badgeColors[colorProp]
			? badgeColors[colorProp].text
			: badgeColors.info.text;

		if (colorProp === "light") {
			colorValue = dark.main;
		}
		return {
			background: backgroundValue,
			color: colorValue,
		};
	};

	// styles for the badge with no children and container={false}
	const standAloneStyles = () => ({
		position: "static",
		marginLeft: pxToRem(8),
		transform: "none",
		fontSize: pxToRem(9),
	});

	// styles for the badge with container={true}
	const containerStyles = () => ({
		position: "relative",
		transform: "none",
	});

	return {
		"& .MuiBadge-badge": {
			height: "auto",
			padding: paddings[size] || paddings.xs,
			fontSize: fontSizeValue,
			fontWeight: fontWeightBold,
			textTransform: "uppercase",
			lineHeight: 1,
			textAlign: "center",
			whiteSpace: "nowrap",
			verticalAlign: "baseline",
			border: borderValue,
			borderRadius: borderRadiusValue,
			...(indicator && indicatorStyles(size)),
			...(variant === "gradient" && gradientStyles(color)),
			...(variant === "contained" && containedStyles(color)),
			...(!children && !container && standAloneStyles(color)),
			...(container && containerStyles(color)),
		},
	};
});

const SuiBadge = forwardRef(
	(
		{
			color,
			variant,
			size,
			circular,
			indicator,
			border,
			container,
			children,
			...rest
		},
		ref
	) => (
		<SuiBadgeRoot
			{...rest}
			ownerState={{
				color,
				variant,
				size,
				circular,
				indicator,
				border,
				container,
				children,
			}}
			ref={ref}
			color="default"
		>
			{children}
		</SuiBadgeRoot>
	)
);

// Setting default values for the props of SuiBadge
SuiBadge.defaultProps = {
	color: "info",
	variant: "gradient",
	size: "sm",
	circular: false,
	indicator: false,
	border: false,
	children: false,
	container: false,
};
function DefaultPricingCard({ badge, price, specifications, action }) {
	const renderSpecifications = specifications.map(({ label, includes }) => (
		<SuiBox key={label} display="flex" alignItems="center" p={1}>
			<SuiBox
				display="flex"
				justifyContent="center"
				alignItems="center"
				width="1.5rem"
				height="1.5rem"
				borderRadius="50%"
				shaodw="md"
				bgColor={includes ? "success" : "secondary"}
				variant="gradient"
				mr={2}
			>
				<SuiTypography
					variant="button"
					color="white"
					sx={{ lineHeight: 0 }}
				>
					<Icon sx={{ fontWeight: "bold" }}>
						{includes ? "done" : "remove"}
					</Icon>
				</SuiTypography>
			</SuiBox>
			<SuiTypography variant="body2" color="text">
				{label}
			</SuiTypography>
		</SuiBox>
	));

	return (
		<Card>
			<SuiBox pt={3} pb={2} px={2} textAlign="center">
				<SuiBadge
					variant="contained"
					color={badge.color}
					size="sm"
					badgeContent={badge.label}
					circular
					container
				/>
				<SuiBox my={1}>
					<SuiTypography variant="h1">
						<SuiTypography
							display="inline"
							component="small"
							variant="h2"
						>
							{price.currency}
						</SuiTypography>
						{price.value}
					</SuiTypography>
				</SuiBox>
			</SuiBox>
			<SuiBox pb={3} px={3}>
				{renderSpecifications}
				{action.type === "internal" ? (
					<SuiBox mt={3}>
						<SuiButton
							component={Link}
							to={action.route}
							variant="gradient"
							color={action.color}
							fullWidth
						>
							{action.label}&nbsp;
							<Icon sx={{ fontWeight: "bold" }}>
								arrow_forward
							</Icon>
						</SuiButton>
					</SuiBox>
				) : (
					<SuiBox mt={3}>
						<SuiButton
							component="a"
							href={action.route}
							target="_blank"
							rel="noreferrer"
							variant="gradient"
							color={action.color}
							fullWidth
						>
							{action.label}&nbsp;
							<Icon sx={{ fontWeight: "bold" }}>
								arrow_forward
							</Icon>
						</SuiButton>
					</SuiBox>
				)}
			</SuiBox>
		</Card>
	);
}

function DefaultPricingCard2({ badge, price, specifications, action }) {
	const renderSpecifications = specifications.map(({ label, includes }) => (
		<SuiBox key={label} display="flex" alignItems="center" p={1}>
			<SuiBox
				display="flex"
				justifyContent="center"
				alignItems="center"
				width="1.5rem"
				height="1.5rem"
				borderRadius="50%"
				shaodw="md"
				bgColor={includes ? "success" : "secondary"}
				variant="gradient"
				mr={2}
			>
				<SuiTypography
					variant="button"
					color="white"
					sx={{ lineHeight: 0 }}
				>
					{includes ? <DoneIcon /> : <RemoveIcon />}
					{/* <Icon sx={{ fontWeight: "bold" }}>
            {includes ? "done" : "remove"}
          </Icon> */}
				</SuiTypography>
			</SuiBox>
			<SuiTypography variant="body2" color="text">
				{label}
			</SuiTypography>
		</SuiBox>
	));

	return (
		<Card>
			<SuiBox pt={3} pb={2} px={2} textAlign="center">
				<SuiBadge
					variant="contained"
					color={badge.color}
					size="sm"
					badgeContent={badge.label}
					circular
					container
				/>
				<SuiBox my={1}>
					<SuiTypography variant="h1">{price.value}</SuiTypography>
				</SuiBox>
			</SuiBox>
			<SuiBox pb={3} px={3}>
				{renderSpecifications}
			</SuiBox>
		</Card>
	);
}

export function PillarCards({ array }) {
	return (
		<Grid container spacing={3} justifyContent="center">
			{/* <Grid container spacing={3}> */}
			{array.map((D, index) => {
				return (
					<Grid key={index} item xs={12} lg={4}>
						<DefaultPricingCard2 {...D} />
					</Grid>
				);
			})}
		</Grid>
	);
}

export function PricingCards({ prices }) {
	const [starter, premium, enterprise] = prices;
	return (
		<SuiBox position="relative" zIndex={10} mt={-19} px={{ xs: 1, sm: 0 }}>
			<Grid container spacing={3} justifyContent="center">
				<Grid item xs={12} lg={4}>
					<DefaultPricingCard
						badge={{ color: "secondary", label: "starter" }}
						price={{ currency: "$", value: starter }}
						specifications={[
							{ label: "2 team members", includes: true },
							{ label: "20GB Cloud storage", includes: true },
							{ label: "Integration help", includes: false },
							{ label: "Sketch Files", includes: false },
							{ label: "API Access", includes: false },
							{
								label: "Complete documentation",
								includes: false,
							},
						]}
						action={{
							type: "internal",
							route: "/",
							color: "dark",
							label: "join",
						}}
					/>
				</Grid>
				<Grid item xs={12} lg={4}>
					<DefaultPricingCard
						badge={{ color: "secondary", label: "premium" }}
						price={{ currency: "$", value: premium }}
						specifications={[
							{ label: "10 team members", includes: true },
							{ label: "40GB Cloud storage", includes: true },
							{ label: "Integration help", includes: true },
							{ label: "Sketch Files", includes: true },
							{ label: "API Access", includes: false },
							{
								label: "Complete documentation",
								includes: false,
							},
						]}
						action={{
							type: "internal",
							route: "/",
							color: "info",
							label: "join",
						}}
					/>
				</Grid>
				<Grid item xs={12} lg={4}>
					<DefaultPricingCard
						badge={{ color: "secondary", label: "enterprise" }}
						price={{ currency: "$", value: enterprise }}
						specifications={[
							{ label: "Unlimited team members", includes: true },
							{ label: "100GB Cloud storage", includes: true },
							{ label: "Integration help", includes: true },
							{ label: "Sketch Files", includes: true },
							{ label: "API Access", includes: true },
							{ label: "Complete documentation", includes: true },
						]}
						action={{
							type: "internal",
							route: "/",
							color: "dark",
							label: "join",
						}}
					/>
				</Grid>
			</Grid>
		</SuiBox>
	);
}

function Post() {
	const { borderWidth, borderColor } = borders;

	const [comments] = useState([
		{
			image: bruceMars,
			name: "michael lewis",
			text: "I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves!",
			like: 3,
			share: 2,
		},
		{
			image: team5,
			name: "jessica stones",
			text: "Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible to get a pure thought out. It’s like a little kid, a little boy.",
			like: 10,
			share: 1,
		},
	]);

	const renderComments = comments.map(
		({ image, name, text, like, share }, key) => (
			<SuiBox key={name} display="flex" mt={key === 0 ? 0 : 3}>
				<SuiBox flexShrink={0}>
					<SuiAvatar src={image} alt={name} />
				</SuiBox>
				<SuiBox flexGrow={1} ml={2}>
					<SuiTypography
						variant="h5"
						fontWeight="medium"
						textTransform="capitalize"
					>
						{name}
					</SuiTypography>
					<SuiBox mt={1} mb={2} lineHeight={0.75}>
						<SuiTypography
							variant="button"
							fontWeight="regular"
							color="text"
						>
							{text}
						</SuiTypography>
					</SuiBox>
					<SuiBox display="flex" flexWrap="wrap" alignItems="center">
						<SuiBox display="flex" alignItems="center" mr={1}>
							<SuiTypography
								component="a"
								href="#"
								variant="body2"
								color="text"
							>
								<Icon>thumb_up</Icon>&nbsp;
							</SuiTypography>
							<SuiTypography
								variant="button"
								fontWeight="regular"
								color="text"
							>
								{like} likes
							</SuiTypography>
						</SuiBox>
						<SuiBox display="flex" alignItems="center">
							<SuiTypography
								component="a"
								href="#"
								variant="body2"
								color="text"
							>
								<Icon>share</Icon>&nbsp;
							</SuiTypography>
							<SuiTypography
								variant="button"
								fontWeight="regular"
								color="text"
							>
								{share} shares
							</SuiTypography>
						</SuiBox>
					</SuiBox>
				</SuiBox>
			</SuiBox>
		)
	);

	return (
		<Card>
			<SuiBox
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				flexDirection={{ xs: "column", sm: "row" }}
				borderBottom={`${borderWidth[1]} solid ${borderColor}`}
				py={2}
				px={3}
			>
				<SuiAvatar src={team4} alt="profile-image" variant="rounded" />
				<SuiBox mx={2} lineHeight={1}>
					<SuiTypography
						component="a"
						href="#"
						variant="button"
						fontWeight="regular"
					>
						John Snow
					</SuiTypography>
					<SuiTypography
						component="div"
						variant="button"
						color="text"
						fontWeight="regular"
					>
						3 days ago
					</SuiTypography>
				</SuiBox>
				<SuiBox ml={{ xs: 0, sm: "auto" }} mt={{ xs: 2, sm: 0 }}>
					<SuiButton variant="gradient" color="info" size="small">
						<Icon sx={{ fontWeight: "bold" }}>add</Icon>&nbsp;
						follow
					</SuiButton>
				</SuiBox>
			</SuiBox>
			<SuiBox p={3}>
				<SuiBox mb={3}>
					<SuiTypography variant="body2" color="text">
						Personal profiles are the perfect way for you to grab
						their attention and persuade recruiters to continue
						reading your CV because you’re telling them from the off
						exactly why they should hire you.
					</SuiTypography>
				</SuiBox>
				<SuiBox
					component="img"
					src={workSpace}
					shadow="lg"
					borderRadius="xl"
					width="100%"
				/>
				<SuiBox mt={3} mb={1} px={1}>
					<Grid
						container
						justifyContent="space-between"
						alignItems="center"
					>
						<Grid item xs={12} sm={6}>
							<SuiBox display="flex" alignItems="center">
								<SuiBox
									display="flex"
									alignItems="center"
									mr={2}
								>
									<SuiTypography
										component="a"
										href="#"
										variant="body2"
										color="text"
									>
										<Icon>thumb_up</Icon>&nbsp;
									</SuiTypography>
									<SuiTypography
										variant="button"
										fontWeight="regular"
										color="text"
									>
										150
									</SuiTypography>
								</SuiBox>
								<SuiBox
									display="flex"
									alignItems="center"
									mr={2}
								>
									<SuiTypography
										component="a"
										href="#"
										variant="body2"
										color="text"
									>
										<Icon>mode_comment</Icon>&nbsp;
									</SuiTypography>
									<SuiTypography
										variant="button"
										fontWeight="regular"
										color="text"
									>
										36
									</SuiTypography>
								</SuiBox>
								<SuiBox
									display="flex"
									alignItems="center"
									mr={2}
								>
									<SuiTypography
										component="a"
										href="#"
										variant="body2"
										color="text"
									>
										<Icon>share</Icon>&nbsp;
									</SuiTypography>
									<SuiTypography
										variant="button"
										fontWeight="regular"
										color="text"
									>
										12
									</SuiTypography>
								</SuiBox>
							</SuiBox>
						</Grid>
						<Grid item xs={12} sm={6}>
							<SuiBox
								display={{ xs: "none", sm: "flex" }}
								justifyContent="flex-end"
								alignItems="center"
								width="100%"
							>
								<SuiAvatar
									src={team5}
									alt="person 1"
									size="xs"
								/>
								<SuiAvatar
									src={team2}
									alt="person 2"
									size="xs"
								/>
								<SuiAvatar
									src={team1}
									alt="person 3"
									size="xs"
								/>
								<SuiBox pl={1}>
									<SuiTypography
										variant="button"
										color="text"
										fontWeight="medium"
									>
										and 30+ more
									</SuiTypography>
								</SuiBox>
							</SuiBox>
						</Grid>
					</Grid>
					<Divider />
					{renderComments}
					<SuiBox display="flex" alignItems="center" mt={3}>
						<SuiBox flexShrink={0} mr={2}>
							<SuiAvatar src={team4} alt="profile picture" />
						</SuiBox>
						<SuiBox flexGrow={1}>
							<SuiInput
								placeholder="Write your comment"
								multiline
							/>
						</SuiBox>
					</SuiBox>
				</SuiBox>
			</SuiBox>
		</Card>
	);
}

export function Comments({ array }) {
	const { borderWidth, borderColor } = borders;
	const renderComments = array.map(({ image, name, text }, key) => (
		<SuiBox key={name} display="flex" mt={key === 0 ? 0 : 3}>
			<SuiBox flexShrink={0}>
				<SuiAvatar src={image} alt={name} />
			</SuiBox>
			<SuiBox flexGrow={1} ml={2}>
				<SuiTypography
					variant="h5"
					fontWeight="medium"
					textTransform="capitalize"
				>
					{name}
				</SuiTypography>
				<SuiBox mt={1} mb={2} lineHeight={0.75}>
					<SuiTypography
						variant="button"
						fontWeight="regular"
						color="text"
					>
						{text}
					</SuiTypography>
				</SuiBox>
			</SuiBox>
		</SuiBox>
	));

	return (
		<Card>
			<SuiBox p={3}>
				<SuiBox mt={3} mb={1} px={1}>
					{renderComments}
					<SuiBox display="flex" alignItems="center" mt={3}>
						<SuiBox flexShrink={0} mr={2}>
							{/* <SuiAvatar src={team4} alt="profile picture" /> */}
						</SuiBox>
						<SuiBox flexGrow={1}>
							<SuiInput
								placeholder="Write your comment"
								multiline
							/>
						</SuiBox>
					</SuiBox>
				</SuiBox>
			</SuiBox>
		</Card>
	);
}

const { gradients, dark } = colors;

function pieConfigs(labels, datasets) {
	const backgroundColors = [];

	if (datasets.backgroundColors) {
		datasets.backgroundColors.forEach((color) =>
			gradients[color]
				? backgroundColors.push(gradients[color].state)
				: backgroundColors.push(dark.main)
		);
	} else {
		backgroundColors.push(dark.main);
	}

	return {
		data: {
			labels,
			datasets: [
				{
					label: datasets.label,
					weight: 9,
					cutout: 0,
					tension: 0.9,
					pointRadius: 2,
					borderWidth: 2,
					backgroundColor: backgroundColors,
					fill: false,
					data: datasets.data,
				},
			],
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: {
					display: false,
				},
			},
			interaction: {
				intersect: false,
				mode: "index",
			},
			scales: {
				y: {
					grid: {
						drawBorder: false,
						display: false,
						drawOnChartArea: false,
						drawTicks: false,
					},
					ticks: {
						display: false,
					},
				},
				x: {
					grid: {
						drawBorder: false,
						display: false,
						drawOnChartArea: false,
						drawTicks: false,
					},
					ticks: {
						display: false,
					},
				},
			},
		},
	};
}

export function PieChart({ title, description, height, chart }) {
	const { data, options } = pieConfigs(
		chart.labels || [],
		chart.datasets || {}
	);

	const renderChart = (
		<SuiBox p={2}>
			{title || description ? (
				<SuiBox px={description ? 1 : 0} pt={description ? 1 : 0}>
					{title && (
						<SuiBox mb={1}>
							<SuiTypography variant="h6">{title}</SuiTypography>
						</SuiBox>
					)}
					<SuiBox mb={2}>
						<SuiTypography
							component="div"
							variant="button"
							fontWeight="regular"
							color="text"
						>
							{description}
						</SuiTypography>
					</SuiBox>
				</SuiBox>
			) : null}
			{useMemo(
				() => (
					<SuiBox height={height}>
						<Pie data={data} options={options} />
					</SuiBox>
				),
				[chart, height]
			)}
		</SuiBox>
	);

	return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of PieChart
PieChart.defaultProps = {
	title: "",
	description: "",
	height: "19.125rem",
};

function loadDataTable({
	buttons,
	idSrc,
	editor_fields,
	data,
	columns,
	id,
	create,
	update,
	remove,
	select_func,
	link_func,
}) {
	const [editor_object, updateEditorObject] = useState(
		editor_object_create({ id, idSrc, editor_fields })
	);
	useEffect(() => {
		try {
			if (!$.fn.DataTable.isDataTable("#" + id)) {
				initiate_table_save({
					editor: editor_object,
					id,
					select_func,
					data,
					columns,
					link_func,
					buttons,
				});
				refresh_actions({
					editor: editor_object,
					create,
					update,
					remove,
				});
			} else {
				refresh_table({ id, data });
				refresh_actions({
					editor: editor_object,
					create,
					update,
					remove,
				});
			}
		} catch (err) {
			console.log({ err });
		}
	}, [
		idSrc,
		editor_fields,
		data,
		columns,
		id,
		create,
		update,
		remove,
		select_func,
	]);
}
export const DataTablePage = ({ id, columns, data, title, sub_title }) => {
	const table_dict = dataTableDictCreateCRUDBase({
		id,
		data,
		columns,
	});
	loadDataTable({ ...table_dict });
	return (
		<PropsContext.Provider value={{}}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<PageLayout>
					<SuiBox py={3}>
						<SuiBox marginBottom={3}>
							<Grid container>
								<Grid item xs={12} lg={12}>
									<SuiBox mb={3} p={1}>
										<SuiTypography
											variant={"h1"}
											textTransform="capitalize"
											fontWeight="bold"
										>
											<div
												dangerouslySetInnerHTML={{
													__html: title,
												}}
											></div>
										</SuiTypography>
										<SuiTypography variant={"h4"}>
											<div
												dangerouslySetInnerHTML={{
													__html: sub_title,
												}}
											></div>
											{/* {pageData["description"] || ""} */}
										</SuiTypography>
									</SuiBox>
								</Grid>
							</Grid>
						</SuiBox>
						<table
							className="table table-striped table-bordered table-hover"
							style={{ width: "100%" }}
							id={id}
						></table>
					</SuiBox>
				</PageLayout>
			</ThemeProvider>
		</PropsContext.Provider>
	);
};

function CameraView({ image, date, time, value, index }) {
	const { size } = typography;

	return (
		value === index && (
			<Fade in timeout={850}>
				<SuiBox
					width="100%"
					height="100%"
					position="relative"
					borderRadius="lg"
				>
					<SuiBox
						component="img"
						src={image}
						position="absolute"
						top={0}
						left={0}
						width="100%"
						height="100%"
						borderRadius="lg"
						sx={{ objectFit: "cover", objectPosition: "center" }}
					/>
					<SuiBox
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						position="absolute"
						top={0}
						left={0}
						width="calc(100% - 1rem)"
					>
						<SuiBox p={2}>
							<SuiTypography
								variant="h6"
								fontWeight="regular"
								color="white"
							>
								{date} &nbsp; {time}
							</SuiTypography>
						</SuiBox>
						<SuiBadge
							color="secondary"
							variant="contained"
							size="lg"
							badgeContent={
								<SuiBox display="flex" alignItems="center">
									<SuiBox
										color="error"
										lineHeight={0}
										fontSize={size.md}
									>
										<Icon>fiber_manual_record</Icon>
									</SuiBox>
									<SuiBox mb={-0.25} ml={0.25}>
										<SuiTypography
											component="span"
											variant="caption"
											color="text"
											fontWeight="bold"
											textTransform="uppercase"
										>
											recording
										</SuiTypography>
									</SuiBox>
								</SuiBox>
							}
						/>
					</SuiBox>
				</SuiBox>
			</Fade>
		)
	);
}
function Cameras({ camera1, camera2, camera3 }) {
	const [tabsOrientation, setTabsOrientation] = useState("horizontal");
	const [openMenu, setOpenMenu] = useState(null);
	const [camera, setCamera] = useState(0);

	useEffect(() => {
		// A function that sets the orientation state of the tabs.
		function handleTabsOrientation() {
			return window.innerWidth < breakpoints.values.md
				? setTabsOrientation("vertical")
				: setTabsOrientation("horizontal");
		}

		/** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
		window.addEventListener("resize", handleTabsOrientation);

		// Call the handleTabsOrientation function to set the state with the initial value.
		handleTabsOrientation();

		// Remove event listener on cleanup
		return () =>
			window.removeEventListener("resize", handleTabsOrientation);
	}, [tabsOrientation]);

	const handleSetCamera = (event, newCamera) => setCamera(newCamera);
	const handleOpenMenu = ({ currentTarget }) => setOpenMenu(currentTarget);
	const handleCloseMenu = () => setOpenMenu(null);

	const renderMenu = () => (
		<Menu
			anchorEl={openMenu}
			anchorOrigin={{ vertical: "top", horizontal: "left" }}
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={Boolean(openMenu)}
			onClose={handleCloseMenu}
		>
			<MenuItem onClick={handleCloseMenu}>Pause</MenuItem>
			<MenuItem onClick={handleCloseMenu}>Stop</MenuItem>
			<MenuItem onClick={handleCloseMenu}>Schedule</MenuItem>
			<SuiBox
				component="div"
				bgColor="secondary"
				opacity={0.3}
				width="100%"
				height="1px"
				my={1}
			/>
			<MenuItem onClick={handleCloseMenu}>
				<SuiTypography variant="inherit" color="error">
					Remove
				</SuiTypography>
			</MenuItem>
		</Menu>
	);

	return (
		<Card>
			<SuiBox
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				pt={2}
				px={2}
			>
				<SuiTypography variant="h6">Cameras</SuiTypography>
				<SuiBox
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					width="60%"
				>
					<SuiBox width="90%">
						<AppBar position="static">
							<Tabs
								orientation={tabsOrientation}
								value={camera}
								onChange={handleSetCamera}
							>
								<Tab label="Kitchen" />
								<Tab label="Living" />
								<Tab label="Attic" />
							</Tabs>
						</AppBar>
					</SuiBox>
					{renderMenu()}
					<SuiTypography
						color="text"
						onClick={handleOpenMenu}
						sx={{ lineHeight: 0, cursor: "pointer" }}
					>
						<Icon fontSize="default">more_vert</Icon>
					</SuiTypography>
				</SuiBox>
			</SuiBox>
			<SuiBox p={2} mt={1} width="100%" height="26.25rem">
				<CameraView
					image={camera1}
					date="17.05.2021"
					time="4:34PM"
					value={camera}
					index={0}
				/>
				<CameraView
					image={camera2}
					date="17.05.2021"
					time="4:35PM"
					value={camera}
					index={1}
				/>
				<CameraView
					image={camera3}
					date="17.05.2021"
					time="4:57PM"
					value={camera}
					index={2}
				/>
			</SuiBox>
		</Card>
	);
}

function ImageView({ image, text, value, index }) {
	const { size } = typography;

	return (
		value === index && (
			<Fade in timeout={850}>
				<SuiBox
					width="100%"
					height="100%"
					position="relative"
					borderRadius="lg"
				>
					<SuiBox
						component="img"
						src={image}
						position="absolute"
						top={0}
						left={0}
						width="100%"
						height="100%"
						borderRadius="lg"
						sx={{ objectFit: "cover", objectPosition: "center" }}
					/>
					<SuiBox
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						position="absolute"
						top={0}
						left={0}
						width="calc(100% - 1rem)"
					>
						<SuiBox p={2}>
							<SuiTypography
								variant="h6"
								fontWeight="regular"
								color="white"
							>
								{text}
							</SuiTypography>
						</SuiBox>
						{/* <SuiBadge
              color="secondary"
              variant="contained"
              size="lg"
              badgeContent={
                <SuiBox display="flex" alignItems="center">
                  <SuiBox color="error" lineHeight={0} fontSize={size.md}>
                    <Icon>fiber_manual_record</Icon>
                  </SuiBox>
                  <SuiBox mb={-0.25} ml={0.25}>
                    <SuiTypography
                      component="span"
                      variant="caption"
                      color="text"
                      fontWeight="bold"
                      textTransform="uppercase"
                    >
                      recording
                    </SuiTypography>
                  </SuiBox>
                </SuiBox>
              }
            /> */}
					</SuiBox>
				</SuiBox>
			</Fade>
		)
	);
}
function ImageSliderCard({
	image1,
	image2,
	image3,
	title,
	label1,
	label2,
	label3,
	image1Text,
	image2Text,
	image3Text,
}) {
	const [tabsOrientation, setTabsOrientation] = useState("horizontal");
	const [openMenu, setOpenMenu] = useState(null);
	const [camera, setCamera] = useState(0);

	useEffect(() => {
		// A function that sets the orientation state of the tabs.
		function handleTabsOrientation() {
			return window.innerWidth < breakpoints.values.md
				? setTabsOrientation("vertical")
				: setTabsOrientation("horizontal");
		}

		/** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
		window.addEventListener("resize", handleTabsOrientation);

		// Call the handleTabsOrientation function to set the state with the initial value.
		handleTabsOrientation();

		// Remove event listener on cleanup
		return () =>
			window.removeEventListener("resize", handleTabsOrientation);
	}, [tabsOrientation]);

	const handleSetCamera = (event, newCamera) => setCamera(newCamera);
	const handleOpenMenu = ({ currentTarget }) => setOpenMenu(currentTarget);
	const handleCloseMenu = () => setOpenMenu(null);

	const renderMenu = () => (
		<Menu
			anchorEl={openMenu}
			anchorOrigin={{ vertical: "top", horizontal: "left" }}
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={Boolean(openMenu)}
			onClose={handleCloseMenu}
		>
			<MenuItem onClick={handleCloseMenu}>Pause</MenuItem>
			<MenuItem onClick={handleCloseMenu}>Stop</MenuItem>
			<MenuItem onClick={handleCloseMenu}>Schedule</MenuItem>
			<SuiBox
				component="div"
				bgColor="secondary"
				opacity={0.3}
				width="100%"
				height="1px"
				my={1}
			/>
			<MenuItem onClick={handleCloseMenu}>
				<SuiTypography variant="inherit" color="error">
					Remove
				</SuiTypography>
			</MenuItem>
		</Menu>
	);

	return (
		<Card>
			<SuiBox
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				pt={2}
				px={2}
			>
				<SuiTypography variant="h6">{title || ""}</SuiTypography>
				<SuiBox
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					width="60%"
				>
					<SuiBox width="90%">
						<AppBar position="static">
							<Tabs
								orientation={tabsOrientation}
								value={camera}
								onChange={handleSetCamera}
							>
								<Tab label={label1 || "Notifications"} />
								<Tab label={label2 || "Recording"} />
								<Tab label={label3 || "Events"} />
							</Tabs>
						</AppBar>
					</SuiBox>
					{renderMenu()}
					<SuiTypography
						color="text"
						onClick={handleOpenMenu}
						sx={{ lineHeight: 0, cursor: "pointer" }}
					>
						<MenuIcon fontSize="default"></MenuIcon>
						{/* <Icon fontSize="default">more_vert</Icon> */}
					</SuiTypography>
				</SuiBox>
			</SuiBox>
			<SuiBox p={2} mt={1} width="100%" height="26.25rem">
				<ImageView
					image={image1}
					text={image1Text}
					date="17.05.2021"
					time="4:34PM"
					value={camera}
					index={0}
				/>
				<ImageView
					image={image2}
					text={image2Text}
					date="17.05.2021"
					time="4:35PM"
					value={camera}
					index={1}
				/>
				<ImageView
					image={image3}
					text={image3Text}
					date="17.05.2021"
					time="4:57PM"
					value={camera}
					index={2}
				/>
			</SuiBox>
		</Card>
	);
}

function WeatherCard({ color, title, weather, icon }) {
	return (
		<Card>
			<SuiBox
				bgColor={color}
				p={2}
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				variant="gradient"
			>
				<Grid container spacing={2} alignItems="center">
					<Grid item xs={8} sx={{ lineHeight: 0 }}>
						<SuiTypography
							variant="button"
							color={color === "light" ? "dark" : "white"}
							textTransform="capitalize"
							fontWeight="medium"
							opacity={0.7}
						>
							{title}
						</SuiTypography>
						<SuiTypography
							variant="h5"
							color={color === "light" ? "dark" : "white"}
							fontWeight="bold"
						>
							{weather.location} - {weather.degree}&deg;C
						</SuiTypography>
					</Grid>
					<Grid item xs={4}>
						<SuiBox
							display="flex"
							flexDirection="column"
							alignItems="center"
						>
							<SuiBox
								component="img"
								src={icon.component}
								width="50%"
								ml="auto"
								alt="weather icon"
							/>
							<SuiBox ml="auto" mr={1}>
								<SuiTypography
									variant="h5"
									color={color === "light" ? "dark" : "white"}
									textTransform="capitalize"
								>
									{icon.text}
								</SuiTypography>
							</SuiBox>
						</SuiBox>
					</Grid>
				</Grid>
			</SuiBox>
		</Card>
	);
}

// Setting default values for the props of WeatherCard
WeatherCard.defaultProps = {
	color: "info",
};

function ColorCard({ color, title, icon }) {
	return (
		<Card>
			<SuiBox
				bgColor={color}
				p={2}
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				variant="gradient"
			>
				<Grid container spacing={2} alignItems="center">
					<Grid item xs={8} sx={{ lineHeight: 0 }}>
						<SuiTypography
							variant="h5"
							color={color === "light" ? "dark" : "white"}
							textTransform="capitalize"
							fontWeight="bold"
						>
							{title}
						</SuiTypography>
					</Grid>
				</Grid>
			</SuiBox>
		</Card>
	);
}

// Setting default values for the props of WeatherCard
ColorCard.defaultProps = {
	color: "info",
};

function DefaultCounterCard({
	color,
	count,
	title,
	description,
	prefix,
	suffix,
}) {
	return (
		<Card>
			<SuiBox p={3} textAlign="center" lineHeight={1.25}>
				<SuiTypography
					variant="h1"
					color={color}
					fontWeight="bold"
					textGradient
				>
					{prefix && (
						<SuiTypography
							component="span"
							variant="h5"
							fontWeight="bold"
						>
							{prefix}
						</SuiTypography>
					)}
					<SuiBox display="inline-block" mx={0.5}>
						<CountUp end={count} duration={1} separator="," />
					</SuiBox>
					{suffix && (
						<SuiTypography
							component="span"
							variant="h5"
							fontWeight="bold"
						>
							{suffix}
						</SuiTypography>
					)}
				</SuiTypography>
				<SuiTypography
					variant="h6"
					fontWeight="bold"
					textTransform="capitalize"
				>
					{title}
				</SuiTypography>
				{description && (
					<SuiTypography
						variant="button"
						fontWeight="regular"
						opacity={0.8}
						textTransform="capitalize"
					>
						{description}
					</SuiTypography>
				)}
			</SuiBox>
		</Card>
	);
}

// Setting default values for the props of DefaultCounterCard
DefaultCounterCard.defaultProps = {
	color: "info",
	prefix: "",
	suffix: "",
	description: "",
};

function DefaultTextCard({ color, count, title, subTitle, prefix, suffix }) {
	return (
		<Card>
			<SuiBox p={3} textAlign="center" lineHeight={1.25}>
				<SuiTypography
					variant="h6"
					fontWeight="bold"
					textTransform="capitalize"
				>
					{title}
				</SuiTypography>
				{subTitle && (
					<SuiTypography
						variant="button"
						fontWeight="regular"
						opacity={0.8}
						textTransform="capitalize"
					>
						{subTitle}
					</SuiTypography>
				)}
			</SuiBox>
		</Card>
	);
}

// Setting default values for the props of DefaultCounterCard
DefaultTextCard.defaultProps = {
	color: "info",
	prefix: "",
	suffix: "",
	description: "",
};
const PageTextCards = ({ array }) => {
	return (
		<Fragment>
			{array.map((D, key) => (
				<Grid item xs={12} md={6} key={key}>
					<DefaultTextCard
						title={D.title}
						subTitle={D.subTitle || ""}
					/>
				</Grid>
			))}
		</Fragment>
	);
};

const AlteryxPageCards = ({ headerCard, cardsArray }) => {
	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				{/* <WeatherCard
          title="weather today"
          weather={{ location: "San Francisco", degree: 29 }}
          icon={{ component: "iconSunCloud", text: "cloudy" }}
        /> */}
				<ColorCard title={headerCard.title} />
			</Grid>
			<PageTextCards array={cardsArray} />
			{/* <Grid item xs={12} md={6}>
        <DefaultCounterCard
          count={21}
          suffix={<>&deg;C</>}
          title="living room"
          description="temperature"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <DefaultCounterCard
          count={44}
          suffix="%"
          title="outside"
          description="humidity"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <DefaultCounterCard
          count={87}
          suffix="m³"
          title="water"
          description="consumption"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <DefaultCounterCard
          count={417}
          suffix="GB"
          title="internet"
          description="all devices"
        />
      </Grid> */}
		</Grid>
	);
};
export const AlteryxPage = ({
	title,
	sub_title,
	brand,
	brandName,
	routes,
	imageCardConfig,
	cardTilesConfig,
	navTitle,
}) => {
	const [controller, setController] = useState({
		miniSidenav: false,
		transparentSidenav: true,
		sidenavColor: "info",
		transparentNavbar: true,
		fixedNavbar: true,
		openConfigurator: false,
		direction: "ltr",
		layout: "dashboard",
	});
	return (
		<PropsContext.Provider value={{}}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Sidenav
					controller={controller}
					setController={setController}
					color={controller.sidenavColor}
					brand={brand}
					brandName={brandName}
					routes={routes}
				/>
				<DashboardLayout controller={controller}>
					<DashboardNavbarAlteryx
						controller={controller}
						onAccountClick={() => {
							console.log("clicik");
						}}
						setController={setController}
						title={navTitle || ""}
					/>
					<SuiBox py={3}>
						<SuiBox marginBottom={3}>
							<Grid container spacing={3}>
								<Grid item xs={12} xl={7}>
									<ImageSliderCard {...imageCardConfig} />
								</Grid>
								<Grid item xs={12} xl={5}>
									<AlteryxPageCards {...cardTilesConfig} />
								</Grid>
							</Grid>
						</SuiBox>
						<SuiBox marginBottom={3}>
							<Grid container spacing={3}>
								<Grid item xs={12} lg={6}>
									<DefaultTextCard
										title={"Upcoming Trainings"}
										subTitle={""}
									/>
								</Grid>
								<Grid item xs={12} sm={6} lg={3}>
									<DefaultTextCard
										title={"External Help Links"}
										subTitle={""}
									/>
								</Grid>
								<Grid item xs={12} sm={6} lg={3}>
									<DefaultTextCard
										title={"Demographics"}
										subTitle={""}
									/>
								</Grid>
							</Grid>
						</SuiBox>
					</SuiBox>
				</DashboardLayout>
			</ThemeProvider>
		</PropsContext.Provider>
	);
};
export const DashboardLayOutBase = ({ brand, brandName, routes, children }) => {
	const [controller, setController] = useState({
		miniSidenav: false,
		transparentSidenav: true,
		sidenavColor: "info",
		transparentNavbar: true,
		fixedNavbar: true,
		openConfigurator: false,
		direction: "ltr",
		layout: "dashboard",
	});
	return (
		<PropsContext.Provider value={{}}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Sidenav
					controller={controller}
					setController={setController}
					color={controller.sidenavColor}
					brand={brand || ""}
					brandName={brandName || ""}
					routes={routes || []}
				/>
				<DashboardLayout controller={controller}>
					<DashboardNavbar
						controller={controller}
						onAccountClick={() => {
							console.log("clicik");
						}}
						setController={setController}
					/>
					<SuiBox py={3}>
						<SuiBox marginBottom={3}>{children}</SuiBox>
					</SuiBox>
				</DashboardLayout>
			</ThemeProvider>
		</PropsContext.Provider>
	);
};
export const PayLayoutBase = ({ children }) => {
	return (
		<PropsContext.Provider value={{}}>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<PageLayout>{children}</PageLayout>
			</ThemeProvider>
		</PropsContext.Provider>
	);
};

function loadDataTableSharePoint({
	buttons,
	idSrc,
	editor_fields,
	data,
	columns,
	id,
	create,
	update,
	remove,
	select_func,
	link_func,
}) {
	const [editor_object, updateEditorObject] = useState(
		editor_object_create_inline({ id, idSrc, editor_fields })
	);
	useEffect(() => {
		try {
			if (!$.fn.DataTable.isDataTable("#" + id)) {
				initiate_table_save_sharepoint({
					editor: editor_object,
					id,
					select_func,
					data,
					columns,
					link_func,
					buttons,
				});
				refresh_actions({
					editor: editor_object,
					create,
					update,
					remove,
				});
			} else {
				refresh_table({ id, data });
				refresh_actions({
					editor: editor_object,
					create,
					update,
					remove,
				});
			}
		} catch (err) {
			console.log({ err });
		}
	}, [
		idSrc,
		editor_fields,
		data,
		columns,
		id,
		create,
		update,
		remove,
		select_func,
	]);
}
export const AirTablePageBasic = ({
	title,
	sub_title,
	brand,
	brandName,
	routes,
	dataTables,
}) => {
	const [tab, setTab] = useState(0);
	const setTabClick = (event, newTab) => setTab(newTab);
	const renderTabs = () => (
		<Tabs orientation={"horizontal"} value={tab} onChange={setTabClick}>
			{dataTables.map((dataTableDict, key) => (
				<Tab key={key} label={dataTableDict.title} />
			))}
		</Tabs>
	);

	const renderTables = () => (
		<Fragment>
			{dataTables.map((dataTableDict, key) => (
				<div key={key} style={{ display: key == tab ? "" : "none" }}>
					<table
						className="table table-striped table-bordered table-hover"
						style={{ width: "100%" }}
						id={dataTableDict.id}
					></table>
				</div>
			))}
		</Fragment>
	);

	dataTables.forEach(function (dataTableDict) {
		const table_dict = dataTableDictCreateCRUDBase({
			id: dataTableDict.id,
			data: dataTableDict.data,
			columns: dataTableDict.columns,
		});
		loadDataTableSharePoint({ ...table_dict });
	});
	return (
		<DashboardLayOutBase
			brand={brand}
			brandName={brandName}
			routes={routes}
		>
			<Grid container spacing={3}>
				<Grid item xs={12} xl={12}>
					<Card>
						<SuiBox
							display="flex"
							justifyContent="space-between"
							alignItems="center"
							pt={2}
							px={2}
						>
							<SuiTypography variant="h6">
								{title || ""}
							</SuiTypography>
							<SuiBox
								display="flex"
								justifyContent="space-between"
								alignItems="center"
								width="60%"
							>
								<SuiBox width="90%">
									<AppBar position="static">
										{renderTabs()}
									</AppBar>
								</SuiBox>
							</SuiBox>
						</SuiBox>
						<SuiBox p={2} mt={1} width="100%" height="26.25rem">
							{renderTables()}
						</SuiBox>
					</Card>
				</Grid>
			</Grid>
		</DashboardLayOutBase>
	);
};

const HeaderTabs = ({ title, subTitle, imageSrc, tabsArray }) => {
	// const [tabsOrientation, setTabsOrientation] = useState("horizontal");
	// const [tabValue, setTabValue] = useState(0);
	// const handleSetTabValue = (event, newValue) => setTabValue(newValue);

	const [tab, setTab] = useState(0);
	const setTabClick = (event, newTab) => {
		setTab(newTab);
		const tabDict = tabsArray[newTab];

		console.log({ newTab, tabDict });
		tabDict["func"]();
	};
	const renderTabs = () => (
		<Tabs
			orientation={"horizontal"}
			value={tab}
			onChange={setTabClick}
			sx={{ background: "transparent" }}
		>
			{tabsArray.map((D, key) => (
				<Tab
					key={key}
					label={D.title}
					icon={<IconFromName name={D.icon} />}
				/>
			))}
		</Tabs>
	);

	return (
		<Card
			sx={{
				backdropFilter: `saturate(200%) blur(30px)`,
				backgroundColor: ({
					functions: { rgba },
					palette: { white },
				}) => rgba(white.main, 0.8),
				boxShadow: ({ boxShadows: { navbarBoxShadow } }) =>
					navbarBoxShadow,
				position: "relative",
				// mt: -8,
				mx: 3,
				py: 2,
				px: 2,
			}}
		>
			<Grid container spacing={3} alignItems="center">
				<Grid item>
					<SuiAvatar
						src={
							imageSrc ||
							sharepointURLDirectoryDefine() +
								"dependencies/code/png/mtd_icon.png"
						}
						alt="profile-image"
						variant="rounded"
						size="xl"
						shadow="sm"
					/>
				</Grid>
				<Grid item>
					<SuiBox height="100%" mt={0.5} lineHeight={1}>
						<SuiTypography variant="h5" fontWeight="medium">
							{title || ""}
						</SuiTypography>
						<SuiTypography
							variant="button"
							color="text"
							fontWeight="medium"
						>
							{subTitle || ""}
						</SuiTypography>
					</SuiBox>
				</Grid>
				<Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
					<AppBar position="static">
						{renderTabs()}

						{/* <Tabs
              orientation={tabsOrientation}
              value={tabValue}
              onChange={handleSetTabValue}
              sx={{ background: "transparent" }}
            >
              <Tab label="App" icon={<Cube />} />
              <Tab label="Message" icon={<Document />} />
              <Tab label="Settings" icon={<Settings />} />
            </Tabs> */}
					</AppBar>
				</Grid>
			</Grid>
		</Card>
	);
};
export const MTDDashboardPage = ({
	title,
	subTitle,
	brand,
	brandName,
	routes,
	tables,
	metrics,
	dataTable,
	status,
	people,
	jiraDataTables,
	headerTabsConfig,
	configurationDict,
}) => {
	const renderMetrics = () => (
		<Grid container spacing={3}>
			{metrics.map((tableDict, key) => (
				<Grid item key={key} xs={12} sm={6} lg={3}>
					<MiniStatisticsCard
						bgColor="white"
						title={{
							text: tableDict.title || "",
							fontWeight: "bold",
						}}
						count={tableDict.metric || ""}
						percentage={{
							color: "error",
							text: "",
						}}
						icon={<IconFromName name={tableDict.icon || ""} />}
					/>
				</Grid>
			))}
			<Grid item xs={12} sm={6} lg={3}>
				<SuiBox>
					<BackgroundBlogCardNoButton {...status} />
				</SuiBox>
			</Grid>
		</Grid>
	);
	const renderTables = () => (
		<Grid container spacing={3}>
			{tables.map((tableDict, key) => (
				<Grid key={key} item xs={12} lg={4}>
					<SuiTableClick
						rows={tableDict.rows || []}
						headers={tableDict.headers || []}
						title={tableDict.title || ""}
						{...tableDict}
					/>
				</Grid>
			))}
		</Grid>
	);
	console.log(jiraDataTables);
	return (
		<PayLayoutBase brand={brand} brandName={brandName} routes={routes}>
			<SuiBox py={3}>
				<SuiBox marginBottom={3}>
					<HeaderTabs {...headerTabsConfig} />
				</SuiBox>
				{/* <SuiBox marginBottom={3}>
          <Grid container>
            <Grid item xs={12} lg={12}>
              <SuiBox mb={3} p={1}>
                <SuiTypography
                  variant={"h1"}
                  textTransform="capitalize"
                  fontWeight="bold"
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: title || "",
                    }}
                  ></div>
                </SuiTypography>
                <SuiTypography variant={"h4"}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: subTitle || "",
                    }}
                  ></div>
                </SuiTypography>
              </SuiBox>
            </Grid>
          </Grid>
        </SuiBox> */}
				<SuiBox marginBottom={3}>{renderMetrics()}</SuiBox>
				{/* <SuiBox marginBottom={3}>
          <Stories storiesData={people} />
        </SuiBox> */}

				<SuiBox marginBottom={3}>{renderTables()}</SuiBox>

				<SuiBox marginBottom={3}>
					<AirTablePageBaseRead
						title={jiraDataTables.title || ""}
						dataTables={jiraDataTables.dataTables || []}
					/>
				</SuiBox>
				{/* <SuiBox marginBottom={3}>
          <AirTablePageBase
            title={dataTable.title || ""}
            dataTables={dataTable.dataTables || []}
          />
        </SuiBox> */}
				<SuiBox marginBottom={3}>
					<Grid container spacing={3}>
						<Grid item xs={12} lg={6}></Grid>
					</Grid>
				</SuiBox>
			</SuiBox>
			<ConfigurationButton
				onClick={configurationDict.onClick}
				icon={configurationDict.icon}
			/>
		</PayLayoutBase>
	);
};
export const AirTablePageBaseRead = ({ title, dataTables }) => {
	const [tab, setTab] = useState(0);
	const setTabClick = (event, newTab) => setTab(newTab);
	const renderTabs = () => (
		<Tabs orientation={"horizontal"} value={tab} onChange={setTabClick}>
			{dataTables.map((dataTableDict, key) => (
				<Tab key={key} label={dataTableDict.title} />
			))}
		</Tabs>
	);

	const renderTables = () => (
		<Fragment>
			{dataTables.map((dataTableDict, key) => (
				<span key={key} style={{ display: key == tab ? "" : "none" }}>
					<table
						// className="table-react"
						className="table-react table table-striped table-bordered table-hover"
						style={{ width: "100%" }}
						id={dataTableDict.id}
					></table>
				</span>
			))}
		</Fragment>
	);
	dataTables.forEach(function (dataTableDict) {
		datatables_determine_create_update(
			"#" + dataTableDict.id,
			dataTableDict.table_dict,
			dataTableDict.table_dict.data
		);

		// loadDataTableSharePoint({ ...dataTableDict.table_dict });
	});
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} xl={12}>
				<Card>
					<SuiBox
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						pt={2}
						px={2}
					>
						<SuiTypography variant="h6">
							{title || ""}
						</SuiTypography>
						<SuiBox
							display="flex"
							justifyContent="space-between"
							alignItems="center"
							width="60%"
						>
							<SuiBox width="90%">
								<AppBar position="static">
									{renderTabs()}
								</AppBar>
							</SuiBox>
						</SuiBox>
					</SuiBox>
					<SuiBox p={2} mt={1}>
						{renderTables()}
					</SuiBox>
				</Card>
			</Grid>
		</Grid>
	);
};
export const AirTablePageBase = ({ title, dataTables }) => {
	const [tab, setTab] = useState(0);
	const setTabClick = (event, newTab) => setTab(newTab);
	const renderTabs = () => (
		<Tabs orientation={"horizontal"} value={tab} onChange={setTabClick}>
			{dataTables.map((dataTableDict, key) => (
				<Tab key={key} label={dataTableDict.title} />
			))}
		</Tabs>
	);

	const renderTables = () => (
		<Fragment>
			{dataTables.map((dataTableDict, key) => (
				<span key={key} style={{ display: key == tab ? "" : "none" }}>
					<table
						// className="table-react"
						className="table-react table table-striped table-bordered table-hover"
						style={{ width: "100%" }}
						id={dataTableDict.id}
					></table>
				</span>
			))}
		</Fragment>
	);
	dataTables.forEach(function (dataTableDict) {
		loadDataTableSharePoint({ ...dataTableDict.table_dict });
	});
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} xl={12}>
				<Card>
					<SuiBox
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						pt={2}
						px={2}
					>
						<SuiTypography variant="h6">
							{title || ""}
						</SuiTypography>
						<SuiBox
							display="flex"
							justifyContent="space-between"
							alignItems="center"
							width="60%"
						>
							<SuiBox width="90%">
								<AppBar position="static">
									{renderTabs()}
								</AppBar>
							</SuiBox>
						</SuiBox>
					</SuiBox>
					<SuiBox p={2} mt={1}>
						{renderTables()}
					</SuiBox>
				</Card>
			</Grid>
		</Grid>
	);
};
export const AirTablePage = ({
	title,
	sub_title,
	brand,
	brandName,
	routes,
	dataTables,
}) => {
	const [tab, setTab] = useState(0);
	const setTabClick = (event, newTab) => setTab(newTab);
	const renderTabs = () => (
		<Tabs orientation={"horizontal"} value={tab} onChange={setTabClick}>
			{dataTables.map((dataTableDict, key) => (
				<Tab key={key} label={dataTableDict.title} />
			))}
		</Tabs>
	);

	const renderTables = () => (
		<Fragment>
			{dataTables.map((dataTableDict, key) => (
				<span key={key} style={{ display: key == tab ? "" : "none" }}>
					<table
						// className="table-react"
						className="table-react table table-striped table-bordered table-hover"
						style={{ width: "100%" }}
						id={dataTableDict.id}
					></table>
				</span>
			))}
		</Fragment>
	);
	dataTables.forEach(function (dataTableDict) {
		loadDataTableSharePoint({ ...dataTableDict.table_dict });
	});
	return (
		<PayLayoutBase brand={brand} brandName={brandName} routes={routes}>
			<Grid container spacing={3}>
				<Grid item xs={12} xl={12}>
					<Card>
						<SuiBox
							display="flex"
							justifyContent="space-between"
							alignItems="center"
							pt={2}
							px={2}
						>
							<SuiTypography variant="h6">
								{title || ""}
							</SuiTypography>
							<SuiBox
								display="flex"
								justifyContent="space-between"
								alignItems="center"
								width="60%"
							>
								<SuiBox width="90%">
									<AppBar position="static">
										{renderTabs()}
									</AppBar>
								</SuiBox>
							</SuiBox>
						</SuiBox>
						<SuiBox p={2} mt={1}>
							{renderTables()}
						</SuiBox>
					</Card>
				</Grid>
			</Grid>
		</PayLayoutBase>
	);
};

export const MaterialTablesPage = ({
	title,
	sub_title,
	brand,
	brandName,
	routes,
	dataTables,
}) => {
	const [tab, setTab] = useState(0);
	const setTabClick = (event, newTab) => setTab(newTab);
	const renderTabs = () => (
		<Tabs orientation={"horizontal"} value={tab} onChange={setTabClick}>
			{dataTables.map((dataTableDict, key) => (
				<Tab key={key} label={dataTableDict.title} />
			))}
		</Tabs>
	);

	const renderTables = () => (
		<Fragment>
			{dataTables.map((dataTableDict, key) => (
				<div
					key={key}
					style={{
						maxWidth: "100%",
						display: key == tab ? "" : "none",
					}}
				>
					<MaterialTable {...dataTableDict.table_dict} />
				</div>
			))}
		</Fragment>
	);

	// dataTables.forEach(function (dataTableDict) {
	//   loadDataTableSharePoint({ ...dataTableDict.table_dict });
	// });

	return (
		<DashboardLayOutBase
			brand={brand}
			brandName={brandName}
			routes={routes}
		>
			<Grid container spacing={3}>
				<Grid item xs={12} xl={12}>
					<Card>
						<SuiBox
							display="flex"
							justifyContent="space-between"
							alignItems="center"
							pt={2}
							px={2}
						>
							<SuiTypography variant="h6">
								{title || ""}
							</SuiTypography>
							<SuiBox
								display="flex"
								justifyContent="space-between"
								alignItems="center"
								width="60%"
							>
								<SuiBox width="90%">
									<AppBar position="static">
										{renderTabs()}
									</AppBar>
								</SuiBox>
							</SuiBox>
						</SuiBox>
						<SuiBox p={2} mt={1}>
							{renderTables()}
						</SuiBox>
					</Card>
				</Grid>
			</Grid>
		</DashboardLayOutBase>
	);
};
export const SimpleTextPage = ({ title, subTitle }) => {
	return (
		<PayLayoutBase>
			<Grid container>
				<Grid item xs={12} lg={12}>
					<SuiBox
						display={{ xs: "none", lg: "flex" }}
						flexDirection="column"
						// justifyContent="center"
						alignItems="center"
						height="calc(100vh - 2rem)"
						position="relative"
						borderRadius="lg"
						// textAlign="center"
						variant="gradient"
						m={2}
					>
						<SuiBox mt={6} mb={1}>
							<SuiTypography variant="h2" fontWeight="bold">
								{title}
							</SuiTypography>
							<SuiTypography variant="h4">
								{subTitle}
							</SuiTypography>
						</SuiBox>
					</SuiBox>
				</Grid>
			</Grid>
		</PayLayoutBase>
	);
};

export const ThankYouPage = ({ titlex, descriptionx }) => {
	const pattern = "/dependencies/code/img/pattern-lines.svg";
	//
	const color = "info";
	const header = "";
	const title = "";
	const description = "";
	const illustration = {
		image: "/dependencies/code/img/chat.png",
		title: "Tenant Portal",
		description: "Insight into each Tenant",
	};
	return (
		<PageLayout background="white">
			<Grid container>
				<Grid item xs={12} lg={6}>
					<SuiBox
						display={{ xs: "none", lg: "flex" }}
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						width="calc(100% - 2rem)"
						height="calc(100vh - 2rem)"
						position="relative"
						borderRadius="lg"
						textAlign="center"
						bgColor={color}
						variant="gradient"
						m={2}
						px={13}
						sx={{ overflow: "hidden" }}
					>
						<SuiBox
							component="img"
							src={pattern}
							alt="pattern-lines"
							width="120rem"
							position="absolute"
							topl={0}
							left={0}
							opacity={0.4}
						/>
						{illustration.image && (
							<SuiBox
								component="img"
								src={illustration.image}
								alt="chat-illustration"
								width="100%"
								maxWidth="31.25rem"
							/>
						)}
						{illustration.title && (
							<SuiBox mt={6} mb={1}>
								<SuiTypography
									variant="h4"
									color="white"
									fontWeight="bold"
								>
									{illustration.title}
								</SuiTypography>
							</SuiBox>
						)}
						{illustration.description && (
							<SuiBox mb={1}>
								<SuiTypography variant="body2" color="white">
									{illustration.description}
								</SuiTypography>
							</SuiBox>
						)}
					</SuiBox>
				</Grid>
				<Grid
					item
					xs={11}
					sm={8}
					md={6}
					lg={4}
					xl={3}
					sx={{ mx: "auto" }}
				>
					{/* <SuiBox
                    display="flex"
                    //   flexDirection="column"
                    justifyContent="center"
                    height="100vh" */}
					{/* > */}
					<SuiBox
						display={{ xs: "none", lg: "flex" }}
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						width="calc(100% - 2rem)"
						height="calc(100vh - 2rem)"
						position="relative"
						borderRadius="lg"
						textAlign="center"
						//   bgColor={color}
						variant="gradient"
						m={2}
						//   px={13}
						//   sx={{ overflow: "hidden" }}
					>
						{/* <SuiDataTable
                      node={"tenant"}
                      id={"tenant_table2"}
                      columns={tenantTableColumnsDefine()}
                    /> */}

						{/* <SuiTableBase {...TenantPortalFeaturesTable()}></SuiTableBase> */}
					</SuiBox>
				</Grid>
			</Grid>
		</PageLayout>
	);
};

function verticalBarChartConfigs(labels, datasets) {
	return {
		data: {
			labels,
			datasets: [...datasets],
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: {
					display: false,
				},
			},
			scales: {
				y: {
					grid: {
						drawBorder: false,
						display: true,
						drawOnChartArea: true,
						drawTicks: false,
						borderDash: [5, 5],
					},
					ticks: {
						display: true,
						padding: 10,
						color: "#9ca2b7",
						font: {
							size: 11,
							family: typography.fontFamily,
							style: "normal",
							lineHeight: 2,
						},
					},
				},
				x: {
					grid: {
						drawBorder: false,
						display: false,
						drawOnChartArea: true,
						drawTicks: true,
					},
					ticks: {
						display: true,
						color: "#9ca2b7",
						padding: 10,
						font: {
							size: 11,
							family: typography.fontFamily,
							style: "normal",
							lineHeight: 2,
						},
					},
				},
			},
		},
	};
}

function VerticalBarChart({ title, description, height, chart }) {
	const chartDatasets = chart.datasets
		? chart.datasets.map((dataset) => ({
				...dataset,
				weight: 5,
				borderWidth: 0,
				borderRadius: 4,
				backgroundColor: colors[dataset.color]
					? colors[dataset.color || "dark"].main
					: colors.dark.main,
				fill: false,
				maxBarThickness: 35,
		  }))
		: [];

	const { data, options } = verticalBarChartConfigs(
		chart.labels || [],
		chartDatasets
	);

	const renderChart = (
		<SuiBox p={2}>
			{title || description ? (
				<SuiBox px={description ? 1 : 0} pt={description ? 1 : 0}>
					{title && (
						<SuiBox mb={1}>
							<SuiTypography variant="h6">{title}</SuiTypography>
						</SuiBox>
					)}
					<SuiBox mb={2}>
						<SuiTypography
							component="div"
							variant="button"
							fontWeight="regular"
							color="text"
						>
							{description}
						</SuiTypography>
					</SuiBox>
				</SuiBox>
			) : null}
			{useMemo(
				() => (
					<SuiBox height={height}>
						<Bar data={data} options={options} />
					</SuiBox>
				),
				[chart, height]
			)}
		</SuiBox>
	);

	return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of VerticalBarChart
VerticalBarChart.defaultProps = {
	title: "",
	description: "",
	height: "19.125rem",
};

function horizontalBarConfigs(labels, datasets) {
	return {
		data: {
			labels,
			datasets: [...datasets],
		},
		options: {
			indexAxis: "y",
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: {
					display: false,
				},
			},
			scales: {
				y: {
					grid: {
						drawBorder: false,
						display: true,
						drawOnChartArea: true,
						drawTicks: false,
						borderDash: [5, 5],
					},
					ticks: {
						display: true,
						padding: 10,
						color: "#9ca2b7",
						font: {
							size: 11,
							family: typography.fontFamily,
							style: "normal",
							lineHeight: 2,
						},
					},
				},
				x: {
					grid: {
						drawBorder: false,
						display: false,
						drawOnChartArea: true,
						drawTicks: true,
					},
					ticks: {
						display: true,
						color: "#9ca2b7",
						padding: 10,
						font: {
							size: 11,
							family: typography.fontFamily,
							style: "normal",
							lineHeight: 2,
						},
					},
				},
			},
		},
	};
}

function HorizontalBarChart({ title, description, height, chart }) {
	const chartDatasets = chart.datasets
		? chart.datasets.map((dataset) => ({
				...dataset,
				weight: 5,
				borderWidth: 0,
				borderRadius: 4,
				backgroundColor: colors[dataset.color]
					? colors[dataset.color || "dark"].main
					: colors.dark.main,
				fill: true,
				maxBarThickness: 35,
		  }))
		: [];

	const { data, options } = horizontalBarConfigs(
		chart.labels || [],
		chartDatasets
	);
	const renderChart = (
		<SuiBox p={2}>
			{title || description ? (
				<SuiBox px={description ? 1 : 0} pt={description ? 1 : 0}>
					{title && (
						<SuiBox mb={1}>
							<SuiTypography variant="h6">{title}</SuiTypography>
						</SuiBox>
					)}
					<SuiBox mb={2}>
						<SuiTypography
							component="div"
							variant="button"
							fontWeight="regular"
							color="text"
						>
							{description}
						</SuiTypography>
					</SuiBox>
				</SuiBox>
			) : null}
			{useMemo(
				() => (
					<SuiBox height={height}>
						<Bar data={data} options={options} />
					</SuiBox>
				),
				[chart, height]
			)}
		</SuiBox>
	);

	return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of HorizontalBarChart
HorizontalBarChart.defaultProps = {
	title: "",
	description: "",
	height: "19.125rem",
};

export const HorizontalBarChartExample = ({ title, subTitle }) => {
	const chart = {
		labels: ["16-20", "21-25", "26-30", "31-36", "36-42", "42+"],
		datasets: [
			{
				label: "Sales by age",
				color: "dark",
				data: [15, 20, 12, 60, 20, 15],
			},
		],
	};

	const verticalChartData = {
		labels: ["16-20", "21-25", "26-30", "31-36", "36-42", "42+"],
		datasets: [
			{
				label: "Sales by age",
				color: "dark",
				data: [15, 20, 12, 60, 20, 15],
			},
		],
	};

	return (
		<PayLayoutBase>
			<SuiBox marginBottom={3}>
				<HorizontalBarChart title={"example2"} chart={chart} />
			</SuiBox>
			<SuiBox marginBottom={3}>
				<VerticalBarChart title={"example"} chart={verticalChartData} />
			</SuiBox>
		</PayLayoutBase>
	);
};

function RankingListOriginal({ title, date, rankings }) {
	const renderRankings = rankings.map(
		({ color, icon, name, description, value }, key) => (
			<SuiBox key={name} component="li" pt={1} pr={2}>
				<SuiBox
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					<SuiBox display="flex" alignItems="center">
						<SuiBox mr={2}>
							<SuiButton
								variant="outlined"
								color={color}
								size="small"
								iconOnly
								circular
								sx={({ functions: { pxToRem } }) => ({
									width: pxToRem(34),
									minWidth: pxToRem(34),
									height: pxToRem(34),
									minHeight: pxToRem(34),
								})}
							>
								<IconFromName name={icon}></IconFromName>
								{/* <Icon>{icon}</Icon> */}
							</SuiButton>
						</SuiBox>
						<SuiBox display="flex" flexDirection="column">
							<SuiTypography
								variant="button"
								fontWeight="medium"
								gutterBottom
							>
								{name}
							</SuiTypography>
							<SuiTypography variant="caption" color="text">
								{description}
							</SuiTypography>
						</SuiBox>
					</SuiBox>
					<SuiTypography
						variant="button"
						color={color}
						fontWeight="medium"
						textGradient
					>
						{value}
					</SuiTypography>
				</SuiBox>
				{key === rankings.length - 1 ? null : (
					<Divider
						sx={{
							mt: 2,
							mb: 1,
						}}
					/>
				)}
			</SuiBox>
		)
	);

	return (
		<Card sx={{ height: "100%" }}>
			<SuiBox
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				pt={2}
				px={2}
			>
				<SuiTypography
					variant="h6"
					fontWeight="medium"
					textTransform="capitalize"
				>
					{title}
				</SuiTypography>
				<SuiTypography
					variant="button"
					color="text"
					fontWeight="regular"
					sx={{ display: "flex" }}
				>
					{/* <Icon
						color="inherit"
						fontSize="small"
						sx={{
							mr: 0.75,
							mt: -0.125,
						}}
					>
						date_range
					</Icon> */}
					{/* <IconFromName name={"date_range"}></IconFromName> */}
					{date}
				</SuiTypography>
			</SuiBox>
			<SuiBox p={2}>
				<SuiBox
					component="ul"
					display="flex"
					flexDirection="column"
					p={0}
					m={0}
					sx={{ listStyle: "none" }}
				>
					{renderRankings}
				</SuiBox>
			</SuiBox>
		</Card>
	);
}
function RankingListWithIcon({ title, rightTitle, array }) {
	const renderRankings = array.map(
		({ color, icon, name, description, value }, key) => (
			<SuiBox key={name} component="li" pt={1} pr={2}>
				<SuiBox
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					<SuiBox display="flex" alignItems="center">
						<SuiBox mr={2}>
							<SuiButton
								variant="outlined"
								color={color}
								size="small"
								iconOnly
								circular
								sx={({ functions: { pxToRem } }) => ({
									width: pxToRem(34),
									minWidth: pxToRem(34),
									height: pxToRem(34),
									minHeight: pxToRem(34),
								})}
							>
								<IconFromName name={icon}></IconFromName>
								{/* <Icon>{icon}</Icon> */}
							</SuiButton>
						</SuiBox>
						<SuiBox display="flex" flexDirection="column">
							<SuiTypography
								variant="button"
								fontWeight="medium"
								gutterBottom
							>
								{name}
							</SuiTypography>
							<SuiTypography variant="caption" color="text">
								{description}
							</SuiTypography>
						</SuiBox>
					</SuiBox>
					<SuiTypography
						variant="button"
						color={color}
						fontWeight="medium"
						textGradient
					>
						{value}
					</SuiTypography>
				</SuiBox>
				{key === array.length - 1 ? null : (
					<Divider
						sx={{
							mt: 2,
							mb: 1,
						}}
					/>
				)}
			</SuiBox>
		)
	);

	return (
		<Card sx={{ height: "100%" }}>
			<SuiBox
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				pt={2}
				px={2}
			>
				<SuiTypography
					variant="h6"
					fontWeight="medium"
					textTransform="capitalize"
				>
					{title}
				</SuiTypography>
				<SuiTypography
					variant="button"
					color="text"
					fontWeight="regular"
					sx={{ display: "flex" }}
				>
					{/* <Icon
						color="inherit"
						fontSize="small"
						sx={{
							mr: 0.75,
							mt: -0.125,
						}}
					>
						date_range
					</Icon> */}
					{/* <IconFromName name={"date_range"}></IconFromName> */}
					{rightTitle}
				</SuiTypography>
			</SuiBox>
			<SuiBox p={2}>
				<SuiBox
					component="ul"
					display="flex"
					flexDirection="column"
					p={0}
					m={0}
					sx={{ listStyle: "none" }}
				>
					{renderRankings}
				</SuiBox>
			</SuiBox>
		</Card>
	);
}

function RankingList({ title, rightTitle, array }) {
	const renderRankings = array.map(
		({ color, icon, name, description, value }, key) => (
			<SuiBox key={name} component="li" pt={1} pr={2}>
				<SuiBox
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					<SuiBox display="flex" alignItems="center">
						<SuiBox display="flex" flexDirection="column">
							<SuiTypography
								variant="button"
								fontWeight="medium"
								gutterBottom
							>
								{name}
							</SuiTypography>
							<SuiTypography variant="caption" color="text">
								{description}
							</SuiTypography>
						</SuiBox>
					</SuiBox>
					<SuiTypography
						variant="button"
						color={color}
						fontWeight="medium"
						textGradient
					>
						{value}
					</SuiTypography>
				</SuiBox>
				{key === array.length - 1 ? null : (
					<Divider
						sx={{
							mt: 2,
							mb: 1,
						}}
					/>
				)}
			</SuiBox>
		)
	);

	return (
		<Card sx={{ height: "100%" }}>
			<SuiBox
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				pt={2}
				px={2}
			>
				<SuiTypography
					variant="h6"
					fontWeight="medium"
					textTransform="capitalize"
				>
					{title}
				</SuiTypography>
				<SuiTypography
					variant="button"
					color="text"
					fontWeight="regular"
					sx={{ display: "flex" }}
				>
					{/* <Icon
						color="inherit"
						fontSize="small"
						sx={{
							mr: 0.75,
							mt: -0.125,
						}}
					>
						date_range
					</Icon> */}
					{/* <IconFromName name={"date_range"}></IconFromName> */}
					{rightTitle}
				</SuiTypography>
			</SuiBox>
			<SuiBox p={2}>
				<SuiBox
					component="ul"
					display="flex"
					flexDirection="column"
					p={0}
					m={0}
					sx={{ listStyle: "none" }}
				>
					{renderRankings}
				</SuiBox>
			</SuiBox>
		</Card>
	);
}

export const RankingListExample = () => {
	const transactionsData = [
		{
			color: "error",
			icon: "arrow_downward",
			name: "Netflix",
			description: "27 March 2020, at 12:30 PM",
			value: "- $ 2,500",
		},
		{
			color: "success",
			icon: "arrow_upward",
			name: "Apple",
			description: "23 March 2020, at 04:30 AM",
			value: "+ $ 2,000",
		},
		{
			color: "success",
			icon: "arrow_upward",
			name: "Partner #22213",
			description: "19 March 2020, at 02:50 AM",
			value: "- $ 1,400",
		},
	];

	const revenueData = [
		{
			color: "success",
			icon: "arrow_upward",
			name: "via PayPal",
			description: "07 June 2021, at 09:00 AM",
			value: "+ $ 4,999",
		},
		{
			color: "success",
			icon: "arrow_upward",
			name: "Partner #90211",
			description: "07 June 2021, at 05:50 AM",
			value: "+ $ 700",
		},
		{
			color: "error",
			icon: "arrow_downward",
			name: "Services",
			description: "07 June 2021, at 07:10 PM",
			value: "- $ 1,800",
		},
	];
	return (
		<PayLayoutBase>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<RankingList
						title="transactions"
						rightTitle="23 - 30 March 2021"
						array={transactionsData}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<RankingList
						title="revenue"
						rightTitle="01 - 07 June 2021"
						array={revenueData}
					/>
				</Grid>
			</Grid>
		</PayLayoutBase>
	);
};

export const BnbDashboardPage = ({ title, subTitle }) => {
	return (
		<PayLayoutBase>
			<SuiBox py={3}>
				<SuiBox marginBottom={3}>
					<Grid container>
						<Grid item xs={12} lg={12}>
							<SuiBox mb={3} p={1}>
								<SuiTypography
									variant={"h1"}
									textTransform="capitalize"
									fontWeight="bold"
								>
									<div
										dangerouslySetInnerHTML={{
											__html: title || "",
										}}
									></div>
								</SuiTypography>
								<SuiTypography variant={"h4"}>
									<div
										dangerouslySetInnerHTML={{
											__html: subTitle || "",
										}}
									></div>
								</SuiTypography>
							</SuiBox>
						</Grid>
					</Grid>
				</SuiBox>
			</SuiBox>
		</PayLayoutBase>
	);
};

const SurveyPageText = ({ title, text }) => {
	return (
		<Fragment>
			<SuiBox mb={1}>
				<SuiTypography variant="h3" fontWeight="bold">
					{title}
				</SuiTypography>
			</SuiBox>
			<SuiTypography variant="h5" fontWeight="regular" color="secondary">
				{text}
			</SuiTypography>
		</Fragment>
	);
};

const SurveyPageInput = ({ title, text, id, setValue, value }) => {
	const onChange = ({ currentTarget }) => {
		const inputValue = currentTarget.value;
		setValue(inputValue);
	};
	return (
		<Fragment>
			<SuiBox mb={1}>
				<SuiTypography variant="h3" fontWeight="bold">
					{text}
				</SuiTypography>
			</SuiBox>
			<SuiBox mt={3} mb={3}>
				<SuiInput onChange={onChange} value={value} />
			</SuiBox>
		</Fragment>
	);
};

const SurveyPageSelect = ({ title, text, id, options, setValue, value }) => {
	const onChange = (value) => {
		setValue(value);
	};

	return (
		<SuiSelectElementSingle
			text={title || ""}
			description={text || ""}
			defaultValue={value}
			options={options}
			onChange={onChange}
		/>
	);
};
export const BnbSurveyPage = ({ questionsArray }) => {
	const [step, setStep] = useState(0);
	// const [questionState, setQuestionState] = useState(questionsArray[0]);
	function getQuestionContent() {
		const questionDict = questionsArray[step];
		switch (questionDict["type"]) {
			case "text":
				return <SurveyPageText {...questionDict} />;
			case "input":
				return <SurveyPageInput {...questionDict} />;
			case "select":
				return <SurveyPageSelect {...questionDict} />;
			default:
				return null;
		}
	}

	const BackNextButtons = () => (
		<SuiBox mt={4}>
			<SuiButton
				variant="gradient"
				color="dark"
				onClick={() => {
					setStep(step + 1);
				}}
			>
				Next
			</SuiButton>
		</SuiBox>
	);

	return (
		<PayLayoutBase>
			<SuiBox py={3}>
				<SuiBox mt={20} mb={3} textAlign="center">
					{getQuestionContent()}
					{step != questionsArray.length - 1
						? BackNextButtons()
						: null}
				</SuiBox>
			</SuiBox>
		</PayLayoutBase>
	);
};
export const LoginPage = ({ title, subTitle }) => {
	return (
		<PayLayoutBase>
			<SuiBox py={3}>
				<SuiBox marginBottom={3}>
					<Grid container>
						<Grid item xs={12} lg={12}>
							<SuiBox mb={3} p={1}>
								<SuiTypography
									variant={"h1"}
									textTransform="capitalize"
									fontWeight="bold"
								>
									<div
										dangerouslySetInnerHTML={{
											__html: title || "",
										}}
									></div>
								</SuiTypography>
								<SuiTypography variant={"h4"}>
									<div
										dangerouslySetInnerHTML={{
											__html: subTitle || "",
										}}
									></div>
								</SuiTypography>
							</SuiBox>
						</Grid>
					</Grid>
				</SuiBox>
			</SuiBox>
		</PayLayoutBase>
	);
};

function circularSlider(theme, { color }) {
	const { palette, transitions } = theme;

	const { circleSliderColors, transparent } = palette;

	return {
		"& svg": {
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: `translate(-50%, -40%)`,
		},

		"& path:first-of-type": {
			stroke: circleSliderColors.background,
			strokeWidth: 1,
		},

		"& path": {
			stroke: palette[color].main,
			strokeWidth: 1,
		},

		"& circle": {
			stroke: transparent.main,
			strokeWidth: 0,
			filter: "none",
			fill: palette[color].main,
			cursor: "pointer",
			transition: transitions.create(["stroke", "stroke-width"], {
				easing: transitions.easing.easeInOut,
				duration: transitions.duration.complex,
			}),

			"&:active": {
				stroke: palette[color].main,
				strokeWidth: 5,
			},
		},
	};
}

function TemperatureSlider({
	title,
	color,
	current,
	label,
	start,
	end,
	...sliderProps
}) {
	const { circleSliderColors } = colors;

	return (
		<Card sx={{ height: "99.5%" }}>
			<SuiBox p={2} position="relative" height="100%">
				<SuiBox mb={1}>
					<SuiTypography variant="h6" fontWeight="medium">
						{title}
					</SuiTypography>
				</SuiBox>
				<SuiBox
					height="100%"
					textAlign="center"
					sx={(theme) => circularSlider(theme, { color })}
				>
					<CircularSlider
						{...sliderProps}
						arcBackgroundColor={circleSliderColors.background}
						arcColor={colors[color].main}
						startAngle={45}
						endAngle={315}
						handleSize={6}
						size={220}
					/>
					<SuiBox mt={12}>
						<SuiTypography variant="h4" fontWeight="medium">
							{current}
						</SuiTypography>
					</SuiBox>
					<SuiBox
						display="flex"
						justifyContent="space-around"
						alignItems="baseline"
						width="12.5rem"
						mx="auto"
						mt={6}
					>
						<SuiTypography variant="caption" color="text">
							{start}
						</SuiTypography>
						<SuiTypography
							variant="body2"
							color="text"
							textTransform="capitalize"
						>
							{label}
						</SuiTypography>
						<SuiTypography variant="caption" color="text">
							{end}
						</SuiTypography>
					</SuiBox>
				</SuiBox>
			</SuiBox>
		</Card>
	);
}

// Setting default values for the props of TemperatureSlider
TemperatureSlider.defaultProps = {
	color: "info",
};

export const TemperatureSliderExample = () => {
	const [temperature, setTemperature] = useState(21);

	return (
		<TemperatureSlider
			handle1={{
				value: temperature,
				onChange: (v) => setTemperature(Math.round(v)),
			}}
			title="Device limit"
			current={
				<>
					{temperature}
					<SuiTypography component="span" variant="h4" color="text">
						&deg;C
					</SuiTypography>
				</>
			}
			label="temperature"
			start={<>16&deg;C</>}
			end={<>38&deg;C</>}
			minValue={16}
			maxValue={38}
		/>
	);
};

function ThinBarChart({ color, title, height, chart }) {
	function configs(color, labels, datasets) {
		return {
			data: {
				labels,
				datasets: [
					{
						label: datasets.label,
						tension: 0.4,
						borderWidth: 0,
						borderRadius: 4,
						borderSkipped: false,
						backgroundColor: colors[color]
							? colors[color].main
							: colors.dark.main,
						data: datasets.data,
						maxBarThickness: 6,
					},
				],
			},

			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: false,
					},
				},
				interaction: {
					intersect: false,
					mode: "index",
				},
				scales: {
					y: {
						grid: {
							drawBorder: false,
							display: false,
							drawOnChartArea: false,
							drawTicks: false,
						},
						ticks: {
							display: false,
						},
					},
					x: {
						grid: {
							drawBorder: false,
							display: false,
							drawOnChartArea: false,
							drawTicks: false,
						},
						ticks: {
							beginAtZero: true,
							font: {
								size: 12,
								family: "Open Sans",
								style: "normal",
							},
							color: "#9ca2b7",
						},
					},
					y: {
						grid: {
							drawBorder: false,
							display: false,
							drawOnChartArea: true,
							drawTicks: false,
							borderDash: [5, 5],
						},
						ticks: {
							display: true,
							padding: 10,
							color: "#9ca2b7",
						},
					},
					x: {
						grid: {
							drawBorder: false,
							display: true,
							drawOnChartArea: true,
							drawTicks: false,
							borderDash: [5, 5],
						},
						ticks: {
							display: true,
							padding: 10,
							color: "#9ca2b7",
						},
					},
				},
			},
		};
	}
	const { data, options } = configs(
		color,
		chart.labels || [],
		chart.datasets || {}
	);

	const renderChart = (
		<SuiBox p={2}>
			{title && (
				<SuiBox mb={1}>
					<SuiTypography variant="h6" color={color}>
						{title}
					</SuiTypography>
				</SuiBox>
			)}
			{useMemo(
				() => (
					<SuiBox height={height} pt={2}>
						<Bar data={data} options={options} />
					</SuiBox>
				),
				[chart, height]
			)}
		</SuiBox>
	);

	return title ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of ThinBarChart
ThinBarChart.defaultProps = {
	color: "dark",
	title: "",
	height: "12.5rem",
};

function ReportsDoughnutChartItem({ color, title, percentage, hasBorder }) {
	const { borderWidth } = borders;
	const { light } = colors;

	return (
		<Grid
			container
			justifyContent="space-between"
			alignItems="center"
			sx={{
				borderBottom: hasBorder
					? `${borderWidth[1]} solid ${light.main}`
					: "none",
				lineHeight: 1.25,
			}}
		>
			<Grid item xs={10}>
				<SuiBox display="flex" py={0.8} px={2}>
					<SuiBox
						bgColor={color}
						width="1.35rem"
						height="1.35rem"
						borderRadius="md"
						mr={2}
						lineHeight={0}
						variant="gradient"
					/>
					<SuiBox
						display="flex"
						flexDirection="column"
						justifyContent="center"
					>
						<SuiTypography
							component="div"
							variant="button"
							textTransform="capitalize"
							fontWeight="medium"
						>
							{title}
						</SuiTypography>
					</SuiBox>
				</SuiBox>
			</Grid>
			<Grid item xs={2}>
				<SuiBox py={0.8} px={1} textAlign="center" width="100%">
					<SuiTypography
						variant="caption"
						color="text"
						fontWeight="medium"
						sx={{ display: "inline-block", width: "max-content" }}
					>
						{percentage}
					</SuiTypography>
				</SuiBox>
			</Grid>
		</Grid>
	);
}

// Setting default values for the props of ReportsDoughnutChartItem
ReportsDoughnutChartItem.defaultProps = {
	color: "info",
	hasBorder: false,
};

function ReportsDoughnutChart({ title, count, chart, tooltip }) {
	function configs(labels, datasets) {
		const backgroundColors = [];

		if (datasets.backgroundColors) {
			datasets.backgroundColors.forEach((color) =>
				gradients[color]
					? backgroundColors.push(gradients[color].state)
					: backgroundColors.push(dark.main)
			);
		} else {
			backgroundColors.push(dark.main);
		}

		return {
			data: {
				labels,
				datasets: [
					{
						label: datasets.label,
						weight: 9,
						cutout: 86,
						tension: 1,
						pointRadius: 2,
						borderWidth: 2,
						backgroundColor: backgroundColors,
						data: datasets.data,
						fill: false,
					},
				],
			},

			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: false,
					},
				},
				interaction: {
					intersect: false,
					mode: "index",
				},
				scales: {
					y: {
						grid: {
							drawBorder: false,
							display: false,
							drawOnChartArea: false,
							drawTicks: false,
						},
						ticks: {
							display: false,
						},
					},
					x: {
						grid: {
							drawBorder: false,
							display: false,
							drawOnChartArea: false,
							drawTicks: false,
						},
						ticks: {
							display: false,
						},
					},
				},
			},
		};
	}

	const { data, options } = configs(chart.labels || [], chart.datasets || {});

	const renderItems =
		chart.labels && chart.datasets
			? chart.labels.map((label, key) => (
					<ReportsDoughnutChartItem
						color={
							chart.datasets.backgroundColors
								? chart.datasets.backgroundColors[key]
								: "dark"
						}
						title={label}
						key={label}
						percentage={`${
							chart.datasets.data ? chart.datasets.data[key] : 0
						}%`}
						hasBorder={key !== chart.labels.length - 1}
					/>
			  ))
			: null;

	return (
		<Card>
			<SuiBox
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				pt={2}
				px={2}
			>
				<SuiTypography variant="h6">{title}</SuiTypography>
				<Tooltip title={tooltip} placement="bottom" arrow>
					<SuiButton
						variant="outlined"
						color="secondary"
						size="small"
						circular
						iconOnly
					>
						<Icon>priority_high</Icon>
					</SuiButton>
				</Tooltip>
			</SuiBox>
			<SuiBox p={2}>
				{useMemo(
					() => (
						<Grid container spacing={2}>
							<Grid item xs={12} sm={5}>
								<SuiBox
									height="100%"
									textAlign="center"
									position="relative"
								>
									<SuiBox
										height={{ xs: "65%", sm: "100%" }}
										mt={{ xs: 6, sm: 0 }}
									>
										<Doughnut
											data={data}
											options={options}
										/>
									</SuiBox>
									<SuiBox
										mt={{ xs: 0, sm: -15.25 }}
										position="relative"
										top={{ xs: "-8.25rem", sm: 0 }}
									>
										<SuiTypography
											variant="h4"
											fontWeight="medium"
										>
											{count.number}
										</SuiTypography>
										<SuiTypography
											variant="button"
											color="text"
											textTransform="uppercase"
											fontWeight="medium"
										>
											{count.text}
										</SuiTypography>
									</SuiBox>
								</SuiBox>
							</Grid>
							<Grid item xs={12} sm={7}>
								{renderItems}
							</Grid>
						</Grid>
					),
					[chart]
				)}
			</SuiBox>
		</Card>
	);
}

// Setting default values for the props of ReportsDoughnutChart
ReportsDoughnutChart.defaultProps = {
	tooltip: "",
};
export const SmallRowChartExample = () => {
	const thinBarChartData = {
		labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		datasets: {
			label: "Watts",
			data: [150, 230, 380, 220, 420, 200, 70, 500],
		},
	};
	const reportsDoughnutChartData = {
		labels: ["Living Room", "Kitchen", "Attic", "Garage", "Basement"],
		datasets: {
			label: "Consumption",
			backgroundColors: [
				"primary",
				"secondary",
				"info",
				"success",
				"warning",
			],
			data: [15, 20, 13, 32, 20],
		},
	};
	return (
		<SuiBox mb={3}>
			<Grid container spacing={3}>
				<Grid item xs={12} lg={6}>
					<ReportsDoughnutChart
						title="Consumption by room"
						count={{ number: 471.3, text: "whatts" }}
						chart={reportsDoughnutChartData}
						tooltip="See the consumption per room"
					/>
				</Grid>
				<Grid item xs={12} sm={6} lg={3}>
					<ThinBarChart
						title="Consumption per day"
						chart={thinBarChartData}
					/>
				</Grid>
				<Grid item xs={12} sm={6} lg={3}>
					{/* <TemperatureSliderExample /> */}
					{/* <TemperatureSlider
							handle1={{
								value: temperature,
								onChange: (v) => setTemperature(Math.round(v)),
							}}
							title="Device limit"
							current={
								<>
									{temperature}
									<SuiTypography
										component="span"
										variant="h4"
										color="text"
									>
										&deg;C
									</SuiTypography>
								</>
							}
							label="temperature"
							start={<>16&deg;C</>}
							end={<>38&deg;C</>}
							minValue={16}
							maxValue={38}
						/> */}
				</Grid>
			</Grid>
		</SuiBox>
	);
};
const SuiProgressRoot = styled(LinearProgress)(({ theme, ownerState }) => {
	const { palette, functions } = theme;
	const { color, value, variant } = ownerState;

	const { text, gradients } = palette;
	const { linearGradient } = functions;

	// background value
	let backgroundValue;

	if (variant === "gradient") {
		backgroundValue = gradients[color]
			? linearGradient(gradients[color].main, gradients[color].state)
			: linearGradient(gradients.info.main, gradients.info.state);
	} else {
		backgroundValue = palette[color]
			? palette[color].main
			: palette.info.main;
	}

	return {
		"& .MuiLinearProgress-bar": {
			background: backgroundValue,
			width: `${value}%`,
			color: text.main,
		},
	};
});
const SuiProgress = forwardRef(
	({ variant, color, value, label, ...rest }, ref) => (
		<>
			{label && (
				<SuiTypography
					variant="button"
					fontWeight="medium"
					color="text"
				>
					{value}%
				</SuiTypography>
			)}
			<SuiProgressRoot
				{...rest}
				ref={ref}
				variant="determinate"
				value={value}
				ownerState={{ color, value, variant }}
			/>
		</>
	)
);

// Setting default values for the props of SuiProgress
SuiProgress.defaultProps = {
	variant: "contained",
	color: "info",
	value: 0,
	label: false,
};

function SocialItem({ icon, title, percentage }) {
	const { socialMediaColors } = colors;
	const { size } = typography;

	return (
		<SuiBox width="100%" py={1} mb={1}>
			<SuiBox display="flex" justifyContent="space-between" mb={1}>
				<SuiBox display="flex" alignItems="center" lineHeight={0}>
					<SuiBox
						mr={1}
						color={socialMediaColors[icon.color].main}
						fontSize={size.lg}
					>
						{icon.component}
					</SuiBox>
					<SuiTypography
						variant="button"
						fontWeight="medium"
						color="text"
					>
						{title}
					</SuiTypography>
				</SuiBox>
				<SuiTypography
					variant="button"
					fontWeight="medium"
					color="text"
				>
					{percentage}%
				</SuiTypography>
			</SuiBox>
			<SuiProgress value={percentage} color="dark" />
		</SuiBox>
	);
}

function Social() {
	return (
		<Card sx={{ height: "100%" }}>
			<SuiBox
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				pt={2}
				px={2}
			>
				<SuiTypography variant="h6">Social</SuiTypography>
				<Tooltip
					title="See how much traffic do you get from social media"
					placement="bottom"
				>
					<SuiButton
						variant="outlined"
						color="secondary"
						size="small"
						circular
						iconOnly
					>
						<IconFromName name={"priority_high"}></IconFromName>
						{/* <Icon>priority_high</Icon> */}
					</SuiButton>
				</Tooltip>
			</SuiBox>
			<SuiBox p={2}>
				<SocialItem
					icon={{
						color: "facebook",
						component: <IconFromName name={""} />,
					}}
					title="Facebook"
					percentage={80}
				/>
				<SocialItem
					icon={{
						color: "twitter",
						component: <IconFromName name={""} />,
					}}
					title="Facebook"
					percentage={40}
				/>
				<SocialItem
					icon={{
						color: "reddit",
						component: <IconFromName name={""} />,
					}}
					title="Reddit"
					percentage={30}
				/>
				<SocialItem
					icon={{
						color: "youtube",
						component: <IconFromName name={""} />,
					}}
					title="Youtube"
					percentage={25}
				/>
				<SocialItem
					icon={{
						color: "instagram",
						component: <IconFromName name={""} />,
					}}
					title="Instagram"
					percentage={15}
				/>
			</SuiBox>
		</Card>
	);
}

export const SocialExample = () => {
	return (
		<SuiBox mb={3}>
			<Grid container spacing={3}>
				<Grid item xs={12} lg={6}>
					<Social />
				</Grid>
				<Grid item xs={12} lg={6}>
					<Pages />
				</Grid>
			</Grid>
		</SuiBox>
	);
};
function Separator() {
	return (
		<SuiBox position="relative" py={0.25}>
			<Divider />
			<SuiBox
				bgColor="white"
				position="absolute"
				top="50%"
				left="50%"
				px={1.5}
				lineHeight={1}
				sx={{ transform: "translate(-50%, -60%)" }}
			>
				<SuiTypography
					variant="button"
					fontWeight="medium"
					color="secondary"
				>
					or
				</SuiTypography>
			</SuiBox>
		</SuiBox>
	);
}

export const BasicSignIn = ({ signInClick }) => {
	const [rememberMe, setRememberMe] = useState(false);

	return (
		<BasicLayout
			title="Welcome!"
			description="Use these awesome forms to login or create new account in your project for free."
			image={""}
		>
			<Card>
				<SuiBox p={3}>
					<SuiBox component="form" role="form">
						<SuiBox mt={4} mb={1}>
							<SuiButton
								variant="gradient"
								color="info"
								fullWidth
								onClick={signInClick}
							>
								Sign in with Google
							</SuiButton>
						</SuiBox>
					</SuiBox>
				</SuiBox>
			</Card>
		</BasicLayout>
	);
};

export const Sandbox = () => {
	return (
		<PayLayoutBase>
			<SocialExample />
			<SmallRowChartExample />
			<HorizontalBarChartExample />
			<RankingListExample />;
		</PayLayoutBase>
	);
	// return <SocialExample />;
	// return <SmallRowChartExample />;
	// return <RankingListExample />;
	// return <HorizontalBarChartExample />;
};
export default Sandbox;
