import { Link, useLocation } from "react-router-dom";
import { NavPage } from "../utils/types/nav";

export default function Nav() {

	const loc = useLocation();
	const path = loc.pathname.split( "/" ).at( 1 );
	return (
		<ul className="nav">
			<Button name="Contact" active={path === NavPage.Contact} />
			<Button name="Projects" active={path === NavPage.Projects} />
			<Button name="Home" active={path === NavPage.Home} />
		</ul>
	);

}

function Button( { name, active }: { name: string; active: boolean } ) {

	return (
		<li>
			<Link
				to={name.toLowerCase()}
				className={`nav-button ${active ? "active" : ""}`}
			>
				{name}
			</Link>
		</li>
	);

}
