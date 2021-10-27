import * as React from "react";
import Image from 'next/image'

import Link from 'next/link'
import { useRouter } from 'next/router';

type MenuProps = {}

const Menu: React.FC<MenuProps> = () => {
	const router = useRouter();
	const [isMobile, setIsMobile] = React.useState(false);
	const [menuOpen, setMenuOpen] = React.useState(false);

	React.useEffect(() => {
		if (window.screen.width < 420) setIsMobile(true);
	})

	const generateClass = (route: string) => {
		let newClass = "hover:text-MTred transition-colors ";
		if (isMobile) {
			newClass += "w-full text-center ";
		}
		if (router.asPath === route) {
			newClass += "border-b border-MTred ";
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

	const Nav = () => (
		<nav className={`flex flex-wrap gap-3 md:gap-8 items-center ${isMobile ? "w-full" : ""}`}>
			<Link href="/faq"><a className={generateClass("/faq")}>FAQ</a></Link>
			{/* <Link href="/manifesto"><a className={generateClass("/manifesto")}>Manifesto</a></Link> */}
			{/* <Link href="/roadmap"><a className={generateClass("/roadmap")}>Roadmap</a></Link> */}
			<Link href="/team"><a className={generateClass("/team")}>Team</a></Link>
		</nav>
	)

	if (isMobile) {
		return (
			<>
				{!menuOpen ? (
					<button type="button" onClick={() => setMenuOpen(true)}>
						<Image src="/menu.svg" width={16} height={16} />
					</button>
				) : (
					<button type="button" onClick={() => setMenuOpen(false)} >
						<Image src="/close.svg" width={16} height={16} />
					</button>
				)}
				{menuOpen && (
					<div className="flex flex-wrap gap-4 mt-4 w-full">
						<Nav />
						<button
							className="py-1 px-3 font-bold border border-MTred rounded-2xl bg-MTred text-primary hover:text-MTred hover:bg-primary transition-colors w-full"
							type="button"
							onClick={() => onSignUp()}
						>
							Sign Up
						</button>
					</div>
				)}
			</>
		)
	}

	return (
		<div className="flex flex-wrap gap-4">
			<Nav />
			<button
				className="py-1 px-3 font-bold border border-MTred rounded-2xl bg-MTred text-primary hover:text-MTred hover:bg-primary transition-colors"
				type="button"
				onClick={() => onSignUp()}
			>
				Sign Up
			</button>
		</div>
	);

}

export default Menu;
