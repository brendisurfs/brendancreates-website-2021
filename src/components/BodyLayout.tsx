import { Center, Flex, Text, Box, VStack } from "@chakra-ui/react";
import React, { Children, Component, ReactElement } from "react";

interface IBodyLayout {
	pageTitle: string;
	children: ReactElement;
	zIndex?: number;
}

function BodyLayout({ pageTitle, children, zIndex }: IBodyLayout) {
	return (
		<Center
			className="center"
			position="absolute"
			width="26em"
			height="85vh"
			p={2}
			zIndex={zIndex ? zIndex : 0}
		>
			<VStack>
				<Box p={2} textStyle="h2B">
					{pageTitle}
				</Box>
				{children}
			</VStack>
		</Center>
	);
}

export default BodyLayout;
