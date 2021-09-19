import React from "react";
import BodyLayout from "../components/BodyLayout";
import ThreeCanvas from "../components/ThreeCanvas";

function home() {
	return (
		<div className="page">
			<BodyLayout zIndex={-1} pageTitle={"home"}>
				<ThreeCanvas />
			</BodyLayout>
		</div>
	);
}

export default home;
