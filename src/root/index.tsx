import { useEffect } from "react";
import { Outlet, redirect, useLocation, useNavigate } from "react-router-dom";
import Nav from "../nav/index";

export default function Root() {

	const loc = useLocation();
	const nav = useNavigate();
	useEffect( () => {

		if ( loc.pathname === "/" ) nav( "/home" );

	} );
	return (
		<>
			{/* <Nav /> */}
			<Outlet />
		</>
	);

}
