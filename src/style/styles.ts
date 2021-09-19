import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	styles: {
		body: {
			background: "var(--chakra-colors-whiteAlpha-900)",
		},
	},
	colors: {
		brand: {
			100: "blue",
		},
	},
	textStyles: {
		h1: {
			fontSize: "24px",
			fontWeight: "bold",
		},
		h2B: {
			fontSize: "48px",
			fontStyle: "italic",
			textTransform: "uppercase",
		},
		link: {
			color: "gray",
			fontWeight: "thin",
			fontSize: "20px",
		},
		linkHover: {
			textDecoration: "line-through",
		},
	},
});

export const lightTheme = extendTheme({
	config: {
		useSystemColorMode: false,
		initialColorMode: "light",
	},
});
