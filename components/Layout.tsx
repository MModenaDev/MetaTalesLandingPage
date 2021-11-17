import * as React from "react";

import Footer from './Footer';
import Header from './Header';
import { useRouter } from 'next/router'

type LayoutProps = {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const router = useRouter();

	//TODO: remove for next version
	React.useEffect(() => {
		router.push("https://www.figma.com/proto/sFS7eAJYXobZ6IzzLSqmhh/Untitled?node-id=412%3A2&scaling=min-zoom&page-id=236%3A2&starting-point-node-id=412%3A2")
	})

	return (
		<div className="relative bg-primary text-secondary font-sans">
			<Header />
			{children}
			<Footer />
		</div>
	)
}

export default Layout;
