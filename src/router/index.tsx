import { createBrowserRouter } from "react-router-dom";
import Error404 from "../404";
import Contact from "../contact";
import Home from "../home";
import Projects from "../projects";
import Root from "../root";

export const Router = createBrowserRouter( [
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "home",
				element: <Home />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: "projects",
				element: <Projects />,
			},
			{
				path: "*",
				element: <Error404 />,
			},
		],
	},
] );
