import * as React from "react";
import {
	useColorMode,
	useColorModeValue,
	IconButton,
	IconButtonProps,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
	const { toggleColorMode } = useColorMode();
	const text = useColorModeValue("dark", "light");
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);
	// NOTE: CAN I TAKE THE STATE FROM THE COLOR MODE TOGGLE AND CHANGE THE LIGHTING?
	const [light, isLight] = React.useState("light");
	return (
		<IconButton
			className="chakra-theme-button"
			size="md"
			fontSize="lg"
			variant="ghost"
			color="light"
			borderRadius={0}
			marginLeft="2"
			onClick={toggleColorMode}
			icon={<SwitchIcon />}
			aria-label={`Switch to ${text} mode`}
			{...props}
		/>
	);
};
