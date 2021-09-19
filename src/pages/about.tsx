import BodyLayout from "../components/BodyLayout";
import Markdown from "markdown-to-jsx";
import React, { useState, useEffect } from "react";
function About() {
	const aboutMDFile = "about.mdx";
	const [post, setPost] = useState("");
	useEffect(() => {
		import(`../markdown/${aboutMDFile}`)
			.then((res) => {
				fetch(res.default)
					.then((res) => res.text())
					.then((res) => setPost(res))
					.catch((err) => console.log(err));
			})
			.catch((err) => console.log(err));
	});

	return (
		<BodyLayout pageTitle={"About"}>
			<Markdown>{post}</Markdown>
		</BodyLayout>
	);
}

export default About;
