import * as React from "react";

import Link from 'next/link'
import { useRouter } from 'next/router';

type MenuProps = {}

const Menu: React.FC<MenuProps> = () => {
	const router = useRouter();

	const generateClass = (route: string) => {
		if (router.asPath === route) {
			return "hover:text-mt-red transition-colors border-b border-mt-red"
		} else {
			return "hover:text-mt-red transition-colors"
		}
	}

	return (
		<nav className="flex gap-3 md:gap-8 items-center">
			<Link href="/faq"><a className={generateClass("/faq")}>FAQ</a></Link>
			<Link href="/manifesto"><a className={generateClass("/manifesto")}>Manifesto</a></Link>
			<Link href="/roadmap"><a className={generateClass("/roadmap")}>Roadmap</a></Link>
			<Link href="/team"><a className={generateClass("/team")}>Team</a></Link>
		</nav>
	);
}

export default Menu;
