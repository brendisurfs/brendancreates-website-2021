import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import {
	Box,
	ChakraProvider,
	Container,
	Flex,
	ColorModeScript,
} from "@chakra-ui/react";
import { theme } from "./style/styles";
//CUSTOM COMPONENTS
//	|
//	v
import Header from "./components/Header";

//ROUTES
//	|
//	v
import about from "./pages/about";
import projects from "./pages/projects";
import contact from "./pages/contact";
import home from "./pages/home";
import ThreeCanvas from "./components/ThreeCanvas";

//TYPES
//	|
//	v
export type RouteItem = {
	path: string;
	name: string;
	Component: () => JSX.Element;
};
export const routes: RouteItem[] = [
	{ path: "/", name: "/", Component: home },
	{ path: "/contact", name: "Contact", Component: contact },
	{ path: "/about", name: "About", Component: about },
	{ path: "/projects", name: "Projects", Component: projects },
];

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Router>
				<Header routes={routes} />
				<Container className="container">
					{routes.map(({ path, Component }) => (
						<AnimatedSwitch
							className="switch-wrapper"
							atEnter={{ opacity: 0, scale: 0 }}
							atLeave={{ opacity: 0, scale: 0 }}
							atActive={{ opacity: 1, scale: 1 }}
						>
							<Route key={path} exact path={path}>
								<Component />
							</Route>
						</AnimatedSwitch>
					))}
				</Container>
			</Router>
		</ChakraProvider>
	);
}

export default App;
