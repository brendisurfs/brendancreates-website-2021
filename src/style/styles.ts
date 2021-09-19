import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import defaultTheme from "@chakra-ui/theme";

export const theme = extendTheme({
	...defaultTheme,

	colors: {
		...defaultTheme.colors,
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
			color: "black",
			fontWeight: "semibold",
			fontSize: "20px",
		},
	},
});
