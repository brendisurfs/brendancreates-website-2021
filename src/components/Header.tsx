// NOTES
// Want to make the desktop navbar have some sort of distortion fx on hover.

import { Flex, HStack, LinkBox, Text } from "@chakra-ui/react";
import React, { Component, useState } from "react";
import * as fiber from "@react-three/fiber";
import "../style/opacity.css";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Link } from "react-router-dom";

//TYPES
//	|
//	v
import { RouteItem } from "../App";

const spin = {
	transform: "rotate(-90deg)",
};

function Header({ routes }: { routes: RouteItem[] }) {
	const [isMobile] = useMediaQuery("max-width: 760px");
	return (
		<Flex className="headerdiv" flexDir="row" p={2} justify="space-between">
			{/* TITLE AND NAME */}
			<Flex p={2} alignItems="center">
				<Text p={1} textStyle="h1" textTransform="uppercase">
					<Link to="/">brendan prednis </Link>
				</Text>
				{/* SUBTITLE */}
				<Text textStyle="h3" pr={8} fontSize="24px">
					<Link to="/">
						| Software Developer + Audio Visual Artist
					</Link>
				</Text>
			</Flex>

			<HStack
				zIndex={1}
				className="rotated-stack"
				position="fixed"
				right={-24}
				top={32}
				style={spin}
				m={2}
			>
				{routes.map((route) => (
					<LinkBox textStyle="link" _hover={{ color: "black" }} p={2}>
						<Link to={route.path}>{route.name}</Link>
					</LinkBox>
				))}
			</HStack>
		</Flex>
	);
}

export default Header;
