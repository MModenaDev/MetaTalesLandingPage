import * as React from "react";

import Link from 'next/link'
import { useRouter } from 'next/router';

import CloseIcon from '../assets/icons/close.svg';
import MenuIcon from '../assets/icons/menu.svg';

type MenuProps = {}

const Menu: React.FC<MenuProps> = () => {
	const router = useRouter();
	const [isMobile, setIsMobile] = React.useState(false);
	const [menuOpen, setMenuOpen] = React.useState(false);

	React.useEffect(() => {
		if (window.screen.width < 640) setIsMobile(true);
	})

	const generateClass = (route: string) => {
		let newClass = "hover:text-MTpurple transition-colors ";
		if (isMobile) {
			newClass += "w-full text-center ";
		}
		if (router.asPath === route) {
			newClass += "border-b border-MTpurple ";
		}
		return newClass;
	}

	const onSignUp = () => {
		if (router.asPath === "/") {
			window.scrollTo(0, document.body.scrollHeight);
		} else {
			router.push("/#signup");
		}
	}

	return (
		<>
			{isMobile && (
				<button
					type="button"
					onClick={() => setMenuOpen(menuOpen ? false : true)}
					className="bg-MTpurple rounded-lg p-2"
				>
					{!menuOpen ? (
						<MenuIcon width={16} height={16} />
					) : (
						<CloseIcon width={16} height={16} />
					)}
				</button>
			)}
			{(!isMobile || menuOpen) && (
				<div className="flex flex-wrap gap-4 mt-4 w-full sm:mt-0 sm:w-auto">
					<nav className={`flex flex-wrap gap-3 md:gap-8 items-center text-primary ${isMobile ? "w-full" : ""}`}>
						<Link href="/faq"><a className={generateClass("/faq")}>FAQ</a></Link>
						{/* <Link href="/manifesto"><a className={generateClass("/manifesto")}>Manifesto</a></Link> */}
						{/* <Link href="/roadmap"><a className={generateClass("/roadmap")}>Roadmap</a></Link> */}
						<Link href="/team"><a className={generateClass("/team")}>Team</a></Link>
					</nav>
					<button
						className="py-1 px-3 font-bold border border-MTpurple rounded-2xl bg-MTpurple hover:text-MTpurple hover:bg-secondary transition-colors w-full sm:w-auto"
						type="button"
						onClick={() => onSignUp()}
					>
						Sign Up
					</button>
				</div>
			)}
		</>
	);

}

export default Menu;
